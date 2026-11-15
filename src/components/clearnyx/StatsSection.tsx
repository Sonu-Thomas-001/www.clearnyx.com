"use client";

import React from "react";

const STATS = [
  {
    value: "3,000+",
    label: "Partner Clinics",
    sub: "Across India",
  },
  {
    value: "48–72h",
    label: "3D CAD Staging",
    sub: "Turnaround SLA",
  },
  {
    value: "0.01mm",
    label: "Laser Precision",
    sub: "Gingival scalloping",
  },
  {
    value: "100%",
    label: "Doctor-Directed",
    sub: "Strictly B2B lab",
  },
];

export function StatsSection() {
  return (
    <section aria-label="Key Clinical Metrics" className="py-12 sm:py-16 bg-white border-y border-[#EAEFF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#EAEFF3]">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx === 0 ? "lg:pl-0" : "lg:px-6"
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight font-heading">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#071B2C] mt-2 leading-tight">
                {stat.label}
              </span>
              <span className="text-xs text-[#718594] mt-0.5 font-medium">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
