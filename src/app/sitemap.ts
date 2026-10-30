import { MetadataRoute } from "next";
import { BRAND_CONFIG } from "@/config/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BRAND_CONFIG.websiteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
