"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  Sliders,
  MonitorPlay,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface StepItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: StepItem[] = [
  {
    number: "01",
    badge: "Step 01",
    title: "Consultation",
    description:
      "A certified doctor evaluates your smile and recommends the right CLEARNYX plan.",
    highlight: "Doctor-Led Evaluation",
    icon: Stethoscope,
  },
  {
    number: "02",
    badge: "Step 02",
    title: "Personalized Plan",
    description:
      "Your case is reviewed and mapped into a precise digital treatment sequence.",
    highlight: "0.01mm Precision Mapping",
    icon: Sliders,
  },
  {
    number: "03",
    badge: "Step 03",
    title: "3D Treatment Plan",
    description:
      "See your projected result, approve the plan, then we craft your aligners.",
    highlight: "Interactive 3D Simulation",
    icon: MonitorPlay,
  },
  {
    number: "04",
    badge: "Step 04",
    title: "Receive Aligners",
    description:
      "Your aligner package arrives at your clinic or doorstep, ready to start day one.",
    highlight: "Direct Delivery Ready",
    icon: PackageCheck,
  },
];

export function StepsSection() {
  const { openModal } = useBookModal();

  return (
    <section
      id="how-it-works"
      className="lp-section section-pad bg-gradient-to-b from-[#F8FCFD] via-white to-[#F8FCFD] py-16 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00A6CE]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00A6CE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]">
            Your smile journey in 4 simple steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed">
            From initial clinical assessment to your custom aligners arriving at your clinic or doorstep,
            CLEARNYX makes achieving your dream smile predictable and effortless.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative flex">
                <article className="w-full relative group bg-white rounded-3xl p-6 sm:p-7 border border-[#E2EBF0] hover:border-[#00A6CE]/60 shadow-[0_4px_24px_-4px_rgba(7,27,44,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(0,166,206,0.18)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
                  {/* Top Glowing Gradient Accent on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Ghost Step Number - positioned cleanly within bounds */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 text-6xl font-black text-[#E8F3F7] group-hover:text-[#D4EDF5] transition-colors duration-300 select-none pointer-events-none font-mono"
                  >
                    {step.number}
                  </span>

                  <div>
                    {/* Top Row: Step Badge */}
                    <div className="flex items-center justify-between mb-5 relative z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF8FB] border border-[#00A6CE]/25 text-[#00A6CE] text-xs font-extrabold tracking-wider uppercase shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-pulse" />
                        <span>{step.badge}</span>
                      </div>
                    </div>

                    {/* Icon Pedestal - Guaranteed High Contrast in both Normal and Hover states */}
                    <div className="w-14 h-14 rounded-2xl bg-[#EBF8FB] text-[#00A6CE] border border-[#00A6CE]/25 flex items-center justify-center group-hover:bg-[#00A6CE] group-hover:text-white group-hover:border-[#00A6CE] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#00A6CE]/35 transition-all duration-300 mb-5 relative z-10">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-3 stroke-[2.2]" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#071B2C] group-hover:text-[#00A6CE] transition-colors duration-200 tracking-tight mb-2.5 relative z-10">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-[#647887] leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Milestone Highlight */}
                  <div className="mt-6 pt-4 border-t border-[#F0F4F7] flex items-center justify-between relative z-10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#071B2C] bg-[#F2F7FA] group-hover:bg-[#EBF8FB] group-hover:text-[#008BAF] border border-transparent group-hover:border-[#00A6CE]/20 transition-all px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A6CE]" />
                      <span>{step.highlight}</span>
                    </span>
                  </div>
                </article>

                {/* Desktop Connector Arrow between step cards */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#D5E4EC] shadow-sm items-center justify-center text-[#00A6CE] pointer-events-none group-hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Action Bar */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#071B2C] via-[#0B2540] to-[#071B2C] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl shadow-[#071B2C]/10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Subtle background glow circle */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00A6CE]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-[#4DD4F0] text-[10px] sm:text-xs font-bold tracking-normal sm:tracking-wide uppercase mb-3 border border-white/10">
              <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Personalized Orthodontic Care</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Ready to start your clear aligner journey?
            </h3>
            <p className="mt-2 text-sm text-[#94A9B8] leading-relaxed">
              Book a consultation with our orthodontic specialists or learn how our certified dental protocol ensures safe, lasting alignment.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={() => openModal("consultation")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00A6CE] hover:bg-[#0095BA] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm tracking-wide border border-white/15 hover:border-white/30 transition-all duration-200 whitespace-nowrap"
            >
              <span>Explore Clinical Protocol</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
