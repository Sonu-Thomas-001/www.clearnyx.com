import React from "react";
import { CheckCircle2, Eye, Layers, ShieldCheck, MonitorCheck, Scan } from "lucide-react";

export function CapabilitiesTicker() {
  const capabilities = [
    { label: "Virtually Invisible High-Clarity", icon: Eye },
    { label: "Anatomically Scalloped Margins", icon: CheckCircle2 },
    { label: "Dual Polymer Matrix Options", icon: Layers },
    { label: "Sub-Millimeter 3D Staging", icon: CheckCircle2 },
    { label: "Open Scanner STL / OBJ Ready", icon: Scan },
    { label: "Doctor-Approved Setup Viewer", icon: MonitorCheck },
    { label: "Domestic India Fulfillment", icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-navy-900 py-3.5 border-b border-navy-800 overflow-hidden text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-none py-1">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 whitespace-nowrap text-xs text-slate-muted hover:text-white transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-brand shrink-0" />
                <span className="font-medium text-slate-200">{cap.label}</span>
                {idx < capabilities.length - 1 && (
                  <span className="hidden lg:inline text-navy-700 ml-4">•</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

