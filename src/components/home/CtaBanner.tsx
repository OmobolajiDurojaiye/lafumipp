import React from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedShapes } from "@/components/ui/AnimatedShapes";
import { Reveal } from "@/components/ui/Reveal";

interface CtaBannerProps {
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CtaBanner({
  title = "Ready to get started?",
  ctaText = "Request a Consultation",
  ctaHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[12px] bg-navy px-8 py-12 text-white on-dark lg:px-14 lg:py-16">
            <AnimatedShapes variant="dark" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <h2 className="type-h2 text-white">{title}</h2>
              <Button href={ctaHref} variant="white" icon={null}>
                {ctaText}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
