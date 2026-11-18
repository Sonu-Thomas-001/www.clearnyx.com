import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ArrowRight, Cpu, Layers, Scan, FileCheck } from "lucide-react";
import { TechPolymerParallax } from "@/components/clearnyx/TechPolymerParallax";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Clear Aligner Polymer Technology & 3D Staging | CLEARNYX Aligner Provider",
  description:
    "Explore CLEARNYX clear aligner technology: High-clarity PETG and engineered Multi-Layer polymers, 3D sub-millimeter biomechanical staging, and open intraoral scanner integration.",
  alternates: {
    canonical: "https://www.clearnyx.com/technology",
  },
  keywords: [
    "clear aligner technology",
    "clear aligner provider India",
    "multi-layer aligner material",
    "orthodontic 3D treatment planning",
    "PETG clear aligner manufacturing",
    "dual polymer aligners",
  ],
};

export default function TechnologyPage() {
  const breadcrumbs = [{ label: "Technology", href: "/technology" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Technology", url: "/technology" },
        ]}
      />

      <PageHeader
        eyebrow="DIGITAL ORTHODONTIC SYSTEMS"
        title="Technology with Precision at Its Core."
        description="Explore the digital planning approach behind customized clear aligner solutions designed for practicing dentists and orthodontists."
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Visual Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={28}>
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] rounded-2xl overflow-hidden border border-surface-border shadow-card bg-navy-dark group">
              <Image
                src="/images/technology/clearnyx-digital-treatment-planning.jpg"
                alt="CLEARNYX Orthodontic 3D Digital Simulation and CAD Planning"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  Precision Digital Workflows
                </span>
                <p className="text-base sm:text-lg font-medium text-slate-100 mt-1">
                  Translating intraoral optical scans into calibrated sequential tooth movement simulations.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 1: Digital Treatment Planning */}
      <section className="py-16 md:py-24 bg-surface-soft border-y border-surface-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" distance={30} className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">DIGITAL TREATMENT PLANNING</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Simulating Tooth Repositioning with Biomechanical Control.
              </h2>
              <p className="text-base text-slate-secondary leading-relaxed">
                Clear aligner success hinges on calculating realistic force vectors. Our digital planning technicians translate raw intraoral scan files into individual crowns and roots, staging each tooth movement within biologically safe velocities (typically 0.20mm to 0.25mm of translation and under 2° of rotation per stage).
              </p>
              <p className="text-base text-slate-secondary leading-relaxed">
                By modeling attachment geometries, anchorage conservation, and collision detection, the simulation provides an actionable digital roadmap for your clinical evaluation.
              </p>
            </ScrollReveal>

            <StaggerContainer className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                <Scan className="w-8 h-8 text-cyan-brand mb-3" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Optical Scan Ingestion
                </h4>
                <p className="text-xs text-slate-secondary leading-relaxed">
                  Direct import of open standard STL and OBJ files from all leading intraoral scanner platforms.
                </p>
              </StaggerItem>

              <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                <Cpu className="w-8 h-8 text-cyan-brand mb-3" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Biomechanical Staging
                </h4>
                <p className="text-xs text-slate-secondary leading-relaxed">
                  Sequenced movements planned to prevent unwanted reciprocal reactions in anchor teeth.
                </p>
              </StaggerItem>

              <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                <Layers className="w-8 h-8 text-cyan-brand mb-3" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Attachment Optimization
                </h4>
                <p className="text-xs text-slate-secondary leading-relaxed">
                  Strategically located composite attachments placed for rotational grip and root uprighting.
                </p>
              </StaggerItem>

              <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                <FileCheck className="w-8 h-8 text-cyan-brand mb-3" />
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  IPR Milestone Mapping
                </h4>
                <p className="text-xs text-slate-secondary leading-relaxed">
                  Clearly mapped interproximal reduction schedules staged when contacts become accessible.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 2: 3D Visualization & Customized Design */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} className="max-w-3xl mb-16">
            <Badge variant="ice">VISUALIZATION & CUSTOMIZATION</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Interactive 3D Setup & Anatomical Trimming.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              Clinicians review cases through an interactive 3D viewer that visualizes occlusal relationships, contact points, and the staging timeline step-by-step.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" distance={28} delay={0.1}>
              <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4 hover:shadow-card transition-shadow">
                <h3 className="text-2xl font-bold text-navy-900">
                  Interactive 3D Visualization
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  Dentists can rotate, pan, and inspect tooth positions from buccal, lingual, and occlusal perspectives. Every stage can be isolated to evaluate planned tooth trajectories prior to approving production.
                </p>
                <div className="p-4 rounded-xl bg-white border border-surface-border text-xs text-slate-secondary">
                  <span className="font-bold text-navy-900">Full Doctor Discretion:</span> Request staging modifications, adjust attachment positions, or alter IPR values directly with our planning team.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={28} delay={0.25}>
              <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4 hover:shadow-card transition-shadow">
                <h3 className="text-2xl font-bold text-navy-900">
                  Scalloped Anatomical Fit
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  Appliance margins are carefully trimmed along the natural gingival contours rather than using blunt straight cuts. This anatomical margin preserves periodontal health, minimizes gum irritation, and optimizes retention.
                </p>
                <div className="p-4 rounded-xl bg-white border border-surface-border text-xs text-slate-secondary">
                  <span className="font-bold text-navy-900">Patient Comfort:</span> Smooth hand-finished edges ensure patient comfort and enhance compliance across the 22–24 hour daily wear schedule.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Exploded Tri-Laminate Polymer Parallax */}
      <TechPolymerParallax />

      {/* Section 3: Materials: PETG & Multi-Layer Composite */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} className="max-w-3xl mb-16">
            <Badge variant="cyan">MATERIAL APPROACH</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Polymer Science Built for Orthodontics.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              We utilize certified medical polymers documented in CLEARNYX specifications, selecting the material system based on your patient&apos;s treatment objectives.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" distance={28} delay={0.1}>
              <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle hover:shadow-card transition-shadow space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  System 01
                </span>
                <h3 className="text-2xl font-bold text-navy-900">
                  PETG Polymer System
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  As detailed in our product brochure, Standard Aligners are manufactured from PETG, delivering optical clarity, dimensional stability, and efficient force delivery for mild to moderate alignment requirements.
                </p>
                <div className="pt-2">
                  <Link
                    href="/how-it-works"
                    className="text-xs font-bold text-cyan-brand hover:text-cyan-electric flex items-center gap-1"
                  >
                    Explore Clinical Journey <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={28} delay={0.25}>
              <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle hover:shadow-card transition-shadow space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  System 02
                </span>
                <h3 className="text-2xl font-bold text-navy-900">
                  Multi-Layer Polymer Matrix
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  As described in brand documentation, Multi-Layer Aligners feature a multi-layer composite construction engineered to provide strength, flexibility, and sustained biomechanical control for complex movements.
                </p>
                <div className="pt-2">
                  <Link
                    href="/for-dentists"
                    className="text-xs font-bold text-cyan-brand hover:text-cyan-electric flex items-center gap-1"
                  >
                    Partner With CLEARNYX <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center overflow-hidden">
        <ScrollReveal direction="up" distance={24} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Partner With CLEARNYX
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            See how our digital planning workflows and polymer options can support your dental practice&apos;s clear aligner cases.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/become-a-partner"
              variant="cyan"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Become a Partner
            </Button>
            <Button
              href="/how-it-works"
              variant="outline"
              size="lg"
            >
              View 6-Stage Workflow
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
