import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/services/project-management",
    "/services/facilities-and-construction-consulting",
    // "/services/bookkeeping-and-tax-preparation",
    "/services/grow-with-adejoke",
    "/services/home-services",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
