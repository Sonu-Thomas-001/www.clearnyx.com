"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/config/brand";
import { Target, Cpu, Handshake, Check } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Precision",
    description:
      "Thoughtfully designed aligner solutions with customized digital treatment planning.",
    icon: <Target className="w-5 h-5 text-[#00A6CE]" />,
    detail: "Sub-millimeter thermoforming calibration & staged biomechanics.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Technology-driven workflows designed to support modern orthodontic practices.",
    icon: <Cpu className="w-5 h-5 text-[#00A6CE]" />,
    detail: "Cloud-based case review portal with 3D turnaround support.",
  },
  {
    number: "03",
    title: "Professional Partnership",
    description:
      "Built around collaboration with dentists and orthodontists.",
    icon: <Handshake className="w-5 h-5 text-[#00A6CE]" />,
    detail: "Exclusive B2B practitioner distribution & clinical support.",
  },
];

export const BrandPillars: React.FC = () => {
  return (
    <section
      id="pillars"
      aria-label="Core Brand Pillars"
      className="relative py-20 lg:py-28 bg-[#F8FDFF] border-y border-[#00A6CE]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Philosophy Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] border border-[#00A6CE]/30 text-xs font-bold text-[#00A6CE] tracking-widest uppercase mb-4 shadow-sm">
              {BRAND_CONFIG.tagline}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071B2C] mb-4">
              Engineered for Precision. Built for Dentists.
            </h2>

            <p className="text-base sm:text-lg text-[#4A6072] leading-relaxed">
              At <strong className="text-[#071B2C]">CLEARNYX</strong>, we believe that precision, technology and professional collaboration are essential to the evolution of clear aligner solutions. We are building a premium platform dedicated to supporting dental professionals through customized aligner solutions and digitally driven orthodontic workflows.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#00A6CE]/20 shadow-[0_12px_35px_rgba(7,27,44,0.06)] aspect-[16/9] bg-white group">
              <Image
                src="/images/clearnyx-detail-light.webp"
                alt="CLEARNYX Sub-millimeter Laser Trim Precision Detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-white/90 backdrop-blur-sm border border-[#00A6CE]/25 flex items-center justify-between text-xs font-medium text-[#071B2C]">
                <span>Laser-Calibrated Margins</span>
                <span className="text-[#00A6CE] font-bold">0.75mm Matrix</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Streamlined Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white border border-[#00A6CE]/20 hover:border-[#00A6CE] transition-all duration-300 shadow-[0_6px_25px_rgba(7,27,44,0.04)] hover:shadow-[0_10px_35px_rgba(0,166,206,0.14)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF7FC] border border-[#00A6CE]/25 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xl font-mono font-bold text-[#A8B7C3]/60 group-hover:text-[#00A6CE] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#071B2C] mb-2 group-hover:text-[#00A6CE] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#4A6072] leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#00A6CE]/15 flex items-center gap-2 text-xs text-[#5A7184]">
                <Check className="w-3.5 h-3.5 text-[#00A6CE] flex-shrink-0" />
                <span>{pillar.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
