"use client";

import React from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { useBookModal } from "./BookModalContext";

interface ComparisonRow {
  aspect: string;
  clearnyx: string;
  braces: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    aspect: "Aesthetic Visibility",
    clearnyx: "Virtually invisible, crystal-clear biocompatible polymer.",
    braces: "Noticeable metal brackets, bands, and archwires.",
  },
  {
    aspect: "Dietary Freedom",
    clearnyx: "100% unrestricted — simply remove trays before dining.",
    braces: "Strict bans on crunchy, sticky, or hard foods.",
  },
  {
    aspect: "Oral Hygiene Routine",
    clearnyx: "Normal 2-minute brushing and flossing without threaders.",
    braces: "Complex flossing with high plaque and tartar buildup risks.",
  },
  {
    aspect: "Tissue & Lip Comfort",
    clearnyx: "5-axis automated laser scalloping along the gingival line.",
    braces: "Bracket friction, sharp wire ends, and mouth ulcers.",
  },
  {
    aspect: "Emergency Clinic Visits",
    clearnyx: "Virtually zero — sequential stages prescribed upfront.",
    braces: "Frequent emergency appointments for broken brackets or wires.",
  },
];

export function AlignerVsBracesSection() {
  const { openModal } = useBookModal();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2EBF0] text-[#071B2C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Editorial Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A6CE] block mb-2">
            Clinical Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
            CLEARNYX vs. Traditional Braces.
          </h2>
          <p className="mt-3 text-base text-[#556977] leading-relaxed">
            Modern digital orthodontic therapy compared against traditional fixed appliances.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-2xl border border-[#D5E2EC] bg-[#F8FAFC] overflow-hidden shadow-[0_4px_24px_rgba(7,27,44,0.04)]">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#071B2C] text-white px-5 py-4 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3 text-slate-300">Feature</div>
            <div className="col-span-4 sm:col-span-5 text-[#00A6CE] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00A6CE]" />
              <span>CLEARNYX Aligners</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Fixed Braces</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#E2EBF0] bg-white text-xs sm:text-[13px]">
            {COMPARISONS.map((row, idx) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-12 px-5 py-4 items-center gap-2 sm:gap-4 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#FBFDFE]"
                }`}
              >
                {/* Feature Column */}
                <div className="col-span-12 sm:col-span-3 font-bold text-[#071B2C]">
                  {row.aspect}
                </div>

                {/* CLEARNYX Column */}
                <div className="col-span-6 sm:col-span-5 flex items-start gap-2 font-medium text-[#071B2C]">
                  <span className="w-4 h-4 rounded-full bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                  <span className="leading-relaxed">{row.clearnyx}</span>
                </div>

                {/* Braces Column */}
                <div className="col-span-6 sm:col-span-4 flex items-start gap-2 text-[#718594]">
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2.5 h-2.5 stroke-[2.5]" />
                  </span>
                  <span className="leading-relaxed">{row.braces}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 bg-[#F4F8FA] border-t border-[#E2EBF0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#556977] font-medium text-center sm:text-left">
              Treatment plans are diagnosed and supervised by certified dental clinicians.
            </span>
            <button
              type="button"
              onClick={() => openModal("consultation")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Book Doctor Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
