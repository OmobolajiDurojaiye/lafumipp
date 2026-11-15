import { notFound } from "next/navigation";

/*
import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { DivisionPageTemplate } from "@/components/services/DivisionPageTemplate";
import { WorkStepItem } from "@/components/home/HowWeWork";
import { FAQItem } from "@/components/home/FAQAccordion";

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

const PROCESS_ITEMS: WorkStepItem[] = [
  {
    title: "Review and clean up records",
    body: "We review your current books, sort transactions, and fix past gaps.",
    icon: "document",
    image: "/images/bookkeeping.jpg",
    imageAlt: "Hands reviewing tax and bookkeeping forms at a desk",
  },
  {
    title: "Reconcile accounts and report",
    body: "We reconcile bank accounts and prepare clear monthly financial reports.",
    icon: "ledger",
    image: "/images/hero-team.jpg",
    imageAlt: "Reviewing financial reports in an office meeting",
  },
  {
    title: "Organize and prepare tax filings",
    body: "We organize tax records and prepare authorized individual or small-business returns.",
    icon: "check",
    image: "/images/grow.jpg",
    imageAlt: "One-on-one review of financial documents",
  },
];

const DIVISION_FAQS: FAQItem[] = [
  {
    question: "Is LAFUMIPP a CPA firm?",
    answer:
      "No. We provide bookkeeping, reconciliations, financial reporting, and authorized tax preparation. We do not promise tax savings or guaranteed refunds.",
  },
  {
    question: "How should I send my tax or bank files?",
    answer:
      "Never send Social Security numbers, tax returns, or bank details through our public contact form. We share a secure intake link after your first call.",
  },
];
*/

export default function BookkeepingTaxPage() {
  notFound();
  /*
  return (
    <DivisionPageTemplate
      division={division}
      includedSubtitle="Accurate books and organized tax preparation you can rely on."
      disclaimerTitle="Scope & Privacy Notice"
      disclaimerBody="LAFUMIPP, LLC is not a CPA firm and does not promise tax savings or refunds. Never send SSNs, tax returns, or bank details on the public contact form."
      processItems={PROCESS_ITEMS}
      faqs={DIVISION_FAQS}
    />
  );
  */
}
