"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles, Shield, Eye, Activity } from "lucide-react";

export function HomeAlignerParallax() {
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

  // Aligner Tray Motion
  const alignerY = useTransform(smoothProgress, [0, 0.45, 0.75, 1], [140, 0, 0, 0]);
  const alignerScale = useTransform(smoothProgress, [0, 0.45, 0.75, 1], [0.8, 1.15, 1.25, 1.25]);
  const alignerRotate = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [-14, 0, 0, 0]);
  const alignerOpacity = useTransform(smoothProgress, [0, 0.1, 1], [0.4, 1, 1]);

  // Packaging Box (Phase 1)
  const boxOpacity = useTransform(smoothProgress, [0, 0.28, 0.45], [1, 0.8, 0]);
  const boxScale = useTransform(smoothProgress, [0, 0.4], [1, 0.85]);
  const boxY = useTransform(smoothProgress, [0, 0.45], [0, 60]);

  // Callouts & Lines (Phase 3: 0.55 -> 1.0)
  const calloutsOpacity = useTransform(smoothProgress, [0.55, 0.75], [0, 1]);
  const calloutsLeftX = useTransform(smoothProgress, [0.55, 0.75], [-30, 0]);
  const calloutsRightX = useTransform(smoothProgress, [0.55, 0.75], [30, 0]);
  const lineProgress = useTransform(smoothProgress, [0.65, 0.88], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-surface-soft border-y border-surface-border">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-brand text-xs font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Anatomy of Precision
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Engineered for Invisibility. Designed for Biology.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-secondary max-w-xl mx-auto">
            Scroll to inspect how sub-millimeter laser contouring and multi-layer polymers work together.
          </p>
        </div>

        {/* Center Interactive Stage */}
        <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center min-h-0">
          
          {/* Subtle Ambient Light Glow behind Aligner */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-brand/10 blur-3xl pointer-events-none" />

          {/* Initial Packaging Box (fades away as aligner emerges) */}
          <motion.div
            style={{ opacity: boxOpacity, scale: boxScale, y: boxY }}
            className="absolute bottom-6 sm:bottom-12 w-48 sm:w-64 md:w-80 pointer-events-none z-10"
          >
            <Image
              src="/images/showcase/clearnyx-box.png"
              alt="CLEARNYX Clinical Packaging"
              width={400}
              height={300}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Floating Transparent Aligner Cutout */}
          <motion.div
            style={{
              y: alignerY,
              scale: alignerScale,
              rotate: alignerRotate,
              opacity: alignerOpacity,
            }}
            className="relative z-20 w-64 sm:w-80 md:w-[420px] max-w-full pointer-events-none"
          >
            <Image
              src="/images/showcase/aligner-cutout.png"
              alt="CLEARNYX High Precision Clear Aligner"
              width={640}
              height={500}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Callouts (Desktop Left & Right Grid) */}
          <div className="absolute inset-0 pointer-events-none hidden md:flex items-center justify-between z-30">
            
            {/* Left Column Features */}
            <motion.div
              style={{ opacity: calloutsOpacity, x: calloutsLeftX }}
              className="w-72 space-y-12"
            >
              {/* Feature 1 */}
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-cyan-brand text-xs font-bold uppercase tracking-wider mb-1">
                  <Shield className="w-4 h-4" />
                  <span>5-Axis Laser Trim</span>
                </div>
                <p className="text-xs text-navy-900 font-semibold">
                  Scalloped Gingival Margin
                </p>
                <p className="text-[11px] text-slate-secondary mt-0.5">
                  Automated laser trimming contoured along the gumline prevents soft-tissue irritation.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-sm">
                <div className="flex items-center gap-2 text-cyan-brand text-xs font-bold uppercase tracking-wider mb-1">
                  <Activity className="w-4 h-4" />
                  <span>Physiological Force</span>
                </div>
                <p className="text-xs text-navy-900 font-semibold">
                  Continuous Gentle Pressure
                </p>
                <p className="text-[11px] text-slate-secondary mt-0.5">
                  Elastomeric core dampens initial insertion stress while sustaining force over 14 days.
                </p>
              </div>
            </motion.div>

            {/* Right Column Features */}
            <motion.div
              style={{ opacity: calloutsOpacity, x: calloutsRightX }}
              className="w-72 space-y-12 text-right"
            >
              {/* Feature 3 */}
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-sm text-left">
                <div className="flex items-center gap-2 text-cyan-brand text-xs font-bold uppercase tracking-wider mb-1">
                  <Eye className="w-4 h-4" />
                  <span>Sub-Millimeter Clarity</span>
                </div>
                <p className="text-xs text-navy-900 font-semibold">
                  Anti-Reflective Microtexture
                </p>
                <p className="text-[11px] text-slate-secondary mt-0.5">
                  Diffuses ambient light naturally so teeth look real without plastic sheen.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-surface-border shadow-sm text-left">
                <div className="flex items-center gap-2 text-cyan-brand text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Attachment Wells</span>
                </div>
                <p className="text-xs text-navy-900 font-semibold">
                  Predictable Root Torque
                </p>
                <p className="text-[11px] text-slate-secondary mt-0.5">
                  CAD-engineered seating pockets deliver exact bodily tooth translation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile Bottom Features (shows on small screens below aligner) */}
          <motion.div
            style={{ opacity: calloutsOpacity }}
            className="md:hidden absolute bottom-2 inset-x-0 grid grid-cols-2 gap-2 z-30"
          >
            <div className="p-2.5 rounded-xl bg-white/95 border border-surface-border text-left">
              <span className="text-[10px] font-bold text-cyan-brand uppercase block">Laser Trim</span>
              <span className="text-[11px] font-semibold text-navy-900">Zero Gum Irritation</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/95 border border-surface-border text-left">
              <span className="text-[10px] font-bold text-cyan-brand uppercase block">Clarity</span>
              <span className="text-[11px] font-semibold text-navy-900">True Invisibility</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive Scroll Indicator */}
        <div className="max-w-md mx-auto w-full z-20 flex items-center justify-between text-[11px] text-slate-muted">
          <span>01. Unboxing</span>
          <div className="flex-1 mx-4 h-1 rounded-full bg-slate-200 overflow-hidden">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="h-full bg-cyan-brand"
            />
          </div>
          <span>02. Micro-Anatomy</span>
        </div>

      </div>
    </section>
  );
}
