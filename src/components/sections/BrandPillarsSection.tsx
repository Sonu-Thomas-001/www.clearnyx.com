import React from "react";
import { Crosshair, HeartPulse, Cpu, Handshake } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function BrandPillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="ice">BRAND PILLARS</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
            The Principles Behind Every Smile.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
            Our technology and orthodontic solutions are guided by four foundational principles designed to foster clinical confidence and patient trust.
          </p>
        </div>

        {/* Distinctive Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Pillar 1: Precision (Large Featured Block) */}
          <div className="md:col-span-7 rounded-2xl bg-gradient-to-br from-surface-soft via-white to-ice-soft/30 border border-surface-border p-8 sm:p-10 flex flex-col justify-between group hover:border-cyan-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Crosshair className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                Pillar 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-2 mb-4">
                Precision
              </h3>
              <p className="text-base text-slate-secondary leading-relaxed">
                Sub-millimeter tooth movement calibration calibrated by experienced orthodontic planners. Every staging sequence strictly respects biological boundaries, anchorage mechanics, and tissue response.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-border flex items-center justify-between text-xs text-slate-muted">
              <span>0.20–0.25mm staging velocity</span>
              <span className="font-semibold text-navy-900">Biomechanical Accuracy</span>
            </div>
          </div>

          {/* Pillar 2: Comfort */}
          <div className="md:col-span-5 rounded-2xl bg-white border border-surface-border p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-soft text-navy-900 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-cyan-brand" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted">
                Pillar 02
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900 mt-2 mb-4">
                Comfort
              </h3>
              <p className="text-sm sm:text-base text-slate-secondary leading-relaxed">
                Precision laser-scalloped gingival margins and ultra-smooth polymer finishes minimize soft-tissue irritation, encouraging consistent 22–24 hour daily patient compliance.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-border text-xs text-slate-muted font-medium">
              Scalloped anatomical margins
            </div>
          </div>

          {/* Pillar 3: Innovation */}
          <div className="md:col-span-5 rounded-2xl bg-white border border-surface-border p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-soft text-navy-900 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-cyan-brand" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-muted">
                Pillar 03
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900 mt-2 mb-4">
                Innovation
              </h3>
              <p className="text-sm sm:text-base text-slate-secondary leading-relaxed">
                Continuous material science development from high-clarity PETG to advanced multi-layer polymer composites that maintain gentle, sustained orthodontic forces.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-border text-xs text-slate-muted font-medium">
              Multi-layer polymer architecture
            </div>
          </div>

          {/* Pillar 4: Professional Partnership (Wide Editorial Block) */}
          <div className="md:col-span-7 rounded-2xl bg-navy-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-navy-800 text-cyan-brand flex items-center justify-center mb-6 border border-navy-700">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand">
                Pillar 04
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Professional Partnership
              </h3>
              <p className="text-base text-slate-muted leading-relaxed max-w-xl">
                We believe in true clinical collaboration. Our dedicated support team in India assists dental practices with digital onboarding, 3D setup consultations, and reliable case delivery.
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-6 border-t border-navy-800 flex items-center justify-between text-xs text-slate-muted">
              <span>B2B Clinician-First Model</span>
              <span className="text-cyan-brand font-semibold">Collaborative Review</span>
            </div>
            {/* Subtle Cyan Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

