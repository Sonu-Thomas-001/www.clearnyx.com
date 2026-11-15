"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function DualPolymerSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2EBF0] text-[#071B2C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00A6CE] block mb-2">
              Polymer Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
              Dual Polymer Architecture.
            </h2>
          </div>
          <Link
            href="/technology"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A6CE] hover:text-[#071B2C] transition-colors"
          >
            <span>Explore Engineering Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Clean Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* 1. Standard Medical PETG */}
          <div className="bg-white rounded-2xl border border-[#D5E2EC] p-6 sm:p-8 shadow-[0_4px_24px_rgba(7,27,44,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#718594] bg-[#F4F8FA] px-2.5 py-1 rounded">
                  Single-Layer Architecture
                </span>
                <span className="text-xs font-bold text-[#071B2C]">Medical PETG</span>
              </div>

              <div className="relative h-44 sm:h-52 w-full my-4 rounded-xl overflow-hidden bg-[#F8FAFC] flex items-center justify-center p-4">
                <Image
                  src="/images/products/clearnyx-standard-aligner.webp"
                  alt="Standard High-Clarity CLEARNYX Aligner"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-xl font-extrabold text-[#071B2C] mb-2">
                Standard High-Clarity
              </h3>
              <p className="text-xs sm:text-sm text-[#556977] leading-relaxed mb-5">
                Engineered with high tensile rigidity for direct initial force transfer and maximum
                optical clarity.
              </p>

              <div className="space-y-2 text-xs text-[#071B2C] font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Optimal for mild spacing &amp; anterior alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Direct force vectors for fast minor relapse corrections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>5-axis automated laser-scalloped gingival margin</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Multi-Layer Pro Composite */}
          <div className="bg-white rounded-2xl border border-[#00A6CE]/40 p-6 sm:p-8 shadow-[0_6px_28px_rgba(0,166,206,0.08)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#00A6CE]/5 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00A6CE] bg-[#E7F6FA] px-2.5 py-1 rounded">
                  Elastomeric Multi-Layer
                </span>
                <span className="text-xs font-bold text-[#00A6CE]">Pro Composite</span>
              </div>

              <div className="relative h-44 sm:h-52 w-full my-4 rounded-xl overflow-hidden bg-[#F0F8FA] flex items-center justify-center p-4">
                <Image
                  src="/images/products/clearnyx-multilayer-aligner.webp"
                  alt="Multi-Layer Pro CLEARNYX Aligner"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-xl font-extrabold text-[#071B2C] mb-2">
                Multi-Layer Pro
              </h3>
              <p className="text-xs sm:text-sm text-[#556977] leading-relaxed mb-5">
                Composite construction with an elastomeric inner core encased in dual protective
                shells for continuous low-magnitude biological force.
              </p>

              <div className="space-y-2 text-xs text-[#071B2C] font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Sustained gentle forces for deep bites &amp; root torque</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>High crack resistance and elastomeric recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                  <span>Comfortable tooth seating across the full 14-day cycle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
