"use client";

import React, { useEffect, useState } from "react";

interface ProtectedEmailLinkProps {
  className?: string;
  children?: (email: string) => React.ReactNode;
}

/**
 * Renders the business email only after client hydration so static HTML scrapers
 * cannot harvest the address from SSR markup.
 */
export function ProtectedEmailLink({ className, children }: ProtectedEmailLinkProps) {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const user = "info";
    const domain = ["lafumipp", "com"].join(".");
    setEmail(`${user}@${domain}`);
  }, []);

  if (!email) {
    return (
      <span className={className} aria-label="Email contact">
        {children ? children("Email us") : "Email us"}
      </span>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {children ? children(email) : email}
    </a>
  );
}
