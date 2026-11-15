"use client";

import React, { useEffect, useRef, useState } from "react";

export type CardVariant = "navy" | "gold" | "gray" | "dark" | "white";
export type CardPattern = "squares" | "arc" | "none";

interface CardProps {
  variant?: CardVariant;
  pattern?: CardPattern;
  className?: string;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  navy: "bg-[#E8EDF5] text-charcoal",
  gold: "bg-[#F6EDD6] text-charcoal",
  gray: "bg-[#F3F4F6] text-charcoal",
  dark: "bg-[#142744] text-white on-dark",
  white: "bg-white border border-[#E5E7EB] text-charcoal",
};

const SHAPE_FILL: Record<CardVariant, string> = {
  navy: "#CED9EA",
  gold: "#E5D29F",
  gray: "#DFE3E8",
  dark: "#1E375E",
  white: "#E8EDF5",
};

const SQUARE_DELAYS = [
  0, 400, 900, 200, 1100,
  600, 100, 1300, 500, 300,
  1000, 700, 250, 850, 150,
  450, 1200, 350, 950, 650,
];

export function Card({
  variant = "gray",
  pattern = "none",
  className = "",
  children,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (pattern === "none") return;
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [pattern]);

  const shapeColor = SHAPE_FILL[variant];

  return (
    <div
      ref={ref}
      data-inview={inView ? "true" : "false"}
      className={`relative overflow-hidden rounded-[12px] p-6 lg:p-8 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {pattern === "squares" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2 -right-2 z-0 grid grid-cols-5 gap-1.5 p-2"
        >
          {SQUARE_DELAYS.map((delay, idx) => (
            <span
              key={idx}
              style={
                {
                  backgroundColor: shapeColor,
                  "--sq-delay": `${delay}ms`,
                } as React.CSSProperties
              }
              className="anim-square block h-4 w-4 rounded-[2px]"
            />
          ))}
        </div>
      )}

      {pattern === "arc" && (
        <svg
          aria-hidden="true"
          viewBox="0 0 180 180"
          className="anim-arc pointer-events-none absolute -bottom-16 -right-16 z-0 h-44 w-44"
        >
          <circle cx="130" cy="130" r="95" fill={shapeColor} />
        </svg>
      )}

      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
