import React from "react";
import { ServiceDivision } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { HowWeWork, WorkStepItem } from "@/components/home/HowWeWork";
import { FAQAccordion, FAQItem } from "@/components/home/FAQAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

interface DivisionPageTemplateProps {
  division: ServiceDivision;
  includedSubtitle: string;
  disclaimerTitle?: string;
  disclaimerBody?: string;
  processItems: WorkStepItem[];
  faqs?: FAQItem[];
}

export function DivisionPageTemplate({
  division,
  includedSubtitle,
  disclaimerTitle,
  disclaimerBody,
  processItems,
  faqs,
}: DivisionPageTemplateProps) {
  return (
    <div>
      <PageHero
        title={division.title}
        subtitle={division.summary}
        ctaText={division.ctaText}
        ctaHref="/contact"
        image={division.image}
        imageAlt={division.imageAlt}
      />

      {/* What's included: 2-column grid of icon and text blocks */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="type-h2 text-navy">What&apos;s included</h2>
              <p className="mt-4 type-lg text-charcoal">{includedSubtitle}</p>
              {disclaimerBody && (
                <div className="mt-6 border-l-2 border-gold pl-4">
                  {disclaimerTitle && (
                    <p className="type-sm font-semibold text-navy">{disclaimerTitle}</p>
                  )}
                  <p className="mt-1 type-sm text-charcoal">{disclaimerBody}</p>
                </div>
              )}
            </Reveal>

            <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-8">
              {division.bullets.map((item, idx) => (
                <Reveal key={item} delay={idx * 40}>
                  <div className="flex items-start gap-4">
                    <Icon
                      name={division.icon}
                      size={32}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-navy"
                    />
                    <h3 className="type-h3 text-navy">{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navy How it works accordion with image carousel */}
      <HowWeWork
        title="How it works"
        subtitle="Simple steps from your first call to completion."
        items={processItems}
      />

      {/* Division FAQ if applicable */}
      {faqs && faqs.length > 0 && <FAQAccordion items={faqs} />}

      <CtaBanner title={division.ctaText} ctaText="Request a Consultation" ctaHref="/contact" />
    </div>
  );
}
