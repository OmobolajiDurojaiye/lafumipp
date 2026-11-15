import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmailViaSmtp } from "@/lib/smtp";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(100),
  email: z.string().email("Please provide a valid email address").max(120),
  phone: z.string().max(25).optional().or(z.literal("")),
  serviceCategory: z.enum([
    "Project Management",
    "Facilities & Construction Consulting",
    "Bookkeeping & Tax Preparation",
    "Grow with Adejoke",
    "LAFUMIPP Home Services",
    "General Inquiry",
  ]),
  description: z
    .string()
    .min(10, "Please provide at least 10 characters describing your request")
    .max(2000),
  preferredContact: z.enum(["Email", "Phone"]),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "You must agree to the privacy policy to proceed"),
  honeypot: z.string().max(0, "Invalid form submission"),
  turnstileToken: z.string().optional(),
});

const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
    return false;
  }

  if (record.count >= 5) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before submitting again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstError = Object.values(fieldErrors).flat()[0] || "Invalid submission data.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, phone, serviceCategory, description, preferredContact, turnstileToken } =
      result.data;

    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (turnstileSecret && turnstileToken) {
      try {
        const verifyRes = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              secret: turnstileSecret,
              response: turnstileToken,
              remoteip: ip,
            }),
          }
        );
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          return NextResponse.json(
            { error: "Spam check verification failed. Please try again." },
            { status: 403 }
          );
        }
      } catch (err) {
        console.error("Turnstile verification error:", err);
      }
    }

    const recipient =
      process.env.CONTACT_TO_EMAIL ||
      process.env.CONTACT_RECIPIENT_EMAIL ||
      "info@lafumipp.com";

    const mailText = [
      `New Consultation Request Submitted to LAFUMIPP, LLC`,
      `======================================================`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service Division: ${serviceCategory}`,
      `Preferred Contact Method: ${preferredContact}`,
      `Submitted At: ${new Date().toISOString()}`,
      `Client IP: ${ip}`,
      `------------------------------------------------------`,
      `Project / Request Description:`,
      description,
      `======================================================`,
      `Notice: Form disclaimed sensitive financial details (SSNs, tax returns, bank credentials).`,
    ].join("\n");

    await sendEmailViaSmtp({
      to: recipient,
      subject: `[LAFUMIPP Inquiry] ${serviceCategory} - ${name}`,
      text: mailText,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your consultation request has been received.",
    });
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      {
        error:
          error.message ||
          "We could not process your submission at this time. Please try again later.",
      },
      { status: 500 }
    );
  }
}
