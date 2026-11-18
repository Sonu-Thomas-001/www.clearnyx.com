import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/clearnyx/HeroSection";
import { BenefitsStrip } from "@/components/clearnyx/BenefitsStrip";
import { HomeAlignerParallax } from "@/components/clearnyx/HomeAlignerParallax";
import { ConditionsSection } from "@/components/clearnyx/ConditionsSection";
import { StepsSection } from "@/components/clearnyx/StepsSection";
import { DualPolymerSection } from "@/components/clearnyx/DualPolymerSection";
import { AlignerVsBracesSection } from "@/components/clearnyx/AlignerVsBracesSection";
import { LifestyleOrbitSection } from "@/components/clearnyx/LifestyleOrbitSection";
import { StatsSection } from "@/components/clearnyx/StatsSection";
import { ComparisonSection } from "@/components/clearnyx/ComparisonSection";
import DemoOne from "@/components/ui/demo";
import { FaqCtaSection } from "@/components/clearnyx/FaqCtaSection";
import { FAQPageSchema, MedicalDeviceProductSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "CLEARNYX | Leading Clear Aligner Provider in India — B2B Orthodontic Lab",
  description:
    "India's premier clear aligner provider and orthodontic lab. CLEARNYX delivers precision-engineered PETG & Multi-Layer clear aligners exclusively for certified dentists and clinics across India.",
  alternates: {
    canonical: "https://www.clearnyx.com",
  },
  keywords: [
    "clear aligner provider",
    "clear aligner provider in India",
    "b2b clear aligner manufacturer",
    "clear aligners for dentists",
    "orthodontic clear aligners",
    "dental aligner lab India",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Search Engine Rich Snippet Schemas */}
      <FAQPageSchema />
      <MedicalDeviceProductSchema />

      {/* 1. Hero Section with Eyebrow, Heading, Lead, Dual CTA, Aligner Visual & Overlapping Trust Strip */}
      <HeroSection />

      {/* 2. 6-Feature Benefits Strip */}
      <BenefitsStrip />

      {/* 2b. Scroll-Triggered Aligner Anatomy Parallax */}
      <HomeAlignerParallax />

      {/* 3. Conditions We Treat (6 Malocclusion Condition Cards) */}
      <ConditionsSection />

      {/* 4. 4-Step Smile Journey with Connector Progress Bar */}
      <StepsSection />

      {/* 5. Dual Polymer Engineering (Standard PETG vs Multi-Layer Pro) */}
      <DualPolymerSection />

      {/* 6. Clinical Comparison: CLEARNYX vs Traditional Fixed Braces */}
      <AlignerVsBracesSection />

      {/* 7. Lifestyle Integration (4 Interactive Everyday Moments) */}
      <LifestyleOrbitSection />

      {/* 8. Practice Highlights & Metric Stats Strip */}
      <StatsSection />

      {/* 9. Interactive Before/After Smile Transformation Slider */}
      <ComparisonSection />

      {/* 10. Patient & Clinician Testimonials Scroller */}
      <DemoOne />

      {/* 11. FAQ Accordion & Branded Box Transformation CTA Card */}
      <FaqCtaSection />
    </>
  );
}
