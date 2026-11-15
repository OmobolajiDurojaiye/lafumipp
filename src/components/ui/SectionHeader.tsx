import React from "react";
import { SquiggleArrowLeft, SquiggleArrowRight } from "./Doodles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "dark";
  doodle?: "arrows" | "none";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  as = "h2",
  align = "left",
  tone = "light",
  doodle = "none",
  className = "",
}: SectionHeaderProps) {
  const Tag = as;
  const typeClass = as === "h1" ? "type-h1" : "type-h2";
  const titleColor = tone === "dark" ? "text-white" : "text-navy";
  const subtitleColor = tone === "dark" ? "text-white/80" : "text-charcoal";

  if (align === "center") {
    return (
      <div className={`mb-12 flex items-center justify-center gap-8 ${className}`}>
        {doodle === "arrows" && <SquiggleArrowLeft className="hidden md:block w-24 h-11 text-navy" />}
        <div className="max-w-2xl text-center">
          <Tag className={`${typeClass} ${titleColor}`}>{title}</Tag>
          {subtitle && <p className={`mt-3 type-lg ${subtitleColor}`}>{subtitle}</p>}
        </div>
        {doodle === "arrows" && <SquiggleArrowRight className="hidden md:block w-24 h-11 text-navy" />}
      </div>
    );
  }

  return (
    <div className={`mb-12 max-w-2xl ${className}`}>
      <Tag className={`${typeClass} ${titleColor}`}>{title}</Tag>
      {subtitle && <p className={`mt-3 type-lg ${subtitleColor}`}>{subtitle}</p>}
    </div>
  );
}
