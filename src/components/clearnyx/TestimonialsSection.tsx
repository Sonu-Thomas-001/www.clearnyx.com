"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Quote,
  ArrowRight,
  ShieldCheck,
  Clock,
  Stethoscope,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-4 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
            <span>Real smiles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]"
          >
            Loved by people who wanted a{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#00BCE6] to-[#0092B5] italic">
              clearer
            </span>{" "}
            journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed"
          >
            Real patients share how custom 3D aligners gave them straight, confident smiles without interrupting their busy everyday lives.
          </motion.p>

          {/* Social Proof Star Meter */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.3, ease: luxuryEase }}
            className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-[#E2EBF0] shadow-xs"
          >
            <div className="flex items-center gap-1 text-[#FFB800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-sm font-black text-[#071B2C] ml-1.5">4.9 / 5.0</span>
            </div>
            <span className="hidden sm:inline text-[#D0DFE8]">•</span>
            <span className="text-xs text-[#647887] font-medium">
              2,800+ Completed Smiles
            </span>
            <span className="hidden sm:inline text-[#D0DFE8]">•</span>
            <span className="text-xs font-bold text-[#00A6CE]">
              98% Recommendation Rate
            </span>
          </motion.div>
        </div>

        {/* 3 Staggered Modern Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: luxuryEase,
              }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBF0] hover:border-[#00A6CE]/50 shadow-[0_10px_30px_rgba(7,27,44,0.04)] hover:shadow-[0_20px_45px_rgba(0,166,206,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Condition Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EBF8FB] text-[#00A6CE] text-[11px] font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </span>
                </div>

                {/* Big Quote Symbol */}
                <Quote className="w-8 h-8 text-[#00A6CE]/20 mb-3" />

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#071B2C] leading-relaxed mb-6 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Clinical Specs Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-[#F4F9FB] text-[#647887]">
                    <Clock className="w-3 h-3 text-[#00A6CE]" />
                    <span>{t.duration}</span>
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#F4F9FB] text-[#00A6CE] font-bold">
                    {t.condition}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#F4F9FB] text-[#647887]">
                    {t.aligners}
                  </span>
                </div>
              </div>

              {/* Bottom Author Row */}
              <div className="pt-4 border-t border-[#EEF3F6] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarGradient} text-white font-black text-xs flex items-center justify-center shadow-xs`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#8FA5B5]">{t.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#00A6CE] tracking-wider block">
                    Result
                  </span>
                  <span className="text-xs font-semibold text-[#647887]">
                    {t.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Doctor Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2, ease: luxuryEase }}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#071B2C] via-[#0B2540] to-[#071B2C] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#00A6CE]/20 text-[#00A6CE] flex items-center justify-center shrink-0">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#4DD4F0] mb-1">
                From Our Orthodontic Clinical Network
              </p>
              <h4 className="text-base sm:text-lg font-bold text-white">
                &ldquo;CLEARNYX staging precision matches tooth movement predictability closer than standard aligner systems.&rdquo;
              </h4>
              <p className="text-xs text-[#8EA3B3] mt-1">
                Dr. R. Mehta, BDS, MDS (Orthodontics), Clinical Partner
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openModal("consultation")}
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#00A6CE]/30 hover:scale-[1.02] shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Book Your Smile Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
