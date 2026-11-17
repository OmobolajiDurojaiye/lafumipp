"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { serviceDivisions } from "@/config/site.config";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

const NO_HERO_ROUTES = ["/privacy", "/terms", "/disclaimers"];

export function Navbar() {
  const pathname = usePathname() || "/";
  const hasPhotoHero = !NO_HERO_ROUTES.includes(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isTransparent = hasPhotoHero && !scrolled && !mobileOpen;

  const linkClass = (active: boolean) =>
    `px-3 py-2 type-sm transition-colors ${
      isTransparent
        ? active
          ? "font-semibold text-white"
          : "text-white/90 hover:text-white"
        : active
        ? "font-semibold text-navy"
        : "text-charcoal hover:text-navy"
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-colors duration-200 ${
        isTransparent
          ? "bg-transparent text-white on-dark"
          : "border-b border-[#E5E7EB] bg-white text-navy"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Image
            src={isTransparent ? "/images/logo-white.png" : "/images/logo.png"}
            alt="LAFUMIPP, LLC"
            width={255}
            height={210}
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
          <Link href="/" className={linkClass(pathname === "/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass(pathname === "/about")}>
            About
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex cursor-pointer items-center gap-1.5 ${linkClass(
                pathname.startsWith("/services")
              )}`}
            >
              <span>Services</span>
              <Icon
                name="chevron-down"
                size={15}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Service divisions"
                className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-[12px] border border-[#E5E7EB] bg-white p-2 text-charcoal"
              >
                {serviceDivisions.map((div) => {
                  const active = pathname === div.slug;
                  return (
                    <Link
                      key={div.id}
                      href={div.slug}
                      role="menuitem"
                      className={`flex items-center gap-3 rounded-[12px] px-3.5 py-2.5 transition-colors ${
                        active ? "bg-[#E8EDF5] font-semibold text-navy" : "text-charcoal hover:bg-[#F3F4F6]"
                      }`}
                    >
                      <Icon name={div.icon} size={20} strokeWidth={1.5} className="shrink-0 text-navy" />
                      <span className="type-sm text-navy">{div.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/contact" className={linkClass(pathname === "/contact")}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contact"
            variant={isTransparent ? "white" : "primary"}
            icon={null}
          >
            Request a Consultation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`inline-flex items-center justify-center rounded-[12px] p-2.5 lg:hidden ${
            isTransparent ? "text-white hover:bg-white/10" : "text-navy hover:bg-[#F3F4F6]"
          }`}
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-[#E5E7EB] bg-white text-navy lg:hidden"
        >
          <div className="container-page space-y-1 py-6">
            <Link
              href="/"
              className="block rounded-[12px] px-3 py-2.5 type-body font-semibold text-navy hover:bg-[#F3F4F6]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-[12px] px-3 py-2.5 type-body font-semibold text-navy hover:bg-[#F3F4F6]"
            >
              About
            </Link>

            <div className="pt-2 pb-1">
              <p className="px-3 pb-1 type-sm font-semibold text-charcoal">Services</p>
              <div className="space-y-1 pl-2">
                {serviceDivisions.map((div) => (
                  <Link
                    key={div.id}
                    href={div.slug}
                    className="flex items-center gap-3 rounded-[12px] px-3 py-2 type-sm text-charcoal hover:bg-[#F3F4F6] hover:text-navy"
                  >
                    <Icon name={div.icon} size={18} className="shrink-0 text-navy" />
                    <span>{div.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block rounded-[12px] px-3 py-2.5 type-body font-semibold text-navy hover:bg-[#F3F4F6]"
            >
              Contact
            </Link>

            <div className="pt-4">
              <Button href="/contact" variant="primary" className="w-full" icon={null}>
                Request a Consultation
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
