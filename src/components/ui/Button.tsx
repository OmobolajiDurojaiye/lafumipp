import React from "react";
import Link from "next/link";
import { Icon, IconName } from "./Icon";

export type ButtonVariant = "primary" | "gold" | "outline" | "outline-dark" | "white" | "white-outline";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: IconName | null;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  icon = "arrow-right",
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 type-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-navy text-white hover:bg-[#1d365c]",
    gold: "bg-gold text-navy hover:bg-[#e2c375]",
    outline: "bg-white text-navy border border-navy/25 hover:border-navy",
    "outline-dark": "bg-transparent text-white border border-white/40 hover:border-white",
    white: "bg-white text-navy hover:bg-[#F3F4F6]",
    "white-outline": "bg-transparent text-white border border-white/60 hover:border-white",
  };

  const combined = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        <span>{children}</span>
        {icon && <Icon name={icon} size={16} strokeWidth={1.75} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combined}>
      <span>{children}</span>
      {icon && <Icon name={icon} size={16} strokeWidth={1.75} />}
    </button>
  );
}
