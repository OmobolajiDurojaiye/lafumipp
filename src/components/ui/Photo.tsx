import React from "react";
import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  objectPosition?: string;
}

/**
 * Natural-color photograph wrapper with 12px radius.
 */
export function Photo({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
  className = "aspect-[4/3] w-full",
  objectPosition = "object-center",
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-[12px] bg-[#F3F4F6] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${objectPosition}`}
      />
    </div>
  );
}
