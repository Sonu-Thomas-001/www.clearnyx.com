"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_PHRASES = [
  { prefix: "Confidence in", highlight: "Every Smile." },
  { prefix: "Excellence in", highlight: "Every Case." },
  { prefix: "Precision in", highlight: "Every Movement." },
  { prefix: "Certainty in", highlight: "Every Treatment." },
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 border-b border-surface-border">
      {/* Ambient background soft cyan orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-ice-soft/60 via-cyan-50/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Proposition & Kinetic Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow Chip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ice-soft border border-cyan-300/40 w-fit mb-5 shadow-subtle"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-navy-900 uppercase">
                PREMIUM B2B CLEAR ALIGNER SOLUTIONS &bull; INDIA
              </span>
            </motion.div>

            {/* Main Headline with Looping Kinetic Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-navy-900 tracking-tight leading-[1.08] mb-5 text-balance"
            >
              <span className="block">
                Precision in Every Move.
              </span>

              {/* Looping Rotating Kinetic Line with Blur-Slide Transition */}
              <div className="h-[1.25em] overflow-hidden relative mt-1 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 26, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -26, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-navy-900 whitespace-nowrap"
                  >
                    <span className="font-extrabold">{ROTATING_PHRASES[phraseIndex].prefix} </span>
                    <span className="text-cyan-brand italic font-semibold">
                      {ROTATING_PHRASES[phraseIndex].highlight}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-secondary leading-relaxed max-w-2xl mb-6 text-balance"
            >
              Advanced clear aligner solutions designed to support dentists and orthodontists across India with sub-millimeter 3D digital planning, certified medical polymers, and collaborative practice onboarding.
            </motion.p>

            {/* Clinical Value Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-navy-900 font-medium"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Standard (PETG) &amp; Multi-Layer Composite</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Sub-Millimeter Biomechanical Staging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Full Clinician Diagnostic Authority</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span>Direct Door-to-Clinic India Logistics</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5"
            >
              <Button
                href="/become-a-partner"
                variant="cyan"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                className="font-bold shadow-cyan text-sm sm:text-base px-6 py-3.5"
              >
                Become a Partner
              </Button>
              <Button
                href="/how-it-works"
                variant="secondary"
                size="lg"
                leftIcon={<Play className="w-3.5 h-3.5 text-cyan-brand fill-cyan-brand" />}
                className="font-semibold text-sm sm:text-base px-6 py-3.5"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* B2B Distinction Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-slate-muted flex items-center gap-2 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand shrink-0" />
              <span>Exclusively for certified dentists, orthodontists &amp; dental clinics — Not direct-to-consumer.</span>
            </motion.p>
          </div>

          {/* Right Column: Zero-Gravity 3D Aligner Showcase with Laser Scanner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-brand/20 via-ice-soft/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Rotating Concentric Calibration Radar Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 sm:-inset-6 border border-dashed border-cyan-brand/25 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1 sm:-inset-2 border border-cyan-brand/20 rounded-full pointer-events-none"
            />

            {/* Floating Metric Badge 1 (Top Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 z-30 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-300/50 shadow-card flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-brand animate-ping" />
              <span className="text-[11px] font-bold text-navy-900 tracking-wide whitespace-nowrap">
                0.01mm Calibration Fit
              </span>
            </motion.div>

            {/* Floating Metric Badge 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 z-30 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-cyan-300/50 shadow-card flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-brand" />
              <span className="text-[11px] font-bold text-navy-900 tracking-wide whitespace-nowrap">
                Medical-Grade Polymers
              </span>
            </motion.div>

            {/* Main Aligner Pod Container */}
            <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-none rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-surface-soft/95 via-white to-ice-soft/40 border border-cyan-200/80 shadow-elevated overflow-hidden group">
              {/* Corner Precision Crosshairs */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-cyan-brand/60 select-none">+</span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-cyan-brand/60 select-none">+</span>
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-brand/60 select-none">+</span>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-brand/60 select-none">+</span>

              {/* Aligner Visual Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-surface-border">
                <Image
                  src="/images/products/clearnyx-clear-aligner-product.webp"
                  alt="CLEARNYX Clear Aligner Precision Product"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Animated Optical Laser Scan Beam */}
                <motion.div
                  animate={{ y: ["-100%", "250%"] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
                  className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-brand/25 to-transparent border-b border-cyan-brand/60 pointer-events-none"
                />

                {/* Bottom Overlay Label inside Frame */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-surface-border flex items-center justify-between shadow-subtle">
                  <div>
                    <div className="text-xs font-extrabold text-navy-900 tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand" />
                      CLEARNYX ORTHODONTIC SYSTEM
                    </div>
                    <div className="text-[11px] text-slate-secondary">
                      Standard PETG &amp; Multi-Layer Composite
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-ice-soft text-cyan-700 text-[10px] font-bold border border-cyan-200">
                    B2B Clinic Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
