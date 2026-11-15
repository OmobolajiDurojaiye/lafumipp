import net from "net";
import tls from "tls";

export interface SendMailOptions {
  to: string;
  from?: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * SMTP client using Node.js net/tls with STARTTLS, TLS, and AUTH LOGIN support.
 * Resolves only after the SMTP server confirms message acceptance (250).
 */
export async function sendEmailViaSmtp(
  options: SendMailOptions
): Promise<{ success: boolean; messageId?: string }> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from =
    options.from ||
    process.env.CONTACT_FROM_EMAIL ||
    process.env.SMTP_FROM ||
    user ||
    "info@lafumipp.com";

  if (!host || !user || !pass) {
    throw new Error(
      "Email service is temporarily unavailable: SMTP configuration has not been set by administrator."
    );
  }

  return new Promise((resolve, reject) => {
    let isTls = port === 465;
    let socket: net.Socket | tls.TLSSocket = isTls
      ? tls.connect({ host, port, minVersion: "TLSv1.2" })
      : net.connect({ host, port });

    let responseBuffer = "";
    let step = 0;

    const send = (cmd: string) => {
      socket.write(cmd + "\r\n");
    };

    const cleanup = () => {
      try {
        socket.end();
      } catch {
        // ignore
      }
    };

    socket.on("data", (data) => {
      responseBuffer += data.toString();
      const lines = responseBuffer.split("\r\n");
      const lastLine = lines[lines.length - 2] || lines[lines.length - 1];

      if (!/^\d{3}\s/.test(lastLine)) {
        return;
      }

      const code = parseInt(lastLine.substring(0, 3), 10);
      responseBuffer = "";

      if (code >= 400) {
        cleanup();
        return reject(new Error(`SMTP Error (${code}): ${lastLine}`));
      }

      switch (step) {
        case 0: // Banner received (220)
          step++;
          send(`EHLO [127.0.0.1]`);
          break;
        case 1: // EHLO response (250)
          if (!isTls && port === 587) {
            step++;
            send("STARTTLS");
          } else {
            step = 3;
            send("AUTH LOGIN");
          }
          break;
        case 2: // STARTTLS response (220)
          {
            const tlsSocket = tls.connect({
              socket: socket as net.Socket,
              host,
              minVersion: "TLSv1.2",
            });
            socket = tlsSocket;
            isTls = true;
            step++;
            send("AUTH LOGIN");
          }
          break;
        case 3: // Username prompt (334)
          step++;
          send(Buffer.from(user).toString("base64"));
          break;
        case 4: // Password prompt (334)
          step++;
          send(Buffer.from(pass).toString("base64"));
          break;
        case 5: // Auth success (235)
          step++;
          send(`MAIL FROM:<${from}>`);
          break;
        case 6: // Mail from OK (250)
          step++;
          send(`RCPT TO:<${options.to}>`);
          break;
        case 7: // Rcpt to OK (250)
          step++;
          send("DATA");
          break;
        case 8: // Data OK (354)
          {
            step++;
            const messageId = `<${Date.now()}.${Math.random()
              .toString(36)
              .substring(2)}@lafumipp.com>`;
            const headers = [
              `From: ${from}`,
              `To: ${options.to}`,
              `Subject: ${options.subject}`,
              `Date: ${new Date().toUTCString()}`,
              `Message-ID: ${messageId}`,
              `MIME-Version: 1.0`,
              `Content-Type: text/plain; charset=UTF-8`,
              "",
              options.text,
              "",
              ".",
            ].join("\r\n");
            send(headers);
          }
          break;
        case 9: // Message accepted (250)
          step++;
          send("QUIT");
          cleanup();
          resolve({ success: true, messageId: lastLine });
          break;
        case 10:
          cleanup();
          break;
      }
    });

    socket.on("error", (err) => {
      cleanup();
      reject(err);
    });

    socket.setTimeout(15000, () => {
      cleanup();
      reject(new Error("SMTP connection timed out."));
    });
  });
}
