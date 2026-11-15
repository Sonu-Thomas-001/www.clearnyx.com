import React from "react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { DoctorHero } from "@/components/dentists/DoctorHero";
import { DoctorPhilosophySection } from "@/components/dentists/DoctorPhilosophySection";
import { DoctorStagingSection } from "@/components/dentists/DoctorStagingSection";
import { DoctorMaterialsSection } from "@/components/dentists/DoctorMaterialsSection";
import { DoctorWorkflowSection } from "@/components/dentists/DoctorWorkflowSection";
import { DoctorComparisonSection } from "@/components/dentists/DoctorComparisonSection";
import { DoctorOnboardingSection } from "@/components/dentists/DoctorOnboardingSection";
import { DoctorFaqSection } from "@/components/dentists/DoctorFaqSection";

export const metadata: Metadata = {
  title: "For Dentists & Orthodontists | B2B Clear Aligner Manufacturing & 3D Staging",
  description:
    "Partner with CLEARNYX: Sub-millimeter 3D digital planning, open STL/PLY scanner interoperability, Class IIa medical polymers, and strict B2B doctor autonomy with zero DTC disintermediation.",
  alternates: {
    canonical: "https://www.clearnyx.com/for-dentists",
  },
};

export default function ForDentistsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "For Dentists", url: "/for-dentists" },
        ]}
      />

      {/* 1. Hero: Light clinical editorial positioning + Portrait visual + Trust metrics */}
      <DoctorHero />

      {/* 2. Doctor Philosophy: Preserving Doctor-Patient Relationships & Scanner Freedom */}
      <DoctorPhilosophySection />

      {/* 3. CAD Staging Precision: Biomechanical velocities & 3D Web Simulation */}
      <DoctorStagingSection />

      {/* 4. Polymer Architecture: Standard PETG & Multi-Layer Pro */}
      <DoctorMaterialsSection />

      {/* 5. 4-Step Practice Routine & Custom Patient Presentation Kit */}
      <DoctorWorkflowSection />

      {/* 6. Clinical Comparison: CLEARNYX vs Legacy Foreign Brands vs DTC DIY */}
      <DoctorComparisonSection />

      {/* 7. Doctor Registration & Starter Kit Bundle (PartnerEnquiryForm) */}
      <DoctorOnboardingSection />

      {/* 8. Clinician FAQs */}
      <DoctorFaqSection />
    </main>
  );
}
