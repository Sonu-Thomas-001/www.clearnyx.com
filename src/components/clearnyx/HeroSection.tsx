"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  ScanLine,
  CheckCircle2,
  Play,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const { openModal } = useBookModal();

  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E7F6FA] via-[#F4FBFC] to-white"
    >
      {/* Background Architectural Mesh & Glow Lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-[#00A6CE]/12 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#00A6CE]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy, Badges, CTAs, Social Proof */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 border border-[#00A6CE]/30 text-[#00A6CE] text-[10px] sm:text-xs font-bold tracking-normal sm:tracking-wider uppercase mb-5 shadow-xs backdrop-blur-md self-start max-w-full"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00A6CE] animate-pulse shrink-0" />
              <span className="truncate sm:overflow-visible">The new normal in teeth straightening</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.2, ease: luxuryEase }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black text-[#071B2C] tracking-tight leading-[1.08] mb-6"
            >
              The future of a{" "}
              <br className="hidden sm:inline" />
              confident smile is{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00B8E0] to-[#008BAF] italic">
                clear.
                {/* Organic curved underline */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#00A6CE]/35"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,9 Q50,0 100,9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Lead Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: luxuryEase }}
              className="text-base sm:text-lg lg:text-xl text-[#556977] leading-relaxed max-w-xl mb-8 font-normal"
            >
              Virtually invisible aligners, custom-made for you by orthodontic
              experts. Comfortable, removable and engineered for real life.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: luxuryEase }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
            >
              <button
                type="button"
                onClick={() => openModal("consultation")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00A6CE] to-[#0094BA] hover:from-[#0094BA] hover:to-[#007F9F] text-white font-bold text-base tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:shadow-xl hover:shadow-[#00A6CE]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/85 hover:bg-white border border-[#D0DFE8] hover:border-[#00A6CE]/50 text-[#071B2C] font-bold text-base tracking-wide shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-md group"
              >
                <span>See How It Works</span>
                <span
                  aria-hidden="true"
                  className="w-6 h-6 rounded-full bg-[#071B2C] group-hover:bg-[#00A6CE] text-white inline-flex items-center justify-center transition-colors duration-200"
                >
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
              </Link>
            </motion.div>

            {/* Social Proof & Clinical Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: luxuryEase }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[#071B2C]/08"
            >
              {/* Star Rating & Smiles Counter */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A6CE] to-[#0B2540] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    Dr
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#071B2C] to-[#00A6CE] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    MD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    +2k
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-[#071B2C] ml-1">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-[#647887]">
                    2,800+ patients treated • 350+ doctor partners
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Anchored Pedestal & Floating Clinical Micro-Widgets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25, ease: luxuryEase }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] lg:max-w-none">
              {/* Architectural Glass Pedestal Halo */}
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-0 top-10 bg-gradient-to-tr from-[#D6F2F8]/70 via-[#EAF7FA]/50 to-white/90 rounded-t-[120px] rounded-b-3xl border border-white/80 shadow-2xl shadow-[#00A6CE]/10 backdrop-blur-xs"
              />

              {/* Cyan Aura Glow */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00A6CE]/20 rounded-full blur-3xl pointer-events-none"
              />

              {/* Hero Photo (Woman holding CLEARNYX box) */}
              <div className="relative z-10 w-full h-[380px] sm:h-[460px] lg:h-[520px]">
                <Image
                  src="/images/showcase/hero-aligner.png"
                  alt="CLEARNYX Clear Aligner Box and Confident Smile"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-xl"
                />
              </div>

              {/* Floating Widget 1: Digital Staging (Top-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: luxuryEase }}
                className="absolute top-2 sm:top-8 left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-white/90 shadow-[0_12px_32px_-6px_rgba(7,27,44,0.12)] flex items-center gap-2.5 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F8FB] text-[#00A6CE] flex items-center justify-center shrink-0">
                  <ScanLine className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#00A6CE] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-pulse" />
                    3D Digital Staging
                  </span>
                  <p className="text-[11px] sm:text-sm font-black text-[#071B2C]">
                    0.01mm Sub-mm Fit
                  </p>
                </div>
              </motion.div>

              {/* Floating Widget 2: Doctor Supervised (Bottom-Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: luxuryEase }}
                className="absolute bottom-4 sm:bottom-14 left-2 sm:left-2 z-20 bg-[#071B2C]/90 text-white backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 sm:py-2.5 border border-white/10 shadow-xl flex items-center gap-2 sm:gap-2.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A6CE] shrink-0" />
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8FAFC3] font-bold">
                    Orthodontist Guided
                  </p>
                  <p className="text-[11px] sm:text-xs font-black text-white">
                    100% Doctor Supervised
                  </p>
                </div>
              </motion.div>

              {/* Floating Widget 3: Treatment Timeline (Right-Middle) */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: luxuryEase }}
                className="absolute top-1/4 sm:top-1/3 right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 border border-white/90 shadow-[0_12px_32px_-6px_rgba(7,27,44,0.12)] flex items-center gap-2.5 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8F8FB] text-[#00A6CE] flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#647887]">
                    Average Timeline
                  </span>
                  <p className="text-[11px] sm:text-sm font-black text-[#071B2C]">
                    4–9 Months
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overlapping 3-Point Clinical Trust Bar (Scroll Triggered) */}
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: luxuryEase }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 -mb-10 sm:-mb-14"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#DCE8EE] shadow-[0_16px_40px_-8px_rgba(7,27,44,0.08)] grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EEF3F6]">
          {/* Trust Point 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: luxuryEase }}
            className="flex items-center gap-4 pt-4 md:pt-0"
          >
            <span
              aria-hidden="true"
              className="w-12 h-12 rounded-2xl bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0 shadow-xs"
            >
              <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
            </span>
            <div>
              <p className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#071B2C]">
                CDSCO MD-5 CERTIFIED
              </p>
              <p className="text-xs sm:text-sm text-[#647887]">
                Medical Grade Quality &amp; Safety
              </p>
            </div>
          </motion.div>

          {/* Trust Point 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: luxuryEase }}
            className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6"
          >
            <span
              aria-hidden="true"
              className="w-12 h-12 rounded-2xl bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0 shadow-xs"
            >
              <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
            </span>
            <div>
              <p className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#071B2C]">
                ISO 13485 CERTIFIED
              </p>
              <p className="text-xs sm:text-sm text-[#647887]">
                International Standards Assured
              </p>
            </div>
          </motion.div>

          {/* Trust Point 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: luxuryEase }}
            className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6"
          >
            <span
              aria-hidden="true"
              className="w-12 h-12 rounded-2xl bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0 shadow-xs"
            >
              <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
            </span>
            <div>
              <p className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#071B2C]">
                CUSTOM 3D ENGINEERED
              </p>
              <p className="text-xs sm:text-sm text-[#647887]">
                0.01mm Sub-Millimeter Precision
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
