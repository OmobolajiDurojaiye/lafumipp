import React from "react";

/**
 * Standalone hand-drawn navy line doodles matching the reference screenshots.
 * Navy line (#142744) only, max one per section, never on or under words.
 */
export function SquiggleArrowLeft({ className = "w-20 h-10 text-navy" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 44"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none shrink-0 ${className}`}
    >
      <path
        d="M8 8C24 22 48 30 78 28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66 19C73 23 79 26 83 28C77 31 70 35 64 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquiggleArrowRight({ className = "w-20 h-10 text-navy" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 44"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none shrink-0 ${className}`}
    >
      <path
        d="M88 8C72 22 48 30 18 28"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 19C23 23 17 26 13 28C19 31 26 35 32 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartDoodle({ className = "w-32 h-24 text-navy" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none shrink-0 ${className}`}
    >
      <path
        d="M10 84L38 42L64 70L96 28L124 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M106 14L126 14L120 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
