import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Multi-Layer Clear Aligners | Advanced Orthodontic Polymer Matrix",
  description:
    "Discover CLEARNYX Multi-Layer Clear Aligners. Engineered with multi-layer material construction offering strength, flexibility, and sustained biomechanical control for complex orthodontic treatment requirements.",
  alternates: {
    canonical: "https://www.clearnyx.com/solutions/multi-layer-aligners",
  },
};

const MULTILAYER_FAQS = [
  {
    question: "What is the construction of CLEARNYX Multi-Layer Aligners?",
    answer:
      "As described in official CLEARNYX product documentation, Multi-Layer Aligners utilize an advanced multi-layer polymer composite structure. This architecture combines outer protective shells with a flexible elastomeric core to provide strength, flexibility, and sustained force control over extended wear cycles.",
  },
  {
    question: "How does the multi-layer material assist in complex cases?",
    answer:
      "The combination of flexible and resilient polymer layers allows the aligner to deliver continuous, gentle orthodontic pressure with reduced stress relaxation. This is advantageous for movements requiring steady force transmission—such as root torque, bodily translation, and premolar de-rotation.",
  },
  {
    question: "What is the wear duration for Multi-Layer Aligners?",
    answer:
      "General product guidelines suggest 22 to 24 hours of daily wear, with tray advancement every 10 to 14 days. As with all orthodontic appliances, the treating dental professional must establish the exact wear protocol based on the approved treatment plan and clinical progress.",
  },
  {
    question: "Can Multi-Layer Aligners be used for extraction space closure?",
    answer:
      "Yes, when properly planned with optimized composite attachments and anchorage staging, Multi-Layer Aligners can be evaluated by the orthodontist for moderate extraction space closure and comprehensive arch realignment.",
  },
];

export default function MultiLayerAlignersPage() {
  const breadcrumbs = [
    { label: "Our Solutions", href: "/solutions" },
    { label: "Multi-Layer Clear Aligners", href: "/solutions/multi-layer-aligners" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Solutions", url: "/solutions" },
          { name: "Multi-Layer Clear Aligners", url: "/solutions/multi-layer-aligners" },
        ]}
      />

      <PageHeader
        eyebrow="CLEARNYX MULTI-LAYER"
        title="Engineered Layers. Thoughtful Control."
        description="Discover the CLEARNYX Multi-Layer Clear Aligner solution, developed around a multi-layer material approach for different orthodontic treatment requirements."
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Visual & Product Introduction */}
      <section className="py-16 md:py-24 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-elevated p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/products/clearnyx-multilayer-aligner.webp"
                    alt="CLEARNYX Multi-Layer Clear Aligner showing composite polymer structure"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 bg-white flex items-center justify-between text-xs">
                  <span className="font-bold text-navy-900">Multi-Layer Polymer Matrix</span>
                  <span className="text-cyan-brand font-semibold">Strength, Flexibility & Control</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">MATERIAL: MULTI-LAYER COMPOSITE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Designed for Biomechanical Resilience & Sustained Force.
              </h2>
              <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
                Described in our technical documentation as offering strength, flexibility, and control, CLEARNYX Multi-Layer Clear Aligners are engineered to address moderate to complex orthodontic tooth movements requiring sustained elastic recovery.
              </p>
              <p className="text-base text-slate-secondary leading-relaxed">
                By combining a flexible core with durable outer layers, this solution resists micro-cracking and deformation during repetitive insertion and removal, delivering gentle continuous pressure across the entire 10–14 day cycle.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/become-a-partner"
                  variant="cyan"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Prescribe Multi-Layer
                </Button>
                <Button
                  href="/solutions/standard-aligners"
                  variant="outline"
                  size="md"
                >
                  View Standard (PETG)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Brochure Attributes: Strength, Flexibility, Control */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="ice">MATERIAL CHARACTERISTICS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Strength, Flexibility, and Control.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              Described in the CLEARNYX brochure as core material performance attributes for complex case management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Strength
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Enhanced tear and crack resistance that withstands masticatory forces and regular daily insertion and removal cycles without structural deformation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Flexibility
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                High elastomeric recovery enables smoother seating over severe undercuts and prominent composite attachments with reduced patient pressure peaks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Control
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Consistent low-continuous force transmission supports complex movements including premolar de-rotation, root uprighting, and comprehensive arch leveling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intended Complex Case Scope */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">COMPLEX CLINICAL SCOPE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Recommended Indications for Multi-Layer
              </h2>
              <p className="text-base text-slate-secondary leading-relaxed">
                Multi-Layer Clear Aligners are indicated for cases where extended elastic force and structural endurance are required, subject to dental professional evaluation:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Moderate to complex crowding (> 4mm) and severe incisal rotations",
                  "Deep bite and open bite orthodontic corrections",
                  "Premolar and canine bodily movements / root uprighting",
                  "Arch expansion and coordinated transverse development",
                  "Patients with a history of aligner breakage with single-layer polymers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-navy-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-2xl bg-navy-900 text-white space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Biomechanical Staging & Attachment Integration
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                In complex cases, our orthodontic digital planning team works with you to incorporate optimized beveled or rectangular composite attachments. The high elasticity of the Multi-Layer polymer conforms intimately around attachment surfaces to prevent slippage.
              </p>
              <div className="p-4 rounded-xl bg-navy-dark border border-navy-800 text-xs text-slate-muted leading-relaxed">
                * Note: Treatment suitability and staging feasibility must be verified by the treating dental professional based on clinical evaluation and patient oral health status.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="ice">FAQS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Multi-Layer Aligners: Questions & Answers
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-card">
            <Accordion items={MULTILAYER_FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Consult on a Multi-Layer Case.
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            Submit your diagnostic records to review a tailored 3D digital simulation prepared for Multi-Layer aligner mechanics.
          </p>
          <div className="pt-2">
            <Button
              href="/become-a-partner"
              variant="cyan"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

