// DRAFT FOR CLIENT LEGAL REVIEW BEFORE LAUNCH
import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for LAFUMIPP, LLC.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-page max-w-[760px]">
        <h1 className="type-h1 text-navy">Privacy Policy</h1>
        <p className="mt-3 type-sm text-charcoal/80">Last updated: November 13, 2026</p>

        <div className="mt-10 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
          <div className="py-8">
            <h2 className="type-h3 text-navy">1. Information We Collect</h2>
            <p className="mt-3 type-body text-charcoal">
              When you submit our contact form, we collect your name, email address, optional phone
              number, service choice, preferred contact method, and message. Your inquiry goes
              directly by email to LAFUMIPP, LLC.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">2. Do Not Send Sensitive Financial Information</h2>
            <p className="mt-3 type-body text-charcoal">
              Never send Social Security numbers, tax returns, or bank details through our public
              contact form. Sensitive records are collected only through a separate secure intake
              process.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">3. Cookies, Accounts & Payments</h2>
            <p className="mt-3 type-body text-charcoal">
              This website does not use user accounts, online payments, analytics trackers, or ad
              cookies.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">4. How We Use Information & Contact</h2>
            <p className="mt-3 type-body text-charcoal">
              We use your contact details only to answer your inquiry and coordinate services. We do
              not sell your personal information. For privacy questions, email{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-semibold text-navy underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
