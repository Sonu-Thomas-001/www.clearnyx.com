import React from "react";
import { ShieldCheck, Crosshair, UserCheck, Truck } from "lucide-react";

export function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Medical-Grade Polymers",
      subtitle: "Certified PETG & Multi-Layer Composite",
    },
    {
      icon: Crosshair,
      title: "0.01mm Digital Calibration",
      subtitle: "Sub-Millimeter Biomechanical Staging",
    },
    {
      icon: UserCheck,
      title: "100% Doctor-Led Authority",
      subtitle: "Prescription Reviewed & Approved by Clinicians",
    },
    {
      icon: Truck,
      title: "Rapid Practice Delivery",
      subtitle: "Direct Doorstep Logistics Across India",
    },
  ];

  return (
    <div className="w-full bg-white border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-surface-soft/80 border border-surface-border/80 hover:border-cyan-300 hover:bg-white transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-ice-soft text-cyan-brand flex items-center justify-center shrink-0 border border-cyan-200/50">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-navy-900 truncate">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-secondary truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

