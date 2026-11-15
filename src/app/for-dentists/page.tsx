import React from "react";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { DoctorHero } from "@/components/dentists/DoctorHero";
import { DoctorBentoGrid } from "@/components/dentists/DoctorBentoGrid";
import { ClinicianWorkflowConsole } from "@/components/dentists/ClinicianWorkflowConsole";
import { ScannerEcosystem } from "@/components/dentists/ScannerEcosystem";
import { PracticeEconomicsCalculator } from "@/components/dentists/PracticeEconomicsCalculator";
import { ClinicianComparisonTable } from "@/components/dentists/ClinicianComparisonTable";
import { DoctorTestimonialsSection } from "@/components/dentists/DoctorTestimonialsSection";
import { ClinicOnboardingSection } from "@/components/dentists/ClinicOnboardingSection";
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

      {/* 1. Hero Section: Precision Positioning + Interactive Staging Simulator */}
      <DoctorHero />

      {/* 2. Bento Grid: 100% Doctor Autonomy, Biomechanics Guardrails, Dual Polymers, MDS Review Desk */}
      <DoctorBentoGrid />

      {/* 3. Interactive Workflow Console: 4-Stage Frictionless Digital Pipeline */}
      <ClinicianWorkflowConsole />

      {/* 4. Scanner Ecosystem: Open-Architecture Compatibility (iTero, TRIOS, Medit, Primescan, PVS) */}
      <ScannerEcosystem />

      {/* 5. Practice Economics Calculator: Interactive Case Profit & Chairside Margin Expansion */}
      <PracticeEconomicsCalculator />

      {/* 6. Clinical Comparison Matrix: CLEARNYX vs Legacy Giants vs Mail-Order DTC */}
      <ClinicianComparisonTable />

      {/* 7. Practice Testimonials: Real Clinicians & Orthodontists Across India */}
      <DoctorTestimonialsSection />

      {/* 8. Clinic Onboarding & Application Form: Starter Welcome Bundle + Partner Form */}
      <ClinicOnboardingSection />

      {/* 9. Categorized Clinician FAQs: Workflow, Biomechanics, Economics */}
      <DoctorFaqSection />
    </main>
  );
}
