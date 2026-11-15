import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site.config";

interface ImageSlotProps {
  className?: string;
}

/**
 * Neutral flat portrait slot with the LAFUMIPP logo mark at low opacity.
 * Populating `siteConfig.founderPhoto` replaces it with the founder portrait.
 */
export function ImageSlot({ className = "aspect-[4/5] w-full" }: ImageSlotProps) {
  if (siteConfig.founderPhoto) {
    return (
      <div className={`relative overflow-hidden rounded-[12px] ${className}`}>
        <Image
          src={siteConfig.founderPhoto}
          alt="Adejoke Adeniran, MBA, PMP, FMP"
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Founder portrait placeholder"
      className={`relative flex items-center justify-center overflow-hidden rounded-[12px] bg-[#E5E7EB] ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={255}
        height={210}
        aria-hidden="true"
        className="h-24 w-auto opacity-20"
      />
    </div>
  );
}
