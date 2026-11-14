"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Utensils,
  Box,
  Droplets,
  Smile,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface LifestyleMoment {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlight: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const moments: LifestyleMoment[] = [
  {
    id: "eat",
    num: "01",
    title: "Eat freely",
    subtitle: "Dine Without Limits",
    description:
      "Pop aligners out in seconds before meals. Enjoy apples, popcorn, crusty breads, and hot dishes with zero wire worries.",
    image: "/images/lifestyle/eat.jpg",
    highlight: "Zero food restrictions",
    badge: "Dining Freedom",
    icon: Utensils,
  },
  {
    id: "remove",
    num: "02",
    title: "Remove",
    subtitle: "Discreet & On-the-Go",
    description:
      "Take them out effortlessly whenever you need to for important meetings, photoshoots, or events. Pocket case included.",
    image: "/images/lifestyle/remove.jpg",
    highlight: "Compact case included",
    badge: "Total Flexibility",
    icon: Box,
  },
  {
    id: "brush",
    num: "03",
    title: "Brush",
    subtitle: "Keep Your Routine",
    description:
      "Maintain your normal brushing and flossing routine. No threaders or bracket brushes required to keep teeth sparkling.",
    image: "/images/lifestyle/brush.jpg",
    highlight: "100% normal oral care",
    badge: "Pristine Hygiene",
    icon: Droplets,
  },
  {
    id: "wear",
    num: "04",
    title: "Wear",
    subtitle: "All-Day Comfort",
    description:
      "Engineered from medical-grade polymer with smooth laser-polished edges that hug your gumline invisibly.",
    image: "/images/lifestyle/wear.jpg",
    highlight: "20–22 hrs daily wear",
    badge: "Virtually Invisible",
    icon: Smile,
  },
  {
    id: "repeat",
    num: "05",
    title: "Repeat",
    subtitle: "Step-by-Step Shift",
    description:
      "Switch to your next tray every 1-2 weeks. Track predictable, doctor-verified movement toward your best smile.",
    image: "/images/lifestyle/repeat.jpg",
    highlight: "Weekly visible results",
    badge: "Predictable Shifts",
    icon: RefreshCw,
  },
];

export function LifestyleOrbitSection() {
  const [activeId, setActiveId] = useState<string>("wear");
  const { openModal } = useBookModal();

  return (
    <section
      id="built-for-life"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FCFD] to-white"
    >
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built around your life</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]">
            Your treatment should fit your life.{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00BCE6] to-[#0092B5] italic">
              Not the other way around.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed">
            CLEARNYX aligners are designed to adapt to your everyday routine, so
            you can keep doing what you love — while we work on your smile. Same
            you. Brighter tomorrow.
          </p>
        </div>

        {/* 5-Moment Editorial Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14 sm:mb-18">
          {moments.map((m) => {
            const Icon = m.icon;
            const isActive = activeId === m.id;

            return (
              <article
                key={m.id}
                onMouseEnter={() => setActiveId(m.id)}
                className={`group relative bg-white rounded-3xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isActive
                    ? "border-[#00A6CE]/60 shadow-[0_20px_45px_-8px_rgba(0,166,206,0.18)]"
                    : "border-[#E2EBF0] hover:border-[#00A6CE]/40 shadow-[0_4px_24px_-4px_rgba(7,27,44,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,166,206,0.12)]"
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A6CE] to-[#4DD4F0] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div>
                  {/* Photo Frame */}
                  <div className="relative h-48 sm:h-52 w-auto m-3 sm:m-3.5 mb-0 rounded-2xl overflow-hidden bg-[#F2FAFD]">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Step Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-[#071B2C]/80 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-1 rounded-full border border-white/20 shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-pulse" />
                      <span>{m.num}</span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-[#00A6CE] flex items-center justify-center shadow-xs">
                      <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>

                    {/* Image Caption Pill */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md inline-block">
                        {m.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 pt-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-black text-[#071B2C] group-hover:text-[#00A6CE] transition-colors tracking-tight">
                        {m.title}
                      </h3>
                    </div>

                    <p className="text-xs font-bold text-[#00A6CE] mb-2 uppercase tracking-wide">
                      {m.subtitle}
                    </p>

                    <p className="text-xs sm:text-[13px] text-[#647887] leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="p-4 sm:p-5 pt-0">
                  <div className="pt-3 border-t border-[#F0F4F7] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#071B2C] bg-[#F2F7FA] group-hover:bg-[#EBF8FB] group-hover:text-[#008BAF] transition-colors px-2.5 py-1 rounded-lg w-full">
                      <CheckCircle2 className="w-3 h-3 text-[#00A6CE] shrink-0" />
                      <span className="truncate">{m.highlight}</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Centerpiece Spotlight Card: Physical Aligner Engineering & Lifestyle Comparison */}
        <div className="bg-gradient-to-r from-[#071B2C] via-[#0B2540] to-[#071B2C] rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-[#071B2C]/15 border border-white/10">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -right-24 -top-24 w-80 h-80 bg-[#00A6CE]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-[#00A6CE]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Why CLEARNYX fits real life */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#4DD4F0] text-xs font-bold tracking-wide uppercase mb-4 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Engineered for Real Everyday Life</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug mb-4">
                No metal wires. No emergency clinic trips. Just clear results.
              </h3>

              <p className="text-sm sm:text-base text-[#94A9B8] leading-relaxed mb-6 max-w-xl">
                Traditional braces demand strict food bans and specialized wire
                threaders. CLEARNYX multi-layer aligners slide on and off seamlessly,
                allowing you to eat, brush, and smile with zero friction.
              </p>

              {/* 3 Pillars Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-[#00A6CE]/20 text-[#4DD4F0] flex items-center justify-center mb-2">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">
                    Eat Any Food
                  </p>
                  <p className="text-[11px] text-[#8EA3B3]">
                    No broken brackets or food traps
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-[#00A6CE]/20 text-[#4DD4F0] flex items-center justify-center mb-2">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">
                    Brush in Seconds
                  </p>
                  <p className="text-[11px] text-[#8EA3B3]">
                    Normal flossing &amp; hygiene
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-[#00A6CE]/20 text-[#4DD4F0] flex items-center justify-center mb-2">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">
                    Virtually Invisible
                  </p>
                  <p className="text-[11px] text-[#8EA3B3]">
                    Crystal clear medical polymer
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Start Your Smile Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/15 hover:border-white/30 transition-all duration-200"
                >
                  <span>Explore Multi-Layer Polymer</span>
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Aligner Tray Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                {/* Ambient Halo Ring */}
                <div className="absolute inset-4 rounded-full border border-white/15 bg-gradient-to-tr from-[#00A6CE]/15 to-transparent backdrop-blur-xs pointer-events-none" />
                <div className="absolute w-44 h-44 rounded-full bg-[#00A6CE]/25 blur-2xl pointer-events-none" />

                {/* 3D Aligner Cutout Image */}
                <div className="relative w-64 h-48 drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/showcase/aligner-cutout.png"
                    alt="CLEARNYX Precision Aligner Tray"
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, 340px"
                    className="object-contain"
                  />
                </div>

                {/* Micro Floating Badge 1 (Top-Left) */}
                <div className="absolute top-2 left-0 bg-white/95 text-[#071B2C] backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg border border-white/80 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse" />
                  <span className="text-[11px] font-black">
                    Scalloped Gumline Trim
                  </span>
                </div>

                {/* Micro Floating Badge 2 (Bottom-Right) */}
                <div className="absolute bottom-4 right-0 bg-[#071B2C]/90 text-white backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg border border-white/10 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#4DD4F0]">
                    0.01mm Laser Precision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
