"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBookModal } from "./BookModalContext";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  MessageCircle,
} from "lucide-react";

export function SiteFooter() {
  const { openModal } = useBookModal();

  return (
    <footer className="relative bg-navy-deep text-white overflow-hidden pt-12">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[350px] bg-electric-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Interactive Pre-Footer Banner: The Doctor & Practice Gateway */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10"
      >
        <div className="relative rounded-3xl p-6 sm:p-12 overflow-hidden border border-brand-cyan/25 bg-gradient-to-br from-navy-dark via-navy-deep to-[#0c283f] shadow-[0_20px_60px_rgba(0,166,206,0.15)]">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center sm:text-left">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-electric-cyan text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                <span>B2B Orthodontic Collaboration</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to elevate your dental practice with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-electric-cyan">
                  CLEARNYX?
                </span>
              </h2>

              <p className="text-slate-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto sm:mx-0">
                Partner with an advanced clear aligner solutions manufacturer. Receive sub-millimeter 0.01mm 3D staging, certified biocompatible materials, and dedicated clinical case planning.
              </p>

              {/* Trust Pill Tags */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs text-white/80">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>CDSCO MD-5 Certified</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>ISO 13485 Assured</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Stethoscope className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Doctor-Led Protocols</span>
                </div>
              </div>
            </div>

            {/* Right Quick Action Triggers */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-center lg:items-end w-full">
              <button
                type="button"
                onClick={() => openModal("partner")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-cyan to-electric-cyan hover:from-electric-cyan hover:to-brand-cyan text-navy-deep font-bold text-sm shadow-[0_10px_30px_rgba(0,166,206,0.35)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Partner with CLEARNYX</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:+919072334032"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>Doctor Hotline: +91 9072334032</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Main High-Density Multi-Column Directory */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand Authority (4 Cols) */}
          <div className="lg:col-span-4 space-y-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link
              href="/"
              className="inline-flex items-center justify-center sm:justify-start group focus-visible:outline-none"
              aria-label="CLEARNYX Home"
            >
              <Image
                src="/brand/logo-dark.png"
                alt="CLEARNYX — Redefining Smiles"
                width={190}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-slate-muted text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              CLEARNYX is an orthodontic technology brand providing premium clear aligner systems, digital 3D treatment planning, and clinical collaboration for dentists across India.
            </p>

            <div className="pt-2 w-full flex flex-col items-center sm:items-start">
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-3 text-center sm:text-left">
                Connect with our team
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/clearnyx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan text-white/80 hover:text-brand-cyan flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/clearnyx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan text-white/80 hover:text-brand-cyan flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3.1l.9-3H13v-2c0-.6.4-1 1-1Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/clearnyx"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan text-white/80 hover:text-brand-cyan flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M6.5 8.5H2.7V21h3.8V8.5zM4.6 3C3.3 3 2.2 4.1 2.2 5.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4C7 4.1 5.9 3 4.6 3zM21.3 13.7c0-3.5-1.9-5.2-4.4-5.2-2 0-2.9 1.1-3.4 1.9V8.5H9.7c0 1 0 12.5 0 12.5h3.8v-7c0-.4 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.6V21h3.8c-.1-7.4-.1-7.3-.1-7.3z" />
                  </svg>
                </a>

                {/* WhatsApp Support Direct */}
                <a
                  href="https://wa.me/919072334032"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500 text-white/80 hover:text-emerald-400 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Treatment
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-muted flex flex-col items-center sm:items-start">
              <li>
                <Link
                  href="/#conditions"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Conditions We Treat
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-brand-cyan transition-colors"
                >
                  4-Step Smile Journey
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Digital Planning (3D)
                </Link>
              </li>
              <li>
                <Link
                  href="/for-dentists"
                  className="hover:text-brand-cyan transition-colors"
                >
                  For Dentists
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-cyan transition-colors"
                >
                  About CLEARNYX
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Conditions (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Conditions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-muted flex flex-col items-center sm:items-start">
              <li>
                <Link href="/#conditions" className="hover:text-brand-cyan transition-colors">
                  Crowding
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-brand-cyan transition-colors">
                  Spacing &amp; Gaps
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-brand-cyan transition-colors">
                  Open Bite
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-brand-cyan transition-colors">
                  Deep Bite
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-brand-cyan transition-colors">
                  Cross &amp; Under Bite
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch (3.5 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white w-full text-center sm:text-left">
              Central Clinical Support
            </h3>

            <div className="space-y-3 text-sm text-slate-muted w-full max-w-sm mx-auto sm:max-w-none sm:mx-0">
              <a
                href="tel:+919072334032"
                className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all text-white group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-slate-muted block">Direct Doctor Line</span>
                  <span className="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                    +91 9072334032
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@clearnyx.com"
                className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all text-white group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-slate-muted block">Partner Inquiries</span>
                  <span className="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                    info@clearnyx.com
                  </span>
                </div>
              </a>

              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-muted pt-1 text-center sm:text-left">
                <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST (Orthodontic Dispatch)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Regulatory Disclaimer */}
        <div className="py-6 border-b border-white/10">
          <p className="w-full text-xs sm:text-[13px] text-white/75 leading-relaxed text-center sm:text-left">
            <strong className="text-white font-semibold">Clinical Compliance &amp; B2B Notice:</strong>{" "}
            CLEARNYX is a B2B orthodontic technology brand and clear aligner manufacturer. Orthodontic treatments are strictly evaluated, planned, and prescribed by certified licensed orthodontists and practicing dentists. Results depend on individual malocclusion complexity and patient wear compliance (recommended 22–24 hours daily).
          </p>
        </div>

        {/* 4. Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-muted text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <span>© 2026 Clearnyx Aligner.</span>
            <span>All rights reserved by <strong className="font-bold text-white">MidCell Studios</strong>.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-cyan transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/for-dentists" className="hover:text-brand-cyan transition-colors">
              Doctor Terms
            </Link>
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px]">
              🇮🇳 Precision-Made in India
            </span>
          </div>
        </div>
      </motion.div>

      {/* 5. Luxury Giant Watermark at Bottom */}
      <div
        className="w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-[0.035] -mb-4 sm:-mb-8"
        aria-hidden="true"
      >
        <span className="text-[15vw] font-black tracking-widest text-white leading-none whitespace-nowrap">
          CLEARNYX
        </span>
      </div>
    </footer>
  );
}
