import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceDivisions, siteConfig } from "@/config/site.config";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white on-dark">
      <div className="container-page pt-16 pb-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3 space-y-3">
            <h2 className="type-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 type-sm text-white/80 transition-colors hover:text-white"
                >
                  <Icon name="mail" size={16} strokeWidth={1.5} className="shrink-0 text-gold" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 type-sm text-white/80 transition-colors hover:text-white"
                >
                  <Icon name="phone" size={16} strokeWidth={1.5} className="shrink-0 text-gold" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="type-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {serviceDivisions.map((div) => (
                <li key={div.id}>
                  <Link
                    href={div.slug}
                    className="type-sm text-white/80 transition-colors hover:text-white"
                  >
                    {div.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="type-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="type-sm text-white/80 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="type-sm text-white/80 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="type-sm font-semibold text-white">Legal</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="type-sm text-white/80 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="type-sm text-white/80 transition-colors hover:text-white"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimers"
                  className="type-sm text-white/80 transition-colors hover:text-white"
                >
                  Service Disclaimers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant faded white logo across the bottom */}
        <div
          aria-hidden="true"
          className="pointer-events-none my-12 flex items-center justify-center select-none lg:my-16"
        >
          <Image
            src="/images/logo-white.png"
            alt=""
            width={255}
            height={210}
            className="h-28 w-auto opacity-[0.08] sm:h-40 lg:h-52"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="type-sm text-white/75">2026 {siteConfig.legalName}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="type-sm text-white/75 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="type-sm text-white/75 hover:text-white">
              Terms of Use
            </Link>
            <Link href="/disclaimers" className="type-sm text-white/75 hover:text-white">
              Service Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
