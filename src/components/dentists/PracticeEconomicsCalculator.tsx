"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Percent,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export function PracticeEconomicsCalculator() {
  const [monthlyCases, setMonthlyCases] = useState<number>(4);
  const [avgPatientFee, setAvgPatientFee] = useState<number>(85000); // INR

  // CLEARNYX estimated average lab fee (approx ₹28,000 - ₹34,000 depending on complexity, average ₹30,000)
  const estimatedLabCostPerCase = 30000;
  
  // Calculations
  const grossMonthlyRevenue = monthlyCases * avgPatientFee;
  const totalMonthlyLabCost = monthlyCases * estimatedLabCostPerCase;
  const retainedMonthlyProfit = grossMonthlyRevenue - totalMonthlyLabCost;
  const annualRetainedProfit = retainedMonthlyProfit * 12;
  const practiceMarginPct = Math.round((retainedMonthlyProfit / grossMonthlyRevenue) * 100);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-[#071B2C] text-white relative overflow-hidden border-b border-surface-border/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wide mb-3">
            <Calculator className="w-3.5 h-3.5" />
            PRACTICE CASE ECONOMICS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Protect Your Chairside Margins. No Foreign Royalty Markup.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Foreign aligner monopolies often consume 60% or more of your patient revenue in exorbitant lab fees and annual tier requirements. See how CLEARNYX preserves practice profitability.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Monthly Aligner Patients Started
                </label>
                <span className="text-lg font-bold text-cyan-brand font-mono">
                  {monthlyCases} {monthlyCases === 1 ? "case" : "cases"} / month
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={monthlyCases}
                onChange={(e) => setMonthlyCases(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-brand"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>1 case</span>
                <span>12 cases</span>
                <span>25 cases</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Average Patient Case Fee (Chairside)
                </label>
                <span className="text-lg font-bold text-cyan-brand font-mono">
                  {formatCurrency(avgPatientFee)}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={160000}
                step={5000}
                value={avgPatientFee}
                onChange={(e) => setAvgPatientFee(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-brand"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>₹50,000 (Mild)</span>
                <span>₹1,00,000 (Moderate)</span>
                <span>₹1,60,000 (Complex)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <ShieldCheck className="w-4 h-4" />
                The CLEARNYX Practice Guarantee:
              </div>
              <p className="leading-relaxed">
                Zero annual tier minimums. Zero forced hardware contracts. Free unlimited staging revisions until clinical approval.
              </p>
            </div>
          </div>

          {/* Projection Results Column */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-[#0F3252] to-[#0A243A] border border-cyan-400/30 p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold">
              {practiceMarginPct}% Retained Margin
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 block mb-1">
              ANNUAL PRACTICE NET EXPANSION
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono my-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
              {formatCurrency(annualRetainedProfit)}
            </div>

            <p className="text-xs text-slate-300 mb-6">
              Net profit retained directly by your dental practice after all manufacturing and CAD setup costs.
            </p>

            <div className="space-y-3 pt-6 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Monthly Gross Collections:</span>
                <span className="font-mono font-semibold text-white">
                  {formatCurrency(grossMonthlyRevenue)}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>CLEARNYX Transparent Lab Fee:</span>
                <span className="font-mono font-semibold text-slate-400">
                  {formatCurrency(totalMonthlyLabCost)}
                </span>
              </div>

              <div className="flex justify-between items-center text-white font-bold pt-2 border-t border-white/10">
                <span className="text-cyan-300">Monthly Net Profit Retained:</span>
                <span className="font-mono text-cyan-electric text-base">
                  {formatCurrency(retainedMonthlyProfit)}
                </span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10">
              <Link
                href="#partner-form"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-brand text-navy-900 font-bold text-sm tracking-wide shadow-cyan hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Request Detailed Doctor Fee Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
