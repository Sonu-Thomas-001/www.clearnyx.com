"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Box,
  Droplets,
  EyeOff,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface LifestyleMoment {
  id: string;
  num: string;
  label: string;
  headline: string;
  description: string;
  image: string;
  benefits: string[];
  bracesComparison: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MOMENTS: LifestyleMoment[] = [
  {
    id: "eat",
    num: "01",
    label: "Dining Freedom",
    headline: "Eat whatever you crave.",
    description:
      "Pop aligners out in 3 seconds before meals. Enjoy apples, nuts, and your favorite foods with zero wire traps or broken brackets.",
    image: "/images/lifestyle/eat.jpg",
    benefits: ["Zero food restrictions", "No trapped food or emergency wire repairs"],
    bracesComparison: "Traditional braces enforce strict food bans and wire traps.",
    icon: Utensils,
  },
  {
    id: "remove",
    num: "02",
    label: "On-The-Go Flexibility",
    headline: "Removable for your biggest moments.",
    description:
      "Slip trays into your pocket magnetic case for executive presentations, photoshoots, or active contact sports. You remain in full control.",
    image: "/images/lifestyle/remove.jpg",
    benefits: ["Sleek pocket travel case included", "Total flexibility without breaking cadence"],
    bracesComparison: "Fixed metal brackets cannot be removed for events.",
    icon: Box,
  },
  {
    id: "brush",
    num: "03",
    label: "Standard Oral Care",
    headline: "Brush and floss normally.",
    description:
      "Maintain your regular 2-minute brushing and flossing routine with complete enamel access. No specialized wire threaders or elevated plaque risk.",
    image: "/images/lifestyle/brush.jpg",
    benefits: ["100% normal daily flossing", "Healthier gums and lower plaque buildup"],
    bracesComparison: "Braces require 30-minute threader routines with high plaque risk.",
    icon: Droplets,
  },
  {
    id: "wear",
    num: "04",
    label: "Invisible Fit",
    headline: "Engineered to hug teeth invisibly.",
    description:
      "Crystal-clear biocompatible polymer with 5-axis laser-scalloped gingival margins. People notice your radiant smile, not your aligners.",
    image: "/images/lifestyle/wear.jpg",
    benefits: ["Laser-scalloped gumline contour", "High optical transparency & comfort"],
    bracesComparison: "Highly visible metal hardware and bracket friction.",
    icon: EyeOff,
  },
];

export function LifestyleOrbitSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openModal } = useBookModal();

  const current = MOMENTS[activeIndex];
  const IconComponent = current.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? MOMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === MOMENTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-[#071B2C] border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, Concise, Editorial */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F6FA] text-[#00A6CE] text-xs font-bold tracking-wider uppercase mb-3 border border-[#C5ECF5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
            <span>Lifestyle Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
            Your Treatment Fits Your Life.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#556977] leading-relaxed max-w-xl mx-auto">
            Removable in seconds. Zero dietary restrictions, wire interference, or interrupted
            routines.
          </p>

          {/* Quick Pillar Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
            {MOMENTS.map((m, idx) => {
              const TabIcon = m.icon;
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-[#071B2C] text-white shadow-sm"
                      : "bg-[#F4F8FA] text-[#556977] hover:bg-[#EAEFF3] hover:text-[#071B2C] border border-[#E2EBF0]"
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isCurrent ? "text-[#00A6CE]" : ""}`} />
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Showcase Card (Split Image + Concise Narrative) */}
        <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl border border-[#D5E2EC] p-5 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(7,27,44,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Lifestyle Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] rounded-xl overflow-hidden border border-[#D5E2EC] bg-slate-100 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.headline}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Corner Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#071B2C]/90 backdrop-blur-sm text-white text-[11px] font-bold flex items-center gap-1.5">
                  <IconComponent className="w-3 h-3 text-[#00A6CE]" />
                  <span>{current.label}</span>
                </div>
              </div>
            </div>

            {/* Right: Concise Benefit Breakdown */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Moment Tracker & Carousel Arrows */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#00A6CE] uppercase tracking-wider">
                    Moment {current.num} of 04
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous moment"
                      className="w-7 h-7 rounded-full bg-white border border-[#D5E2EC] hover:bg-[#EAEFF3] text-[#071B2C] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next moment"
                      className="w-7 h-7 rounded-full bg-white border border-[#D5E2EC] hover:bg-[#EAEFF3] text-[#071B2C] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Punchy Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B2C] tracking-tight leading-snug">
                  {current.headline}
                </h3>

                {/* Short Paragraph (max 2 lines) */}
                <p className="mt-2 text-sm sm:text-base text-[#556977] leading-relaxed">
                  {current.description}
                </p>

                {/* 2 Crisp Bullet Pills */}
                <div className="mt-4 space-y-2">
                  {current.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#071B2C] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Mini Comparison Strip */}
                <div className="mt-5 p-3 rounded-xl bg-white border border-[#E2EBF0] text-xs">
                  <span className="font-bold text-[#718594] block text-[10px] uppercase tracking-wider mb-0.5">
                    Traditional Braces vs. CLEARNYX
                  </span>
                  <p className="text-[#556977]">
                    {current.bracesComparison}
                  </p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-[#EAEFF3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#718594]">
                  <ShieldCheck className="w-4 h-4 text-[#00A6CE]" />
                  <span>100% Doctor-directed treatment</span>
                </div>

                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
