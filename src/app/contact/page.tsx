import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ProtectedEmailLink } from "@/components/ui/ProtectedEmailLink";

export const metadata: Metadata = {
  title: "Contact & Request a Consultation",
  description:
    "Request a consultation with LAFUMIPP, LLC for project management, facilities consulting, bookkeeping & tax preparation, or home-service referrals.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Request a Consultation"
        image="/images/hero-team.jpg"
        imageAlt="LAFUMIPP consulting team in an office meeting"
        compact
      />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <p className="mb-6 type-sm font-semibold text-navy">
                Do not send SSNs, tax returns, or bank details here.
              </p>
              <ContactForm />
            </Reveal>

            <Reveal delay={60} className="lg:col-span-4">
              <div className="rounded-[12px] bg-[#F3F4F6] p-8">
                <h2 className="type-h3 text-navy">Direct contact</h2>
                <p className="mt-2 type-sm text-charcoal">
                  {siteConfig.contact.phone
                    ? "Reach us by email or phone to discuss your needs."
                    : "Reach us by email to discuss your needs."}
                </p>

                <div className="mt-6 space-y-4">
                  <ProtectedEmailLink className="flex items-center gap-3 type-body font-semibold text-navy hover:underline">
                    {(email) => (
                      <>
                        <Icon name="mail" size={20} strokeWidth={1.5} className="shrink-0 text-navy" />
                        <span>{email}</span>
                      </>
                    )}
                  </ProtectedEmailLink>

                  {siteConfig.contact.phone && siteConfig.contact.phoneHref ? (
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="flex items-center gap-3 type-body font-semibold text-navy hover:underline"
                    >
                      <Icon name="phone" size={20} strokeWidth={1.5} className="shrink-0 text-navy" />
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
