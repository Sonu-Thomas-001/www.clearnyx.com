import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ForDentistsPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-card p-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/editorial/clearnyx-dental-professional.jpg"
                  alt="CLEARNYX Clinical Collaboration with Dental Professionals in India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="text-xs font-semibold text-navy-900">
                  Dedicated Clinical Account Management
                </div>
                <div className="text-xs text-slate-secondary mt-0.5">
                  Supporting general dental practitioners, orthodontists, and dental chains across India.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyan">PROFESSIONAL COLLABORATION</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              A Partner in Your Orthodontic Practice.
            </h2>
            <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
              Whether you are an established orthodontic specialist seeking dependable manufacturing bandwidth or a practicing dentist expanding aesthetic aligner treatments, CLEARNYX operates as an extension of your operatory.
            </p>

            {/* Core Support Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-soft border border-surface-border">
                <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Collaborative Treatment Planning
                  </h4>
                  <p className="text-xs text-slate-secondary mt-0.5 leading-relaxed">
                    Direct access to specialized orthodontic planning technicians to adjust staging, staging velocity, and attachment geometry.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-soft border border-surface-border">
                <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Transparent Practice Economics
                  </h4>
                  <p className="text-xs text-slate-secondary mt-0.5 leading-relaxed">
                    Predictable tier-free case fees allowing you to deliver clear aligner therapy sustainably within private clinic fee structures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-soft border border-surface-border">
                <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    Practice Growth & Educational Resources
                  </h4>
                  <p className="text-xs text-slate-secondary mt-0.5 leading-relaxed">
                    Diagnostic case submission checklists, patient educational models, and ongoing clinical case review support.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/become-a-partner"
                variant="cyan"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold"
              >
                Partner with CLEARNYX
              </Button>
              <Button
                href="/for-dentists"
                variant="outline"
                size="md"
              >
                Doctor FAQs & Portal Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

