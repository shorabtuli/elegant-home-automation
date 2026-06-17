import type { MetadataRoute } from "next";
import { allPages } from "@/lib/pages";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${site.url}/schedule-a-consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
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
    { url: `${site.url}/managed-support`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${site.url}/blog/best-home-automation-company-orange-county`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/control4-installer-near-me`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/smart-home-irvine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/luxury-smart-home-setup`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/smart-home-installer-irvine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/whole-home-audio-irvine`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/motorized-shades-newport-beach`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/home-network-setup-for-large-homes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog/smart-lighting-installer`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...allPages.map((page) => ({
      url: `${site.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page.kind === "service" ? 0.85 : page.kind === "location" ? 0.8 : 0.7
    }))
  ];
}
