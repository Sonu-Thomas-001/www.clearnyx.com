import React from "react";
import Image from "next/image";
import { ArrowRight, Monitor, Layers, Eye, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function TechnologyPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="cyan">DIGITAL ORTHODONTIC PLATFORM</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Where Digital Planning Meets Precision.
            </h2>
            <p className="text-base sm:text-lg text-slate-secondary leading-relaxed">
              Every CLEARNYX clear aligner is the physical output of rigorous 3D digital simulation. We combine advanced tooth-movement algorithms with specialized orthodontic review to calculate force vectors and stage teeth within biological tolerances.
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-soft border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center mb-3">
                  <Monitor className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Digital Treatment Planning
                </h4>
                <p className="text-xs text-slate-secondary leading-normal">
                  Stage-by-stage 3D tooth movement simulations respecting root morphology and bone volume.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-soft border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center mb-3">
                  <Eye className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  3D Case Visualization
                </h4>
                <p className="text-xs text-slate-secondary leading-normal">
                  Interactive multi-angle view of initial malocclusion through planned post-treatment occlusion.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-soft border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Customized Aligner Design
                </h4>
                <p className="text-xs text-slate-secondary leading-normal">
                  Precision-scalloped anatomical trimlines and calibrated attachment configurations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-soft border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm mb-1">
                  Professional Review
                </h4>
                <p className="text-xs text-slate-secondary leading-normal">
                  Comprehensive clinician review, annotation, and digital prescription sign-off.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/technology"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Technology
              </Button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-surface-soft border border-surface-border shadow-elevated p-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-dark">
                <Image
                  src="/images/technology/clearnyx-digital-treatment-planning.jpg"
                  alt="CLEARNYX Orthodontic 3D Treatment Planning Interface and Dental Simulation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Micro-Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-white/95 backdrop-blur-md border border-surface-border shadow-card flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-navy-900">
                      Standard STL & OBJ Compatible
                    </div>
                    <div className="text-[11px] text-slate-secondary">
                      Seamless integration with all major intraoral scanners
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-brand animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

