import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { RESOURCE_ARTICLES } from "@/content/resources";
import { ResourcesExplorer } from "@/components/sections/ResourcesExplorer";

export const metadata: Metadata = {
  title: "Clinical Insights & Clear Aligner Knowledge Hub",
  description:
    "Explore clinical orthodontic perspectives, digital treatment planning strategies, polymer material dynamics, and practice management insights published by CLEARNYX.",
  alternates: {
    canonical: "https://www.clearnyx.com/resources",
  },
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

