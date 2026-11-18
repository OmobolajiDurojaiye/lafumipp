import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { DivisionPageTemplate } from "@/components/services/DivisionPageTemplate";
import { WorkStepItem } from "@/components/home/HowWeWork";

const division = getDivision("facilities-and-construction-consulting");

export const metadata: Metadata = {
  title: "Facilities & Construction Consulting in Maryland",
  description:
    "Building condition assessments, preventive maintenance planning, MEP systems oversight, and capital project consulting across Maryland.",
  keywords: [
    "facilities consulting Maryland",
    "construction consulting Maryland",
    "MEP building systems consulting",
    "preventive maintenance planning Maryland",
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
    title: "Inspect building conditions",
    body: "We evaluate your building systems, equipment, and daily operational needs.",
    icon: "facility",
    image: "/images/facilities.jpg",
    imageAlt: "Engineer inspecting mechanical piping and equipment",
  },
  {
    title: "Plan maintenance and upgrades",
    body: "We build preventive maintenance schedules and clear capital improvement plans.",
    icon: "document",
    image: "/images/project-management.jpg",
    imageAlt: "Engineers reviewing building blueprints on site",
  },
  {
    title: "Oversee contractors and work",
    body: "We coordinate vendors and provide steady construction oversight from start to finish.",
    icon: "check",
    image: "/images/hero-team.jpg",
    imageAlt: "Consulting team reviewing facility plans",
  },
];

export default function FacilitiesConsultingPage() {
  return (
    <DivisionPageTemplate
      division={division}
      includedSubtitle="Practical guidance for building operations and capital work."
      processItems={PROCESS_ITEMS}
    />
  );
}
