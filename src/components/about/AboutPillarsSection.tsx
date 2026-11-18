"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Crosshair,
  Layers,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const PILLARS = [
  {
    num: "01",
    title: "Precision Biomechanical CAD",
    subtitle: "CALIBRATED STAGING",
    description:
      "Every tooth repositioning sequence is modeled within biological tissue velocity boundaries (translation under 0.22mm, rotation under 1.8° per stage) to safeguard root structure and ensure predictable tracking.",
    points: [
      "Sub-millimeter collision clearance calculation",
      "Optimized composite attachment placement",
      "Staged IPR distribution mapped step-by-step",
    ],
    icon: Crosshair,
  },
  {
    num: "02",
    title: "Engineered Polymer Science",
    subtitle: "DUAL ARCHITECTURE",
    description:
      "We reject the one-material-fits-all approach. Clinicians select between ultra-transparent Standard PETG for aesthetic minor movements or Multi-Layer composite polymers for complex rotation and root torque.",
    points: [
      "Class IIa biocompatible certified polymers",
      "Continuous gentle low-magnitude force curves",
      "Automated 5-axis laser gingival scalloping",
    ],
    icon: Layers,
  },
  {
    num: "03",
    title: "Responsive Clinician Partnership",
    subtitle: "DIRECT DOCTOR ACCESS",
    description:
      "We operate as an extension of your practice. Dedicated orthodontic CAD planners are accessible via phone and screen-share, ensuring your clinical preferences are reflected in every setup.",
    points: [
      "48 to 72 hour 3D staging turnaround SLA",
      "Unlimited complimentary treatment revisions",
      "Direct practice delivery across Indian cities",
    ],
    icon: HeartHandshake,
  },
];

export function AboutPillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FBFD] border-b border-[#E2EBF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: luxuryEase }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
            OUR METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
            The Three Pillars of Our Clinical Approach.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556977]">
            How we combine orthodontic biomechanics, advanced material science, and collaborative practice logistics.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Scroll-Triggered Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: luxuryEase }}
                className="rounded-3xl bg-white border border-[#E2EBF0] p-8 sm:p-9 shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-[#00A6CE]">
                      {pillar.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#00A6CE] uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-[#071B2C] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#556977] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2EBF0] space-y-2 text-xs text-[#071B2C]">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A6CE] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
