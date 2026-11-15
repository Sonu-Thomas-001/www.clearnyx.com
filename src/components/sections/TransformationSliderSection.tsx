"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck } from "lucide-react";

export function TransformationSliderSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <Badge variant="cyan">CLINICAL TRANSFORMATION</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            See the Difference Precision Makes.
          </h2>
          <p className="text-base text-slate-secondary leading-relaxed max-w-xl mx-auto">
            Drag the interactive slider to inspect anterior alignment and occlusal correction achieved through sequential clear aligner therapy.
          </p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-surface-soft border border-surface-border shadow-elevated select-none cursor-ew-resize group"
          >
            {/* After Image (Background / Base Layer) */}
            <div className="absolute inset-0">
              <Image
                src="/images/products/after-smile.jpg"
                alt="Orthodontic alignment finish with CLEARNYX clear aligners"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900/90 backdrop-blur-md text-white border border-navy-700 shadow-sm">
                  After Treatment
                </span>
              </div>
            </div>

            {/* Before Image (Foreground Clipped Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[600px] md:min-w-[896px]">
                <Image
                  src="/images/products/before-smile.jpg"
                  alt="Pre-treatment malocclusion baseline"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-center pointer-events-none"
                />
              </div>
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-navy-900 border border-surface-border shadow-sm">
                  Before Baseline
                </span>
              </div>
            </div>

            {/* Draggable Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(0,166,206,0.6)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Cyan Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-brand text-white border-2 border-white shadow-cyan flex items-center justify-center font-bold text-xs select-none">
                <span>↔</span>
              </div>
            </div>

            {/* Range Input for accessibility & mobile touch */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Drag to compare smile before and after"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-40"
            />
          </div>

          {/* Under-Slider Metadata Bar */}
          <div className="mt-5 p-4 rounded-2xl bg-surface-soft border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-secondary">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0" />
              <span>
                <strong>Clinical Scope:</strong> Moderate anterior crowding and rotation corrected over planned sequential aligner wear.
              </span>
            </div>
            <div className="text-[11px] text-slate-muted">
              Slide left or right to inspect tooth repositioning
            </div>
          </div>

          <div className="mt-3 text-center text-[11px] text-slate-muted flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-brand" />
            <span>
              Disclaimer: Clinical outcomes vary depending on diagnostic case complexity, bone morphology, and patient wear compliance (recommended 22–24h daily).
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

