"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronsLeftRight,
  CheckCircle2,
  Clock,
  Layers,
  ShieldCheck,
  ArrowRight,
  Quote,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const { openModal } = useBookModal();

  return (
    <section
      id="results"
      className="relative py-20 sm:py-28 overflow-hidden bg-[#071B2C] text-white"
    >
      {/* Background Lighting & Fine Precision Mesh */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[350px] bg-[#00A6CE]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-[#4DD4F0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#4DD4F0] text-xs font-bold tracking-wide uppercase border border-white/10 mb-4 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DD4F0]" />
            <span>Real transformation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]"
          >
            See the difference{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#2ED9FC] to-[#00A6CE] italic">
              CLEARNYX
            </span>{" "}
            makes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="mt-4 text-base sm:text-lg text-[#94A9B8] leading-relaxed"
          >
            Drag the interactive slider to compare real patient clinical outcomes.
            Sub-millimeter 3D aligner staging delivers predictable, lasting alignment you can see.
          </motion.p>
        </div>

        {/* Main Transformation Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
          {/* Left Column: Interactive Before/After Split Viewer (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0B2540] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] aspect-[4/3] sm:aspect-[16/11] select-none group">
              {/* After Image Layer (Base) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/comparison/after.jpg"
                  alt="Smile after CLEARNYX clear aligner treatment"
                  fill
                  priority
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
                  alt="Smile before CLEARNYX treatment"
                  fill
                  priority
                  className="object-cover object-center pointer-events-none"
                />
              </div>

              {/* Floating Badge: Before (Left) */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#071B2C]/80 backdrop-blur-md text-white/90 text-xs font-bold tracking-wider uppercase border border-white/15 shadow-md flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>Before</span>
              </div>

              {/* Floating Badge: After (Right) */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#00A6CE]/80 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/20 shadow-md flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>After CLEARNYX</span>
              </div>

              {/* Divider Line & Circular Grab Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_12px_rgba(0,166,206,0.8)] pointer-events-none z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#071B2C] shadow-2xl flex items-center justify-center border-2 border-[#00A6CE] group-hover:scale-110 transition-transform">
                  <ChevronsLeftRight className="w-5 h-5 text-[#00A6CE]" />
                </div>
              </div>

              {/* Range Input Overlay for Drag / Touch Interactions */}
              <input
                type="range"
                min={0}
                max={100}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
                aria-label="Before and after smile comparison slider"
              />
            </div>

            {/* Bottom Slider Presets */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPos(100)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    sliderPos >= 90
                      ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent"
                  }`}
                >
                  Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    sliderPos >= 40 && sliderPos <= 60
                      ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent"
                  }`}
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(0)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    sliderPos <= 10
                      ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-transparent"
                  }`}
                >
                  After
                </button>
              </div>

              <span className="text-xs text-[#647887] hidden sm:inline-block">
                Drag slider or tap preset
              </span>
            </div>
          </motion.div>

          {/* Right Column: Verified Clinical Case Breakdown Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: luxuryEase }}
            className="lg:col-span-5 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              {/* Card Top Pill & Case ID */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A6CE]/20 text-[#4DD4F0] text-xs font-bold uppercase tracking-wider border border-[#00A6CE]/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Clinical Case</span>
                </span>
                <span className="text-xs text-[#8EA3B3] font-mono">
                  #CN-4820
                </span>
              </div>

              {/* Case Diagnosis Title */}
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                Midline Diastema &amp; Moderate Crowding
              </h3>
              <p className="text-xs sm:text-sm text-[#94A9B8] leading-relaxed mb-6">
                Treated with sequential multi-layer clear aligners without extractions or interproximal metal hardware.
              </p>

              {/* 4 Clinical Data Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#00A6CE] mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A9B8]">
                      Duration
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    5.5 Months
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#00A6CE] mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A9B8]">
                      Aligner Trays
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    18 Stages
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#00A6CE] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A9B8]">
                      Compliance
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    22 Hrs / Day
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#00A6CE] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A9B8]">
                      Supervision
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    Orthodontist-Led
                  </p>
                </div>
              </div>

              {/* Patient Testimonial Quote */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 mb-6 relative">
                <Quote className="w-5 h-5 text-[#00A6CE]/40 mb-2" />
                <p className="text-xs sm:text-[13px] text-white/90 italic leading-relaxed">
                  &ldquo;I was skeptical about whether clear aligners could close my front gap in under 6 months. My digital staging simulation matched the final smile 100%.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Priya S.</span>
                  <span className="text-[#8EA3B3]">London, UK</span>
                </div>
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div>
              <button
                type="button"
                onClick={() => openModal("consultation")}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Get Your Free Smile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center mt-2.5 text-[11px] text-[#647887]">
                * Includes 3D digital simulation of your expected alignment result.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Clinical Disclaimer Note */}
        <p className="text-center mt-10 text-xs text-[#647887] max-w-2xl mx-auto">
          * Actual patient clinical case. Individual orthodontic outcomes and treatment timelines depend on clinician diagnosis, complexity of malocclusion, and patient wear compliance.
        </p>
      </div>
    </section>
  );
}
