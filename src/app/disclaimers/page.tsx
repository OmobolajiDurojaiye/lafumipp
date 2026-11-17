// DRAFT FOR CLIENT LEGAL REVIEW BEFORE LAUNCH
import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: "Service Disclaimers",
  description:
    "Service disclaimers for LAFUMIPP, LLC across management consulting, accountability coaching, and home-service referrals.",
  alternates: {
    canonical: "/disclaimers",
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/disclaimers`,
  },
};

export default function DisclaimersPage() {
  return (
    <section className="bg-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="container-page max-w-[760px]">
        <h1 className="type-h1 text-navy">Service Disclaimers</h1>
        <p className="mt-3 type-sm text-charcoal/80">Last updated: November 13, 2026</p>

        <div className="mt-10 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
          <div className="py-8">
            <h2 className="type-h3 text-navy">1. General Management & Consulting</h2>
            <p className="mt-3 type-body text-charcoal">
              LAFUMIPP, LLC operates in Maryland. Site content is informational only and does
              not create a client engagement without a signed agreement.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">2. Bookkeeping &amp; Tax Preparation</h2>
            <p className="mt-3 type-body text-charcoal">
              LAFUMIPP, LLC offers small-business and contractor bookkeeping, reconciliations,
              financial reporting, cleanup, and individual and small-business tax preparation. We
              are not a CPA firm and do not promise tax savings or guaranteed refunds.
            </p>
          </div>

          <div className="py-8">
            <h2 className="type-h3 text-navy">3. LAFUMIPP Home Services Referrals</h2>
            <p className="mt-3 type-body text-charcoal">
              LAFUMIPP Home Services coordinates referrals for plumbing, HVAC, electrical, and
              handyman work. LAFUMIPP, LLC does not perform licensed trade work. Independent
              providers perform all trade work, subject to required license and insurance checks.
              For questions, email{" "}
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
