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
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  });

  // Aligner Tray Motion
  const alignerY = useTransform(smoothProgress, [0, 0.45, 0.8, 1], [130, 0, 0, 0]);
  const alignerScale = useTransform(smoothProgress, [0, 0.45, 0.8, 1], [0.85, 1.15, 1.25, 1.25]);
  const alignerRotate = useTransform(smoothProgress, [0, 0.45, 0.8, 1], [-12, 0, 0, 0]);
  const alignerOpacity = useTransform(smoothProgress, [0, 0.08, 1], [0.5, 1, 1]);

  // Packaging Box (Phase 1)
  const boxOpacity = useTransform(smoothProgress, [0, 0.28, 0.46], [1, 0.7, 0]);
  const boxScale = useTransform(smoothProgress, [0, 0.45], [1, 0.88]);
  const boxY = useTransform(smoothProgress, [0, 0.45], [0, 45]);

  // Callouts & Lines (Phase 3: 0.5 -> 1.0)
  const calloutsOpacity = useTransform(smoothProgress, [0.5, 0.72], [0, 1]);
  const calloutsLeftX = useTransform(smoothProgress, [0.5, 0.72], [-24, 0]);
  const calloutsRightX = useTransform(smoothProgress, [0.5, 0.72], [24, 0]);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-surface-soft border-y border-surface-border">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/70 border border-cyan-300 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-brand" />
            Anatomy of Precision
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Engineered for Invisibility. Designed for Biology.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-secondary max-w-xl mx-auto">
            Scroll to inspect how sub-millimeter laser contouring and multi-layer polymers work together.
          </p>
        </div>

        {/* Center Interactive Stage */}
        <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center min-h-0">
          
          {/* Subtle Ambient Light Glow behind Aligner */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cyan-brand/15 blur-3xl pointer-events-none" />

          {/* Initial Packaging Box (fades away as aligner emerges) */}
          <motion.div
            style={{ opacity: boxOpacity, scale: boxScale, y: boxY }}
            className="absolute bottom-6 sm:bottom-10 w-48 sm:w-64 md:w-80 pointer-events-none z-10"
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
            className="relative z-20 w-64 sm:w-80 md:w-[440px] max-w-full pointer-events-none"
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

          {/* Desktop Left & Right Callout Grid with Connector Lines */}
          <div className="absolute inset-0 pointer-events-none hidden md:flex items-center justify-between z-30">
            
            {/* Left Column Features */}
            <motion.div
              style={{ opacity: calloutsOpacity, x: calloutsLeftX }}
              className="w-80 space-y-8"
            >
              {/* Feature 1 */}
              <div className="relative p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D5E2EC] shadow-md pointer-events-auto">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-cyan-brand" />
                    5-Axis Laser Trim
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-navy-900">
                  Scalloped Gingival Margin
                </h3>
                <p className="text-xs text-slate-secondary mt-1 leading-relaxed">
                  Automated laser trimming precisely contoured along the gumline prevents soft-tissue impingement.
                </p>
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-r from-cyan-300 to-cyan-500">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(0,166,206,0.8)]" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D5E2EC] shadow-md pointer-events-auto">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold uppercase tracking-wider">
                    <Activity className="w-3.5 h-3.5 text-cyan-brand" />
                    Physiological Force
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-navy-900">
                  Continuous Gentle Pressure
                </h3>
                <p className="text-xs text-slate-secondary mt-1 leading-relaxed">
                  Elastomeric core dampens initial insertion stress while sustaining biological tooth movement.
                </p>
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-r from-cyan-300 to-cyan-500">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(0,166,206,0.8)]" />
                </div>
              </div>
            </motion.div>

            {/* Right Column Features */}
            <motion.div
              style={{ opacity: calloutsOpacity, x: calloutsRightX }}
              className="w-80 space-y-8 text-left"
            >
              {/* Feature 3 */}
              <div className="relative p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D5E2EC] shadow-md pointer-events-auto">
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-l from-cyan-300 to-cyan-500">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(0,166,206,0.8)]" />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold uppercase tracking-wider">
                    <Eye className="w-3.5 h-3.5 text-cyan-brand" />
                    Sub-Millimeter Clarity
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-navy-900">
                  Anti-Reflective Microtexture
                </h3>
                <p className="text-xs text-slate-secondary mt-1 leading-relaxed">
                  Diffuses ambient light naturally so teeth look real without artificial plastic sheen or reflections.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D5E2EC] shadow-md pointer-events-auto">
                {/* Visual Line to Center */}
                <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-l from-cyan-300 to-cyan-500">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-brand shadow-[0_0_8px_rgba(0,166,206,0.8)]" />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-800 text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-brand" />
                    Attachment Wells
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-navy-900">
                  Predictable Root Torque
                </h3>
                <p className="text-xs text-slate-secondary mt-1 leading-relaxed">
                  CAD-engineered seating pockets deliver exact bodily tooth translation and rotation.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mobile Bottom Features (shows on small screens below aligner) */}
          <motion.div
            style={{ opacity: calloutsOpacity }}
            className="md:hidden absolute bottom-1 inset-x-0 grid grid-cols-2 gap-2 z-30"
          >
            <div className="p-3 rounded-xl bg-white border border-[#D5E2EC] text-left shadow-sm">
              <span className="text-[10px] font-bold text-cyan-800 uppercase block">5-Axis Laser Trim</span>
              <span className="text-xs font-bold text-navy-900">Zero Gum Irritation</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#D5E2EC] text-left shadow-sm">
              <span className="text-[10px] font-bold text-cyan-800 uppercase block">Optical Clarity</span>
              <span className="text-xs font-bold text-navy-900">Anti-Reflective</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Interactive Scroll Indicator */}
        <div className="max-w-md mx-auto w-full z-20 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>01. Unboxing</span>
          <div className="flex-1 mx-4 h-1.5 rounded-full bg-slate-200 overflow-hidden">
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
