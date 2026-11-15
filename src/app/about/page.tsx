import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Photo } from "@/components/ui/Photo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LAFUMIPP, LLC and founder Adejoke Adeniran, MBA, PMP, FMP.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About LAFUMIPP, LLC"
        subtitle={siteConfig.tagline}
        ctaText="Request a Consultation"
        ctaHref="/contact"
        image="/images/hero-team.jpg"
        imageAlt="LAFUMIPP consulting team collaborating in an office meeting"
      />

      {/* Founder bio split into two alternating image and text blocks (verbatim client bio) */}
      <section className="section-pad bg-white">
        <div className="container-page space-y-16 lg:space-y-24">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <ImageSlot className="aspect-[4/5] w-full" />
              </div>

              <div className="space-y-4 lg:col-span-7">
                <h2 className="type-h2 text-navy">Adejoke Adeniran, MBA, PMP, FMP</h2>
                <p className="type-body text-charcoal">
                  Adejoke Adeniran, MBA, PMP, FMP, is the founder of LAFUMIPP, LLC, a
                  Maryland-based management and consulting business. She has more than 15 years of
                  experience in construction project management, mechanical building services,
                  facilities management, and operational coordination, on projects in the United
                  States and internationally.
                </p>
                <p className="type-body text-charcoal">
                  Her career has taken her from mechanical and MEP construction sites to contract
                  administration and facility operations. Along the way she has managed budgets,
                  schedules, procurement, vendors, and project documentation from planning through
                  closeout. That hands-on background shapes how LAFUMIPP works: clear plans,
                  organized records, honest communication, and steady follow-through.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="space-y-4 lg:order-1 lg:col-span-7">
                <h2 className="type-h2 text-navy">One dependable place to turn</h2>
                <p className="type-body text-charcoal">
                  Adejoke holds an MBA and is a certified Project Management Professional (PMP) and
                  Facility Management Professional (FMP).
                  {/* She brings the same discipline to LAFUMIPP's bookkeeping services, helping small businesses keep accurate, organized records they can rely on. */}
                  {" "}She is also the voice behind Grow with Adejoke, LAFUMIPP&apos;s accountability
                  coaching division, where she helps people set goals, build consistent habits,
                  and keep making progress.
                </p>
                <p className="type-body text-charcoal">
                  She founded LAFUMIPP to give clients one dependable place to turn, whether they
                  need a project managed, a facility running better, or support reaching a personal
                  goal.
                </p>
                {/* <p className="pt-2 type-sm text-charcoal/80">NAICS {siteConfig.naics}</p> */}
              </div>

              <div className="lg:order-2 lg:col-span-5">
                <Photo
                  src="/images/project-management.jpg"
                  alt="Engineers reviewing construction blueprints on site"
                  className="aspect-[4/3] w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 principles as the navy accordion section */}
      <HowWeWork />

      <CtaBanner />
    </div>
  );
}
