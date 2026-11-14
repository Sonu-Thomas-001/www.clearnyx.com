"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
  Clock,
  Check,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface LifestyleMoment {
  id: string;
  num: string;
  timeOfDay: string;
  tabLabel: string;
  title: string;
  headline: string;
  accent: string;
  description: string;
  image: string;
  badge: string;
  specs: {
    title: string;
    detail: string;
  }[];
  clearnyxAdvantage: string;
  bracesLimitation: string;
  highlight: string;
  icon: React.ComponentType<{ className?: string }>;
}

const moments: LifestyleMoment[] = [
  {
    id: "eat",
    num: "01",
    timeOfDay: "08:30 AM • Dining",
    tabLabel: "Eat Freely",
    title: "Eat freely",
    headline: "Eat whatever you crave.",
    accent: "No wire traps. Zero food bans.",
    description:
      "Traditional fixed braces enforce strict dietary bans on crunchy, chewy, or crusty foods. CLEARNYX aligners pop out in seconds before dining, giving you total freedom to enjoy your favorite meals without fear of snapped wires or emergency bracket repairs.",
    image: "/images/lifestyle/eat.jpg",
    badge: "Dining Freedom",
    specs: [
      {
        title: "Zero Food Restrictions",
        detail: "Popcorn, apples, nuts, and curries remain 100% on your menu.",
      },
      {
        title: "Instant Click-Out Mechanism",
        detail: "Discreetly remove trays in 3 seconds before meals or hot drinks.",
      },
      {
        title: "Pristine Appliance Hygiene",
        detail: "Aligners stay clean and stain-free since you never chew with them.",
      },
    ],
    clearnyxAdvantage: "Pop aligners out in 3s, eat whatever you like, rinse & clip back in.",
    bracesLimitation: "Strict bans on apples, popcorn & hard bread with food trapped in wires.",
    highlight: "Zero food bans",
    icon: Utensils,
  },
  {
    id: "remove",
    num: "02",
    timeOfDay: "01:15 PM • Social & Work",
    tabLabel: "Discreet Removal",
    title: "Remove on-the-go",
    headline: "Total flexibility for your biggest moments.",
    accent: "Photoshoots, key speeches & athletic events.",
    description:
      "Have an executive client presentation, keynote speech, wedding photoshoot, or athletic competition? CLEARNYX slips out discreetly and rests securely in your pocket-sized magnetic case. You stay in full control of your schedule without breaking your orthodontic cadence.",
    image: "/images/lifestyle/remove.jpg",
    badge: "Pocket Flexibility",
    specs: [
      {
        title: "Pocket Magnetic Travel Case",
        detail: "Sleek, ventilated protective case slides into any pocket or purse.",
      },
      {
        title: "Camera-Ready Confidence",
        detail: "Take them out for high-stakes photoshoots, video shoots, or dates.",
      },
      {
        title: "Contact Sports Compatibility",
        detail: "Zero mouthguard friction or lip lacerations during athletic matches.",
      },
    ],
    clearnyxAdvantage: "Removable on your terms for meetings, photos, or active sports.",
    bracesLimitation: "Permanently bonded metal brackets cannot be removed for events.",
    highlight: "Compact case included",
    icon: Box,
  },
  {
    id: "brush",
    num: "03",
    timeOfDay: "09:00 PM • Evening Care",
    tabLabel: "Normal Oral Care",
    title: "Keep your routine",
    headline: "Floss and brush like you always have.",
    accent: "No wire threaders. Pristine gum health.",
    description:
      "Metal brackets create bacteria pockets and demand time-consuming wire threaders, interdental brush kits, and elevated gum inflammation. With CLEARNYX, remove your trays and complete your regular brushing and flossing routine in minutes with full enamel access.",
    image: "/images/lifestyle/brush.jpg",
    badge: "Pristine Oral Health",
    specs: [
      {
        title: "100% Standard Flossing",
        detail: "Direct interdental access with normal dental floss — zero threaders.",
      },
      {
        title: "Lower Plaque & Tartar Buildup",
        detail: "No orthodontic hardware creating hard-to-reach bacterial traps.",
      },
      {
        title: "Effortless Appliance Rinsing",
        detail: "Clean trays with cool water and soft brush in under 30 seconds.",
      },
    ],
    clearnyxAdvantage: "Effortless 2-minute brushing with complete enamel and gumline access.",
    bracesLimitation: "Lengthy 30-minute flossing routines with high plaque build-up risks.",
    highlight: "100% normal oral care",
    icon: Droplets,
  },
  {
    id: "wear",
    num: "04",
    timeOfDay: "All Day • 20–22 Hours",
    tabLabel: "Invisible Fit",
    title: "Wear invisibly",
    headline: "Engineered to hug your teeth invisibly.",
    accent: "Laser-scalloped gingival margins.",
    description:
      "Crafted from advanced medical-grade polymer with proprietary multi-layer elastomeric cores, CLEARNYX aligners fit with 0.01mm sub-millimeter precision. The margins are laser-scalloped precisely along your gingival margin, so people notice your radiant smile — never your aligners.",
    image: "/images/lifestyle/wear.jpg",
    badge: "Virtually Invisible",
    specs: [
      {
        title: "0.01mm Laser-Smoothed Edges",
        detail: "Scalloped along your gumline to prevent cheek or tongue scraping.",
      },
      {
        title: "High-Clarity Optical Polymer",
        detail: "Ultra-low surface reflection delivers true aesthetic invisibility.",
      },
      {
        title: "Continuous Biomechanical Force",
        detail: "Gentle physiological force distribution eliminates acute wire ache.",
      },
    ],
    clearnyxAdvantage: "Crystal-clear optical clarity with custom laser-smoothed gingival contours.",
    bracesLimitation: "Visible silver brackets and poking wires requiring wax packs.",
    highlight: "20–22 hrs daily wear",
    icon: Smile,
  },
  {
    id: "repeat",
    num: "05",
    timeOfDay: "Every 1–2 Weeks • Progress",
    tabLabel: "Weekly Shifts",
    title: "Switch & progress",
    headline: "Noticeable alignment week after week.",
    accent: "Doctor-verified 3D digital sequencing.",
    description:
      "Every 7 to 14 days, you step up to your next numbered tray. Each stage gently guides specific teeth by fractions of a millimeter according to your orthodontist-approved digital treatment plan. Track your transformation in the mirror with clear, predictable milestones.",
    image: "/images/lifestyle/repeat.jpg",
    badge: "Predictable Shifts",
    specs: [
      {
        title: "Numbered Sequential Trays",
        detail: "Pre-labeled pouches so you always know your exact treatment stage.",
      },
      {
        title: "Orthodontist-Guided Protocol",
        detail: "Every tooth rotation is planned and monitored by certified clinicians.",
      },
      {
        title: "Visible Transformation in Weeks",
        detail: "Noticeable aesthetic changes often evident within the first 4–6 weeks.",
      },
    ],
    clearnyxAdvantage: "Planned tray steps at home with predictable digital milestone progress.",
    bracesLimitation: "Painful monthly chairside manual wire tightening sessions.",
    highlight: "Weekly visible results",
    icon: RefreshCw,
  },
];

export function LifestyleOrbitSection() {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Default to 'wear' (index 3)
  const { openModal } = useBookModal();

  const currentMoment = moments[activeIndex];
  const Icon = currentMoment.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : moments.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < moments.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="built-for-life"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FCFD] to-white"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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
            CLEARNYX aligners adapt seamlessly to your everyday routine. Eat, brush,
            speak, and socialize with zero wire interference. Same you. Brighter tomorrow.
          </p>
        </div>

        {/* 1. Interactive Moment Navigation Rail (Top Tabs) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12">
          {moments.map((m, idx) => {
            const TabIcon = m.icon;
            const isCurrent = idx === activeIndex;

            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                  isCurrent
                    ? "bg-[#071B2C] text-white shadow-lg shadow-[#071B2C]/20 scale-[1.03]"
                    : "bg-white hover:bg-[#F2FAFD] text-[#071B2C]/70 hover:text-[#071B2C] border border-[#E2EBF0]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                    isCurrent
                      ? "bg-[#00A6CE] text-white"
                      : "bg-[#EEF3F6] text-[#647887]"
                  }`}
                >
                  {m.num}
                </span>
                <span>{m.tabLabel}</span>
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12C8E8] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2. Main Cinematic Interactive Stage (Editorial Split Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10 sm:mb-14">
          {/* Left Column: Rich Lifestyle Photographic Canvas (5 Cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] lg:min-h-[520px] rounded-3xl overflow-hidden border border-[#DCE8EE] shadow-[0_16px_40px_-8px_rgba(7,27,44,0.12)] bg-[#071B2C]">
              {/* Dynamic Image Cross-Fade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMoment.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentMoment.image}
                    alt={currentMoment.headline}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  {/* Cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/90 via-[#071B2C]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#071B2C]/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                {/* Time of Day Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071B2C]/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-[#00A6CE]" />
                  <span>{currentMoment.timeOfDay}</span>
                </div>

                {/* Category Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#071B2C] text-[11px] font-extrabold shadow-md border border-white/80">
                  <Icon className="w-3.5 h-3.5 text-[#00A6CE]" />
                  <span>{currentMoment.badge}</span>
                </div>
              </div>

              {/* Bottom Glassmorphic HUD Card */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-[#071B2C]/85 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl text-white shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#00A6CE] uppercase font-bold">
                      CLEARNYX PATIENT PROTOCOL
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00A6CE]/20 text-[#4DD4F0] text-[10px] font-bold border border-[#00A6CE]/30">
                      <Check className="w-3 h-3" />
                      <span>{currentMoment.highlight}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#E2EBF0] leading-snug">
                    &ldquo;{currentMoment.description.slice(0, 120)}...&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Clinical Comparison Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E2EBF0] shadow-[0_12px_36px_rgba(7,27,44,0.06)] flex flex-col justify-between">
            <div>
              {/* Header Row: Step Pill & Progress Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FB] border border-[#00A6CE]/25 text-[#00A6CE] text-xs font-black tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse" />
                  <span>MOMENT {currentMoment.num} OF 05</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous lifestyle moment"
                    className="w-8 h-8 rounded-full bg-[#F2F7FA] hover:bg-[#E5F1F6] border border-[#E2EBF0] text-[#071B2C] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-[#647887]">
                    {currentMoment.num} / 05
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next lifestyle moment"
                    className="w-8 h-8 rounded-full bg-[#F2F7FA] hover:bg-[#E5F1F6] border border-[#E2EBF0] text-[#071B2C] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071B2C] tracking-tight leading-tight">
                {currentMoment.headline}
              </h3>
              <p className="text-base sm:text-lg font-bold text-[#00A6CE] mt-1.5">
                {currentMoment.accent}
              </p>

              {/* Long Description */}
              <p className="mt-4 text-sm sm:text-base text-[#647887] leading-relaxed">
                {currentMoment.description}
              </p>

              {/* 3 Tactile Clinical Spec Cards */}
              <div className="mt-6 space-y-2.5">
                {currentMoment.specs.map((spec) => (
                  <div
                    key={spec.title}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FCFD] border border-[#E2EBF0] hover:border-[#00A6CE]/40 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#071B2C]">
                        {spec.title}
                      </p>
                      <p className="text-xs text-[#647887] leading-relaxed mt-0.5">
                        {spec.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Real World Comparison Box */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#F0FBFD] via-[#F8FCFD] to-[#F0FBFD] border border-[#D0EBF2]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/80 border border-[#E2EBF0]">
                    <span className="text-[10px] font-black uppercase text-[#E53E3E] tracking-wider block mb-1">
                      Traditional Metal Braces
                    </span>
                    <p className="text-[#647887] leading-snug">
                      {currentMoment.bracesLimitation}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#EBF9FC] border border-[#00A6CE]/30">
                    <span className="text-[10px] font-black uppercase text-[#00A6CE] tracking-wider block mb-1">
                      CLEARNYX Alignment
                    </span>
                    <p className="text-[#071B2C] font-semibold leading-snug">
                      {currentMoment.clearnyxAdvantage}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Panel Actions */}
            <div className="mt-8 pt-6 border-t border-[#F0F4F7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#647887]">
                <ShieldCheck className="w-4 h-4 text-[#00A6CE]" />
                <span className="font-semibold">
                  Orthodontist-supervised alignment protocol
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white text-xs font-bold tracking-wide shadow-md shadow-[#00A6CE]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Interactive Mini-Thumbnail Gallery (Visual Anchor Rail) */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-14 sm:mb-18">
          {moments.map((m, idx) => {
            const isCurrent = idx === activeIndex;

            return (
              <button
                key={`thumb-${m.id}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative text-left p-3 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-3 ${
                  isCurrent
                    ? "bg-[#071B2C] text-white border-[#00A6CE] shadow-lg shadow-[#00A6CE]/15 scale-[1.02]"
                    : "bg-white hover:bg-[#F8FCFD] text-[#071B2C] border-[#E2EBF0] hover:border-[#00A6CE]/40 shadow-xs"
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#F2FAFD]">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isCurrent ? "text-[#00A6CE]" : "text-[#8295A3]"
                      }`}
                    >
                      {m.num}
                    </span>
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#12C8E8] animate-pulse" />
                    )}
                  </div>
                  <p
                    className={`text-xs font-extrabold truncate mt-0.5 ${
                      isCurrent ? "text-white" : "text-[#071B2C]"
                    }`}
                  >
                    {m.title}
                  </p>
                  <p
                    className={`text-[10px] truncate ${
                      isCurrent ? "text-[#94A9B8]" : "text-[#8295A3]"
                    }`}
                  >
                    {m.badge}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 4. Centerpiece Engineering Showcase Card (Physical Appliance Distinction) */}
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

              {/* 3 Quick Highlight Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#00A6CE]/20 text-[#00A6CE] flex items-center justify-center mb-2">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">
                    Eat Any Food
                  </p>
                  <p className="text-[11px] text-[#8EA3B3]">
                    No broken brackets or traps
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#00A6CE]/20 text-[#00A6CE] flex items-center justify-center mb-2">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">
                    Brush in Seconds
                  </p>
                  <p className="text-[11px] text-[#8EA3B3]">
                    Normal flossing &amp; hygiene
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#00A6CE]/20 text-[#00A6CE] flex items-center justify-center mb-2">
                    <Check className="w-3 h-3" />
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
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
