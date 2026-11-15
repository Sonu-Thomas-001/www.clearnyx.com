"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GitCommit, CheckCircle2, MoveRight, Clock, Target } from "lucide-react";

export function SequentialStagingParallax() {
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

  // Aligner Track & Angle Transformations
  const alignerX = useTransform(smoothProgress, [0, 0.5, 1], [-60, 0, 60]);
  const alignerRotate = useTransform(smoothProgress, [0, 0.5, 1], [-8, 0, 8]);
  const alignerScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.1, 1]);

  // Stage Switcher States
  const stage1Opacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const stage2Opacity = useTransform(smoothProgress, [0.3, 0.45, 0.7], [0, 1, 0]);
  const stage3Opacity = useTransform(smoothProgress, [0.65, 0.85], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[270vh] bg-surface-soft border-y border-surface-border">
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-brand text-xs font-bold tracking-wider uppercase mb-2">
            <GitCommit className="w-3.5 h-3.5" />
            Sequential Tooth Movement
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            How 0.2mm Increments Transform a Smile
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-secondary max-w-xl mx-auto">
            Scroll to follow how calibrated sequential trays progressively guide teeth from initial crowding to finished occlusion.
          </p>
        </div>

        {/* Center Orthodontic Stage & Floating Aligner */}
        <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center min-h-0">
          
          {/* Virtual Orthodontic Arch Guide (Subtle curved guide) */}
          <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-32 border-b-2 border-dashed border-cyan-200/60 rounded-[100%] pointer-events-none" />

          {/* Floating Staged Aligner */}
          <motion.div
            style={{
              x: alignerX,
              rotate: alignerRotate,
              scale: alignerScale,
            }}
            className="relative z-20 w-72 sm:w-96 md:w-[460px] pointer-events-none"
          >
            <Image
              src="/images/products/clearnyx-aligner-macro.webp"
              alt="CLEARNYX Sequential Orthodontic Aligner"
              width={600}
              height={420}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Dynamic Stage Dossier Overlay (Changes with scroll) */}
          <div className="absolute top-4 sm:top-8 right-4 sm:right-12 z-30 max-w-xs sm:max-w-sm">
            {/* Stage 1 Card */}
            <motion.div
              style={{ opacity: stage1Opacity }}
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-surface-border shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-bold text-cyan-brand uppercase tracking-wider mb-1">
                <span>Phase 01 • Stages 1–6</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200">Expansion</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-navy-900">
                Initial Alignment & Arch Preparation
              </h3>
              <p className="text-xs text-slate-secondary mt-1">
                Relieving rotational anterior crowding through gentle transversal arch expansion at 0.20mm velocity per tray.
              </p>
            </motion.div>

            {/* Stage 2 Card */}
            <motion.div
              style={{ opacity: stage2Opacity }}
              className="absolute inset-0 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-surface-border shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-bold text-cyan-brand uppercase tracking-wider mb-1">
                <span>Phase 02 • Stages 7–16</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200">Bodily Root</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-navy-900">
                Torque Control & Space Closure
              </h3>
              <p className="text-xs text-slate-secondary mt-1">
                Precise engagement of composite attachments allows bodily translation of canine and premolar roots without tipping.
              </p>
            </motion.div>

            {/* Stage 3 Card */}
            <motion.div
              style={{ opacity: stage3Opacity }}
              className="absolute inset-0 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-surface-border shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-bold text-cyan-brand uppercase tracking-wider mb-1">
                <span>Phase 03 • Stages 17+</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600">Finishing</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-navy-900">
                Occlusal Detailing & Retention
              </h3>
              <p className="text-xs text-slate-secondary mt-1">
                Fine interdigitation of bite contacts and transition to night-time retention retainers to preserve final arch alignment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Biomechanical Protocol Ribbon */}
        <div className="max-w-4xl mx-auto w-full z-20 grid grid-cols-3 gap-2 sm:gap-4 bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-surface-border shadow-sm">
          <div className="flex items-center gap-2 sm:gap-3">
            <Target className="w-4 h-4 text-cyan-brand shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-navy-900">0.20 – 0.25mm</div>
              <div className="text-[10px] sm:text-[11px] text-slate-muted">Linear movement / tray</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Clock className="w-4 h-4 text-cyan-brand shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-navy-900">20–22 Hours</div>
              <div className="text-[10px] sm:text-[11px] text-slate-muted">Daily wear protocol</div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-navy-900">10–14 Days</div>
              <div className="text-[10px] sm:text-[11px] text-slate-muted">Tray change frequency</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
