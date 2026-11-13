"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  Layers,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

type CategoryFilter = "all" | "alignment" | "bite";

interface ConditionItem {
  id: string;
  category: "alignment" | "bite";
  title: string;
  tag: string;
  duration: string;
  description: string;
  clinicalSolution: string;
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
    clinicalSolution: "Sequential arch expansion & precision IPR provide space for gentle realignment.",
    image: "/images/conditions/crowding.png",
  },
  {
    id: "spacing",
    category: "alignment",
    title: "Spacing & Gaps",
    tag: "Diastema Closure",
    duration: "3–6 Mos",
    description: "Visible gaps between adjacent teeth, often caused by missing teeth or proportional tooth size disparity.",
    clinicalSolution: "Bodily tooth translation safely closes gaps while keeping root axes completely parallel.",
    image: "/images/conditions/spacing.png",
  },
  {
    id: "open-bite",
    category: "bite",
    title: "Open Bite",
    tag: "Vertical Staging",
    duration: "6–12 Mos",
    description: "Upper and lower front teeth fail to meet when back teeth are closed, impairing chewing and speech.",
    clinicalSolution: "Anterior extrusion and posterior intrusion restore natural occlusion and proper contact.",
    image: "/images/conditions/open-bite.png",
  },
  {
    id: "deep-bite",
    category: "bite",
    title: "Deep Overbite",
    tag: "Bite Elevation",
    duration: "6–10 Mos",
    description: "Upper incisors cover lower front teeth excessively, risking premature enamel abrasion and gum wear.",
    clinicalSolution: "Biomechanical intrusion of anterior teeth creates optimal vertical clearance.",
    image: "/images/conditions/deep-bite.png",
  },
  {
    id: "cross-bite",
    category: "bite",
    title: "Crossbite",
    tag: "Transverse Alignment",
    duration: "6–12 Mos",
    description: "One or more upper teeth sit inside lower teeth when biting, causing jaw strain and asymmetric wear.",
    clinicalSolution: "Transverse arch widening and sectional movement align upper and lower dental arches.",
    image: "/images/conditions/cross-bite.png",
  },
  {
    id: "under-bite",
    category: "bite",
    title: "Underbite",
    tag: "Sagittal Correction",
    duration: "8–14 Mos",
    description: "Lower front teeth sit ahead of upper front teeth, altering facial profile and biting mechanics.",
    clinicalSolution: "Class III biomechanical staging realigns the anterior inter-arch relationship safely.",
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]">
              Conditions we treat
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed">
              Precision-engineered clear aligners designed for predictable tooth movement.
              From minor cosmetic touch-ups to complex malocclusions, CLEARNYX delivers certified clinical results.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 bg-[#EEF3F6]/80 backdrop-blur-sm rounded-full border border-[#E2EBF0] shrink-0 self-start lg:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
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
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
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
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeFilter === "bite"
                  ? "bg-[#00A6CE] text-white shadow-md shadow-[#00A6CE]/25 scale-[1.02]"
                  : "text-[#071B2C]/70 hover:text-[#071B2C] hover:bg-white/60"
              }`}
            >
              Bite Misalignments (4)
            </button>
          </div>
        </div>

        {/* 6 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredConditions.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#E2EBF0] hover:border-[#00A6CE]/50 shadow-[0_8px_30px_rgba(7,27,44,0.04)] hover:shadow-[0_20px_45px_rgba(0,166,206,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top ambient accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Card Header: Mechanism Tag & Timeline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FBFD] text-[#00A6CE] border border-[#00A6CE]/20 text-[11px] font-bold uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
                    <span>{item.tag}</span>
                  </span>

                  <span className="text-[11px] font-semibold text-[#8295A3] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00A6CE]" />
                    <span>{item.duration}</span>
                  </span>
                </div>

                {/* 3D Model Stage Pedestal */}
                <div className="relative w-full h-[170px] sm:h-[185px] mb-5 rounded-2xl bg-gradient-to-b from-[#F2FAFD] to-[#E9F7FA]/40 border border-[#DFF1F6] flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:bg-[#EAF7FA]">
                  {/* Subtle circular pedestal glow */}
                  <div className="absolute w-32 h-16 bg-[#00A6CE]/15 rounded-full blur-xl bottom-4 pointer-events-none" />

                  <Image
                    src={item.image}
                    alt={`${item.title} Orthodontic Malocclusion`}
                    width={220}
                    height={150}
                    className="relative z-10 object-contain max-h-[135px] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-[0_10px_16px_rgba(7,27,44,0.08)]"
                  />
                </div>

                {/* Card Title & Problem Description */}
                <h3 className="text-xl font-extrabold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#647887] leading-relaxed">
                  {item.description}
                </p>

                {/* Clinical Staging Note Pill */}
                <div className="mt-4 p-3 rounded-xl bg-[#F8FBFD] border border-[#EEF3F6] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#071B2C]/80 leading-snug">
                    <span className="font-bold text-[#071B2C]">CLEARNYX Approach:</span>{" "}
                    {item.clinicalSolution}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action Footer */}
              <div className="mt-6 pt-4 border-t border-[#EEF3F6] flex items-center justify-between">
                <Link
                  href={`/solutions#${item.id}`}
                  className="text-xs font-bold text-[#00A6CE] hover:text-[#0087AB] inline-flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>Learn how it&apos;s treated</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>

                <button
                  type="button"
                  onClick={() => openModal("consultation")}
                  className="text-[11px] font-semibold text-[#8295A3] hover:text-[#071B2C] transition-colors"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Clinical Assurance & Assessment Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#071B2C] via-[#0B253C] to-[#071B2C] rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-[#00A6CE]/30">
          {/* Subtle cyan corner radial glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#00A6CE]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start sm:items-center gap-4 relative z-10 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#00A6CE]/20 border border-[#00A6CE]/40 flex items-center justify-center text-[#00A6CE] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Not sure which condition applies to you?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
                Our certified orthodontic team evaluates your 3D scan or dental impression and produces an exact digital staging report before treatment begins.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openModal("consultation")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#008fb3] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(0,166,206,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-95 shrink-0 whitespace-nowrap relative z-10"
          >
            <span>Get Free Smile Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
