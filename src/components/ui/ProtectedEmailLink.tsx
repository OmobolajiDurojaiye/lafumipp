"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface ProtectedEmailLinkProps {
  className?: string;
  showIcon?: boolean;
  iconSize?: number;
  iconClassName?: string;
}

/**
 * Renders the business email only after client hydration so static HTML scrapers
 * cannot harvest the address from SSR markup.
 */
export function ProtectedEmailLink({
  className,
  showIcon = false,
  iconSize = 16,
  iconClassName = "shrink-0 text-navy",
}: ProtectedEmailLinkProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const user = "info";
    const domain = ["lafumipp", "com"].join(".");
    setEmail(`${user}@${domain}`);
  }, []);

  const content = (
    <>
      {showIcon && (
        <Icon name="mail" size={iconSize} strokeWidth={1.5} className={iconClassName} />
      )}
      <span>{email || "Email us"}</span>
    </>
  );

  if (!email) {
    return (
      <span className={className} aria-label="Email contact">
        {content}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {content}
    </a>
  );
}
