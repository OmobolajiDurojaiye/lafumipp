import React from "react";
import Link from "next/link";
import { serviceDivisions } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-pad bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="type-h2 text-navy">What we do</h2>
            <p className="mt-4 max-w-md type-lg text-charcoal">
              Four focused divisions built to help you plan, organize, and finish well.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" icon={null}>
                Request a Consultation
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {serviceDivisions.map((div, idx) => (
              <Reveal key={div.id} delay={idx * 40}>
                <Link href={div.slug} className="group block">
                  <Icon
                    name={div.icon}
                    size={36}
                    strokeWidth={1.5}
                    className="text-navy"
                  />
                  <h3 className="mt-4 type-h3 text-navy group-hover:underline">
                    {div.title}
                  </h3>
                  <p className="mt-2 type-sm text-charcoal">{div.summary}</p>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <Link
                href="#service-finder"
                className="group flex h-full flex-col justify-between border-t border-[#E5E7EB] pt-6 sm:border-t-0 sm:pt-0"
              >
                <div>
                  <Icon
                    name="arrow-right"
                    size={36}
                    strokeWidth={1.5}
                    className="text-navy transition-transform group-hover:translate-x-1"
                  />
                  <h3 className="mt-4 type-h3 text-navy group-hover:underline">
                    Not sure where to start?
                  </h3>
                  <p className="mt-2 type-sm text-charcoal">
                    Use our service finder to match your goal with the right division.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
