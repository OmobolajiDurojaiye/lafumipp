import { chromium } from "playwright-core";
import fs from "fs";
import net from "net";
import path from "path";

const BASE_URL = process.env.SCREENSHOT_BASE_URL || "http://localhost:3000";
const OUT_DIR = path.join(process.cwd(), "screenshots");

const PAGES = [
  { name: "home", route: "/" },
  { name: "about", route: "/about" },
  { name: "project-management", route: "/services/project-management" },
  { name: "facilities", route: "/services/facilities-and-construction-consulting" },
  { name: "bookkeeping", route: "/services/bookkeeping-and-tax-preparation" },
  { name: "grow-with-adejoke", route: "/services/grow-with-adejoke" },
  { name: "home-services", route: "/services/home-services" },
  { name: "contact", route: "/contact" },
  { name: "disclaimers", route: "/disclaimers" },
  { name: "privacy", route: "/privacy" },
  { name: "terms", route: "/terms" },
];

const VIEWPORTS = [
  { label: "1440", width: 1440, height: 900 },
  { label: "390", width: 390, height: 844 },
];

function findChromiumExecutable() {
  const base = path.join(process.env.LOCALAPPDATA || "", "ms-playwright");
  if (fs.existsSync(base)) {
    const dirs = fs.readdirSync(base).filter((d) => d.startsWith("chromium-"));
    for (const d of dirs) {
      const candidate1 = path.join(base, d, "chrome-win", "chrome.exe");
      const candidate2 = path.join(base, d, "chrome-win64", "chrome.exe");
      if (fs.existsSync(candidate1)) return candidate1;
      if (fs.existsSync(candidate2)) return candidate2;
    }
  }
  return undefined;
}

async function testLocalSmtpCatcher() {
  console.log("=== Testing Contact Form API & Local SMTP Catcher ===");
  const payload = {
    name: "Test Client",
    email: "client@example.com",
    phone: "(667) 383-9839",
    serviceCategory: "Project Management",
    description: "Testing local SMTP catcher delivery to info@lafumipp.com.",
    preferredContact: "Email",
    privacyConsent: true,
    honeypot: "",
  };

  // 1. Test failure when SMTP server is unreachable
  const failRes = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  console.log("1. Without SMTP catcher running -> HTTP status:", failRes.status);
  if (failRes.status === 200) {
    throw new Error("Expected failure when SMTP server is unreachable, but got 200");
  }

  // 2. Start local SMTP catcher on 127.0.0.1:1025
  let capturedMail = "";
  const smtpServer = net.createServer((socket) => {
    let inData = false;
    let authStep = 0;
    socket.write("220 localhost ESMTP Catcher Ready\r\n");

    socket.on("data", (chunk) => {
      const str = chunk.toString();
      if (inData) {
        capturedMail += str;
        if (capturedMail.includes("\r\n.\r\n")) {
          inData = false;
          socket.write("250 2.0.0 OK: queued as LOCAL-TEST-001\r\n");
        }
        return;
      }

      const cmd = str.trim();
      if (cmd.startsWith("EHLO") || cmd.startsWith("HELO")) {
        socket.write("250-localhost\r\n250 AUTH LOGIN\r\n");
      } else if (cmd.startsWith("AUTH LOGIN")) {
        authStep = 1;
        socket.write("334 VXNlcm5hbWU6\r\n");
      } else if (authStep === 1) {
        authStep = 2;
        socket.write("334 UGFzc3dvcmQ6\r\n");
      } else if (authStep === 2) {
        authStep = 0;
        socket.write("235 2.7.0 Authentication successful\r\n");
      } else if (cmd.startsWith("MAIL FROM:")) {
        socket.write("250 2.1.0 OK\r\n");
      } else if (cmd.startsWith("RCPT TO:")) {
        socket.write("250 2.1.5 OK\r\n");
      } else if (cmd === "DATA") {
        inData = true;
        socket.write("354 End data with <CR><LF>.<CR><LF>\r\n");
      } else if (cmd === "QUIT") {
        socket.write("221 2.0.0 Bye\r\n");
        socket.end();
      }
    });
  });

  await new Promise((resolve) => smtpServer.listen(1025, "127.0.0.1", resolve));

  try {
    const okRes = await fetch(`${BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const okData = await okRes.json();
    console.log("2. With SMTP catcher running -> HTTP status:", okRes.status, okData);
    const toHeader = (capturedMail.match(/^To:.*$/m) || [])[0];
    const fromHeader = (capturedMail.match(/^From:.*$/m) || [])[0];
    const subjHeader = (capturedMail.match(/^Subject:.*$/m) || [])[0];
    console.log("   Captured headers:", { fromHeader, toHeader, subjHeader });
  } finally {
    smtpServer.close();
  }
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  await testLocalSmtpCatcher();

  // Check favicon and icon endpoints
  for (const iconPath of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/manifest.webmanifest"]) {
    const r = await fetch(`${BASE_URL}${iconPath}`);
    console.log(`Asset check ${iconPath} -> HTTP ${r.status} (${r.headers.get("content-type")})`);
  }

  const executablePath = findChromiumExecutable();
  console.log("Using Chromium executable:", executablePath || "default");

  const browser = await chromium.launch({
    headless: true,
    executablePath,
  });

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const item of PAGES) {
      const url = `${BASE_URL}${item.route}`;
      console.log(`Capturing ${item.name} at ${vp.label}px (${url})...`);
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

      await page.evaluate(async () => {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
        document.querySelectorAll("img").forEach((img) => {
          img.loading = "eager";
        });
        const step = 400;
        for (let y = 0; y <= document.body.scrollHeight; y += step) {
          window.scrollTo({ top: y, behavior: "instant" });
          await new Promise((r) => setTimeout(r, 70));
        }
        await Promise.all(
          Array.from(document.querySelectorAll("img")).map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                  setTimeout(resolve, 3000);
                })
          )
        );
        window.scrollTo({ top: 0, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 200));
      });

      const filePath = path.join(OUT_DIR, `${item.name}-${vp.label}.png`);
      await page.screenshot({ path: filePath, fullPage: true });

      // Also capture mobile nav open state on home-390
      if (item.name === "home" && vp.label === "390") {
        const menuBtn = page.locator('button[aria-controls="mobile-menu"]');
        if (await menuBtn.count()) {
          await menuBtn.click();
          await page.waitForTimeout(200);
          await page.screenshot({
            path: path.join(OUT_DIR, "nav-mobile-open-390.png"),
            fullPage: false,
          });
        }
      }
    }

    await context.close();
  }

  await browser.close();
  console.log("All screenshots saved to:", OUT_DIR);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
