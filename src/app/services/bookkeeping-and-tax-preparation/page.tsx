import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { HowWeWork, WorkStepItem } from "@/components/home/HowWeWork";
import { FAQAccordion, FAQItem } from "@/components/home/FAQAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const division = getDivision("bookkeeping-and-tax-preparation");

export const metadata: Metadata = {
  title: "Small Business & Contractor Bookkeeping and Tax Preparation in Maryland",
  description:
    "Monthly bookkeeping, bank reconciliations, contractor job costing, AIA progress billing, retainage, WIP reporting, and tax preparation in Maryland.",
  keywords: [
    "small business bookkeeping Maryland",
    "contractor bookkeeping Maryland",
    "construction job costing",
    "WIP reporting contractors",
    "AIA progress billing bookkeeping",
    "tax preparation Maryland",
  ],
  alternates: {
    canonical: division.slug,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}${division.slug}`,
  },
};

const CORE_BOOKKEEPING_ITEMS = [
  "Monthly bookkeeping and account reconciliations",
  "Accounts payable and receivable tracking",
  "Monthly P&L, balance sheet, and cash flow reports",
  "Catch-up and cleanup for behind books",
  "Year-end organization for tax season",
];

const TAX_PREPARATION_ITEMS = [
  "Individual and small business tax return preparation",
  "Organized records for smooth filing",
];

const CONTRACTOR_ITEMS = [
  {
    title: "Job costing",
    description: "See which jobs are actually making money.",
  },
  {
    title: "Progress billing & pay apps",
    description: "AIA-style billing, schedule of values, and payment tracking.",
  },
  {
    title: "Retainage tracking",
    description: "Know what is being held and when it is due.",
  },
  {
    title: "Change order tracking",
    description: "Make sure approved changes get billed.",
  },
  {
    title: "WIP reporting",
    description: "Keep a clear financial picture of every active job.",
  },
];

const PROCESS_ITEMS: WorkStepItem[] = [
  {
    title: "Review your current books",
    body: "We assess your accounts, clean up past gaps, and prioritize what matters most.",
    icon: "document",
    image: "/images/organized-records.jpg",
    imageAlt: "Neatly organized project binders, budget schedules, and laptop on an office desk",
  },
  {
    title: "Maintain monthly accuracy",
    body: "We reconcile accounts, track AP/AR, and deliver clear monthly financial reports.",
    icon: "ledger",
    image: "/images/bookkeeping.jpg",
    imageAlt: "Hands reviewing financial records and bookkeeping checklist at a desk",
  },
  {
    title: "Track jobs and prepare for tax season",
    body: "For contractors and project firms, we track job costs, retainage, change orders, and WIP year-round.",
    icon: "check",
    image: "/images/hero-team.jpg",
    imageAlt: "Team reviewing financial and project reports in an office meeting",
  },
];

const DIVISION_FAQS: FAQItem[] = [
  {
    question: "Is LAFUMIPP a CPA firm?",
    answer:
      "No. We provide small-business and contractor bookkeeping, monthly reporting, and individual and small-business tax return preparation. We do not promise tax savings or guaranteed refunds.",
  },
  {
    question: "What types of businesses do you support?",
    answer:
      "Small businesses, general and MEP contractors, specialty trades, and project-based firms including landscaping, cleaning, property services, and consulting.",
  },
  {
    question: "Can you help if our books have fallen behind?",
    answer:
      "Yes. We handle catch-up and cleanup, then transition you into steady monthly bookkeeping.",
  },
];

export default function BookkeepingTaxPage() {
  return (
    <div>
      <PageHero
        title="Bookkeeping & Financial Support"
        subtitle="Accurate, current, and easy-to-understand books for small businesses and contractors, without the late-night receipt chasing."
        ctaText={division.ctaText}
        ctaHref="/contact"
        image={division.image}
        imageAlt={division.imageAlt}
      />

      {/* Core Bookkeeping & Tax Preparation */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="type-h2 text-navy">Core Bookkeeping &amp; Tax</h2>
              <p className="mt-4 type-lg text-charcoal">
                Clean books and organized records so you always know where your business stands.
              </p>
              <div className="mt-6 border-l-2 border-gold pl-4">
                <p className="type-sm font-semibold text-navy">Scope Notice</p>
                <p className="mt-1 type-sm text-charcoal">
                  LAFUMIPP, LLC is not a CPA firm and does not promise tax savings or guaranteed
                  refunds.
                </p>
              </div>
            </Reveal>

            <div className="space-y-10 lg:col-span-8">
              <Reveal>
                <h3 className="type-h3 text-navy">Core Bookkeeping</h3>
                <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  {CORE_BOOKKEEPING_ITEMS.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Icon
                        name="ledger"
                        size={22}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-navy"
                      />
                      <p className="type-body text-charcoal">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className="rounded-[12px] bg-[#F3F4F6] p-6 sm:p-8">
                  <h3 className="type-h3 text-navy">Tax Preparation</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {TAX_PREPARATION_ITEMS.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Icon
                          name="check"
                          size={20}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-navy"
                        />
                        <p className="type-body text-charcoal">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Support for Contractors & Project-Based Businesses */}
      <section className="section-pad bg-[#E8EDF5]">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="type-h2 text-navy">Support for Contractors &amp; Project Firms</h2>
              <p className="mt-4 type-body text-charcoal">
                Backed by 15+ years of construction project management experience, we know how
                contractors get paid and where project margins get lost.
              </p>
              <p className="mt-4 type-body text-charcoal">
                Serving general and MEP contractors, specialty trades, landscaping, cleaning,
                property services, and consulting firms.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {CONTRACTOR_ITEMS.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 40}>
                  <div className="h-full rounded-[12px] bg-white p-6">
                    <div className="flex items-start gap-3">
                      <Icon
                        name="project"
                        size={22}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-navy"
                      />
                      <div>
                        <h3 className="type-h3 text-navy">{item.title}</h3>
                        <p className="mt-2 type-sm text-charcoal">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowWeWork
        title="How it works"
        subtitle="Simple, organized bookkeeping from your first consultation forward."
        items={PROCESS_ITEMS}
      />

      <FAQAccordion items={DIVISION_FAQS} />

      <CtaBanner
        title="Not sure what you need? Book a free consultation to review your books."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
      />
    </div>
  );
}
