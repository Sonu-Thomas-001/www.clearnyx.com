"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

export function DoctorMaterialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
            POLYMER ARCHITECTURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
            Two Formulations. Prescribed by Case Complexity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556977]">
            Because no single material architecture fits every malocclusion, CLEARNYX gives you the clinical choice between high-clarity PETG and engineered multi-layer polymers.
          </p>
        </div>

        {/* 2-Card Material Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Standard PETG */}
          <div className="rounded-3xl border border-[#E2EBF0] bg-[#F8FBFD] p-8 sm:p-10 flex flex-col justify-between shadow-card hover:shadow-elevated transition-shadow">
            <div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-white border border-[#E2EBF0]">
                <Image
                  src="/images/products/clearnyx-standard-aligner.webp"
                  alt="CLEARNYX Standard High-Clarity PETG Clear Aligner"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6CE]">
                  Single-Layer Architecture
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/60 text-[#071B2C]">
                  Medical PETG
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#071B2C]">
                Standard High-Clarity Aligners
              </h3>

              <p className="text-sm text-[#556977] mt-2 leading-relaxed">
                Engineered from high-transparency medical-grade PETG, delivering excellent tensile stiffness and dimensional adaptation for straightforward tooth repositioning.
              </p>

              <div className="mt-6 pt-6 border-t border-[#E2EBF0] space-y-2.5 text-xs text-[#071B2C]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Mild to moderate anterior spacing & crowding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>High aesthetic clarity for discreet patient wear</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Rigid initial force transfer for predictable tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-Layer Pro */}
          <div className="rounded-3xl border border-[#00A6CE]/30 bg-gradient-to-b from-[#F0FAFD] to-[#E7F6FA] p-8 sm:p-10 flex flex-col justify-between shadow-card hover:shadow-elevated transition-shadow">
            <div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-white border border-[#E2EBF0]">
                <Image
                  src="/images/products/clearnyx-multilayer-aligner.webp"
                  alt="CLEARNYX Multi-Layer Pro Composite Aligner"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6CE]">
                  Composite Architecture
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#00A6CE] text-white">
                  Multi-Layer Pro
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#071B2C]">
                Multi-Layer Composite Aligners
              </h3>

              <p className="text-sm text-[#556977] mt-2 leading-relaxed">
                Constructed with an elastomeric inner core enveloped by dual outer shells. Maintains continuous gentle forces over the entire 10–14 day wear cycle with enhanced tear resistance.
              </p>

              <div className="mt-6 pt-6 border-t border-[#D0DFE8] space-y-2.5 text-xs text-[#071B2C]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Severe rotations, deep bites, and root torque correction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Continuous low-magnitude biomechanical force profile</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Superior flexibility for easier patient insertion & removal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
