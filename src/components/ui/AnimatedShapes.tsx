"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedShapesProps {
  variant?: "dark" | "gray" | "navy-tint";
  className?: string;
}

const SQUARE_DELAYS = [
  0, 400, 900, 200, 1100,
  600, 100, 1300, 500, 300,
  1000, 700, 250, 850, 150,
  450, 1200, 350, 950, 650,
];

const FILL_BY_VARIANT = {
  dark: "#1E375E",
  gray: "#DFE3E8",
  "navy-tint": "#CED9EA",
};

/**
 * Staggered fading squares + drifting arc in flat colors, paused off-screen,
 * disabled by CSS for prefers-reduced-motion.
 */
export function AnimatedShapes({ variant = "dark", className = "" }: AnimatedShapesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.05 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const fill = FILL_BY_VARIANT[variant];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-inview={inView ? "true" : "false"}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -bottom-2 -right-2 grid grid-cols-5 gap-1.5 p-3">
        {SQUARE_DELAYS.map((delay, idx) => (
          <span
            key={idx}
            style={
              {
                backgroundColor: fill,
                "--sq-delay": `${delay}ms`,
              } as React.CSSProperties
            }
            className="anim-square block h-4 w-4 rounded-[2px]"
          />
        ))}
      </div>

      <svg
        viewBox="0 0 200 200"
        className="anim-arc absolute -left-16 -top-16 h-52 w-52"
      >
        <circle cx="80" cy="80" r="76" fill={fill} />
      </svg>
    </div>
  );
}
