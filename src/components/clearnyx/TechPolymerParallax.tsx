"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Layers, ShieldCheck, Zap, Gauge } from "lucide-react";

export function TechPolymerParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  });

  // Layer Explosion Motions
  const layer1Y = useTransform(smoothProgress, [0.2, 0.7], [0, -65]);
  const layer1Opacity = useTransform(smoothProgress, [0.1, 0.4], [0.6, 1]);

  const layer2Y = useTransform(smoothProgress, [0.2, 0.7], [0, 0]);
  const layer2Scale = useTransform(smoothProgress, [0.2, 0.7], [1, 1.08]);

  const layer3Y = useTransform(smoothProgress, [0.2, 0.7], [0, 65]);
  const layer3Opacity = useTransform(smoothProgress, [0.1, 0.4], [0.6, 1]);

  // Labels and Diagram Data
  const detailsOpacity = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);
  const detailsScale = useTransform(smoothProgress, [0.45, 0.75], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative h-[270vh] bg-[#061321] text-white border-y border-white/10">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Polymer Science in Motion
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Exploded Tri-Laminate Architecture
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Scroll to deconstruct the multi-layer composite engineered for continuous physiological force.
          </p>
        </div>

        {/* Center Exploded Layers Visual */}
        <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center min-h-0">
          
          {/* Cyan Glow Accent */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          {/* Layer 1: Outer Shell (Drifts Up) */}
          <motion.div
            style={{ y: layer1Y, opacity: layer1Opacity }}
            className="absolute z-30 w-64 sm:w-80 md:w-[420px] pointer-events-none"
          >
            <div className="relative">
              <Image
                src="/images/showcase/aligner-cutout.png"
                alt="CLEARNYX Rigid Outer Shell"
                width={500}
                height={350}
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,166,206,0.3)] brightness-110"
              />
            </div>
          </motion.div>

          {/* Layer 2: Elastomeric Core (Center Anchored) */}
          <motion.div
            style={{ y: layer2Y, scale: layer2Scale }}
            className="relative z-20 w-64 sm:w-80 md:w-[420px] pointer-events-none opacity-85"
          >
            <div className="relative">
              <Image
                src="/images/showcase/aligner-cutout.png"
                alt="CLEARNYX Elastomeric Central Core"
                width={500}
                height={350}
                className="w-full h-auto object-contain filter hue-rotate-30 contrast-125 brightness-95"
              />
            </div>
          </motion.div>

          {/* Layer 3: Inner Contact Interface (Drifts Down) */}
          <motion.div
            style={{ y: layer3Y, opacity: layer3Opacity }}
            className="absolute z-10 w-64 sm:w-80 md:w-[420px] pointer-events-none"
          >
            <div className="relative">
              <Image
                src="/images/showcase/aligner-cutout.png"
                alt="CLEARNYX Inner Tooth Contact Interface"
                width={500}
                height={350}
                className="w-full h-auto object-contain opacity-70 filter brightness-75 hue-rotate-180"
              />
            </div>
          </motion.div>

          {/* Layer Labels (Desktop Layout with Pointer Lines) */}
          <div className="absolute inset-0 pointer-events-none hidden md:flex items-center justify-between z-30">
            {/* Left Side Label (Layer B) */}
            <motion.div
              style={{ opacity: detailsOpacity }}
              className="w-72"
            >
              <div className="relative bg-[#0A1F33]/95 border border-cyan-400/40 p-4 rounded-xl text-left shadow-xl pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">Layer B • Dynamic Elastic Core</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-recovery central elastomer maintains continuous gentle force across the full 14-day wear cycle.
                </p>
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-r from-cyan-400 to-cyan-300">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,166,206,0.9)]" />
                </div>
              </div>
            </motion.div>

            {/* Right Side Labels (Layer A & Layer C) */}
            <motion.div
              style={{ opacity: detailsOpacity }}
              className="w-72 space-y-12"
            >
              {/* Layer A */}
              <div className="relative bg-[#0A1F33]/95 border border-cyan-400/40 p-4 rounded-xl text-left shadow-xl pointer-events-auto">
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-l from-cyan-400 to-cyan-300">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,166,206,0.9)]" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">Layer A • Rigid Outer Shell</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-density polymer shield protects against masticatory forces and prevents cosmetic staining.
                </p>
              </div>

              {/* Layer C */}
              <div className="relative bg-[#0A1F33]/95 border border-cyan-400/40 p-4 rounded-xl text-left shadow-xl pointer-events-auto">
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-l from-cyan-400 to-cyan-300">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,166,206,0.9)]" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">Layer C • Contact Interface</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sub-gingival laser scalloped margin for intimate tooth adaptation with zero soft-tissue irritation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Material Science Benchmark Indicators */}
        <motion.div
          style={{ opacity: detailsOpacity, scale: detailsScale }}
          className="max-w-4xl mx-auto w-full z-20 grid grid-cols-3 gap-3 sm:gap-6 bg-[#0A1F33]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/15 shadow-xl"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Gauge className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">88% Retention</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Force profile at Day 14</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">+45% Elasticity</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Zero permanent tray warp</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">ISO 10993</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">CDSCO Class B Certified</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
