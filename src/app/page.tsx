import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { OurDivisions } from "@/components/home/OurDivisions";
import { FounderPreview } from "@/components/home/FounderPreview";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "LAFUMIPP, LLC | Project Management, Facilities Consulting & Bookkeeping in Maryland",
  description:
    "Maryland-based project management, facilities and construction consulting, contractor and small-business bookkeeping, tax preparation, and home-service referrals.",
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <ServiceFinder />
      <OurDivisions />
      <FounderPreview />
      <FAQAccordion />
      <CtaBanner />
    </div>
  );
}
