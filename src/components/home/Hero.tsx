import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-[90vh] max-h-[880px] min-h-[680px] w-full items-end overflow-hidden bg-navy text-white on-dark">
      <Image
        src="/images/hero-team.jpg"
        alt="LAFUMIPP consulting team collaborating in an office meeting"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Flat 45% navy overlay, no gradient */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#142744]/45" />

      <div className="container-page relative z-10 pb-12 pt-28 lg:pb-16">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-block rounded-[12px] bg-white px-5 py-4 text-navy">
              <p className="font-serif text-3xl font-semibold leading-none tracking-tight text-navy">
                15+
              </p>
              <p className="mt-1 type-sm text-charcoal">Years of experience</p>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[64px]">
              Your Goals. Our Expertise. Real Results.
            </h1>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="type-lg text-white/95 lg:ml-auto lg:max-w-md">
              {siteConfig.shortHeroCopy}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 lg:justify-end">
              <Button href="#divisions" variant="white" icon={null}>
                Explore Our Services
              </Button>
              <Button href="/contact" variant="white-outline" icon={null}>
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
