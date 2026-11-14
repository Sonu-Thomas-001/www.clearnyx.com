"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CinematicPreloader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasSeen =
      typeof window !== "undefined" &&
      sessionStorage.getItem("clearnyx_preloader_seen");

    if (hasSeen) {
      setIsDismissed(true);
      return;
    }

    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    // Timing sequence:
    // 0.0s - 0.7s: Logo fades and lifts from darkness
    // 0.6s - 1.4s: Diamond specular sheen sweeps across the logo mark
    // 1.5s: Cinematic aperture fade begins
    // 2.1s: Fully dismissed
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("clearnyx_preloader_seen", "true");

      const dismissTimer = setTimeout(() => {
        setIsDismissed(true);
      }, 600);

      return () => clearTimeout(dismissTimer);
    }, 1500);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (isDismissed) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none select-none overflow-hidden bg-gradient-to-b from-[#02070D] via-[#05111D] to-[#071B2C]"
    >
      {/* Living Ambient Cyan Aura behind logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: isExiting ? 0 : [0.3, 0.55, 0.4],
          scale: isExiting ? 1.25 : [0.95, 1.15, 1.05],
        }}
        transition={{
          opacity: { duration: 1.5, ease: "easeInOut" },
          scale: { duration: 1.6, ease: "easeInOut" },
        }}
        className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-[#00A6CE]/20 blur-[120px] pointer-events-none"
      />

      {/* Centerpiece Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 1.06 : 1,
          filter: isExiting ? "blur(6px)" : "blur(0px)",
        }}
        transition={{
          duration: isExiting ? 0.5 : 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 flex items-center justify-center p-6"
      >
        {/* Base Logo */}
        <div className="relative drop-shadow-[0_0_40px_rgba(0,166,206,0.5)]">
          <Image
            src="/brand/logo-stacked-white.png"
            alt="CLEARNYX"
            width={260}
            height={130}
            priority
            className="w-48 sm:w-60 md:w-64 h-auto object-contain"
          />

          {/* Mask-Clipped Specular Light Sheen (Only shines INSIDE the logo mark) */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              WebkitMaskImage: "url('/brand/logo-stacked-white.png')",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/brand/logo-stacked-white.png')",
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
            }}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: ["-100%", "130%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 0.95,
                delay: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.85) 50%, rgba(18,200,232,0.95) 55%, transparent 80%)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
