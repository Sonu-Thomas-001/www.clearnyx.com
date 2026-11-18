import React from "react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMissionSection } from "@/components/about/AboutMissionSection";
import { AboutPillarsSection } from "@/components/about/AboutPillarsSection";
import { AboutManufacturingSection } from "@/components/about/AboutManufacturingSection";
import { AboutVisionQuote } from "@/components/about/AboutVisionQuote";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "About CLEARNYX | Doctor-Directed Clear Aligner Provider in India",
  description:
    "Learn about CLEARNYX: India's premier B2B clear aligner provider combining orthodontic biomechanics, advanced thermoforming polymer engineering, and doctor-first collaboration.",
  alternates: {
    canonical: "https://www.clearnyx.com/about",
  },
  keywords: [
    "about CLEARNYX",
    "clear aligner provider India",
    "b2b aligner company",
    "orthodontic aligner manufacturer",
    "doctor directed aligners",
  ],
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About CLEARNYX", url: "/about" },
        ]}
      />

      {/* 1. Hero: Light clinical editorial positioning + Portrait visual + Trust metrics */}
      <AboutHero />

      {/* 2. Mission Section: Who We Are & The Doctor-First Imperative */}
      <AboutMissionSection />

      {/* 3. Three Pillars: CAD Biomechanics, Polymer Science, Doctor Partnership */}
      <AboutPillarsSection />

      {/* 4. Manufacturing Excellence: Scalloped Laser Margin & Cleanroom Fabrication */}
      <AboutManufacturingSection />

      {/* 5. Vision Quote: Deep Navy Guiding Philosophy Banner */}
      <AboutVisionQuote />

      {/* 6. Practice Collaboration Call-To-Action */}
      <AboutCtaSection />
    </main>
  );
}
