"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CALIBRATION_STEPS = [
  { threshold: 0, label: "INITIALIZING OPTICAL SCANNER" },
  { threshold: 24, label: "MAPPING 0.01mm SUB-MILLIMETER ARCH" },
  { threshold: 52, label: "CALIBRATING MULTI-LAYER CLEAR MATRIX" },
  { threshold: 78, label: "SYNCHRONIZING ORTHODONTIC PROTOCOL" },
  { threshold: 96, label: "CLEARNYX EXPERIENCE READY" },
];

export function CinematicPreloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentLabel, setCurrentLabel] = useState("INITIALIZING OPTICAL SCANNER");

  useEffect(() => {
    // Check if user has already seen the preloader in this session
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("clearnyx_preloader_seen");
    if (hasSeen) {
      setIsDismissed(true);
      return;
    }

    // Lock body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter simulation (smooth non-linear pacing, ~1.8 seconds total)
    const startTime = performance.now();
    const duration = 1800; // ms

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Easing curve: swift start, brief deceleration around 70%, swift finish to 100%
      const eased =
        rawProgress < 0.7
          ? Math.pow(rawProgress / 0.7, 1.2) * 70
          : 70 + Math.pow((rawProgress - 0.7) / 0.3, 0.9) * 30;

      const currentVal = Math.min(Math.round(eased), 100);
      setProgress(currentVal);

      // Update matching calibration label
      for (let i = CALIBRATION_STEPS.length - 1; i >= 0; i--) {
        if (currentVal >= CALIBRATION_STEPS[i].threshold) {
          setCurrentLabel(CALIBRATION_STEPS[i].label);
          break;
        }
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setCurrentLabel("CLEARNYX EXPERIENCE READY");
        // Hold for 250ms at 100% for impact, then trigger shutter split
        setTimeout(() => {
          setIsComplete(true);
          // Unlock body scroll once exit starts
          document.body.style.overflow = "";
          sessionStorage.setItem("clearnyx_preloader_seen", "true");
          // Remove from DOM after shutter transition finishes (700ms)
          setTimeout(() => {
            setIsDismissed(true);
          }, 750);
        }, 280);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setIsComplete(true);
    document.body.style.overflow = "";
    sessionStorage.setItem("clearnyx_preloader_seen", "true");
    setTimeout(() => {
      setIsDismissed(true);
    }, 400);
  };

  if (isDismissed) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden"
    >
      {/* TOP CURTAIN SHUTTER */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#040D17] via-[#061423] to-[#071B2C] border-b border-[#00A6CE]/30 z-20 origin-top"
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "-100%" : "0%" }}
        transition={{
          duration: 0.75,
          ease: [0.77, 0, 0.175, 1], // Cinematic high-end easing
        }}
      />

      {/* BOTTOM CURTAIN SHUTTER */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#040D17] via-[#061423] to-[#071B2C] border-t border-[#00A6CE]/30 z-20 origin-bottom"
        initial={{ y: "0%" }}
        animate={{ y: isComplete ? "100%" : "0%" }}
        transition={{
          duration: 0.75,
          ease: [0.77, 0, 0.175, 1],
        }}
      />

      {/* HORIZONTAL LASER SEAM AT THE SPLIT LINE */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#12C8E8] to-transparent z-30 pointer-events-none shadow-[0_0_20px_#12C8E8,0_0_40px_#00A6CE]"
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{
          scaleX: isComplete ? 2 : 1,
          opacity: isComplete ? [1, 0] : 0.8,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* PRELOADER FOREGROUND CONTENT */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6"
        animate={{
          opacity: isComplete ? 0 : 1,
          scale: isComplete ? 0.95 : 1,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {/* Subtle Ambient Glow Behind Logo */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[#00A6CE]/15 blur-[100px] pointer-events-none" />

        {/* Optical Scanning Grid Rings */}
        <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#00A6CE]/15 animate-[spin_24s_linear_infinite] pointer-events-none" />
        <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-[#00A6CE]/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />

        {/* Skip Button in Top Corner */}
        <button
          onClick={handleSkip}
          type="button"
          aria-label="Skip intro animation"
          className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00A6CE]/40 text-[11px] font-mono tracking-widest text-white/60 hover:text-white uppercase transition-all duration-200 cursor-pointer backdrop-blur-md"
        >
          Skip Intro ✕
        </button>

        {/* Central Brand Emblem with Optical Reticle */}
        <div className="relative mb-8 sm:mb-10 flex flex-col items-center">
          {/* Corner Optical Reticle Brackets */}
          <div className="absolute -top-4 -left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#00A6CE] opacity-80" />
          <div className="absolute -top-4 -right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#00A6CE] opacity-80" />
          <div className="absolute -bottom-4 -left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#00A6CE] opacity-80" />
          <div className="absolute -bottom-4 -right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#00A6CE] opacity-80" />

          {/* Logo with Breathing Glow */}
          <div className="relative px-6 py-4">
            <Image
              src="/brand/logo-stacked-white.png"
              alt="CLEARNYX"
              width={160}
              height={80}
              priority
              className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,166,206,0.5)]"
            />
          </div>
        </div>

        {/* Digital Calibration Counter */}
        <div className="flex items-baseline gap-1 font-mono mb-4 text-[#F0F9FC]">
          <span className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(18,200,232,0.4)]">
            {progress.toString().padStart(2, "0")}
          </span>
          <span className="text-lg font-bold text-[#00A6CE]">%</span>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-64 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-4 border border-white/5">
          {/* Filling Track */}
          <motion.div
            className="h-full bg-gradient-to-r from-[#00A6CE] via-[#12C8E8] to-[#FFFFFF] rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          >
            {/* Pulsing Glow Head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#FFFFFF,0_0_20px_#12C8E8]" />
          </motion.div>
        </div>

        {/* Real-Time Calibration Status Ticker */}
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-widest text-[#00A6CE] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12C8E8] animate-ping" />
          <span className="text-[#89AABF]">{currentLabel}</span>
        </div>

        {/* Bottom Clinical Metadata Strip */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex items-center justify-center gap-3 sm:gap-6 text-[9px] sm:text-[11px] font-mono text-[#4A6478] tracking-widest uppercase px-4 text-center">
          <span>0.01mm PRECISION</span>
          <span className="w-1 h-1 rounded-full bg-[#4A6478]" />
          <span>CDSCO MD-5</span>
          <span className="w-1 h-1 rounded-full bg-[#4A6478]" />
          <span>MULTI-LAYER BIO</span>
        </div>
      </motion.div>
    </div>
  );
}
