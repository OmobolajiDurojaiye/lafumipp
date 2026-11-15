import React from "react";
import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Icon } from "@/components/ui/Icon";
import { AnimatedShapes } from "@/components/ui/AnimatedShapes";
import { WorldMapBg } from "@/components/ui/WorldMapBg";
import { Reveal } from "@/components/ui/Reveal";

export function FounderPreview() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#F3F4F6]">
      <WorldMapBg className="absolute inset-0 m-auto h-full w-full max-w-[1100px] text-navy opacity-[0.06]" />
      <AnimatedShapes variant="gray" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <ImageSlot className="aspect-[4/5] w-full" />
            </div>

            <div className="lg:col-span-8">
              <h2 className="type-h2 text-navy">Adejoke Adeniran, MBA, PMP, FMP</h2>
              <p className="mt-4 type-lg text-charcoal">
                Adejoke Adeniran, MBA, PMP, FMP, founded LAFUMIPP after more than 15 years in
                construction project management, mechanical building services, and facilities
                management. She brings the same planning, organization, and follow-through to every
                client, from project owners and facility managers to individuals working toward
                their goals.
              </p>
              <div className="mt-7">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 type-sm font-semibold text-navy underline underline-offset-4 hover:text-[#1d365c]"
                >
                  <span>Learn more</span>
                  <Icon name="arrow-right" size={16} strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
