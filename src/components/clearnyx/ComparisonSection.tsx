"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

export function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.3 });
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Smooth back-and-forth gliding animation when not interacting
  const animateGlider = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;

    // Smooth sinusoidal wave between 28% and 72% over a 5.5-second period
    const wave = Math.sin((elapsed * Math.PI * 2) / 5.5);
    const newPos = 50 + wave * 22;

    setSliderPos(Number(newPos.toFixed(2)));
    animFrameRef.current = requestAnimationFrame(animateGlider);
  }, []);

  useEffect(() => {
    if (inView && !isInteracting) {
      startTimeRef.current = null;
      animFrameRef.current = requestAnimationFrame(animateGlider);
    } else {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [inView, isInteracting, animateGlider]);

  const handlePointerDown = () => {
    setIsInteracting(true);
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
  };

  const handlePointerUp = () => {
    // Resume gentle glide after 2.5s of inactivity
    const timeout = setTimeout(() => {
      setIsInteracting(false);
    }, 2500);

    return () => clearTimeout(timeout);
  };

  const updateSliderFromEvent = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(Number(percentage.toFixed(2)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteracting) return;
    updateSliderFromEvent(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updateSliderFromEvent(e.touches[0].clientX);
    }
  };

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-white border-b border-[#E2EBF0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A6CE] block mb-2">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight">
            Before &amp; After.
          </h2>
        </motion.div>

        {/* Centered Large Photographic Comparison Viewer with Smooth Animation */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handlePointerDown}
            onTouchEnd={handlePointerUp}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5E2EC] shadow-[0_16px_48px_rgba(7,27,44,0.08)] bg-slate-100 select-none cursor-ew-resize group"
          >
            {/* After Image Layer (Base) */}
            <div className="absolute inset-0">
              <Image
                src="/images/comparison/after.jpg"
                alt="After CLEARNYX treatment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center pointer-events-none"
              />
            </div>

            {/* Before Image Layer (Clipped Top Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                transition: isInteracting ? "none" : "clip-path 0.05s linear",
              }}
            >
              <Image
                src="/images/comparison/before.jpg"
                alt="Before CLEARNYX treatment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center pointer-events-none"
              />
            </div>

            {/* Clean Before Label */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 px-3.5 py-1.5 rounded-full bg-[#071B2C]/85 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase shadow-md pointer-events-none border border-white/15">
              Before
            </div>

            {/* Clean After Label */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-3.5 py-1.5 rounded-full bg-[#00A6CE]/90 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase shadow-md pointer-events-none border border-white/20">
              After
            </div>

            {/* Smooth Animated Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] pointer-events-none z-30"
              style={{
                left: `${sliderPos}%`,
                transition: isInteracting ? "none" : "left 0.05s linear",
              }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-[#071B2C] shadow-[0_4px_20px_rgba(7,27,44,0.25)] flex items-center justify-center border-2 border-[#00A6CE] transition-transform group-hover:scale-105">
                <ChevronsLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A6CE]" />
              </div>
            </div>

            {/* Direct Range Input for Accessibility & Direct Dragging */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPos}
              onChange={(e) => {
                setIsInteracting(true);
                setSliderPos(Number(e.target.value));
              }}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
              aria-label="Before and after clear aligner smile transformation comparison"
            />
          </div>

          {/* Minimal Instruction */}
          <p className="text-center text-xs text-[#718594] mt-4 font-medium">
            Drag or slide to compare transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
