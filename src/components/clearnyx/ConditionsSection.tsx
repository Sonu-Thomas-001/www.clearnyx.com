"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  Layers,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

type CategoryFilter = "all" | "alignment" | "bite";

interface ConditionItem {
  id: string;
  category: "alignment" | "bite";
  title: string;
  tag: string;
  duration: string;
  description: string;
  image: string;
}

const conditions: ConditionItem[] = [
  {
    id: "crowding",
    category: "alignment",
    title: "Teeth Crowding",
    tag: "Arch Expansion",
    duration: "4–9 Mos",
    description: "Narrow dental arch causes teeth to bunch together, overlap, or rotate out of alignment.",
    image: "/images/conditions/crowding.png",
  },
  {
    id: "spacing",
    category: "alignment",
    title: "Spacing & Gaps",
    tag: "Diastema Closure",
    duration: "3–6 Mos",
    description: "Visible gaps between adjacent teeth, often caused by missing teeth or proportional tooth size disparity.",
    image: "/images/conditions/spacing.png",
  },
  {
    id: "open-bite",
    category: "bite",
    title: "Open Bite",
    tag: "Vertical Staging",
    duration: "6–12 Mos",
    description: "Upper and lower front teeth fail to meet when back teeth are closed, impairing chewing and speech.",
    image: "/images/conditions/open-bite.png",
  },
  {
    id: "deep-bite",
    category: "bite",
    title: "Deep Overbite",
    tag: "Bite Elevation",
    duration: "6–10 Mos",
    description: "Upper incisors cover lower front teeth excessively, risking premature enamel abrasion and gum wear.",
    image: "/images/conditions/deep-bite.png",
  },
  {
    id: "cross-bite",
    category: "bite",
    title: "Crossbite",
    tag: "Transverse Alignment",
    duration: "6–12 Mos",
    description: "One or more upper teeth sit inside lower teeth when biting, causing jaw strain and asymmetric wear.",
    image: "/images/conditions/cross-bite.png",
  },
  {
    id: "under-bite",
    category: "bite",
    title: "Underbite",
    tag: "Sagittal Correction",
    duration: "8–14 Mos",
    description: "Lower front teeth sit ahead of upper front teeth, altering facial profile and biting mechanics.",
    image: "/images/conditions/under-bite.png",
  },
];

export function ConditionsSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const { openModal } = useBookModal();

  const filteredConditions =
    activeFilter === "all"
      ? conditions
      : conditions.filter((c) => c.category === activeFilter);

  return (
    <section id="conditions" className="lp-section section-pad bg-gradient-to-b from-white via-[#F8FCFD] to-white py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00A6CE]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00A6CE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Eyebrow, Heading, Description & Interactive Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: luxuryEase }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]"
            >
              Conditions we treat
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
              className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed"
            >
              Precision-engineered clear aligners designed for predictable tooth movement.
              From minor cosmetic touch-ups to complex malocclusions, CLEARNYX delivers certified clinical results.
            </motion.p>
          </div>

          {/* Interactive Filter Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.25, ease: luxuryEase }}
            className="w-full sm:w-auto flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-[#EEF3F6]/80 backdrop-blur-sm rounded-full border border-[#E2EBF0] shrink-0 self-start lg:self-auto overflow-x-auto no-scrollbar scroll-smooth"
          >
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/25 scale-[1.02]"
                  : "text-[#071B2C]/70 hover:text-[#071B2C] hover:bg-white/60"
              }`}
            >
              All Conditions ({conditions.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("alignment")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === "alignment"
                  ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/25 scale-[1.02]"
                  : "text-[#071B2C]/70 hover:text-[#071B2C] hover:bg-white/60"
              }`}
            >
              Crowding &amp; Gaps (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("bite")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === "bite"
                  ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/25 scale-[1.02]"
                  : "text-[#071B2C]/70 hover:text-[#071B2C] hover:bg-white/60"
              }`}
            >
              Bite Misalignments (4)
            </button>
          </motion.div>
        </div>

        {/* 6 Modern Cards Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredConditions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (idx % 3) * 0.1,
                ease: luxuryEase,
              }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E2EBF0] hover:border-[#00A6CE]/50 shadow-[0_8px_30px_rgba(7,27,44,0.04)] hover:shadow-[0_20px_45px_rgba(0,166,206,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top ambient accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Card Header: Mechanism Tag & Timeline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#F0FBFD] text-[#00A6CE] border border-[#00A6CE]/20 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] shrink-0" />
                    <span>{item.tag}</span>
                  </span>

                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#8295A3] flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <Clock className="w-3.5 h-3.5 text-[#00A6CE]" />
                    <span>{item.duration}</span>
                  </span>
                </div>

                {/* 3D Model Stage Pedestal */}
                <div className="relative w-full h-44 sm:h-48 mb-5 rounded-2xl bg-gradient-to-b from-[#F7FCFD] to-[#EDF8FA] border border-[#E0F2F6] flex items-center justify-center overflow-hidden group-hover:shadow-inner transition-colors duration-300">
                  <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  
                  {/* Subtle Pedestal Disk */}
                  <div className="absolute bottom-4 w-3/4 h-8 bg-[#00A6CE]/10 rounded-full blur-md group-hover:bg-[#00A6CE]/20 transition-all duration-300" />

                  <Image
                    src={item.image}
                    alt={`${item.title} clear aligner treatment model`}
                    width={220}
                    height={160}
                    className="relative z-10 max-h-36 sm:max-h-40 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-1 drop-shadow-md"
                  />
                </div>

                {/* Title & Clinical Explanation */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#647887] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Action Trigger Link / Button */}
              <div className="pt-5 mt-4 border-t border-[#F0F5F8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="text-xs sm:text-sm font-bold text-[#00A6CE] group-hover:text-[#071B2C] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Evaluate this case</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8FA5B5]">
                  Clear Aligners
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Not sure if your smile qualifies? */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2, ease: luxuryEase }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#071B2C] via-[#0B2540] to-[#071B2C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00A6CE]/20 text-[#00A6CE] flex items-center justify-center shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Not sure if your condition qualifies for CLEARNYX?
              </h4>
              <p className="text-xs sm:text-sm text-[#A0B7C6] mt-0.5">
                Our orthodontic experts review 3D scans and clinical records to create a customized prognosis.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openModal("consultation")}
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-[#00A6CE]/30 hover:scale-[1.02] shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Get Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
