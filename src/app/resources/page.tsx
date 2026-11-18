import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { RESOURCE_ARTICLES } from "@/content/resources";
import { ResourcesExplorer } from "@/components/sections/ResourcesExplorer";

export const metadata: Metadata = {
  title: "Orthodontic Clinical Knowledge Hub | CLEARNYX Aligner Provider",
  description:
    "Clinical orthodontic perspectives, clear aligner biomechanics, digital treatment staging guides, and polymer science published by CLEARNYX aligner provider.",
  alternates: {
    canonical: "https://www.clearnyx.com/resources",
  },
  keywords: [
    "clear aligner resources",
    "orthodontic clinical guides",
    "clear aligner provider articles",
    "digital aligner staging guide",
    "clear aligner biomechanics",
  ],
};

export default function ResourcesPage() {
  const breadcrumbs = [{ label: "Resources", href: "/resources" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ]}
      />

      <PageHeader
        eyebrow="CLINICAL KNOWLEDGE HUB"
        title="Insights for Modern Dental Professionals."
        description="Explore research-informed articles, digital orthodontic planning perspectives, and practical guidance for integrating clear aligners into your private dental practice."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourcesExplorer articles={RESOURCE_ARTICLES} />
        </div>
      </section>
    </>
  );
}

