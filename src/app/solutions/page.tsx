import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { SOLUTIONS, COMPARISON_CRITERIA } from "@/content/solutions";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Clear Aligner Solutions | Standard & Multi-Layer Orthodontic Systems",
  description:
    "Explore CLEARNYX clear aligner solutions designed for dental professionals in India. Compare Standard PETG aligners and Multi-Layer composite systems for mild, moderate, and complex malocclusions.",
  alternates: {
    canonical: "https://www.clearnyx.com/solutions",
  },
};

export default function SolutionsPage() {
  const breadcrumbs = [{ label: "Our Solutions", href: "/solutions" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Our Solutions", url: "/solutions" },
        ]}
      />

      <PageHeader
        eyebrow="PRODUCT PORTFOLIO"
        title="Clear Aligner Solutions. Thoughtfully Designed."
        description="Explore CLEARNYX clear aligner solutions designed to support dental professionals across different orthodontic treatment requirements."
        breadcrumbs={breadcrumbs}
      />

      {/* Solutions Detailed Presentation */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SOLUTIONS.map((solution, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={solution.id}
                id={solution.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-card p-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 bg-white flex items-center justify-between text-xs">
                      <span className="font-bold text-navy-900">{solution.name}</span>
                      <span className="text-cyan-brand font-semibold">{solution.material}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="cyan">{solution.scope.toUpperCase()}</Badge>
                    <span className="text-xs text-slate-muted font-medium">
                      Prescription Medical Device
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                    {solution.name}
                  </h2>

                  <p className="text-base text-slate-secondary leading-relaxed">
                    {solution.materialDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Clinical Indication Scope:
                    </h4>
                    <p className="text-sm text-slate-secondary leading-relaxed bg-surface-soft p-3.5 rounded-lg border border-surface-border">
                      {solution.clinicalIndication}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Key Appliance Features:
                    </h4>
                    <div className="space-y-2">
                      {solution.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-secondary">
                          <Check className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button
                      href={`/solutions/${solution.slug}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Dedicated {solution.name} Page
                    </Button>
                    <Button
                      href="/become-a-partner"
                      variant="secondary"
                      size="md"
                    >
                      Inquire for Clinic
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-28 bg-surface-soft border-y border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <Badge variant="cyan">TECHNICAL COMPARISON</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Standard vs. Multi-Layer Comparison
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              A side-by-side technical overview of material properties and clinical indications sourced directly from CLEARNYX product documentation.
            </p>
          </div>

          {/* Clean Responsive Table */}
          <div className="overflow-x-auto rounded-2xl border border-surface-border bg-white shadow-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-border bg-surface-soft">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-navy-900 w-1/3">
                    Attribute
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-cyan-brand w-1/3">
                    Standard Aligners
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-navy-900 w-1/3">
                    Multi-Layer Aligners
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border text-sm">
                {COMPARISON_CRITERIA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-soft/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy-900">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-secondary">
                      {row.standard}
                    </td>
                    <td className="py-4 px-6 text-navy-900 font-medium">
                      {row.multiLayer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-white border border-surface-border text-xs text-slate-muted flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
            <span>
              <strong>Clinical Assessment Notice:</strong> All comparative material characteristics describe polymer engineering attributes documented in CLEARNYX specifications. Final material suitability and tooth movement feasibility must be evaluated by the treating clinician.
            </span>
          </div>
        </div>
      </section>

      {/* Product Selection Guide for Clinicians */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="ice">PRACTICE GUIDELINES</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              How to Select the Right Solution for Your Case.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              When reviewing your patient&apos;s malocclusion, consider the following clinical guidelines when prescribing CLEARNYX aligners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                Indication 01
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900">
                When to Choose Standard Aligners (PETG)
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Recommended when addressing mild to moderate anterior crowding, space consolidation, or minor tooth rotations where high clarity and rigid initial force delivery are desired.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-navy-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Post-orthodontic relapse cases
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Anterior spacing and diastemas (&lt; 3mm)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Pre-restorative alignment prior to veneers or crowns
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-navy-900 text-white space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                Indication 02
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                When to Choose Multi-Layer Aligners
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Recommended when treating complex malocclusions requiring significant tooth movement staging, root torque, severe premolar/canine rotation, or continuous gentle force over extended intervals.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Moderate to complex crowding (&gt; 4mm)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Bodily tooth translation and root uprighting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-brand" /> Patients requiring enhanced crack resistance and comfort
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-soft text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Ready to Integrate CLEARNYX Solutions?
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            Connect with our clinical planning team to discuss case suitability, digital portal setup, and initial prescription workflows.
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
              href="/technology"
              variant="secondary"
              size="lg"
            >
              Explore Digital Technology
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

