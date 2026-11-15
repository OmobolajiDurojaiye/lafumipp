import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface PageHeroProps {
  title: string;
  image: string;
  imageAlt: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  compact?: boolean;
}

export function PageHero({
  title,
  image,
  imageAlt,
  subtitle,
  ctaText,
  ctaHref = "/contact",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative flex w-full items-end overflow-hidden bg-navy text-white on-dark ${
        compact
          ? "h-[40vh] min-h-[300px] max-h-[380px]"
          : "h-[60vh] min-h-[440px] max-h-[560px]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Flat 45% navy overlay, no gradient */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#142744]/45" />

      <div className="container-page relative z-10 pb-10 pt-28 lg:pb-14">
        {compact ? (
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
            {title}
          </h1>
        ) : (
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
                {title}
              </h1>
            </div>

            {(subtitle || ctaText) && (
              <div className="lg:col-span-5 lg:text-right">
                {subtitle && (
                  <p className="type-lg text-white/95 lg:ml-auto lg:max-w-md">{subtitle}</p>
                )}
                {ctaText && (
                  <div className="mt-5 flex lg:justify-end">
                    <Button href={ctaHref} variant="white" icon={null}>
                      {ctaText}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
