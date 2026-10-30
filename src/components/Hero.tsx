"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Countdown } from "./Countdown";
import { BRAND_CONFIG } from "@/config/brand";
import { ArrowUpRight, CheckCircle2, Mail, Sparkles } from "lucide-react";

const ROTATING_PHRASES = [
  { prefix: "Confidence in", highlight: "Every Smile." },
  { prefix: "Excellence in", highlight: "Every Case." },
  { prefix: "Innovation in", highlight: "Every Detail." },
  { prefix: "Certainty in", highlight: "Every Treatment." },
];

export const Hero: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitted(true);
    // Also trigger default mail client as secondary fallback
    const subject = encodeURIComponent("Launch Updates Registration - CLEARNYX");
    const body = encodeURIComponent(`Hello CLEARNYX Team,\n\nPlease register my email for the India launch updates: ${email}`);
    window.location.href = `mailto:${BRAND_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="hero"
      aria-label="Clearnyx Coming Soon"
      className="relative flex-grow flex items-center justify-center pt-20 sm:pt-24 lg:pt-24 pb-6 sm:pb-8 lg:pb-10 overflow-hidden bg-white"
    >
      {/* Subtle radial ambient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#DDF7FC]/50 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Pure Coming Soon Proposition & Integrated Countdown */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* 1. Minimal Coming Soon Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#DDF7FC]/80 border border-[#00A6CE]/30 w-fit mb-2.5 sm:mb-3 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#071B2C] uppercase">
                CLEARNYX &bull; COMING SOON &bull; INDIA
              </span>
            </motion.div>

            {/* 2. Main Headline with Looping Kinetic Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[54px] font-black tracking-[-0.03em] leading-[1.12] mb-2.5 sm:mb-3 text-[#071B2C]"
            >
              <span className="block">
                Precision in{" "}
                <span className="text-[#00A6CE]">Every Move.</span>
              </span>

              {/* Looping Rotating Kinetic Line with Blur-Slide Transition */}
              <div className="h-[1.22em] overflow-hidden relative mt-1 sm:mt-1.5 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 26, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -26, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A6CE] via-[#008BB0] to-[#071B2C] whitespace-nowrap"
                  >
                    <span>{ROTATING_PHRASES[phraseIndex].prefix} </span>
                    <span className="text-[#00A6CE] font-black">
                      {ROTATING_PHRASES[phraseIndex].highlight}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            {/* 3. Supporting Coming Soon Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-[#4A6072] leading-relaxed max-w-xl mb-3.5 sm:mb-4.5 font-normal"
            >
              Advanced clear aligner solutions engineered for orthodontic precision and digital workflow excellence. Launching soon across India.
            </motion.p>

            {/* 4. Sleek Integrated Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3.5 sm:mb-4.5"
            >
              <Countdown />
            </motion.div>

            {/* 5. Notify / Register for Launch Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-2.5 sm:mb-3 max-w-lg"
            >
              {submitted ? (
                <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#DDF7FC]/80 border border-[#00A6CE]/40 text-[#071B2C] text-xs sm:text-sm shadow-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00A6CE] flex-shrink-0" />
                  <span className="font-semibold">
                    Thank you! You are registered for CLEARNYX India launch announcements.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-2.5">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7184]/60 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your professional email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[#00A6CE]/30 focus:border-[#00A6CE] focus:ring-2 focus:ring-[#00A6CE]/20 outline-none text-xs sm:text-sm text-[#071B2C] placeholder-[#5A7184]/60 shadow-sm transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    id="hero-launch-updates-btn"
                    className="group inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-[#00A6CE] hover:bg-[#0092B5] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(0,166,206,0.3)] hover:shadow-[0_6px_22px_rgba(0,166,206,0.45)] transition-all duration-300 active:scale-[0.98] cursor-pointer flex-shrink-0"
                  >
                    <span>Notify Me</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>


            {/* 6. B2B Distinction Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-[11px] sm:text-xs text-[#5A7184] flex items-center gap-2 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] flex-shrink-0" />
              <span>Exclusively for certified dentists, orthodontists & dental clinics across India.</span>
            </motion.p>
          </div>

          {/* Right Column: High-Tech 3D Clear Aligner Animated Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00A6CE]/20 via-[#DDF7FC]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Rotating Concentric Calibration Radar Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 sm:-inset-7 border border-dashed border-[#00A6CE]/25 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1 sm:-inset-2 border border-[#00A6CE]/15 rounded-full pointer-events-none"
            />

            {/* Floating Metric Badge 1 (Top Left) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4 z-30 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#00A6CE]/35 shadow-[0_8px_24px_rgba(0,166,206,0.15)] flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A6CE] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#071B2C] tracking-wide whitespace-nowrap">
                0.01mm Precision Fit
              </span>
            </motion.div>

            {/* Floating Metric Badge 2 (Bottom Right) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 z-30 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#00A6CE]/35 shadow-[0_8px_24px_rgba(0,166,206,0.15)] flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A6CE]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#071B2C] tracking-wide whitespace-nowrap">
                Medical-Grade Polymer
              </span>
            </motion.div>

            {/* Main Aligner Pod with Zero-Gravity Float & Laser Scanner */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#F5FBFE]/90 via-white/95 to-[#F0FAFD]/90 border border-[#00A6CE]/30 shadow-[0_16px_50px_rgba(0,166,206,0.12),0_4px_16px_rgba(7,27,44,0.04)] backdrop-blur-md overflow-hidden group">
              {/* Corner Precision Crosshairs */}
              <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-[#00A6CE]/50 select-none">+</span>
              <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-[#00A6CE]/50 select-none">+</span>
              <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-[#00A6CE]/50 select-none">+</span>
              <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-[#00A6CE]/50 select-none">+</span>

              {/* Active 3D Laser Scanning Beam */}
              <motion.div
                animate={{
                  top: ["-5%", "105%"],
                  opacity: [0, 0.7, 0.9, 0.7, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
                className="absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent shadow-[0_0_12px_#00A6CE] pointer-events-none z-20"
              />

              {/* Zero-gravity continuous floating aligner */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 0.7, 0, -0.7, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/clearnyx-hero-light.webp"
                  alt="CLEARNYX Ultra-Precision Clear Aligner"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 440px, 45vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};


