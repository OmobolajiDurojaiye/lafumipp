// DRAFT FOR CLIENT LEGAL REVIEW BEFORE LAUNCH
import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for LAFUMIPP, LLC.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-page max-w-[760px]">
        <h1 className="type-h1 text-navy">Terms of Use</h1>
        <p className="mt-3 type-sm text-charcoal/80">Last updated: November 13, 2026</p>

        <div className="mt-10 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
          <div className="py-8">
            <h2 className="type-h3 text-navy">1. Website Use & Engagement Scope</h2>
            <p className="mt-3 type-body text-charcoal">
              This site shares general information about LAFUMIPP, LLC and lets visitors request a
              consultation. Reading this site or sending a form does not start a client
              relationship. Services begin only with a signed written agreement.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">2. Service Boundaries & Referrals</h2>
            <p className="mt-3 type-body text-charcoal">
              LAFUMIPP, LLC is not a law firm or licensed trade contractor. Home
              Services coordinates referrals only, and independent providers perform all trade work
              subject to license and insurance checks. Coaching through Grow with Adejoke is
              educational and not investment, legal, or mental-health advice.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">3. Governing Law & Contact</h2>
            <p className="mt-3 type-body text-charcoal">
              These Terms of Use follow the laws of the State of Maryland. Questions may be sent to{" "}
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
