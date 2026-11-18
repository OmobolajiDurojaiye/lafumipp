import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { DivisionPageTemplate } from "@/components/services/DivisionPageTemplate";
import { WorkStepItem } from "@/components/home/HowWeWork";
import { FAQItem } from "@/components/home/FAQAccordion";

const division = getDivision("home-services");

export const metadata: Metadata = {
  title: "Home Service Referrals in Maryland | Plumbing, HVAC, Electrical & Handyman",
  description:
    "Reliable coordination and referrals to independent plumbing, HVAC, electrical, and handyman professionals across Maryland.",
  keywords: [
    "home service referrals Maryland",
    "plumbing HVAC electrical referrals Maryland",
    "property maintenance coordination Maryland",
  ],
  alternates: {
    canonical: division.slug,
  },
  openGraph: {
    url: `${siteConfig.siteUrl}${division.slug}`,
  },
};

const PROCESS_ITEMS: WorkStepItem[] = [
  {
    title: "Tell us what you need",
    body: "Send your plumbing, HVAC, electrical, or handyman request through our contact form.",
    icon: "home",
    image: "/images/home-services.jpg",
    imageAlt: "Trade technician holding a drill during a home service visit",
  },
  {
    title: "We coordinate a referral",
    body: "LAFUMIPP connects you with an independent trade provider for your job.",
    icon: "phone",
    image: "/images/hero-team.jpg",
    imageAlt: "Coordinating service requests with property owners",
  },
  {
    title: "Independent trade service",
    body: "Trade work is completed by independent providers, subject to license and insurance checks.",
    icon: "shield",
    image: "/images/facilities.jpg",
    imageAlt: "Inspection of mechanical and building systems",
  },
];

const DIVISION_FAQS: FAQItem[] = [
  {
    question: "Does LAFUMIPP perform the trade work itself?",
    answer:
      "No. LAFUMIPP Home Services coordinates referrals and service requests. Independent providers perform all trade work, subject to required license and insurance checks.",
  },
  {
    question: "What home services do you refer?",
    answer:
      "We coordinate referrals for plumbing, HVAC, electrical, and general handyman services.",
  },
];

export default function HomeServicesPage() {
  return (
    <DivisionPageTemplate
      division={division}
      includedSubtitle="Referral coordination for homeowners and property managers."
      disclaimerTitle="Independent Provider Disclosure"
      disclaimerBody="LAFUMIPP coordinates referrals only and does not perform licensed trade work. Independent providers perform all trade work, subject to license and insurance checks."
      processItems={PROCESS_ITEMS}
      faqs={DIVISION_FAQS}
    />
  );
}
