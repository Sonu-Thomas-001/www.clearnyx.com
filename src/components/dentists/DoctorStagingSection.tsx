"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function DoctorStagingSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FBFD] border-b border-[#E2EBF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinical Staging Narrative with Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: luxuryEase }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase">
              BIOMECHANICAL CAD STAGING
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
              Tooth Movements Staged Within Biologically Safe Thresholds.
            </h2>

            <p className="text-base text-[#556977] leading-relaxed">
              Tracking loss and unseated trays usually occur when CAD plans promise unrealistic tooth movements. CLEARNYX enforces strict biological velocity guardrails, calculating realistic force vectors, anchorage preservation, and collision clearances:
            </p>

            {/* Clinical Specifications */}
            <div className="space-y-3 pt-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-white border border-[#E2EBF0] flex items-center justify-between shadow-xs hover:border-[#00A6CE]/30 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#071B2C]">Linear Translation Limits</h4>
                  <p className="text-xs text-[#556977]">Guards against root fenestration & tracking loss</p>
                </div>
                <span className="font-mono font-bold text-sm text-[#00A6CE]">
                  &le; 0.22 mm / stage
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-white border border-[#E2EBF0] flex items-center justify-between shadow-xs hover:border-[#00A6CE]/30 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#071B2C]">Rotational Derotation Limits</h4>
                  <p className="text-xs text-[#556977]">Capped for predictable canine & premolar derotation</p>
                </div>
                <span className="font-mono font-bold text-sm text-[#00A6CE]">
                  &le; 1.8&deg; / stage
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: luxuryEase }}
                className="p-4 rounded-2xl bg-white border border-[#E2EBF0] flex items-center justify-between shadow-xs hover:border-[#00A6CE]/30 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#071B2C]">Attachment Geometries</h4>
                  <p className="text-xs text-[#556977]">Custom beveled, ellipsoid, and rectangular buttons</p>
                </div>
                <span className="font-mono font-bold text-sm text-[#071B2C]">
                  Vector-Optimized
                </span>
              </motion.div>
            </div>

            <div className="pt-2">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00A6CE] hover:text-[#0087AB] transition-colors"
              >
                <span>Read Full Orthodontic CAD Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Technical 3D Simulation Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#E2EBF0] bg-slate-900 group">
              <Image
                src="/images/technology/clearnyx-digital-treatment-planning.jpg"
                alt="Orthodontic 3D digital treatment planning simulation"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#12C8E8]">
                    WEB 3D VIEWER
                  </span>
                  <p className="text-sm font-bold text-white">
                    Interactive Staging Simulation on Any Device
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-md">
                  Unlimited Revisions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
