"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E7F6FA] via-[#F4FBFC] to-white border-b border-[#E2EBF0]">
      {/* Background Lighting Elements */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-[#00A6CE]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#00A6CE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: luxuryEase }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#00A6CE]/30 text-[#00A6CE] text-xs font-bold tracking-wider uppercase mb-5 shadow-xs backdrop-blur-md self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse shrink-0" />
              <span>ABOUT CLEARNYX &bull; INDIA</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: luxuryEase }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071B2C] tracking-tight leading-[1.1] mb-6"
            >
              Rethinking Orthodontic Care Through{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00B8E0] to-[#008BAF] italic">
                Precision.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: luxuryEase }}
              className="text-base sm:text-lg lg:text-xl text-[#556977] leading-relaxed max-w-xl mb-8 font-normal"
            >
              CLEARNYX is an orthodontic technology brand built on a strict doctor-led foundation. We combine sub-millimeter 3D digital planning with certified medical polymers to empower licensed dental clinicians across India.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: luxuryEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <Link
                href="/for-dentists"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00A6CE] to-[#0094BA] hover:from-[#0094BA] hover:to-[#007F9F] text-white font-bold text-base tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:shadow-xl hover:shadow-[#00A6CE]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>For Dental Clinicians</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/85 hover:bg-white border border-[#D0DFE8] hover:border-[#00A6CE]/50 text-[#071B2C] font-bold text-base tracking-wide shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-md"
              >
                <span>Connect With Us</span>
              </Link>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: luxuryEase }}
              className="pt-6 border-t border-[#E2EBF0] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#556977]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A6CE]" />
                <span className="font-semibold text-[#071B2C]">Strict Doctor-Only Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A6CE]" />
                <span className="font-semibold text-[#071B2C]">Sub-Millimeter 3D Staging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A6CE]" />
                <span className="font-semibold text-[#071B2C]">Made for Indian Clinicians</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Visual with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
              className="relative mx-auto max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/editorial/clearnyx-clinical-consultation.jpg"
                  alt="CLEARNYX Clinical Consultation and Orthodontic Treatment Planning"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 inset-x-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#12C8E8]">
                    Clinical Integrity
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Empowering dentists to guide every smile journey chairside.
                  </p>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E2EBF0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#071B2C] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#00A6CE]" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-[#071B2C]">PURE B2B MODEL</p>
                  <p className="text-xs text-[#556977]">Zero Direct-to-Consumer Kits</p>
                </div>
              </div>

              {/* Floating Accuracy Badge */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E2EBF0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-[#00A6CE]">0.01MM ACCURACY</p>
                  <p className="text-xs font-bold text-[#071B2C]">Laser Margin Contouring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Trust Metrics Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E2EBF0] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#071B2C]">100%</p>
            <p className="text-xs sm:text-sm font-medium text-[#556977]">Doctor-Prescribed Model</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#071B2C]">0.01mm</p>
            <p className="text-xs sm:text-sm font-medium text-[#556977]">Sub-Millimeter Staging</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#071B2C]">2</p>
            <p className="text-xs sm:text-sm font-medium text-[#556977]">Medical Polymer Systems</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-[#00A6CE]">Pan-India</p>
            <p className="text-xs sm:text-sm font-medium text-[#556977]">Direct Practice Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

