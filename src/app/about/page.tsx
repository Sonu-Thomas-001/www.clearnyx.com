import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ArrowRight, Crosshair, Sparkles, Shield, HeartHandshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rethinking the Clear Aligner Experience",
  description:
    "Learn about CLEARNYX, a premium B2B clear aligner solutions brand built around precision, innovation, and professional collaboration with dentists and orthodontists across India.",
  alternates: {
    canonical: "https://www.clearnyx.com/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About CLEARNYX", href: "/about" }];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About CLEARNYX", url: "/about" },
        ]}
      />

      {/* Page Header */}
      <PageHeader
        eyebrow="ABOUT CLEARNYX"
        title="Rethinking the Clear Aligner Experience."
        description="A clear aligner solutions brand built around precision, innovation and professional collaboration with dental clinicians."
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Photographic Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] sm:aspect-[2.5/1] rounded-2xl overflow-hidden border border-surface-border shadow-card">
            <Image
              src="/images/editorial/clearnyx-clinical-consultation.jpg"
              alt="CLEARNYX Clinical Consultation and Orthodontic Collaboration"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-navy-900/20 to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-md text-white">
              <span className="text-xs font-bold text-cyan-electric uppercase tracking-wider">
                Our Clinical Foundation
              </span>
              <p className="text-sm sm:text-base text-slate-100 font-medium mt-1">
                Combining high-precision digital simulations with certified orthodontic manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who We Are */}
      <section className="py-16 md:py-24 bg-surface-soft border-y border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="cyan">WHO WE ARE</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Empowering Dental Clinicians to Deliver Confident Smiles.
              </h2>
              <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
                CLEARNYX is an orthodontic technology and clear aligner solutions company operating with a strict B2B focus in India. We do not provide direct-to-consumer teeth straightening kits. Instead, we serve licensed dentists, orthodontists, and dental institutions as an advanced manufacturing and digital planning partner.
              </p>
              <p className="text-base text-slate-secondary leading-relaxed">
                We believe that clear aligner therapy is an intricate medical procedure requiring clinical diagnosis, radiographic assessment, precise attachments, and ongoing monitoring. Our role is to provide clinicians with high-performance appliance systems and responsive digital support to make every treatment outcome predictable.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
                  <span className="text-3xl font-extrabold text-cyan-brand">100%</span>
                  <div className="text-sm font-bold text-navy-900 mt-2">Doctor Led</div>
                  <p className="text-xs text-slate-secondary mt-1">
                    All treatments require registered dental clinician diagnosis and prescription sign-off.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
                  <span className="text-3xl font-extrabold text-cyan-brand">0.01mm</span>
                  <div className="text-sm font-bold text-navy-900 mt-2">Digital Calibration</div>
                  <p className="text-xs text-slate-secondary mt-1">
                    Sub-millimeter staging calculated according to periodontal and anatomical limits.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
                  <span className="text-3xl font-extrabold text-cyan-brand">2</span>
                  <div className="text-sm font-bold text-navy-900 mt-2">Polymer Systems</div>
                  <p className="text-xs text-slate-secondary mt-1">
                    Tailored options: Standard PETG and advanced Multi-Layer composite systems.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle">
                  <span className="text-3xl font-extrabold text-cyan-brand">B2B</span>
                  <div className="text-sm font-bold text-navy-900 mt-2">Clinic Collaboration</div>
                  <p className="text-xs text-slate-secondary mt-1">
                    Complete practice onboarding, transparent pricing, and rapid local fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Approach */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="ice">OUR METHODOLOGY</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              The Three Pillars of Our Clinical Approach.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
              We eliminate friction from aligner integration through three core commitments to practicing dentists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center mb-6">
                  <Crosshair className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  Approach 01
                </span>
                <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3">
                  Precision-Driven Planning
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  Every 3D digital simulation is built with anatomical respect for tooth root morphology, cortical bone boundaries, and biologically realistic velocities.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  Approach 02
                </span>
                <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3">
                  Quality-Focused Materials
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  We use certified medical polymers: high-clarity PETG for straightforward anterior moves, and multi-layer composites offering strength and elastic recovery for complex malocclusions.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-soft border border-surface-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                  Approach 03
                </span>
                <h3 className="text-xl font-bold text-navy-900 mt-2 mb-3">
                  Professional Collaboration
                </h3>
                <p className="text-sm text-slate-secondary leading-relaxed">
                  We provide continuous clinical liaison support, open communication on complex staging, and prompt door-to-practice delivery across Indian regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Vision */}
      <section className="py-24 md:py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="cyan" size="md">
            OUR VISION
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            &ldquo;A future where technology and professional expertise work together to support confident smiles.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto pt-4 leading-relaxed">
            * Note: This statement encapsulates the aspirational vision of CLEARNYX as an orthodontic technology provider and does not constitute an empirical claim of clinical outcome or medical guarantee.
          </p>
        </div>
      </section>

      {/* Section: Brand Values */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge variant="cyan">CORE VALUES</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Values That Guide Our Clinical Partnership.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Precision",
                desc: "Sub-millimeter calibration and uncompromising dimensional accuracy in thermoforming.",
              },
              {
                title: "Innovation",
                desc: "Continuous material science refinement and advanced 3D simulation workflows.",
              },
              {
                title: "Trust",
                desc: "Transparent practice pricing, strict data protection, and ethical B2B boundaries.",
              },
              {
                title: "Partnership",
                desc: "Working side-by-side with dental practitioners to support long-term practice growth.",
              },
              {
                title: "Professionalism",
                desc: "Unwavering commitment to clinical safety, doctor autonomy, and scientific integrity.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-soft border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center text-xs font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-navy-900 text-lg mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-secondary leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface-soft text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Discover What We Can Build Together.
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed">
            Join a growing network of forward-thinking dental practices providing precision clear aligner therapy across India.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/become-a-partner"
              variant="cyan"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-semibold"
            >
              Become a Partner
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
