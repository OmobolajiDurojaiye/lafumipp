"use client";

import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Icon, IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface FinderOption {
  id: string;
  questionOption: string;
  icon: IconName;
  division: string;
  explanation: string;
  nextStep: string;
  ctaText: string;
  ctaHref: string;
}

const FINDER_OPTIONS: FinderOption[] = [
  {
    id: "project-management",
    questionOption: "I need someone to manage a project.",
    icon: "project",
    division: "Project Management",
    explanation: "We handle planning, budgets, schedules, vendors, and closeout records.",
    nextStep: "Share your project scope and timeline to request a consultation.",
    ctaText: "Discuss Your Project",
    ctaHref: "/services/project-management",
  },
  {
    id: "facilities",
    questionOption: "I need help with a facility or building.",
    icon: "facility",
    division: "Facilities & Construction Consulting",
    explanation: "We provide building assessments, maintenance plans, and construction oversight.",
    nextStep: "Tell us about your building operations or upcoming work.",
    ctaText: "Request a Facility Consultation",
    ctaHref: "/services/facilities-and-construction-consulting",
  },
  {
    id: "bookkeeping",
    questionOption: "I need bookkeeping, contractor job costing, or tax preparation.",
    icon: "ledger",
    division: "Bookkeeping & Tax Preparation",
    explanation:
      "We keep small-business and contractor books accurate and tax-ready, from monthly reconciliations to job costing and WIP reporting.",
    nextStep: "Book a free consultation to review where your books are today.",
    ctaText: "Book a Free Consultation",
    ctaHref: "/services/bookkeeping-and-tax-preparation",
  },
  {
    id: "home-services",
    questionOption: "I need help finding a home-service provider.",
    icon: "home",
    division: "LAFUMIPP Home Services",
    explanation: "We connect you with independent plumbing, HVAC, electrical, and handyman pros.",
    nextStep: "Tell us the trade service you need for a referral.",
    ctaText: "Request a Service Connection",
    ctaHref: "/services/home-services",
  },
];

export function ServiceFinder() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [step, setStep] = useState<"question" | "result">("question");
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedOption = FINDER_OPTIONS.find((o) => o.id === selectedId) || null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setStep("result");
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % FINDER_OPTIONS.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + FINDER_OPTIONS.length) % FINDER_OPTIONS.length;
    }
    if (nextIndex !== null) {
      const nextOpt = FINDER_OPTIONS[nextIndex];
      setSelectedId(nextOpt.id);
      optionRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section id="service-finder" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 border-b border-[#E5E7EB] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="type-h2 text-navy">What do you need help with?</h2>
            <p className="max-w-md type-lg text-charcoal">
              Pick an option below to find the right LAFUMIPP division.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          {step === "question" ? (
            <div
              role="radiogroup"
              aria-label="Select what you need help with"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {FINDER_OPTIONS.map((opt, idx) => {
                const isSelected = selectedId === opt.id;
                const variant = idx % 3 === 0 ? "navy" : idx % 3 === 1 ? "gold" : "gray";
                const pattern = idx % 2 === 0 ? "squares" : "arc";

                return (
                  <button
                    key={opt.id}
                    ref={(el) => {
                      optionRefs.current[idx] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelect(opt.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="h-full cursor-pointer text-left focus-visible:outline-2"
                  >
                    <Card
                      variant={variant}
                      pattern={pattern}
                      className={`h-full transition-colors ${
                        isSelected ? "ring-2 ring-navy" : "hover:ring-1 hover:ring-navy/30"
                      }`}
                    >
                      <Icon name={opt.icon} size={36} strokeWidth={1.5} className="mb-5 text-navy" />
                      <span className="type-h3 text-navy">{opt.questionOption}</span>
                    </Card>
                  </button>
                );
              })}
            </div>
          ) : (
            selectedOption && (
              <Card variant="navy" pattern="arc" aria-live="polite">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <Icon name={selectedOption.icon} size={36} strokeWidth={1.5} className="text-navy" />
                      <h3 className="type-h2 text-navy">{selectedOption.division}</h3>
                    </div>

                    <p className="mt-4 type-lg text-charcoal">{selectedOption.explanation}</p>
                    <p className="mt-2 type-body text-charcoal">{selectedOption.nextStep}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Button href={selectedOption.ctaHref} variant="primary">
                      {selectedOption.ctaText}
                    </Button>
                    <Button
                      onClick={() => setStep("question")}
                      variant="outline"
                      icon="arrow-left"
                    >
                      Start Over
                    </Button>
                  </div>
                </div>
              </Card>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}
