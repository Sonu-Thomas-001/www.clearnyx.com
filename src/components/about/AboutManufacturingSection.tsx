"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function AboutManufacturingSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Macro Aligner Photography with Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#E2EBF0] bg-slate-900 group">
              <Image
                src="/images/products/clearnyx-aligner-macro.webp"
                alt="Macro view of CLEARNYX clear aligner laser-trimmed scalloped gingival margin"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#12C8E8]">
                    MANUFACTURING STANDARD
                  </span>
                  <p className="text-sm font-bold text-white">
                    0.01mm Laser Margin Scalloping
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
                  Cleanroom Sealed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Manufacturing Narrative with Staggered Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: luxuryEase }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase">
              ORTHODONTIC APPLIANCE FABRICATION
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
              Surgical Precision in Every Thermoformed Layer.
            </h2>

            <p className="text-base text-[#556977] leading-relaxed">
              Every CLEARNYX aligner is produced using automated thermoforming chambers with positive pressure consolidation to capture minute anatomical undercuts and attachment profiles with sub-millimeter fidelity.
            </p>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#071B2C]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0] flex items-start gap-3 hover:border-[#00A6CE]/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00A6CE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#071B2C]">Laser-Contoured Gingival Zenith</h4>
                  <p className="text-xs text-[#556977] mt-0.5 leading-relaxed">
                    Automated 5-axis robotic laser trimming matches each patient&apos;s scalloped gumline, eliminating sharp edges, preventing papilla blanching, and dramatically improving patient wear compliance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0] flex items-start gap-3 hover:border-[#00A6CE]/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00A6CE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#071B2C]">Permanent Micro-Etched Identifiers</h4>
                  <p className="text-xs text-[#556977] mt-0.5 leading-relaxed">
                    Each tray features permanent, unobtrusive laser etching noting the upper/lower arch, patient identification code, and sequential stage number to eliminate patient mix-ups.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0] flex items-start gap-3 hover:border-[#00A6CE]/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00A6CE] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#071B2C]">Individually Sealed Cleanroom Pouches</h4>
                  <p className="text-xs text-[#556977] mt-0.5 leading-relaxed">
                    Trays are sonically cleaned, inspected under optical magnification, and vacuum-sealed in hygienic tamper-evident stage pouches.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="pt-2">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00A6CE] hover:text-[#0087AB] transition-colors"
              >
                <span>Read More About Our Materials & Technology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
