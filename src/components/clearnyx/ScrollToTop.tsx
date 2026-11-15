"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Show after scrolling 320px
      if (scrollTop > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate percentage progress (0 to 100)
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculations for 44px container
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-40 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="pointer-events-auto"
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#071B2C] shadow-[0_8px_24px_rgba(7,27,44,0.12)] border border-[#E2EBF0] hover:border-[#00A6CE] hover:text-[#00A6CE] hover:shadow-[0_12px_30px_rgba(0,166,206,0.2)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
              {/* Circular SVG Scroll Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
                viewBox="0 0 44 44"
              >
                {/* Background Ring */}
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-[#EBF2F6]"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Active Dynamic Progress Ring */}
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-[#00A6CE] transition-[stroke-dashoffset] duration-150 ease-out"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset,
                  }}
                />
              </svg>

              {/* Arrow Icon */}
              <ArrowUp className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
