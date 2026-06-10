import type { MetadataRoute } from "next";
import { allPages } from "@/lib/pages";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/schedule-a-consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-automation-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-automation-cost-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-installation-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-automation-irvine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-automation-newport-beach`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/whole-home-wifi-installation-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/motorized-shades-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-lighting-control-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-automation-existing-homes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/smart-home-planning-before-construction`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...allPages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.kind === "service" ? 0.85 : page.kind === "location" ? 0.8 : 0.7
    }))
  ];
}
