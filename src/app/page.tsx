import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CapabilitiesTicker } from "@/components/sections/CapabilitiesTicker";
import { TransformationSliderSection } from "@/components/sections/TransformationSliderSection";
import { ConditionsGridSection } from "@/components/sections/ConditionsGridSection";
import { SolutionsOverviewSection } from "@/components/sections/SolutionsOverviewSection";
import { ClinicLifestyleSection } from "@/components/sections/ClinicLifestyleSection";
import { PracticeMetricsSection } from "@/components/sections/PracticeMetricsSection";
import { TechnologyPreviewSection } from "@/components/sections/TechnologyPreviewSection";
import { WorkflowTimelineSection } from "@/components/sections/WorkflowTimelineSection";
import { ForDentistsPreviewSection } from "@/components/sections/ForDentistsPreviewSection";
import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. High-Impact Editorial Hero with Kinetic Looping Headline & 3D Aligner Showcase */}
      <HeroSection />

      {/* 2. Elevated Clinical Trust Strip */}
      <TrustStrip />

      {/* 3. Capabilities Ticker */}
      <CapabilitiesTicker />

      {/* 4. Interactive Before/After Smile Transformation Comparison Slider */}
      <TransformationSliderSection />

      {/* 5. Malocclusion Conditions Treated Interactive Grid */}
      <ConditionsGridSection />

      {/* 6. Solutions Portfolio Overview (Standard PETG vs Multi-Layer Composite) */}
      <SolutionsOverviewSection />

      {/* 7. Patient Lifestyle & Clinical Compliance Integration */}
      <ClinicLifestyleSection />

      {/* 8. Practice Metrics & Performance Strip */}
      <PracticeMetricsSection />

      {/* 9. Digital Orthodontic Planning & Technology */}
      <TechnologyPreviewSection />

      {/* 10. 6-Stage Clinical Workflow Timeline */}
      <WorkflowTimelineSection />

      {/* 11. Practice Partnership & Doctor Collaboration */}
      <ForDentistsPreviewSection />

      {/* 12. Visual Brand Statement */}
      <BrandStatementSection />

      {/* 13. High-Converting Final CTA Section */}
      <FinalCTASection />
    </>
  );
}
