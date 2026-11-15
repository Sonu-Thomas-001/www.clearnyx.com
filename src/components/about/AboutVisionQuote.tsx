"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function AboutVisionQuote() {
  return (
    <section className="py-24 md:py-32 bg-[#071B2C] text-white relative overflow-hidden border-y border-navy-800">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A6CE]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#12C8E8]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#12C8E8]" />
          <span>OUR GUIDING PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] max-w-4xl mx-auto">
          &ldquo;We believe that true orthodontic innovation does not bypass the clinician—it provides them with the tools, precision, and freedom to achieve extraordinary results.&rdquo;
        </h2>

        <div className="pt-6 border-t border-white/10 max-w-md mx-auto text-center space-y-1">
          <p className="text-sm font-bold text-white tracking-wide uppercase">
            CLEARNYX Clinical Direction
          </p>
          <p className="text-xs text-slate-400 font-mono">
            Pure B2B Orthodontic Laboratory &bull; India
          </p>
        </div>
      </div>
    </section>
  );
}

