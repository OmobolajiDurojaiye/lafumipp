"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Icon, IconName } from "@/components/ui/Icon";
import { AnimatedShapes } from "@/components/ui/AnimatedShapes";
import { Reveal } from "@/components/ui/Reveal";

export interface WorkStepItem {
  title: string;
  body: string;
  icon: IconName;
  image: string;
  imageAlt: string;
}

const DEFAULT_ITEMS: WorkStepItem[] = [
  {
    title: "Clear plans",
    body: "We define scope, timelines, and next steps before work begins.",
    icon: "target",
    image: "/images/hero-team.jpg",
    imageAlt: "Team planning project milestones in a meeting",
  },
  {
    title: "Organized records",
    body: "We keep budgets, schedules, and project files clean and easy to review.",
    icon: "document",
    image: "/images/facilities.jpg",
    imageAlt: "Engineer inspecting and documenting facility systems",
  },
  {
    title: "Honest communication",
    body: "We share direct updates on progress, risks, and decisions.",
    icon: "sparkles",
    image: "/images/grow.jpg",
    imageAlt: "Two professionals in a focused discussion",
  },
  {
    title: "Steady follow-through",
    body: "We track every detail from kickoff through final closeout.",
    icon: "check",
    image: "/images/project-management.jpg",
    imageAlt: "Engineers reviewing construction blueprints on site",
  },
];

interface HowWeWorkProps {
  title?: string;
  subtitle?: string;
  items?: WorkStepItem[];
}

export function HowWeWork({
  title = "How we work",
  subtitle = "Four principles that guide every client engagement.",
  items = DEFAULT_ITEMS,
}: HowWeWorkProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40 && activeIndex < items.length - 1) {
      setActiveIndex((i) => i + 1);
    } else if (diff < -40 && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
    touchStartX.current = null;
  };

  return (
    <section className="section-pad relative overflow-hidden bg-navy text-white on-dark">
      <AnimatedShapes variant="dark" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="type-h2 text-white">{title}</h2>
            <p className="mt-3 type-lg text-white/80">{subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12">
          <div className="border-y border-white/15 divide-y divide-white/15 lg:col-span-5">
            {items.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div key={item.title} className="py-5">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveIndex(idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          name={item.icon}
                          size={20}
                          strokeWidth={1.5}
                          className={isOpen ? "text-gold" : "text-white/70"}
                        />
                        <span
                          className={`type-h3 ${
                            isOpen ? "text-white" : "text-white/75 hover:text-white"
                          }`}
                        >
                          {item.title}
                        </span>
                      </span>
                      <Icon
                        name="chevron-down"
                        size={18}
                        className={`shrink-0 text-white/70 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-gold" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <p className="mt-3 pl-8 type-body text-white/80">{item.body}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="overflow-hidden lg:col-span-7"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-4 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 84}%)`,
              }}
            >
              {items.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View ${item.title}`}
                  className={`relative aspect-[4/3] w-[82%] shrink-0 cursor-pointer overflow-hidden rounded-[12px] transition-opacity duration-500 ${
                    activeIndex === idx ? "opacity-100" : "opacity-45 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 560px, 85vw"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
