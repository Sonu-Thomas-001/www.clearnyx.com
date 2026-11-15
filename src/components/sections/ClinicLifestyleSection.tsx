import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Coffee, Smile, CalendarCheck, ShieldCheck } from "lucide-react";

export function ClinicLifestyleSection() {
  const steps = [
    {
      num: "01",
      title: "Wear with Invisibility",
      desc: "Discreet high-clarity polymers fit flush over teeth, making appliances virtually undetectable in professional and social settings.",
      icon: Smile,
    },
    {
      num: "02",
      title: "Remove for Dining",
      desc: "Patients remove trays freely before meals and hot beverages, eliminating dietary restrictions and appliance damage.",
      icon: Coffee,
    },
    {
      num: "03",
      title: "Maintain Flawless Hygiene",
      desc: "Normal tooth brushing and interproximal flossing without the plaque accumulation risks of fixed orthodontic brackets.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Advance by Clinical Schedule",
      desc: "Patients switch to the subsequent numbered aligner pouch every 10–14 days as prescribed by your treatment plan.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="cyan">PATIENT LIFESTYLE &amp; COMPLIANCE</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Orthodontics That Fits Everyday Life.
            </h2>
            <p className="text-base text-slate-secondary leading-relaxed">
              High patient compliance is essential to achieving planned tooth movements. CLEARNYX aligners are designed around modern daily routines, giving patients the aesthetic freedom they desire while respecting biological force kinetics.
            </p>

            <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-brand flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Prescribed Wear Commitment
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed">
                Wearing aligners for 22 to 24 hours daily ensures continuous light pressure is maintained, allowing bone remodeling to keep pace with digital treatment staging.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Step Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface-soft/80 border border-surface-border hover:border-cyan-300 hover:bg-white transition-all shadow-subtle group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-brand">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-cyan-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
