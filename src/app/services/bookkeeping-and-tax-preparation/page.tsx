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
  title: "Bookkeeping & Tax Preparation",
  description: division.summary,
  alternates: {
    canonical: division.slug,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}${division.slug}`,
  },
};

const CORE_BOOKKEEPING_ITEMS = [
  "Monthly bookkeeping and bank and credit card reconciliation",
  "Accounts payable and receivable tracking",
  "Monthly financial reports (profit & loss, balance sheet, cash flow)",
  "Catch-up and cleanup for books that have fallen behind",
  "Year-end organization so you're ready for tax season",
];

const TAX_PREPARATION_ITEMS = [
  "Individual and small business tax return preparation",
  "Organized records and documentation to make filing smooth",
];

const CONTRACTOR_ITEMS = [
  {
    title: "Job costing",
    description: "See which jobs are actually making money.",
  },
  {
    title: "Progress billing and pay applications",
    description: "AIA-style billing, schedule of values, and tracking of payments.",
  },
  {
    title: "Retainage tracking",
    description: "Know exactly what's being held and when it's due.",
  },
  {
    title: "Change order tracking",
    description: "Make sure approved changes get billed.",
  },
  {
    title: "Work-in-progress (WIP) reporting",
    description: "Keep an accurate picture of where every job stands financially.",
  },
];

const PROCESS_ITEMS: WorkStepItem[] = [
  {
    title: "Review where your books stand today",
    body: "We look at your current accounts, clean up past gaps, and identify what will make the biggest difference.",
    icon: "document",
    image: "/images/organized-records.jpg",
    imageAlt: "Neatly organized project binders, budget schedules, and laptop on an office desk",
  },
  {
    title: "Keep monthly books accurate and current",
    body: "We reconcile bank and credit card accounts, track AP/AR, and deliver clear monthly P&L, balance sheet, and cash flow reports.",
    icon: "ledger",
    image: "/images/bookkeeping.jpg",
    imageAlt: "Hands reviewing financial records and bookkeeping checklist at a desk",
  },
  {
    title: "Track jobs and prepare for tax season",
    body: "For contractors and project-based firms, we track job costs, retainage, change orders, and WIP—keeping records organized year-round.",
    icon: "check",
    image: "/images/hero-team.jpg",
    imageAlt: "Team reviewing financial and project reports in an office meeting",
  },
];

const DIVISION_FAQS: FAQItem[] = [
  {
    question: "Is LAFUMIPP a CPA firm?",
    answer:
      "No. We provide small-business and contractor bookkeeping, monthly financial reporting, and individual and small-business tax return preparation. We do not promise tax savings or guaranteed refunds.",
  },
  {
    question: "What types of businesses do you support?",
    answer:
      "We work with small businesses, general contractors, mechanical, electrical, and plumbing contractors, specialty trades, and other project-based businesses such as landscaping, cleaning, property services, and consulting firms.",
  },
  {
    question: "Can you help if our books have fallen behind?",
    answer:
      "Yes. We handle catch-up and cleanup for books that have fallen behind, then transition you into reliable monthly bookkeeping and year-end organization.",
  },
];

export default function BookkeepingTaxPage() {
  return (
    <div>
      <PageHero
        title="Bookkeeping & Financial Support for Small Businesses"
        subtitle="You built your business to do the work you're good at, not to chase receipts and reconcile accounts at midnight. LAFUMIPP keeps your books accurate, current, and easy to understand, so you always know where your business stands."
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
              <h2 className="type-h2 text-navy">Core Bookkeeping &amp; Tax Preparation</h2>
              <p className="mt-4 type-lg text-charcoal">
                Accurate books and organized records so you always know where your business stands.
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
              <h2 className="type-h2 text-navy">
                Specialized Support for Contractors &amp; Project-Based Businesses
              </h2>
              <p className="mt-4 type-body text-charcoal">
                If your business runs on jobs, bids, and projects, your books need to work
                differently. Our founder spent over 15 years managing construction projects. She
                knows how contractors get paid, where money gets lost, and what the numbers should
                tell you.
              </p>
              <p className="mt-4 type-body text-charcoal">
                We work with general contractors, mechanical, electrical, and plumbing contractors,
                specialty trades, and other project-based businesses such as landscaping, cleaning,
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

      {/* Navy How it works accordion with image carousel */}
      <HowWeWork
        title="How it works"
        subtitle="Clear, organized bookkeeping from your first consultation forward."
        items={PROCESS_ITEMS}
      />

      <FAQAccordion items={DIVISION_FAQS} />

      <CtaBanner
        title="Not sure what you need? Book a free consultation and we'll look at where your books are today and what would make the biggest difference."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
      />
    </div>
  );
}
