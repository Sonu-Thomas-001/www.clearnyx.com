"use client";

import React from "react";
import {
  Sparkles,
  Star,
  CheckCircle2,
  Quote,
  ArrowRight,
  ShieldCheck,
  Clock,
  Stethoscope,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface Testimonial {
  id: string;
  initials: string;
  name: string;
  location: string;
  condition: string;
  duration: string;
  aligners: string;
  quote: string;
  highlight: string;
  avatarGradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: "emma",
    initials: "ER",
    name: "Emma R.",
    location: "London, UK",
    condition: "Crowding",
    duration: "5.5 Mos",
    aligners: "12 Stages",
    quote:
      "I was nervous about braces at work. CLEARNYX fit into my routine so easily — almost invisible, and the results came faster than I expected.",
    highlight: "Zero Wire Traps",
    avatarGradient: "from-[#00A6CE] to-[#071B2C]",
  },
  {
    id: "james",
    initials: "JM",
    name: "James M.",
    location: "Dubai, UAE",
    condition: "Spacing",
    duration: "4.0 Mos",
    aligners: "8 Stages",
    quote:
      "The digital plan made everything clear from day one. I could see my smile progress before I even started wearing the aligners.",
    highlight: "100% 3D Plan Match",
    avatarGradient: "from-[#0B2540] to-[#00A6CE]",
  },
  {
    id: "sophie",
    initials: "SL",
    name: "Sophie L.",
    location: "Singapore",
    condition: "Deep Bite",
    duration: "7.0 Mos",
    aligners: "16 Stages",
    quote:
      "Comfortable, removable, and doctor-guided. I kept up with dinners and travel without feeling like I was in treatment.",
    highlight: "100% Removable for Dining",
    avatarGradient: "from-[#00A6CE] to-[#4DD4F0]",
  },
];

export function TestimonialsSection() {
  const { openModal } = useBookModal();

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FCFD] to-white"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00A6CE]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00A6CE_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real smiles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]">
            Loved by people who wanted a{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00BCE6] to-[#0092B5] italic">
              clearer
            </span>{" "}
            journey
          </h2>

          {/* Social Proof Aggregator Rating Pill */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E2EBF0] shadow-xs text-xs font-semibold text-[#071B2C]">
            <div className="flex items-center gap-1 text-[#FFB800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="font-black text-[#071B2C] ml-1">4.9 / 5.0</span>
            </div>
            <span className="text-[#D0DFE8]">•</span>
            <span className="text-[#647887]">2,800+ Completed Smiles</span>
            <span className="text-[#D0DFE8]">•</span>
            <span className="text-[#00A6CE] font-bold">98% Recommendation Rate</span>
          </div>
        </div>

        {/* 3 Rich Review Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-xl lg:max-w-6xl mx-auto mb-12 sm:mb-16">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E2EBF0] hover:border-[#00A6CE]/50 shadow-[0_4px_24px_-4px_rgba(7,27,44,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(0,166,206,0.16)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Gradient Accent on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Row: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF8FB] text-[#00A6CE] text-[11px] font-bold shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#00A6CE]/15 absolute -top-2 -left-1 -z-0 pointer-events-none" />
                  <p className="text-sm sm:text-[15px] font-medium text-[#071B2C] leading-relaxed relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Treatment Micro-Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#647887] bg-[#F4F8FA] px-2.5 py-1 rounded-lg">
                    <Clock className="w-3 h-3 text-[#00A6CE]" />
                    <span>{t.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00A6CE] bg-[#EBF8FB] px-2.5 py-1 rounded-lg">
                    <span>{t.condition}</span>
                  </span>
                  <span className="inline-flex items-center text-[11px] font-semibold text-[#8FA3B0] bg-[#F4F8FA] px-2.5 py-1 rounded-lg">
                    <span>{t.aligners}</span>
                  </span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#F0F4F7] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    aria-hidden="true"
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarGradient} text-white font-black text-xs flex items-center justify-center shadow-xs shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-[#071B2C] group-hover:text-[#00A6CE] transition-colors truncate">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#8295A3] truncate">{t.location}</p>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#00A6CE] bg-[#DDF7FC]/70 px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap">
                  <span>{t.highlight}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Doctor & Clinical Partner Confidence Banner */}
        <div className="bg-gradient-to-r from-[#071B2C] via-[#0B2540] to-[#071B2C] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl shadow-[#071B2C]/10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#00A6CE]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center lg:text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#00A6CE]/20 border border-[#00A6CE]/30 text-[#4DD4F0] flex items-center justify-center shrink-0">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 text-[#4DD4F0] text-xs font-bold tracking-wide uppercase mb-2 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Orthodontist Supervised</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Join thousands transforming their smiles with doctor oversight
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#94A9B8] leading-relaxed">
                Every treatment plan is designed and monitored by registered orthodontists for clinical safety and permanent alignment.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => openModal("consultation")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
