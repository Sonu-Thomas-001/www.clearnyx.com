import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import { FAQS } from "@/content/faqs";
import {
  ArrowRight,
  Stethoscope,
  Cpu,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Dentists & Orthodontists | Clear Aligner Practice Collaboration",
  description:
    "Explore how CLEARNYX supports dentists, orthodontists, and dental clinics in India with precision clear aligners, collaborative 3D digital planning, and practice onboarding.",
  alternates: {
    canonical: "https://www.clearnyx.com/for-dentists",
  },
};

export default function ForDentistsPage() {
  const breadcrumbs = [{ label: "For Dentists", href: "/for-dentists" }];
  const dentistFaqs = FAQS.filter(
    (f) => f.category === "Clinical" || f.category === "Partnership" || f.category === "Workflow"
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "For Dentists", url: "/for-dentists" },
        ]}
      />

      <PageHeader
        eyebrow="DOCTOR PORTAL & PARTNERSHIP"
        title="Your Clear Aligner Solutions Partner."
        description="Explore how CLEARNYX aims to support dentists and orthodontists with customized clear aligner solutions, digital treatment planning, and a collaborative clinical workflow."
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <Button
              href="#partner-form"
              variant="cyan"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Become a Partner
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
            >
              Contact Our Team
            </Button>
          </>
        }
      />

      {/* Why Partner with CLEARNYX */}
      <section className="py-16 md:py-24 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="cyan">WHY CHOOSE CLEARNYX</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Engineered Exclusively for Dental Practice Autonomy.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              We understand the clinical and operational demands of modern dental practices. Here is why clinicians across India choose CLEARNYX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Pure Doctor-Led Model
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                We never bypass the clinic. Every aligner prescription begins and ends under your direct clinical oversight, preserving the vital doctor-patient relationship.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Specialized 3D Planning
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Our orthodontic digital planning team works collaboratively with you, refining tooth staging, velocities, and attachment configurations to your clinical preference.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Material Flexibility
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Select between high-clarity Standard PETG aligners and advanced Multi-Layer composite systems based on your clinical assessment of case complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Submission Workflow */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="ice">CASE SUBMISSION</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Straightforward Case Submission for Your Practice.
              </h2>
              <p className="text-base text-slate-secondary leading-relaxed">
                Submitting a clear aligner case to CLEARNYX is designed to fit smoothly into your daily clinic routine:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Capture Digital Scans or Impressions
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Export STL/OBJ files from your intraoral scanner or take accurate PVS impressions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Upload Clinical Prescription
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Submit diagnostic photos, radiographs, and your specific movement objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Review & Approve 3D Setup
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Inspect the interactive 3D digital simulation, request changes, or approve manufacturing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">
                      Receive Complete Patient Kit
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Custom-boxed, stage-labeled aligners delivered directly to your practice door.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-surface-border shadow-elevated p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/editorial/clearnyx-clinical-consultation.jpg"
                    alt="Dental professional discussing 3D treatment plan"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-muted">
                  <span className="font-semibold text-navy-900">Digital Impression Upload</span>
                  <span className="text-cyan-brand font-bold">48–72h Staging Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Enquiry Form Section */}
      <section id="partner-form" className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <Badge variant="cyan">CLINIC ONBOARDING</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Begin Your Clear Aligner Partnership
            </h2>
            <p className="text-base text-slate-secondary max-w-xl mx-auto">
              Complete the registration form below. A dedicated clinical relationship manager will contact your practice to activate your case submission portal.
            </p>
          </div>

          <PartnerEnquiryForm />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="ice">CLINICAL FAQS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Frequently Asked Practice Questions
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-card">
            <Accordion items={dentistFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

