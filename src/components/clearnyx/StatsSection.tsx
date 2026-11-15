"use client";

import React from "react";
import { Clock, ShieldCheck, Stethoscope, Cpu, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MetricItem {
  id: string;
  category: string;
  value: string;
  unit?: string;
  label: string;
  detail: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const METRICS: MetricItem[] = [
  {
    id: "network",
    category: "CLINICAL NETWORK",
    value: "3,000+",
    label: "Partner Practices",
    detail: "Certified dental clinicians and orthodontic centers across India.",
    badge: "500+ Cities Covered",
    icon: Stethoscope,
  },
  {
    id: "sla",
    category: "CAD STAGING SLA",
    value: "48–72",
    unit: "hrs",
    label: "3D Setup Turnaround",
    detail: "Sub-millimeter staging simulation prepared by specialized CAD technicians.",
    badge: "Guaranteed SLA",
    icon: Clock,
  },
  {
    id: "precision",
    category: "BIOMECHANICAL ACCURACY",
    value: "0.01",
    unit: "mm",
    label: "Precision Tolerance",
    detail: "5-axis automated laser trimming contoured precisely to gingival margins.",
    badge: "Dual Polymer Cores",
    icon: Cpu,
  },
  {
    id: "compliance",
    category: "PRACTICE INTEGRITY",
    value: "100%",
    label: "Doctor-Directed",
    detail: "Strictly B2B laboratory model. Zero direct-to-consumer DIY home kits.",
    badge: "CDSCO & ISO 13485",
    icon: ShieldCheck,
  },
];

export function StatsSection() {
  return (
    <section
      aria-label="CLEARNYX Clinical Benchmarks"
      className="relative py-12 sm:py-16 bg-[#F8FAFC] border-y border-[#E2EBF0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Context Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-[#E2EBF0]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E7F6FA] text-[#00A6CE] text-[10px] font-bold tracking-wider uppercase mb-2 border border-[#C5ECF5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
              <span>Laboratory Benchmarks</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#071B2C] tracking-tight">
              Clinical Precision at National Scale.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#556977] max-w-md leading-relaxed">
            Engineered to empower dental practices with predictable orthodontic staging, certified
            medical polymers, and transparent B2B collaboration.
          </p>
        </div>

        {/* 4 Architectural Clinical Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {METRICS.map((m) => {
            const IconComponent = m.icon;

            return (
              <div
                key={m.id}
                className="bg-white rounded-2xl border border-[#D5E2EC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(7,27,44,0.04)] hover:border-[#00A6CE]/50 hover:shadow-[0_8px_30px_rgba(0,166,206,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-mono tracking-wider text-[#718594] uppercase">
                      {m.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F4F8FA] border border-[#E2EBF0] text-[#00A6CE] flex items-center justify-center group-hover:bg-[#00A6CE] group-hover:text-white group-hover:border-[#00A6CE] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Primary Metric Number */}
                  <div className="flex items-baseline gap-1 mb-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#071B2C] tracking-tight font-heading">
                      {m.value}
                    </span>
                    {m.unit && (
                      <span className="text-sm font-bold text-[#00A6CE] font-mono">
                        {m.unit}
                      </span>
                    )}
                  </div>

                  {/* Title Label */}
                  <h3 className="text-sm font-bold text-[#071B2C] leading-snug mb-2">
                    {m.label}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-[#556977] leading-relaxed mb-4">
                    {m.detail}
                  </p>
                </div>

                {/* Card Footer Micro-Badge */}
                <div className="pt-3 border-t border-[#F0F4F7] flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#00A6CE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
                    <span>{m.badge}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
