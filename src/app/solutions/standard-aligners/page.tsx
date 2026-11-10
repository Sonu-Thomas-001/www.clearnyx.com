import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ArrowRight, Check, Eye, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Standard Clear Aligners | PETG Orthodontic Solutions",
  description:
    "Explore CLEARNYX Standard Clear Aligners crafted from PETG polymer for mild to moderate orthodontic alignment requirements. High optical clarity, dimensional integrity, and precision digital staging.",
  alternates: {
    canonical: "https://www.clearnyx.com/solutions/standard-aligners",
  },
};

const STANDARD_FAQS = [
  {
    question: "What material is utilized for CLEARNYX Standard Aligners?",
    answer:
      "CLEARNYX Standard Aligners are fabricated using medical-grade PETG (Polyethylene Terephthalate Glycol-modified) as specified in official product technical sheets. PETG is chosen for its superior optical transparency and rigid dimensional stability during mild to moderate tooth movements.",
  },
  {
    question: "What types of malocclusion are suitable for Standard Aligners?",
    answer:
      "Standard Aligners are designed for mild to moderate alignment needs, including localized anterior crowding (< 4mm), diastema closure (< 3mm), post-orthodontic minor relapses, and pre-restorative anterior alignment, subject to clinical evaluation by the treating dentist.",
  },
  {
    question: "What is the recommended wear schedule for Standard Aligners?",
    answer:
      "The indicative product guideline recommends 22 to 24 hours of daily wear, with stage progression every 10 to 14 days. However, all wear protocols must be determined and monitored by the treating dental professional based on individual case tracking.",
  },
  {
    question: "Are attachments required with Standard PETG aligners?",
    answer:
      "Attachment placement depends on the planned tooth movement. When necessary for retention or rotation, optimized composite attachments are planned during the 3D digital simulation and verified with the clinician.",
  },
];

export default function StandardAlignersPage() {
  const breadcrumbs = [
    { label: "Our Solutions", href: "/solutions" },
    { label: "Standard Clear Aligners", href: "/solutions/standard-aligners" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Solutions", url: "/solutions" },
          { name: "Standard Clear Aligners", url: "/solutions/standard-aligners" },
        ]}
      />

      <PageHeader
        eyebrow="CLEARNYX STANDARD"
        title="Clarity in Design. Precision in Planning."
        description="Explore the CLEARNYX Standard Clear Aligner solution, designed for mild to moderate alignment requirements as described in our product information."
        breadcrumbs={breadcrumbs}
      />

      {/* Product Hero Visual & Overview */}
      <section className="py-16 md:py-24 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-elevated p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/products/clearnyx-standard-aligner.webp"
                    alt="CLEARNYX Standard Clear Aligner manufactured from PETG polymer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 bg-white flex items-center justify-between text-xs">
                  <span className="font-bold text-navy-900">Medical-Grade PETG Polymer</span>
                  <span className="text-cyan-brand font-semibold">Mild to Moderate Scope</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">MATERIAL: PETG</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                High Optical Clarity Meets Predictable Tooth Movement.
              </h2>
              <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
                CLEARNYX Standard Aligners utilize premium PETG polymer sheets known for high optical transparency and rigid dimensional stability. Formulated for everyday aesthetic discretion, this solution provides steady force transmission for straightforward tooth movements.
              </p>
              <p className="text-base text-slate-secondary leading-relaxed">
                Each sequential tray is thermoformed over high-resolution dental models and hand-inspected along the gingival line to ensure accurate seating and anatomical comfort throughout the wear cycle.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href="/become-a-partner"
                  variant="cyan"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Prescribe for Your Practice
                </Button>
                <Button
                  href="/solutions"
                  variant="outline"
                  size="md"
                >
                  Compare with Multi-Layer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material & Engineering Characteristics */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="ice">MATERIAL SPECIFICATION</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Engineered with PETG Polymer.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              Key characteristics of the PETG material specified in CLEARNYX technical product documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                High Optical Transparency
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                PETG polymer offers minimal light refraction, creating an appliance that remains discreet during normal conversational distances.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Dimensional Stability
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Maintains calibrated arch width and tight adaptation to coronal tooth contours, delivering initial corrective forces effectively.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-4">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Precision Edge Finishing
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Smooth gingival margin contours reduce soft-tissue impingement, supporting consistent patient compliance throughout treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intended Clinical Treatment Scope */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">CLINICAL SCOPE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                Recommended Case Indications
              </h2>
              <p className="text-base text-slate-secondary leading-relaxed">
                CLEARNYX Standard Aligners are recommended for addressing mild to moderate orthodontic alignment requirements following comprehensive clinical diagnosis.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Class I minor anterior crowding (< 4mm)",
                  "Diastema and localized anterior spacing (< 3mm)",
                  "Post-orthodontic minor relapse corrections",
                  "Aesthetic incisor alignment and de-rotation",
                  "Pre-restorative alignment prior to prosthetic rehabilitation",
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
                Clinical Staging & Review
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Every Standard Aligner case includes a comprehensive 3D digital setup prepared by specialized orthodontic planners. The treating clinician reviews tooth movement staging, approves IPR milestones, and authorizes production.
              </p>
              <div className="p-4 rounded-xl bg-navy-dark border border-navy-800 text-xs text-slate-muted leading-relaxed">
                * Note: Treatment suitability must always be confirmed by the treating dental professional based on full diagnostic records (scans, photos, and radiographs).
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
              Standard Aligners: Questions & Answers
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-card">
            <Accordion items={STANDARD_FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Explore Standard Aligners for Your Clinic.
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            Register your dental clinic today to access our clinical portal, case submission guidelines, and initial setup workflows.
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
