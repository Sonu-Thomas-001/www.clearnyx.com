"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronsLeftRight,
  Calendar,
  FileText,
  Stethoscope,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

export function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const { openModal } = useBookModal();

  return (
    <section
      id="results"
      className="relative py-20 sm:py-28 bg-[#F8FAFC] border-t border-b border-[#E2EBF0] text-[#071B2C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Authentic Medical Editorial Style */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F6FA] text-[#00A6CE] text-xs font-bold tracking-wider uppercase mb-3.5 border border-[#C5ECF5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
            <span>Clinical Case Dossier • Case #CN-4820</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]">
            Documented Clinical Outcomes.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#556977] leading-relaxed max-w-2xl">
            Standardized photographic clinical record of sequential clear aligner therapy.
            Sub-millimeter 3D digital CAD staging ensures predictable biomechanical tracking from
            baseline to finished alignment.
          </p>
        </div>

        {/* Main Clinical Case Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Clinical Photographic Inspection Viewer (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-[#D5E2EC] shadow-[0_8px_30px_rgba(7,27,44,0.06)] overflow-hidden">
              {/* Viewer Diagnostic Header Bar */}
              <div className="px-4 py-3 bg-[#F4F8FA] border-b border-[#E2EBF0] flex items-center justify-between text-xs text-[#556977]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-[#071B2C]">
                    Standardized 1:1 Orthodontic Photographic View
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#718594] hidden sm:inline-block">
                  Calibrated Focal Distance • Frontal Occlusion
                </span>
              </div>

              {/* Photographic Comparison Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] select-none overflow-hidden bg-slate-100 group">
                {/* After Image Layer (Base) */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/comparison/after.jpg"
                    alt="Clinical post-treatment outcome with CLEARNYX aligners"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center pointer-events-none"
                  />
                </div>

                {/* Before Image Layer (Clipped Top Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                  }}
                >
                  <Image
                    src="/images/comparison/before.jpg"
                    alt="Clinical baseline pre-treatment presentation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover object-center pointer-events-none"
                  />
                </div>

                {/* Clinical Label: Baseline (Left) */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#071B2C]/90 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase shadow-sm pointer-events-none border border-white/10">
                  <span className="text-slate-300 font-normal mr-1.5">Pre-Op:</span>
                  Baseline
                </div>

                {/* Clinical Label: Finished (Right) */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#00A6CE]/95 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase shadow-sm pointer-events-none border border-white/20">
                  <span className="text-white/80 font-normal mr-1.5">Finished:</span>
                  Month 5.5
                </div>

                {/* Precision Divider Line & Grip Handle */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)] pointer-events-none z-30"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#071B2C] shadow-lg flex items-center justify-center border-2 border-[#00A6CE] transition-transform">
                    <ChevronsLeftRight className="w-4 h-4 text-[#00A6CE]" />
                  </div>
                </div>

                {/* Accessible Input Slider for Drag / Touch */}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
                  aria-label="Interactive baseline and post-treatment clinical comparison slider"
                />
              </div>

              {/* View Controls & Diagnostic Tabs */}
              <div className="p-3.5 bg-white border-t border-[#E2EBF0] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-[#556977] mr-1 hidden sm:inline-block">
                    View Mode:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSliderPos(100)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      sliderPos >= 90
                        ? "bg-[#071B2C] text-white shadow-xs"
                        : "bg-[#F4F8FA] text-[#556977] hover:bg-[#EAEFF3] hover:text-[#071B2C]"
                    }`}
                  >
                    Baseline (0%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPos(50)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      sliderPos >= 40 && sliderPos <= 60
                        ? "bg-[#00A6CE] text-white shadow-xs"
                        : "bg-[#F4F8FA] text-[#556977] hover:bg-[#EAEFF3] hover:text-[#071B2C]"
                    }`}
                  >
                    50 / 50 Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPos(0)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      sliderPos <= 10
                        ? "bg-[#071B2C] text-white shadow-xs"
                        : "bg-[#F4F8FA] text-[#556977] hover:bg-[#EAEFF3] hover:text-[#071B2C]"
                    }`}
                  >
                    Finished (100%)
                  </button>
                </div>

                <span className="text-[11px] text-[#718594] font-medium">
                  Drag slider horizontally to inspect occlusal alignment
                </span>
              </div>
            </div>

            {/* Scientific Transparency Footnote */}
            <p className="mt-3 text-[11px] text-[#718594] leading-relaxed">
              * Unretouched clinical photographic documentation. Treatment duration and biological
              response vary according to individual patient malocclusion, bone density, and compliance.
            </p>
          </div>

          {/* Right Column: Authentic Orthodontic Case Dossier Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#D5E2EC] p-6 sm:p-7 shadow-[0_8px_30px_rgba(7,27,44,0.06)] flex flex-col justify-between">
            <div>
              {/* Dossier Header Meta */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#EAEFF3]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#00A6CE]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#071B2C]">
                    Case Record Sheet
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#00A6CE] font-bold px-2 py-0.5 rounded bg-[#E7F6FA]">
                  REF: CN-4820
                </span>
              </div>

              {/* Chief Complaint / Malocclusion Diagnosis */}
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#718594] block mb-1">
                  Clinical Diagnosis
                </span>
                <h3 className="text-xl font-bold text-[#071B2C] leading-snug">
                  Maxillary Midline Diastema &amp; Moderate Anterior Crowding
                </h3>
                <p className="text-xs text-[#556977] mt-1.5 leading-relaxed">
                  Class I malocclusion with 2.4mm central gap, minor rotational displacement of maxillary
                  lateral incisors, and anterior mandibular crowding.
                </p>
              </div>

              {/* 4 Structured Diagnostic Parameters */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2EBF0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#718594] block mb-0.5">
                    Treatment Duration
                  </span>
                  <span className="text-base font-extrabold text-[#071B2C]">
                    22 Weeks (5.5 Mo)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2EBF0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#718594] block mb-0.5">
                    Aligner Stages
                  </span>
                  <span className="text-base font-extrabold text-[#071B2C]">
                    18 Sequential Trays
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2EBF0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#718594] block mb-0.5">
                    Wear Protocol
                  </span>
                  <span className="text-base font-extrabold text-[#071B2C]">
                    22 Hours / Day
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2EBF0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#718594] block mb-0.5">
                    Material Polymer
                  </span>
                  <span className="text-base font-extrabold text-[#071B2C]">
                    Multi-Layer Pro
                  </span>
                </div>
              </div>

              {/* Clinical Assessment Commentary */}
              <div className="p-4 rounded-xl bg-[#F4F8FA] border-l-4 border-[#00A6CE] mb-6">
                <p className="text-xs text-[#334756] leading-relaxed">
                  <strong className="text-[#071B2C] font-semibold block mb-1">
                    Orthodontic CAD Staging Assessment:
                  </strong>
                  &ldquo;Complete diastema closure achieved with controlled bodily translation of central
                  incisors. Zero interproximal enamel reduction required. Gingival margins contoured
                  via 5-axis laser trimming for soft-tissue health throughout the 18 stages.&rdquo;
                </p>
                <div className="mt-2 text-[10px] text-[#718594] font-medium">
                  Staged &amp; Fabricated by CLEARNYX Digital Orthodontic Laboratory
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-2.5 pt-2 border-t border-[#EAEFF3]">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Doctor Consultation</span>
                </button>

                <Link
                  href="/for-dentists#partner-form"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#071B2C] hover:bg-[#00A6CE] text-white font-bold text-xs transition-colors"
                >
                  <Stethoscope className="w-3.5 h-3.5 text-[#12C8E8]" />
                  <span>For Dentists</span>
                </Link>
              </div>

              <p className="text-center text-[10px] text-[#718594]">
                100% Doctor-directed treatment through licensed dental professionals across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
