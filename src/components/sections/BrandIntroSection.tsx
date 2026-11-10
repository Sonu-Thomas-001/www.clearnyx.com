import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function BrandIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-surface-border shadow-card p-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-subtle">
                <Image
                  src="/images/technology/clearnyx-digital-treatment-planning.jpg"
                  alt="CLEARNYX Digital Treatment Planning and Orthodontic 3D Visualization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between text-xs text-slate-secondary">
                  <span className="font-medium text-navy-900">Digital Orthodontic Planning</span>
                  <span className="text-cyan-brand font-semibold">Sub-millimeter Calibration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Badge variant="cyan">INTRODUCING CLEARNYX</Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              A New Perspective on Clear Aligner Solutions.
            </h2>

            <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
              CLEARNYX was founded on a singular conviction: predictable orthodontic results begin with clinician empowerment. We partner with dental professionals to deliver high-clarity clear aligners backed by rigorous digital planning, certified medical polymers, and seamless workflow support.
            </p>

            <p className="text-base text-slate-secondary leading-relaxed">
              Rather than standardizing care through consumer shortcuts, we provide the tools, treatment-staging expertise, and material versatility that practicing dentists and orthodontists need to treat diverse malocclusions with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-surface-border">
                <div className="font-semibold text-navy-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  Clinical Sovereignty
                </div>
                <p className="text-xs text-slate-secondary leading-normal">
                  The clinician retains 100% diagnostic and staging sign-off on every case.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-surface-border">
                <div className="font-semibold text-navy-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  Material Adaptability
                </div>
                <p className="text-xs text-slate-secondary leading-normal">
                  Choose between high-clarity Standard PETG and resilient Multi-Layer composite systems.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover CLEARNYX
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
