"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Sliders,
  MonitorPlay,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useBookModal } from "./BookModalContext";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

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
    title: "Clinic Delivery & Fitting",
    description:
      "Your custom aligners are delivered directly to your partner dental clinic for professional verification and initial fitting.",
    highlight: "Doctor-Delivered Care",
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
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DDF7FC] text-[#00A6CE] text-xs font-bold tracking-wide uppercase border border-[#00A6CE]/20 mb-4 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
            <span>How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-[1.15]"
          >
            Your smile journey in 4 simple steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="mt-4 text-base sm:text-lg text-[#647887] leading-relaxed"
          >
            From initial clinical assessment to custom aligners arriving at your partner clinic,
            CLEARNYX ensures predictable, doctor-supervised orthodontic treatment.
          </motion.p>
        </div>

        {/* 4 Connected Step Cards with Staggered Scroll Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: luxuryEase,
                }}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#E2EBF0] hover:border-[#00A6CE]/50 shadow-[0_10px_30px_rgba(7,27,44,0.04)] hover:shadow-[0_20px_45px_rgba(0,166,206,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Giant Step Watermark */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 right-3 text-7xl sm:text-8xl font-black text-[#00A6CE]/[0.07] select-none pointer-events-none group-hover:text-[#00A6CE]/[0.12] group-hover:scale-105 transition-all duration-300"
                >
                  {step.number}
                </span>

                <div>
                  {/* Top Step Pill & Connector Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F8FB] text-[#00A6CE] text-xs font-bold uppercase tracking-wider border border-[#00A6CE]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
                      <span>{step.badge}</span>
                    </span>

                    {/* Subtle right chevron connector for non-last steps */}
                    {!isLast && (
                      <span className="hidden lg:flex w-7 h-7 rounded-full bg-[#F4F9FB] text-[#8AA2B2] group-hover:text-[#00A6CE] group-hover:bg-[#E8F8FB] items-center justify-center transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  {/* Icon Avatar Halo */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EBF9FC] to-[#DDF7FC] text-[#00A6CE] border border-[#00A6CE]/20 flex items-center justify-center mb-6 shadow-xs group-hover:scale-108 group-hover:shadow-md transition-all duration-300">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-xl font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#647887] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-6 mt-6 border-t border-[#EEF3F6]">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0" />
                    <span>{step.highlight}</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Interactive Workflow Reassurance Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.25, ease: luxuryEase }}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-white border border-[#DCE8EE] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span
              aria-hidden="true"
              className="w-12 h-12 rounded-2xl bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0"
            >
              <ShieldCheck className="w-6 h-6" />
            </span>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#071B2C]">
                Clear aligner precision at every turn
              </p>
              <p className="text-xs sm:text-sm text-[#647887]">
                Every treatment phase is certified by certified orthodontists and licensed dental doctors.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openModal("consultation")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#00A6CE]/25 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#F4F9FB] hover:bg-[#EAF5F8] text-[#071B2C] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 border border-[#DCE8EE]"
            >
              <span>Explore Full Clinical Journey</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
