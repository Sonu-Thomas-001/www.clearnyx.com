import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbSchema, FAQPageSchema } from "@/components/seo/JsonLd";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/content/faqs";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import {
  CheckCircle2,
  Stethoscope,
  Building2,
  Users,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with CLEARNYX | Premier Clear Aligner Provider in India",
  description:
    "Join the CLEARNYX dental clinic network. Onboard your practice with India's premier B2B clear aligner provider for digital treatment planning, doctor autonomy, and dedicated clinical support.",
  alternates: {
    canonical: "https://www.clearnyx.com/become-a-partner",
  },
  keywords: [
    "partner with clear aligner provider",
    "b2b clear aligner lab",
    "clear aligner partnership India",
    "aligner supplier for dental clinics",
    "orthodontic aligner onboarding",
  ],
};

export default function BecomeAPartnerPage() {
  const breadcrumbs = [{ label: "Become a Partner", href: "/become-a-partner" }];
  const partnerFaqs = FAQS.filter(
    (f) => f.category === "Partnership" || f.category === "General"
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Become a Partner", url: "/become-a-partner" },
        ]}
      />
      <FAQPageSchema customFaqs={partnerFaqs} />

      <PageHeader
        eyebrow="PRACTICE COLLABORATION"
        title="Build the Future of Smiles with CLEARNYX."
        description="Connect with CLEARNYX to explore professional collaboration, digital treatment planning, and customized clear aligner solutions for your dental clinic or orthodontic practice."
        breadcrumbs={breadcrumbs}
      />

      {/* Who Can Partner Section */}
      <section className="py-16 md:py-24 bg-white border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} className="max-w-3xl mb-16">
            <Badge variant="cyan">ELIGIBLE PARTNERS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Who We Collaborate With.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              CLEARNYX operates strictly as a B2B orthodontic partner across India. We welcome applications from registered dental professionals and institutions:
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-surface-soft border border-surface-border space-y-3 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900">
                Orthodontic Specialists
              </h3>
              <p className="text-xs text-slate-secondary leading-relaxed">
                MDS Orthodontists seeking precision digital staging, multi-layer polymer choices, and reliable domestic manufacturing.
              </p>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-surface-soft border border-surface-border space-y-3 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900">
                Practicing General Dentists
              </h3>
              <p className="text-xs text-slate-secondary leading-relaxed">
                General dental practitioners wanting to provide mild to moderate aligner treatments chairside with complete planning support.
              </p>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-surface-soft border border-surface-border space-y-3 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900">
                Dental Clinic Groups
              </h3>
              <p className="text-xs text-slate-secondary leading-relaxed">
                Multi-chair dental practices and regional healthcare networks requiring volume economics and unified case tracking.
              </p>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="p-6 rounded-2xl bg-surface-soft border border-surface-border space-y-3 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-navy-900">
                Institutional Hospitals
              </h3>
              <p className="text-xs text-slate-secondary leading-relaxed">
                Hospital dental wings and academic dental departments evaluating digital clear aligner systems.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* The CLEARNYX Advantage for Practices */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="left" distance={30} className="lg:col-span-6 space-y-6">
              <Badge variant="ice">PARTNERSHIP VALUE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Designed to Accelerate Your Practice Growth.
              </h2>
              <p className="text-base text-slate-secondary leading-relaxed">
                Partnering with CLEARNYX connects your practice to high-precision orthodontic manufacturing, streamlined digital planning, and personalized clinic onboarding.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">
                      Zero Heavy Upfront Licensing Fees
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Pay per case with transparent fee structures that keep your clinic margins healthy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">
                      Full Open Scanner Compatibility
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Works directly with your existing intraoral scanner: iTero, 3Shape, Medit, Carestream, and Primescan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-xs hover:border-cyan-brand/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm">
                      Dedicated Clinical Onboarding
                    </h4>
                    <p className="text-xs text-slate-secondary mt-0.5">
                      Practice starter kits, clinical record checklists, and direct technical case review sessions.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={30} className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-surface-border shadow-elevated p-3 group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/editorial/clearnyx-dental-clinic.jpg"
                    alt="CLEARNYX Partner Clinic Environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-muted">
                  <span className="font-bold text-navy-900">CLEARNYX Partner Network</span>
                  <span className="text-cyan-brand font-semibold">India Domestic Delivery</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Conversion Form Section */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} className="text-center mb-12 space-y-3">
            <Badge variant="cyan">PARTNER REGISTRATION</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Submit Your Practice Details
            </h2>
            <p className="text-base text-slate-secondary max-w-xl mx-auto">
              Please provide your professional credentials and practice information. Our partnership team will contact you within 24–48 business hours.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={28} delay={0.15}>
            <PartnerEnquiryForm />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={24} className="text-center mb-16">
            <Badge variant="ice">FAQS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Partnership Questions & Answers
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={28} delay={0.15}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-card">
              <Accordion items={partnerFaqs} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
