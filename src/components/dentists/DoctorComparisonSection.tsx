"use client";

import React from "react";
import Link from "next/link";
import { Check, X, Minus, ArrowRight } from "lucide-react";

interface ComparisonRow {
  parameter: string;
  clearnyx: string;
  legacy: string;
  dtc: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    parameter: "Patient Care Ownership",
    clearnyx: "100% Doctor Prescribed & Billed Chairside",
    legacy: "Doctor Prescribed with Heavy Brand Royalties",
    dtc: "Doctor Bypassed; DIY Home Putty Kits",
  },
  {
    parameter: "Intraoral Scanner Compatibility",
    clearnyx: "Open STL/PLY/OBJ (iTero, TRIOS, Medit, etc.)",
    legacy: "Proprietary or Restricted File Bridges",
    dtc: "Mail-Order Putty Trays",
  },
  {
    parameter: "Initial 3D CAD Staging SLA",
    clearnyx: "48 – 72 Business Hours",
    legacy: "7 – 14 Business Days",
    dtc: "2 – 4 Weeks via Courier",
  },
  {
    parameter: "Treatment Staging Revisions",
    clearnyx: "Free Unlimited CAD Modifications",
    legacy: "Tiered Pricing & Fee Penalties",
    dtc: "Zero Doctor Input",
  },
  {
    parameter: "Direct Planner Consultation",
    clearnyx: "Direct Phone & Screen-Share with Orthodontists",
    legacy: "Ticketing System & Overseas Call Centers",
    dtc: "Non-Existent",
  },
  {
    parameter: "Annual Case Quota Mandates",
    clearnyx: "Zero Quota (Freedom to Scale Naturally)",
    legacy: "Strict Tier Quotas to Keep Pricing",
    dtc: "N/A",
  },
];

export function DoctorComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
            CLEAR CLINICAL ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
            How CLEARNYX Compares in Daily Practice.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556977]">
            Examine how our doctor-first operational model contrasts with traditional foreign aligner manufacturers and direct-to-consumer alternatives.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-[#E2EBF0] shadow-card overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#E2EBF0]">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#556977] w-1/4">
                    Clinical Parameter
                  </th>
                  <th className="py-5 px-6 text-sm font-extrabold text-[#071B2C] bg-[#E7F6FA] w-1/3 border-x border-[#D0DFE8]">
                    <div className="flex items-center justify-between">
                      <span>CLEARNYX B2B Lab</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#00A6CE] text-white uppercase">
                        Doctor-First
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#071B2C] bg-[#F8FBFD] w-1/5">
                    Traditional Foreign Brands
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-[#071B2C] bg-[#F8FBFD] w-1/5">
                    Direct-to-Consumer DIY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EBF0] text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FBFD]/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#071B2C]">
                      {row.parameter}
                    </td>

                    {/* CLEARNYX Column */}
                    <td className="py-4 px-6 bg-[#E7F6FA]/50 border-x border-[#D0DFE8] font-bold text-[#071B2C]">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#00A6CE] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span>{row.clearnyx}</span>
                      </div>
                    </td>

                    {/* Legacy Column */}
                    <td className="py-4 px-6 text-[#556977]">
                      <div className="flex items-start gap-2">
                        <Minus className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>

                    {/* DTC Column */}
                    <td className="py-4 px-6 text-[#556977]">
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
          <div className="p-6 bg-[#F8FBFD] border-t border-[#E2EBF0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#556977]">
            <span>
              * Transparent laboratory pricing with zero annual volume commitments.
            </span>
            <Link
              href="#partner-form"
              className="inline-flex items-center gap-1.5 font-bold text-[#00A6CE] hover:text-[#0087AB]"
            >
              <span>Onboard Your Practice Today</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

