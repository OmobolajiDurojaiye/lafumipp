export interface SiteConfig {
  name: string;
  legalName: string;
  siteUrl: string;
  tagline: string;
  description: string;
  shortHeroCopy: string;
  location: string;
  region: string;
  naics: string;
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
  };
  socials: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  bookingUrl: string;
  secureIntakeUrl: string;
  founderPhoto: string;
}

export const siteConfig: SiteConfig = {
  name: "LAFUMIPP",
  legalName: "LAFUMIPP, LLC",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lafumipp.com",
  tagline: "Practical Solutions. Professional Excellence. Measurable Results.",
  description:
    "Project management, facilities consulting, accountability coaching, and home-service referrals across Maryland.",
  shortHeroCopy:
    "Practical consulting, coaching, and home-service referrals across Maryland.",
  location: "Maryland, United States",
  region: "Maryland",
  naics: "541611: Administrative Management and General Management Consulting Services",
  contact: {
    email: "info@lafumipp.com",
    phone: "",
    phoneHref: "",
  },
  socials: {
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  bookingUrl: "",
  secureIntakeUrl: "",
  founderPhoto: "/images/Mrs Adejoke.jpeg",
};

export type DivisionIcon = "project" | "facility" | "ledger" | "growth" | "home";

export interface ServiceDivision {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  /** Concise one-line description (<= 18 words) */
  summary: string;
  icon: DivisionIcon;
  image: string;
  imageAlt: string;
  /** Top 3-4 highlights (<= 6 words each) */
  cardBullets: string[];
  /** Full scope list (<= 6 words each) */
  bullets: string[];
  /** CTA label verbatim from the brief */
  ctaText: string;
  /** Card tint and animated shape pattern */
  cardVariant: "navy" | "gold" | "gray";
  cardPattern: "squares" | "arc";
  /** Optional one-line disclosure */
  disclosure?: string;
}

export const serviceDivisions: ServiceDivision[] = [
  {
    id: "project-management",
    slug: "/services/project-management",
    title: "Project Management",
    shortTitle: "Project Management",
    summary: "Clear planning, schedule tracking, and budget oversight from kickoff to closeout.",
    icon: "project",
    image: "/images/project-management.jpg",
    imageAlt: "Engineers reviewing construction blueprints on site",
    cardBullets: [
      "Project planning and execution",
      "Budget and cost tracking",
      "Schedule coordination",
      "Vendor and procurement support",
    ],
    bullets: [
      "Project planning and execution",
      "Budget and cost tracking",
      "Schedule coordination",
      "Vendor and procurement support",
      "Risk management",
      "RFIs, submittals, and change logs",
      "Project closeout support",
    ],
    ctaText: "Discuss Your Project",
    cardVariant: "navy",
    cardPattern: "squares",
  },
  {
    id: "facilities-and-construction-consulting",
    slug: "/services/facilities-and-construction-consulting",
    title: "Facilities & Construction Consulting",
    shortTitle: "Facilities & Construction",
    summary: "Building assessments, maintenance planning, and construction oversight for your properties.",
    icon: "facility",
    image: "/images/facilities.jpg",
    imageAlt: "Engineer inspecting mechanical piping and equipment",
    cardBullets: [
      "Facility condition assessments",
      "Preventive maintenance planning",
      "Contractor and vendor coordination",
      "Capital improvement planning",
    ],
    bullets: [
      "Facility condition assessments",
      "Preventive maintenance planning",
      "Facility operations consulting",
      "Contractor and vendor coordination",
      "Capital improvement planning",
      "Construction advisory and oversight",
      "Operational efficiency improvements",
    ],
    ctaText: "Request a Facility Consultation",
    cardVariant: "gold",
    cardPattern: "arc",
  },
  /*
  {
    id: "bookkeeping-and-tax-preparation",
    slug: "/services/bookkeeping-and-tax-preparation",
    title: "Bookkeeping & Tax Preparation",
    shortTitle: "Bookkeeping & Tax",
    summary: "Organized bookkeeping, account reconciliations, and authorized tax preparation for small businesses.",
    icon: "ledger",
    image: "/images/bookkeeping.jpg",
    imageAlt: "Hands reviewing tax forms and bookkeeping checklist at a desk",
    cardBullets: [
      "Small-business bookkeeping",
      "Account reconciliations",
      "Financial reporting and cleanup",
      "Authorized tax preparation",
    ],
    bullets: [
      "Small-business bookkeeping",
      "Transaction categorization",
      "Account reconciliations",
      "Financial reporting",
      "Bookkeeping cleanup",
      "Tax document organization",
      "Authorized tax return preparation",
    ],
    ctaText: "Request Bookkeeping or Tax Help",
    cardVariant: "gray",
    cardPattern: "squares",
  },
  */
  {
    id: "grow-with-adejoke",
    slug: "/services/grow-with-adejoke",
    title: "Grow with Adejoke",
    shortTitle: "Grow with Adejoke",
    summary: "Accountability coaching for personal goals, time management, and career growth.",
    icon: "growth",
    image: "/images/grow.jpg",
    imageAlt: "Two professionals having a focused coaching conversation",
    cardBullets: [
      "Personal goal setting",
      "Time management and focus",
      "Budgeting habit accountability",
      "Career and certification goals",
    ],
    bullets: [
      "Personal accountability",
      "Goal setting",
      "Time management",
      "Productivity habits",
      "Budgeting habit accountability",
      "Career and certification goals",
      "Consistent weekly progress",
    ],
    ctaText: "Start Your Growth Journey",
    cardVariant: "gold",
    cardPattern: "squares",
  },
  {
    id: "home-services",
    slug: "/services/home-services",
    title: "LAFUMIPP Home Services",
    shortTitle: "Home Services",
    summary: "Connecting homeowners and property managers with independent trade professionals.",
    icon: "home",
    image: "/images/home-services.jpg",
    imageAlt: "Trade technician holding a drill during a home service visit",
    cardBullets: [
      "Plumbing referrals",
      "HVAC referrals",
      "Electrical referrals",
      "Handyman service referrals",
    ],
    bullets: [
      "Plumbing referrals",
      "HVAC referrals",
      "Electrical referrals",
      "Handyman service referrals",
    ],
    ctaText: "Request a Service Connection",
    cardVariant: "navy",
    cardPattern: "arc",
    disclosure: "Trade work is performed by independent providers, subject to license and insurance checks.",
  },
];

export function getDivision(id: string): ServiceDivision {
  const d = serviceDivisions.find((x) => x.id === id);
  if (!d) throw new Error(`Unknown division: ${id}`);
  return d;
}
