import { MetadataRoute } from "next";
import { RESOURCE_ARTICLES } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clearnyx.com";
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/technology`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/for-dentists`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/become-a-partner`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.95 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const resourceRoutes = RESOURCE_ARTICLES.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...resourceRoutes];
}

