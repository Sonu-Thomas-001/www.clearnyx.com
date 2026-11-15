"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Stethoscope } from "lucide-react";

export function AboutCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FBFD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase">
          PRACTICE COLLABORATION
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
          Ready to Elevate Your Clear Aligner Offerings?
        </h2>

        <p className="text-base sm:text-lg text-[#556977] max-w-2xl mx-auto leading-relaxed">
          Join a growing network of licensed dentists and orthodontists across India who rely on CLEARNYX for sub-millimeter 3D staging, open scanner freedom, and dedicated laboratory support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/for-dentists"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#00A6CE] to-[#0094BA] hover:from-[#0094BA] hover:to-[#007F9F] text-white font-bold text-base tracking-wide shadow-lg shadow-[#00A6CE]/30 hover:shadow-xl hover:shadow-[#00A6CE]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Onboard Your Practice</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#F8FBFD] border border-[#D0DFE8] hover:border-[#00A6CE]/50 text-[#071B2C] font-bold text-base tracking-wide shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-[#00A6CE]" />
            <span>Speak With Our Team</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-[#E2EBF0] max-w-md mx-auto text-xs text-[#556977] flex items-center justify-center gap-6">
          <span>&bull; Zero Annual Quotas</span>
          <span>&bull; Open STL Compatibility</span>
          <span>&bull; Free First Case Setup</span>
        </div>
      </div>
    </section>
  );
}

