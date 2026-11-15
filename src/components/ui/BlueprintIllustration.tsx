import React from "react";
import { DivisionIcon } from "@/config/site.config";

interface BlueprintIllustrationProps {
  division: DivisionIcon;
  className?: string;
}

/**
 * 5 custom SVG line illustrations, one per division, in the reference's blueprint style:
 * thin white lines, measurement ticks, and construction grid on flat #142744 navy.
 */
export function BlueprintIllustration({
  division,
  className = "w-full h-64 lg:h-72",
}: BlueprintIllustrationProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-[12px] bg-[#142744] ${className}`}
    >
      <svg
        viewBox="0 0 480 300"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Base construction grid */}
        <g stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1">
          <line x1="0" y1="60" x2="480" y2="60" />
          <line x1="0" y1="120" x2="480" y2="120" />
          <line x1="0" y1="180" x2="480" y2="180" />
          <line x1="0" y1="240" x2="480" y2="240" />
          <line x1="80" y1="0" x2="80" y2="300" />
          <line x1="160" y1="0" x2="160" y2="300" />
          <line x1="240" y1="0" x2="240" y2="300" />
          <line x1="320" y1="0" x2="320" y2="300" />
          <line x1="400" y1="0" x2="400" y2="300" />
        </g>

        {/* Radial perspective construction rays (matching screenshot 2) */}
        <g stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1">
          <line x1="480" y1="0" x2="60" y2="300" />
          <line x1="480" y1="40" x2="0" y2="260" />
          <line x1="380" y1="0" x2="140" y2="300" />
        </g>

        {division === "project" && (
          <g>
            {/* Gantt / Critical Path Schedule Blueprint */}
            <rect
              x="80"
              y="60"
              width="320"
              height="180"
              stroke="#FFFFFF"
              strokeOpacity="0.45"
              strokeWidth="1.2"
            />
            <rect x="104" y="86" width="110" height="20" fill="#FFFFFF" fillOpacity="0.16" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="176" y="126" width="136" height="20" fill="#FFFFFF" fillOpacity="0.22" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="260" y="166" width="116" height="20" fill="#D9B765" fillOpacity="0.25" stroke="#D9B765" strokeWidth="1.4" />
            <path d="M214 96H236V126" stroke="#FFFFFF" strokeWidth="1.2" />
            <path d="M312 136H332V166" stroke="#D9B765" strokeWidth="1.2" />
            <circle cx="104" cy="96" r="3.5" fill="#D9B765" />
            <circle cx="376" cy="176" r="4" fill="#D9B765" />
            {/* Dimension ticks */}
            <line x1="104" y1="214" x2="376" y2="214" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1" />
            <line x1="104" y1="209" x2="104" y2="219" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="240" y1="209" x2="240" y2="219" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="376" y1="209" x2="376" y2="219" stroke="#FFFFFF" strokeWidth="1.2" />
            <text x="155" y="206" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              0.5x
            </text>
            <text x="295" y="206" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              1.25x
            </text>
            <text x="412" y="98" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              0.25x
            </text>
          </g>
        )}

        {division === "facility" && (
          <g>
            {/* Architectural Elevation & Mechanical Riser Blueprint */}
            <rect
              x="96"
              y="52"
              width="144"
              height="188"
              fill="#FFFFFF"
              fillOpacity="0.12"
              stroke="#FFFFFF"
              strokeWidth="1.4"
            />
            <rect
              x="240"
              y="92"
              width="136"
              height="148"
              fill="#FFFFFF"
              fillOpacity="0.08"
              stroke="#FFFFFF"
              strokeWidth="1.4"
            />
            <line x1="96" y1="100" x2="240" y2="100" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
            <line x1="96" y1="148" x2="376" y2="148" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
            <line x1="96" y1="196" x2="376" y2="196" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1" />
            <circle cx="308" cy="120" r="14" stroke="#D9B765" strokeWidth="1.4" />
            <path d="M300 120H316M308 112V128" stroke="#D9B765" strokeWidth="1.2" />
            {/* Dimension markers */}
            <line x1="68" y1="52" x2="68" y2="240" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1" />
            <line x1="63" y1="52" x2="73" y2="52" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="63" y1="240" x2="73" y2="240" stroke="#FFFFFF" strokeWidth="1.2" />
            <text x="392" y="104" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              1.25x
            </text>
            <text x="392" y="152" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              0.50x
            </text>
            <text x="156" y="258" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              1.00x
            </text>
          </g>
        )}

        {division === "ledger" && (
          <g>
            {/* Structured Financial Ledger & Reconciliation Blueprint */}
            <rect
              x="88"
              y="56"
              width="304"
              height="188"
              stroke="#FFFFFF"
              strokeOpacity="0.5"
              strokeWidth="1.3"
            />
            <line x1="88" y1="96" x2="392" y2="96" stroke="#FFFFFF" strokeWidth="1.3" />
            <line x1="240" y1="96" x2="240" y2="244" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.2" />
            <rect x="112" y="116" width="96" height="14" fill="#FFFFFF" fillOpacity="0.18" />
            <rect x="112" y="146" width="76" height="14" fill="#FFFFFF" fillOpacity="0.18" />
            <rect x="112" y="176" width="104" height="14" fill="#FFFFFF" fillOpacity="0.18" />
            <rect x="264" y="116" width="88" height="14" fill="#FFFFFF" fillOpacity="0.22" />
            <rect x="264" y="146" width="100" height="14" fill="#FFFFFF" fillOpacity="0.22" />
            <rect x="264" y="176" width="72" height="14" fill="#D9B765" fillOpacity="0.3" stroke="#D9B765" strokeWidth="1.2" />
            <circle cx="364" cy="76" r="6" stroke="#D9B765" strokeWidth="1.4" />
            <text x="112" y="81" fill="#FFFFFF" fillOpacity="0.8" fontSize="10" fontFamily="sans-serif">
              0.50x
            </text>
            <text x="264" y="81" fill="#FFFFFF" fillOpacity="0.8" fontSize="10" fontFamily="sans-serif">
              0.50x
            </text>
            <text x="406" y="186" fill="#D9B765" fontSize="10" fontFamily="sans-serif">
              1.00x
            </text>
          </g>
        )}

        {division === "growth" && (
          <g>
            {/* Ascending Milestone Trajectory & Habit Cadence Blueprint */}
            <rect
              x="80"
              y="60"
              width="320"
              height="180"
              stroke="#FFFFFF"
              strokeOpacity="0.4"
              strokeWidth="1.2"
            />
            <path
              d="M104 210L176 168L248 144L320 96L368 78"
              stroke="#FFFFFF"
              strokeWidth="1.8"
            />
            <circle cx="104" cy="210" r="4" fill="#FFFFFF" />
            <circle cx="176" cy="168" r="4" fill="#FFFFFF" />
            <circle cx="248" cy="144" r="4" fill="#FFFFFF" />
            <circle cx="320" cy="96" r="4.5" fill="#D9B765" />
            <circle cx="368" cy="78" r="5" fill="#D9B765" />
            <rect x="156" y="180" width="40" height="44" fill="#FFFFFF" fillOpacity="0.12" stroke="#FFFFFF" strokeOpacity="0.4" />
            <rect x="228" y="156" width="40" height="68" fill="#FFFFFF" fillOpacity="0.16" stroke="#FFFFFF" strokeOpacity="0.4" />
            <rect x="300" y="110" width="40" height="114" fill="#D9B765" fillOpacity="0.22" stroke="#D9B765" strokeWidth="1.2" />
            <text x="412" y="82" fill="#D9B765" fontSize="10" fontFamily="sans-serif">
              1.25x
            </text>
            <text x="412" y="148" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              0.75x
            </text>
          </g>
        )}

        {division === "home" && (
          <g>
            {/* Residential Systems & Trade Referral Schematic */}
            <path
              d="M136 132L240 60L344 132V236H136V132Z"
              fill="#FFFFFF"
              fillOpacity="0.1"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <line x1="136" y1="184" x2="344" y2="184" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.2" />
            <line x1="240" y1="132" x2="240" y2="236" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.2" />
            {/* 4 Trade Nodes (Plumbing, HVAC, Electrical, Handyman) */}
            <circle cx="188" cy="158" r="8" fill="#142744" stroke="#D9B765" strokeWidth="1.5" />
            <circle cx="292" cy="158" r="8" fill="#142764" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="188" cy="210" r="8" fill="#142744" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="292" cy="210" r="8" fill="#142744" stroke="#D9B765" strokeWidth="1.5" />
            <text x="364" y="162" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              0.50x
            </text>
            <text x="364" y="214" fill="#D9B765" fontSize="10" fontFamily="sans-serif">
              0.50x
            </text>
            <text x="228" y="256" fill="#FFFFFF" fillOpacity="0.75" fontSize="10" fontFamily="sans-serif">
              1.00x
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
