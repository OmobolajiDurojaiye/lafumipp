import React from "react";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { OurDivisions } from "@/components/home/OurDivisions";
import { FounderPreview } from "@/components/home/FounderPreview";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";

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
