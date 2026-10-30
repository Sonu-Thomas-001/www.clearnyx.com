"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth progress counter reaching 100% in ~1.2s
    const startTime = performance.now();
    const duration = 1100; // ms

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressPercent = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(progressPercent);

      if (progressPercent < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Hold briefly at 100% for visual polish
        const timer = setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 180);
        return () => clearTimeout(timer);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="clearnyx-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white pointer-events-none select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#DDF7FC]/80 rounded-full blur-[120px] pointer-events-none" />

          {/* Centered Brand Loading Experience */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Brand Logo with Gentle Pulse */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-44 sm:w-56 h-10 sm:h-12 mb-8"
            >
              <Image
                src="/images/Clearnyx_Logo_Horizontal.png"
                alt="CLEARNYX"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Precision Loading Bar */}
            <div className="w-52 sm:w-64 h-[3px] rounded-full bg-[#E5F7FB] overflow-hidden relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A6CE] to-[#071B2C] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Micro Calibration Indicator */}
            <div className="w-52 sm:w-64 flex items-center justify-between mt-3 text-[10px] tracking-[0.2em] font-bold text-[#5A7184] uppercase">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-pulse" />
                Calibrating
              </span>
              <span className="font-mono text-[#00A6CE]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
