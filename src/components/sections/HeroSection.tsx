"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-soft/40 to-white pt-10 pb-20 md:pt-16 md:pb-28 border-b border-surface-border/60">
      {/* Subtle atmospheric backdrop markers */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-ice-soft/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan" size="md">
                PREMIUM CLEAR ALIGNER SOLUTIONS
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-secondary font-medium pl-2 border-l border-surface-border">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-brand" />
                B2B Orthodontic Technology
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.1] text-balance">
              Precision in Every Move.{" "}
              <span className="text-cyan-brand">Confidence</span> in Every Smile.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-secondary leading-relaxed max-w-2xl text-balance">
              Advanced clear aligner solutions designed to support dentists and orthodontists with precision-driven digital treatment planning and professional collaboration.
            </p>

            {/* Key Clinical Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-navy-900 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0" />
                <span>Standard (PETG) & Multi-Layer Polymers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0" />
                <span>Comprehensive 3D Digital Staging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0" />
                <span>Full Clinician Diagnostic Control</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0" />
                <span>Dedicated Practice Support in India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Button
                href="/become-a-partner"
                variant="cyan"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold shadow-cyan"
              >
                Become a Partner
              </Button>
              <Button
                href="/solutions"
                variant="secondary"
                size="lg"
                className="font-medium"
              >
                Explore Our Solutions
              </Button>
            </div>

            {/* Supporting Trust Line */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand" />
              <span>Built for Dental Professionals — Not a direct-to-consumer clinic</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Clear Aligner Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product Frame with subtle elevation and border */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-surface-border shadow-elevated p-2 sm:p-3">
                <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-xl overflow-hidden bg-surface-soft">
                  <Image
                    src="/images/products/clearnyx-clear-aligner-product.webp"
                    alt="CLEARNYX Premium Clear Aligner — High Precision Orthodontic Technology"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Architectural Precision Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-surface-border shadow-card flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-brand" />
                      <span>CLEARNYX ALIGNERS</span>
                    </div>
                    <div className="text-xs text-slate-secondary mt-0.5">
                      PETG & Multi-Layer Composite Systems
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-ice-soft text-cyan-700 text-[11px] font-semibold border border-cyan-200/50">
                      B2B Solutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Grid Marker */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-cyan-brand/30 rounded-tr-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-cyan-brand/30 rounded-bl-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

