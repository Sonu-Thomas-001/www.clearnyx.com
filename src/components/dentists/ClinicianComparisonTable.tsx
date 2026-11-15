"use client";

import React from "react";
import { Check, X, Minus, AlertCircle, ArrowRight } from "lucide-react";

interface ComparisonRow {
  parameter: string;
  clearnyx: string;
  clearnyxStatus: "positive";
  legacy: string;
  legacyStatus: "neutral" | "negative";
  dtc: string;
  dtcStatus: "negative";
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    parameter: "Patient Relationship Ownership",
    clearnyx: "100% Doctor Prescribed & Billed Chairside",
    clearnyxStatus: "positive",
    legacy: "Doctor Prescribed, Brand Heavily Marketed",
    legacyStatus: "neutral",
    dtc: "Doctor Bypassed; DIY Impression Kits",
    dtcStatus: "negative",
  },
  {
    parameter: "Intraoral Scanner Compatibility",
    clearnyx: "Open STL/PLY/OBJ (iTero, TRIOS, Medit, etc.)",
    clearnyxStatus: "positive",
    legacy: "Proprietary or Restricted File Bridges",
    legacyStatus: "neutral",
    dtc: "Analog Impression Putty in Mail",
    dtcStatus: "negative",
  },
  {
    parameter: "Initial 3D Staging Turnaround",
    clearnyx: "48 – 72 Hours (Fast Localized SLA)",
    clearnyxStatus: "positive",
    legacy: "7 – 14 Business Days (Overseas CAD Labs)",
    legacyStatus: "neutral",
    dtc: "2 – 4 Weeks via Courier",
    dtcStatus: "negative",
  },
  {
    parameter: "Treatment Staging Revisions",
    clearnyx: "Free Unlimited CAD Modifications",
    clearnyxStatus: "positive",
    legacy: "Tiered Pricing & Fee Penalties",
    legacyStatus: "negative",
    dtc: "Zero Doctor Revision Input",
    dtcStatus: "negative",
  },
  {
    parameter: "Direct Planner Consultation",
    clearnyx: "Direct Phone & Screen-Share with Orthodontists",
    clearnyxStatus: "positive",
    legacy: "Ticketing System & Offshore Call Centers",
    legacyStatus: "negative",
    dtc: "None (Automated Scripts)",
    dtcStatus: "negative",
  },
  {
    parameter: "Practice Profit Retained",
    clearnyx: "60% – 65% Retained by Clinic",
    clearnyxStatus: "positive",
    legacy: "30% – 45% (High Brand Royalties)",
    legacyStatus: "negative",
    dtc: "0% (Clinic Completely Cut Out)",
    dtcStatus: "negative",
  },
  {
    parameter: "Annual Case Quota Mandates",
    clearnyx: "Zero Quota (Freedom to Scale Naturally)",
    clearnyxStatus: "positive",
    legacy: "Strict Tier Status Quotas to Keep Pricing",
    legacyStatus: "negative",
    dtc: "N/A",
    dtcStatus: "negative",
  },
];

export function ClinicianComparisonTable() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide mb-3">
            CLEAR COMPARISON MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            How CLEARNYX Compares in Your Daily Practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-secondary">
            Examine how our doctor-first operational model contrasts with traditional foreign aligner giants and direct-to-consumer alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-surface-border shadow-card overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-surface-border">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-muted w-1/4">
                    Clinical Parameter
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-white bg-navy-900 w-1/3 border-x border-navy-800">
                    <div className="flex items-center justify-between">
                      <span>CLEARNYX B2B Lab</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-brand text-navy-900 uppercase">
                        Recommended
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-navy-900 bg-surface-soft w-1/5">
                    Legacy Foreign Brands
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-navy-900 bg-surface-soft w-1/5">
                    Direct-to-Consumer DIY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface-soft/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy-900">
                      {row.parameter}
                    </td>

                    {/* CLEARNYX Col */}
                    <td className="py-4 px-6 bg-cyan-50/40 border-x border-cyan-100 font-bold text-navy-900">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-brand text-navy-900 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span>{row.clearnyx}</span>
                      </div>
                    </td>

                    {/* Legacy Col */}
                    <td className="py-4 px-6 text-slate-secondary">
                      <div className="flex items-start gap-2">
                        {row.legacyStatus === "negative" ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        )}
                        <span>{row.legacy}</span>
                      </div>
                    </td>

                    {/* DTC Col */}
                    <td className="py-4 px-6 text-slate-secondary">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.dtc}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Action Footnote */}
          <div className="p-6 bg-surface-soft border-t border-surface-border flex flex-wrap items-center justify-between gap-4 text-xs text-slate-secondary">
            <span>
              * Comparison based on standard Indian commercial clear aligner laboratory terms as of 2026.
            </span>
            <a
              href="#partner-form"
              className="inline-flex items-center gap-1.5 font-bold text-cyan-brand hover:text-cyan-700"
            >
              <span>Onboard Your Practice Today</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
