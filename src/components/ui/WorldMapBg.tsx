import React from "react";

/**
 * Faded flat SVG world map background for the Founder section.
 */
export function WorldMapBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 520"
      fill="currentColor"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* North America */}
      <path d="M120 95 L235 80 L305 110 L325 155 L280 205 L245 235 L210 250 L180 220 L145 180 L110 140 Z" />
      <path d="M225 250 L255 265 L260 285 L230 285 Z" />
      {/* Greenland */}
      <path d="M350 45 L430 40 L445 85 L385 105 L345 80 Z" />
      {/* South America */}
      <path d="M265 295 L325 290 L375 340 L360 410 L315 475 L285 460 L270 380 Z" />
      {/* Europe */}
      <path d="M510 90 L605 75 L640 115 L620 160 L560 175 L515 155 L500 120 Z" />
      {/* Africa */}
      <path d="M515 190 L615 185 L665 245 L645 340 L595 415 L555 405 L535 320 L495 255 Z" />
      {/* Asia */}
      <path d="M645 80 L880 70 L995 115 L1020 185 L945 245 L855 265 L765 255 L695 215 L645 160 Z" />
      <path d="M845 270 L895 280 L915 315 L865 315 Z" />
      {/* Australia */}
      <path d="M915 345 L1020 340 L1045 405 L985 445 L920 420 L905 375 Z" />
    </svg>
  );
}
