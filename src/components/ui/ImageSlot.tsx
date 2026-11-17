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
      aria-label="LAFUMIPP, LLC"
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-[12px] border border-[#DFE3E8] bg-white p-8 shadow-sm ${className}`}
    >
      <Image
        src="/images/logo.png"
        alt="LAFUMIPP, LLC logo"
        width={255}
        height={210}
        className="h-32 w-auto sm:h-36"
      />
    </div>
  );
}
