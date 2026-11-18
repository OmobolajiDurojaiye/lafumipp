import React from "react";
import type { Metadata } from "next";
import { getDivision, siteConfig } from "@/config/site.config";
import { DivisionPageTemplate } from "@/components/services/DivisionPageTemplate";
import { WorkStepItem } from "@/components/home/HowWeWork";

const division = getDivision("project-management");

export const metadata: Metadata = {
  title: "Construction & Operational Project Management in Maryland",
  description:
    "End-to-end project planning, scheduling, procurement, RFI/submittal coordination, and closeout management for Maryland businesses and construction projects.",
  keywords: [
    "project management Maryland",
    "construction project management Maryland",
    "PMP project controls Maryland",
    "procurement and vendor coordination",
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
    title: "Plan and set the schedule",
    body: "We define the scope, build a realistic schedule, and set up budget tracking.",
    icon: "target",
    image: "/images/project-management.jpg",
    imageAlt: "Engineers reviewing construction blueprints on site",
  },
  {
    title: "Coordinate work and vendors",
    body: "We manage procurement, vendors, risks, RFIs, submittals, and change records.",
    icon: "document",
    image: "/images/hero-team.jpg",
    imageAlt: "Team reviewing project timelines in an office meeting",
  },
  {
    title: "Complete project closeout",
    body: "We verify final deliverables and organize all closeout records for handover.",
    icon: "check",
    image: "/images/facilities.jpg",
    imageAlt: "Engineer inspecting completed mechanical systems",
  },
];

export default function ProjectManagementPage() {
  return (
    <DivisionPageTemplate
      division={division}
      includedSubtitle="Structured support across every stage of your project."
      processItems={PROCESS_ITEMS}
    />
  );
}
