import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { WORKFLOW_STAGES, WEAR_PROTOCOL_NOTICE } from "@/content/workflow";
import { SequentialStagingParallax } from "@/components/clearnyx/SequentialStagingParallax";
import {
  ScanLine,
  MonitorSmartphone,
  CheckCircle2,
  Layers,
  PackageCheck,
  Smile,
  ArrowRight,
  ShieldCheck,
  Clock,
  CalendarCheck,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clear Aligner Workflow for Dental Clinics | CLEARNYX Aligner Provider",
  description:
    "Explore the CLEARNYX 6-stage clear aligner workflow for dental clinics: Digital intraoral scanning, 48-72h CAD treatment staging, doctor review, precision thermoforming, and clinic delivery.",
  alternates: {
    canonical: "https://www.clearnyx.com/how-it-works",
  },
  keywords: [
    "clear aligner workflow",
    "clear aligner provider process",
    "orthodontic treatment staging",
    "dental aligner turnaround",
    "b2b aligner workflow",
  ],
};

const STAGE_ICONS = [
  ScanLine,
  MonitorSmartphone,
  CheckCircle2,
  Layers,
  PackageCheck,
  Smile,
];

export default function HowItWorksPage() {
  const breadcrumbs = [{ label: "How It Works", href: "/how-it-works" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "How It Works", url: "/how-it-works" },
        ]}
      />

      <PageHeader
        eyebrow="END-TO-END CLINICAL PROCESS"
        title="From Treatment Planning to Aligner Delivery."
        description="A structured workflow designed to support dental professionals through the clear aligner process with clinical precision, predictable timelines, and continuous support."
        breadcrumbs={breadcrumbs}
      />

      {/* Overview Photographic Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] sm:aspect-[2.4/1] rounded-2xl overflow-hidden border border-surface-border shadow-card bg-surface-soft">
            <Image
              src="/images/workflow/clearnyx-aligner-workflow.jpg"
              alt="CLEARNYX Clear Aligner Workflow and Clinical Case Management"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/70 via-navy-900/30 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-lg">
              <span className="text-xs font-bold text-cyan-brand uppercase tracking-wider">
                Precision Process
              </span>
              <p className="text-base sm:text-lg font-medium text-white mt-1">
                Collaborative orthodontic engineering at each step of your patient&apos;s treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sequential Orthodontic Staging Parallax */}
      <SequentialStagingParallax />

      {/* Detailed 6-Stage Timeline */}
      <section className="py-16 md:py-24 bg-surface-soft border-y border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="cyan">6 CLINICAL STAGES</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              The Step-by-Step Clear Aligner Journey.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              Sourced from official CLEARNYX product documentation, our structured methodology provides transparency for the clinician and certainty for the patient.
            </p>
          </div>

          <div className="space-y-8">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = STAGE_ICONS[idx] || Smile;
              return (
                <div
                  key={stage.step}
                  className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle hover:border-cyan-300 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Stage Badge & Number */}
                    <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-cyan-brand uppercase tracking-wider">
                          {stage.stage}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 mt-0.5">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-slate-secondary mt-1 font-medium">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Stage Details */}
                    <div className="lg:col-span-6 space-y-3">
                      <p className="text-sm sm:text-base text-slate-secondary leading-relaxed">
                        {stage.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {stage.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 text-xs text-navy-900"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand shrink-0 mt-1.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stage Deliverable Card */}
                    <div className="lg:col-span-3 bg-surface-soft p-4 rounded-xl border border-surface-border">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-muted mb-1 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-cyan-brand" />
                        Stage Output:
                      </div>
                      <div className="text-xs font-semibold text-navy-900 leading-snug">
                        {stage.deliverables}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wearing and Changing Aligners Protocol */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="ice">CLINICAL GUIDELINES</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Wearing & Changing Clear Aligners.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              Documented appliance wear protocols designed to facilitate biological bone remodeling and dental stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">
                22–24 Hours Daily Wear
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                As detailed in the CLEARNYX brochure, aligners should be worn consistently for 22 to 24 hours per day, removed only during meals, hot beverages, and daily oral hygiene routines.
              </p>
              <div className="text-xs text-slate-muted border-t border-surface-border pt-3">
                Maintains continuous light orthodontic pressure required for steady osteoclast/osteoblast activity.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">
                10–14 Day Stage Progression
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Patients typically transition to the subsequent sequential aligner every 10 to 14 days, verifying proper seating and tooth engagement before advancing.
              </p>
              <div className="text-xs text-slate-muted border-t border-surface-border pt-3">
                Provides sufficient periodontal stabilization time between programmed tooth displacement increments.
              </div>
            </div>
          </div>

          {/* Qualified Mandatory Medical Notice */}
          <div className="mt-8 p-6 rounded-2xl bg-ice-soft/40 border border-cyan-200/80">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-navy-900">
                  Essential Professional Disclaimer:
                </h4>
                <p className="text-xs sm:text-sm text-slate-secondary leading-relaxed">
                  {WEAR_PROTOCOL_NOTICE.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface-soft text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Start a Professional Conversation.
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            Discuss how the CLEARNYX 6-stage workflow can be integrated into your dental clinic or practice management software.
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
              href="/for-dentists"
              variant="secondary"
              size="lg"
            >
              Doctor FAQs & Portal Info
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

