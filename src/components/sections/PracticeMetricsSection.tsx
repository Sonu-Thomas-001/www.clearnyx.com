import React from "react";
import { Crosshair, UserCheck, Clock, ShieldCheck } from "lucide-react";

export function PracticeMetricsSection() {
  const stats = [
    {
      value: "0.01 mm",
      label: "Sub-Millimeter Calibration",
      description: "Precision-engineered tooth movement staging per aligner step.",
      icon: Crosshair,
    },
    {
      value: "100%",
      label: "Doctor-Led Prescription",
      description: "Every setup approved and managed solely by licensed dental clinicians.",
      icon: UserCheck,
    },
    {
      value: "48–72 h",
      label: "Digital 3D Staging Review",
      description: "Fast digital setup turnaround for efficient case planning.",
      icon: Clock,
    },
    {
      value: "22–24 h",
      label: "Daily Prescribed Protocol",
      description: "Optimized biomechanical force delivery for steady bone remodeling.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-navy-900 text-white border-y border-navy-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-800/60 border border-navy-700/80 flex flex-col justify-between hover:border-cyan-400/60 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-cyan-brand flex items-center justify-center mb-4 border border-navy-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-brand mb-2">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

