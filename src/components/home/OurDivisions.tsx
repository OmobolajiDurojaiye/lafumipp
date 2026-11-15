import React from "react";
import Link from "next/link";
import { serviceDivisions } from "@/config/site.config";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function OurDivisions() {
  return (
    <section id="divisions" className="section-pad bg-white">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-[#E5E7EB] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="type-h2 text-navy">Our divisions</h2>
            <p className="max-w-md type-lg text-charcoal">
              Practical support for your projects, buildings, finances, and home.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
          {serviceDivisions.map((div, idx) => {
            const imageFirst = idx % 2 === 0;
            return (
              <Reveal key={div.id} delay={40}>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className={`lg:col-span-6 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                    <Photo
                      src={div.image}
                      alt={div.imageAlt}
                      sizes="(min-width: 1024px) 580px, 100vw"
                      className="aspect-[4/3] w-full"
                    />
                  </div>

                  <div className={`lg:col-span-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                    <h3 className="type-h2 text-navy">{div.title}</h3>
                    <p className="mt-3 type-lg text-charcoal">{div.summary}</p>

                    <ul className="mt-6 space-y-2.5">
                      {div.cardBullets.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 type-body text-charcoal">
                          <Icon
                            name="check"
                            size={18}
                            strokeWidth={1.75}
                            className="mt-1 shrink-0 text-navy"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {div.disclosure && (
                      <p className="mt-4 type-sm text-charcoal/80">{div.disclosure}</p>
                    )}

                    <div className="mt-7">
                      <Link
                        href={div.slug}
                        className="inline-flex items-center gap-2 type-sm font-semibold text-navy underline underline-offset-4 hover:text-[#1d365c]"
                      >
                        <span>Learn more</span>
                        <Icon name="arrow-right" size={16} strokeWidth={1.75} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
