import React from "react";
import { HeroSection } from "@/components/clearbee/HeroSection";
import { BenefitsStrip } from "@/components/clearbee/BenefitsStrip";
import { ConditionsSection } from "@/components/clearbee/ConditionsSection";
import { StepsSection } from "@/components/clearbee/StepsSection";
import { LifestyleOrbitSection } from "@/components/clearbee/LifestyleOrbitSection";
import { StatsSection } from "@/components/clearbee/StatsSection";
import { ComparisonSection } from "@/components/clearbee/ComparisonSection";
import { TestimonialsSection } from "@/components/clearbee/TestimonialsSection";
import { FaqCtaSection } from "@/components/clearbee/FaqCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Eyebrow, Heading, Lead, Dual CTA, Aligner Visual & Overlapping Trust Strip */}
      <HeroSection />

      {/* 2. 6-Feature Benefits Strip */}
      <BenefitsStrip />

      {/* 3. Conditions We Treat (6 Malocclusion Condition Cards) */}
      <ConditionsSection />

      {/* 4. 4-Step Smile Journey with Connector Progress Bar */}
      <StepsSection />

      {/* 5. Lifestyle Orbit Section: Central Floating Aligner + 5 Interactive Moments */}
      <LifestyleOrbitSection />

      {/* 6. Practice Highlights & Metric Stats Strip */}
      <StatsSection />

      {/* 7. Interactive Before/After Smile Transformation Slider */}
      <ComparisonSection />

      {/* 8. Patient & Clinician Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ Accordion & Branded Box Transformation CTA Card */}
      <FaqCtaSection />
    </>
  );
}
