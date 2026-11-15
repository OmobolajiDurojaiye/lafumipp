import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { DivisionPageTemplate } from "@/components/services/DivisionPageTemplate";
import { WorkStepItem } from "@/components/home/HowWeWork";
import { FAQItem } from "@/components/home/FAQAccordion";

const division = getDivision("grow-with-adejoke");

export const metadata: Metadata = {
  title: "Grow with Adejoke | Accountability Coaching",
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
    title: "Set clear goals",
    body: "We define your personal, career, or certification goals with simple milestones.",
    icon: "target",
    image: "/images/grow.jpg",
    imageAlt: "Two professionals in a focused coaching conversation",
  },
  {
    title: "Build daily habits",
    body: "We create practical routines for time management, focus, and budgeting habits.",
    icon: "clock",
    image: "/images/hero-team.jpg",
    imageAlt: "Planning weekly habits and priorities",
  },
  {
    title: "Keep steady progress",
    body: "Regular check-ins help you stay accountable and finish what you start.",
    icon: "growth",
    image: "/images/bookkeeping.jpg",
    imageAlt: "Tracking personal budgeting and goal progress",
  },
];

const DIVISION_FAQS: FAQItem[] = [
  {
    question: "What type of coaching is Grow with Adejoke?",
    answer:
      "Coaching through Grow with Adejoke is educational and accountability-focused. It is not personal investment, legal, or mental-health treatment.",
  },
  {
    question: "Who is accountability coaching for?",
    answer:
      "It is for individuals working on time management, budgeting habits, career milestones, or certification goals.",
  },
];

export default function GrowWithAdejokePage() {
  return (
    <DivisionPageTemplate
      division={division}
      includedSubtitle="Practical structure for your personal, financial, and career goals."
      disclaimerTitle="Coaching Scope Notice"
      disclaimerBody="Coaching is educational and accountability-focused. It is not individualized investment, legal, or mental-health advice or treatment."
      processItems={PROCESS_ITEMS}
      faqs={DIVISION_FAQS}
    />
  );
}
