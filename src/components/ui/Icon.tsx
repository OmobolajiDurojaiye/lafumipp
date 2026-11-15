import React from "react";

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-up"
  | "check"
  | "close"
  | "menu"
  | "project-management"
  | "project"
  | "facilities"
  | "facility"
  | "bookkeeping"
  | "ledger"
  | "growth"
  | "home"
  | "shield"
  | "clock"
  | "mail"
  | "phone"
  | "map-pin"
  | "calendar"
  | "document"
  | "target"
  | "sparkles"
  | "scale"
  | "refresh"
  | "user"
  | "warning";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}

export function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  className = "",
  ...props
}: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow-right":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...commonProps}>
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...commonProps}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "chevron-up":
      return (
        <svg {...commonProps}>
          <path d="m18 15-6-6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "close":
      return (
        <svg {...commonProps}>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      );
    case "menu":
      return (
        <svg {...commonProps}>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      );
    case "project-management":
    case "project":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="8" y1="13" x2="14" y2="13" />
          <line x1="10" y1="16.5" x2="17" y2="16.5" />
          <circle cx="6" cy="6.5" r="0.75" fill="currentColor" />
          <circle cx="9" cy="6.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case "facilities":
    case "facility":
      return (
        <svg {...commonProps}>
          <path d="M3 21h18" />
          <path d="M5 21V6l8-3v18" />
          <path d="M13 9l6 2.5V21" />
          <line x1="8.5" y1="8.5" x2="9.5" y2="8.5" />
          <line x1="8.5" y1="12.5" x2="9.5" y2="12.5" />
          <line x1="8.5" y1="16.5" x2="9.5" y2="16.5" />
          <line x1="16" y1="14" x2="16.5" y2="14" />
          <line x1="16" y1="17" x2="16.5" y2="17" />
        </svg>
      );
    case "bookkeeping":
    case "ledger":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <rect x="7.5" y="6.5" width="9" height="3.5" rx="0.75" />
          <line x1="8" y1="13.5" x2="10.5" y2="13.5" />
          <line x1="13.5" y1="13.5" x2="16" y2="13.5" />
          <line x1="8" y1="17" x2="10.5" y2="17" />
          <line x1="13.5" y1="17" x2="16" y2="17" />
        </svg>
      );
    case "growth":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="m16 8 4-4" />
          <path d="M17 4h3v3" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="m3 10.5 9-7.5 9 7.5" />
          <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
          <path d="M9.5 21v-6.5h5V21" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 21s7-3.6 7-9.5V5.5L12 3 5 5.5v6C5 17.4 12 21 12 21Z" />
          <path d="m9.5 12 1.8 1.8 3.5-3.6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...commonProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...commonProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "document":
      return (
        <svg {...commonProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...commonProps}>
          <path d="m12 3 2.2 5.3L19.5 10.5l-5.3 2.2L12 18l-2.2-5.3L4.5 10.5l5.3-2.2L12 3Z" />
        </svg>
      );
    case "scale":
      return (
        <svg {...commonProps}>
          <path d="m16 16 3-8 3 8c0 1-1 2-3 2s-3-1-3-2Z" />
          <path d="m2 16 3-8 3 8c0 1-1 2-3 2s-3-1-3-2Z" />
          <path d="M12 3v18" />
          <path d="M5 8h14" />
          <path d="M8 21h8" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...commonProps}>
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      );
    case "user":
      return (
        <svg {...commonProps}>
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "warning":
      return (
        <svg {...commonProps}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    default:
      return null;
  }
}
