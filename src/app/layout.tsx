import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site.config";

const inter = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/playfair-display/files/playfair-display-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  title: {
    default: "LAFUMIPP, LLC | Project Management, Facilities Consulting & Contractor Bookkeeping in Maryland",
    template: "%s | LAFUMIPP, LLC",
  },
  description: siteConfig.description,
  keywords: [
    "LAFUMIPP",
    "LAFUMIPP LLC",
    "project management Maryland",
    "construction project management Maryland",
    "facilities consulting Maryland",
    "MEP consulting Maryland",
    "small business bookkeeping Maryland",
    "contractor bookkeeping Maryland",
    "construction job costing",
    "WIP reporting contractors",
    "tax preparation Maryland",
    "home service referrals Maryland",
  ],
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    nocache: !allowIndexing,
    googleBot: { index: allowIndexing, follow: allowIndexing },
  },
  openGraph: {
    title: `LAFUMIPP, LLC | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.legalName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 255,
        height: 210,
        alt: siteConfig.legalName,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.png`,
    description: siteConfig.description,
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    founder: {
      "@type": "Person",
      name: "Adejoke Adeniran",
      jobTitle: "Founder & Principal",
      honorificSuffix: "MBA, PMP, FMP",
      sameAs: ["https://www.linkedin.com/in/adejoke-a-63b5a331/"],
    },
    areaServed: {
      "@type": "State",
      name: "Maryland",
    },
    knowsAbout: [
      "Construction Project Management",
      "Facilities Management & Consulting",
      "MEP Building Services",
      "Small Business Bookkeeping",
      "Contractor Job Costing & WIP Reporting",
      "AIA Progress Billing & Retainage Tracking",
      "Individual and Small Business Tax Preparation",
      "Home Service Referrals",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: "US",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-6 focus:py-3 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
