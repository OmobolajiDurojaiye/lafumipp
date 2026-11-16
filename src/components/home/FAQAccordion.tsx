"use client";

import React, { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export interface FAQItem {
  question: string;
  answer: string;
}

const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does LAFUMIPP, LLC offer?",
    answer:
      "We offer four divisions: Project Management, Facilities & Construction Consulting, Grow with Adejoke, and Home Services.",
  },
  {
    question: "Does LAFUMIPP do licensed trade work?",
    answer:
      "No. Home Services connects you with independent trade providers, subject to required license and insurance checks.",
  },
  /*
  {
    question: "Is LAFUMIPP a CPA firm?",
    answer:
      "No. We provide bookkeeping, reconciliations, reporting, and authorized tax preparation. We do not promise tax savings or refunds.",
  },
  */
  {
    question: "What is Grow with Adejoke?",
    answer:
      "It is educational accountability coaching for goals, habits, and career progress. It is not investment, legal, or medical advice.",
  },
];

interface FAQAccordionProps {
  title?: string;
  items?: FAQItem[];
}

export function FAQAccordion({
  title = "Frequently asked questions",
  items = DEFAULT_FAQ_ITEMS,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="type-h2 text-navy">{title}</h2>
          </Reveal>

          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] lg:col-span-8">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div key={index} className="py-5">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    >
                      <span className="type-h3 text-navy">{item.question}</span>
                      <Icon
                        name="chevron-down"
                        size={20}
                        className={`shrink-0 text-navy transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="mt-3 type-body text-charcoal"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
