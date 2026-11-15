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
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Layer Explosion Motions
  const layer1Y = useTransform(smoothProgress, [0.2, 0.7], [0, -70]);
  const layer1Opacity = useTransform(smoothProgress, [0.1, 0.4], [0.6, 1]);

  const layer2Y = useTransform(smoothProgress, [0.2, 0.7], [0, 0]);
  const layer2Scale = useTransform(smoothProgress, [0.2, 0.7], [1, 1.08]);

  const layer3Y = useTransform(smoothProgress, [0.2, 0.7], [0, 70]);
  const layer3Opacity = useTransform(smoothProgress, [0.1, 0.4], [0.6, 1]);

  // Labels and Diagram Data
  const detailsOpacity = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);
  const detailsScale = useTransform(smoothProgress, [0.45, 0.75], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative h-[270vh] bg-navy-950 text-white border-y border-white/10">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
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
          <div className="absolute w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

          {/* Layer 1: Outer Shell (Drifts Up) */}
          <motion.div
            style={{ y: layer1Y, opacity: layer1Opacity }}
            className="absolute z-30 w-72 sm:w-96 md:w-[480px] pointer-events-none"
          >
            <div className="relative">
              <Image
                src="/images/products/clearnyx-multilayer-aligner.webp"
                alt="CLEARNYX Rigid Outer Shell"
                width={500}
                height={350}
                className="w-full h-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,166,206,0.25)] brightness-110"
              />
              <motion.div
                style={{ opacity: detailsOpacity }}
                className="hidden md:flex absolute -top-4 -right-28 items-center gap-2 bg-navy-900/90 border border-cyan-400/40 px-3 py-1.5 rounded-lg text-left"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <div>
                  <div className="text-[11px] font-bold text-cyan-300 uppercase">Layer A • Rigid Outer Shell</div>
                  <div className="text-[10px] text-slate-300">Stain-resistant barrier & bite-force distributor</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 2: Elastomeric Core (Center Anchored) */}
          <motion.div
            style={{ y: layer2Y, scale: layer2Scale }}
            className="relative z-20 w-72 sm:w-96 md:w-[480px] pointer-events-none opacity-90"
          >
            <div className="relative">
              <Image
                src="/images/products/clearnyx-standard-aligner.webp"
                alt="CLEARNYX Elastomeric Central Core"
                width={500}
                height={350}
                className="w-full h-auto object-contain filter hue-rotate-15 contrast-125 brightness-90"
              />
              <motion.div
                style={{ opacity: detailsOpacity }}
                className="hidden md:flex absolute top-1/2 -left-32 -translate-y-1/2 items-center gap-2 bg-navy-900/90 border border-cyan-400/40 px-3 py-1.5 rounded-lg text-left"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div>
                  <div className="text-[11px] font-bold text-cyan-300 uppercase">Layer B • Dynamic Elastic Core</div>
                  <div className="text-[10px] text-slate-300">Continuous gentle force across 14-day wear</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Layer 3: Inner Contact Interface (Drifts Down) */}
          <motion.div
            style={{ y: layer3Y, opacity: layer3Opacity }}
            className="absolute z-10 w-72 sm:w-96 md:w-[480px] pointer-events-none"
          >
            <div className="relative">
              <Image
                src="/images/products/clearnyx-multilayer-aligner.webp"
                alt="CLEARNYX Inner Tooth Contact Interface"
                width={500}
                height={350}
                className="w-full h-auto object-contain opacity-70 filter brightness-75"
              />
              <motion.div
                style={{ opacity: detailsOpacity }}
                className="hidden md:flex absolute -bottom-4 -right-28 items-center gap-2 bg-navy-900/90 border border-cyan-400/40 px-3 py-1.5 rounded-lg text-left"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <div>
                  <div className="text-[11px] font-bold text-cyan-300 uppercase">Layer C • Precision Anatomical Fit</div>
                  <div className="text-[10px] text-slate-300">Sub-gingival laser scalloped comfort surface</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Material Science Benchmark Indicators */}
        <motion.div
          style={{ opacity: detailsOpacity, scale: detailsScale }}
          className="max-w-4xl mx-auto w-full z-20 grid grid-cols-3 gap-3 sm:gap-6 bg-navy-900/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10"
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
