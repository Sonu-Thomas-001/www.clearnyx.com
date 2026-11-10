import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { BrandPillarsSection } from "@/components/sections/BrandPillarsSection";
import { SolutionsOverviewSection } from "@/components/sections/SolutionsOverviewSection";
import { TechnologyPreviewSection } from "@/components/sections/TechnologyPreviewSection";
import { WorkflowTimelineSection } from "@/components/sections/WorkflowTimelineSection";
import { ForDentistsPreviewSection } from "@/components/sections/ForDentistsPreviewSection";
import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Editorial Hero */}
      <HeroSection />

      {/* 2. Brand Introduction */}
      <BrandIntroSection />

      {/* 3. Four Brand Pillars */}
      <BrandPillarsSection />

      {/* 4. Solutions Portfolio Overview */}
      <SolutionsOverviewSection />

      {/* 5. Digital Technology */}
      <TechnologyPreviewSection />

      {/* 6. Clinical Workflow 6-Stage Timeline */}
      <WorkflowTimelineSection />

      {/* 7. For Dental Professionals */}
      <ForDentistsPreviewSection />

      {/* 8. Brand Statement Editorial */}
      <BrandStatementSection />

      {/* 9. Final CTA */}
      <FinalCTASection />
    </>
  );
}
