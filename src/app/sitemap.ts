import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://driva-foretag.se";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${baseUrl}/starta-foretag`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/bokforing-ekonomi`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/juridik`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/marknadsforning`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/finansiering`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/skatt`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/personal-hr`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/ai-effektivisering`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/verktyg`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/hitta-radgivare`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/om-oss`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const categoryMap: Record<string, string> = {
    "starta-foretag": "starta-foretag",
    "bokforing-ekonomi": "bokforing-ekonomi",
    "juridik": "juridik",
    "marknadsforing": "marknadsforning",
    "finansiering": "finansiering",
    "skatt": "skatt",
    "personal-hr": "personal-hr",
    "ai-effektivisering": "ai-effektivisering",
  };

  const articles = getAllArticles().map((a) => ({
    url: `${baseUrl}/${categoryMap[a.category] || a.category}/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "weekly" as const,
    priority: a.pillar ? 0.8 : 0.7,
  }));

  return [...staticPages, ...articles];
}
