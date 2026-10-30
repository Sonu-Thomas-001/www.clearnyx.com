"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/config/brand";
import { ShieldCheck, Layers, Cpu } from "lucide-react";

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="brand-statement"
      aria-label="Brand Philosophy"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Asset */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#00A6CE]/25 shadow-[0_20px_50px_rgba(7,27,44,0.08)] aspect-[4/3] group bg-[#F5FBFE]">
              <Image
                src="/images/clearnyx-detail-light.webp"
                alt="CLEARNYX Sub-millimeter Laser Trim Precision Detail"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-80" />

              {/* Inset Precision Spec Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#00A6CE]/30 backdrop-blur-md shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#00A6CE]" />
                    <span className="text-xs font-bold text-[#071B2C] tracking-wide">
                      Multi-Layer Polymer Matrix
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#00A6CE]">
                    0.75mm Calibrated
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#DDF7FC] rounded-full blur-[70px] pointer-events-none -z-10" />
          </motion.div>

          {/* Right Column: Editorial Brand Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center"
          >
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] border border-[#00A6CE]/30 w-fit mb-5 shadow-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-[#00A6CE] uppercase">
                {BRAND_CONFIG.tagline}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#071B2C] mb-6 leading-tight">
              {BRAND_CONFIG.tagline}
            </h2>

            {/* Exact Required Brand Statement Copy */}
            <div className="space-y-5 text-base sm:text-lg text-[#4A6072] leading-relaxed font-normal">
              <p>
                At <span className="text-[#071B2C] font-bold">CLEARNYX</span>, we believe that precision, technology and professional collaboration are essential to the evolution of clear aligner solutions.
              </p>
              <p>
                We are building a premium platform dedicated to supporting dental professionals through customized aligner solutions and digitally driven orthodontic workflows.
              </p>
            </div>

            {/* Professional Pillar Callouts */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#00A6CE]/15">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FCFE] border border-[#00A6CE]/15">
                <div className="p-2 rounded-lg bg-white border border-[#00A6CE]/20 text-[#00A6CE] mt-0.5 shadow-sm">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071B2C]">Digital Staging</h4>
                  <p className="text-xs text-[#5A7184] mt-0.5">3D biomechanical trajectory planning</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F6FCFE] border border-[#00A6CE]/15">
                <div className="p-2 rounded-lg bg-white border border-[#00A6CE]/20 text-[#00A6CE] mt-0.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#071B2C]">Practitioner Control</h4>
                  <p className="text-xs text-[#5A7184] mt-0.5">Dentist-led diagnosis & delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
