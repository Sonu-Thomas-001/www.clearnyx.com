"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Condition {
  id: string;
  name: string;
  subtitle: string;
  indication: string;
  recommended: "Standard PETG" | "Multi-Layer Composite";
  complexity: "Mild to Moderate" | "Moderate to Complex";
  clinicalNote: string;
}

const CONDITIONS: Condition[] = [
  {
    id: "crowding",
    name: "Anterior Crowding",
    subtitle: "Overlapping or rotated anterior teeth",
    indication: "Insufficient dental arch perimeter causing incisors to rotate, overlap, or erupt lingually/labially.",
    recommended: "Standard PETG",
    complexity: "Mild to Moderate",
    clinicalNote: "Staged with calibrated expansion, minor IPR, or de-rotation attachments.",
  },
  {
    id: "spacing",
    name: "Spacing & Diastema",
    subtitle: "Generalized spaces and midline gaps",
    indication: "Excess arch circumference resulting in unwanted interdental gaps or prominent central diastemas.",
    recommended: "Standard PETG",
    complexity: "Mild to Moderate",
    clinicalNote: "Bodily anterior retraction with root tipping control and reciprocal anchorage preservation.",
  },
  {
    id: "deep-bite",
    name: "Deep Overbite",
    subtitle: "Excessive anterior vertical overlap",
    indication: "Maxillary incisors excessively cover mandibular incisors, creating potential incisal wear and palatal impingement.",
    recommended: "Multi-Layer Composite",
    complexity: "Moderate to Complex",
    clinicalNote: "Managed with lower incisor intrusion, bite ramps, and premolar extrusion staging.",
  },
  {
    id: "open-bite",
    name: "Open Bite",
    subtitle: "Anterior teeth do not occlude",
    indication: "Incisal edges fail to achieve vertical contact during maximum intercuspation, often affecting speech and chewing.",
    recommended: "Multi-Layer Composite",
    complexity: "Moderate to Complex",
    clinicalNote: "Requires posterior molar intrusion staging combined with anterior extrusion mechanics.",
  },
  {
    id: "crossbite",
    name: "Anterior & Posterior Crossbite",
    subtitle: "Opposing teeth occlude in reverse",
    indication: "One or more upper teeth bite inside lower opposing teeth, potentially causing asymmetric wear or midline shift.",
    recommended: "Multi-Layer Composite",
    complexity: "Moderate to Complex",
    clinicalNote: "Coordinated arch expansion and transverse torque control across progressive aligner sequences.",
  },
  {
    id: "relapse",
    name: "Orthodontic Relapse",
    subtitle: "Secondary tooth shift after prior treatment",
    indication: "Unwanted physiological tooth drift occurring months or years after fixed braces or prior aligners.",
    recommended: "Standard PETG",
    complexity: "Mild to Moderate",
    clinicalNote: "Rapid, predictable re-alignment to restore ideal aesthetics with minimal active tray stages.",
  },
];

export function ConditionsGridSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Mild to Moderate" | "Moderate to Complex">("All");

  const filtered = CONDITIONS.filter((c) => activeFilter === "All" || c.complexity === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="cyan">CLINICAL INDICATIONS</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              Orthodontic Conditions We Treat in Partnership.
            </h2>
            <p className="mt-4 text-base text-slate-secondary leading-relaxed">
              From mild aesthetic adjustments to complex multi-tooth biomechanics, CLEARNYX appliances are digitally staged to address diverse malocclusions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-surface-border self-start md:self-end">
            {(["All", "Mild to Moderate", "Moderate to Complex"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                  activeFilter === filter
                    ? "bg-navy-900 text-white shadow-sm"
                    : "text-slate-secondary hover:text-navy-900 hover:bg-surface-soft"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Condition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-surface-border p-6 shadow-subtle hover:border-cyan-300 hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase",
                      item.complexity === "Mild to Moderate"
                        ? "bg-cyan-50 text-cyan-700 border border-cyan-200"
                        : "bg-navy-900 text-cyan-electric border border-navy-800"
                    )}
                  >
                    {item.complexity}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-muted">
                    {item.recommended}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-1 group-hover:text-cyan-brand transition-colors">
                  {item.name}
                </h3>
                <div className="text-xs text-slate-muted mb-3 font-medium">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-secondary leading-relaxed mb-4">
                  {item.indication}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-subtle space-y-2">
                <div className="text-[11px] text-navy-900 bg-surface-soft p-2.5 rounded-lg border border-surface-border">
                  <span className="font-bold text-cyan-brand">Staging: </span>
                  {item.clinicalNote}
                </div>

                <Link
                  href="/technology"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-cyan-brand transition-colors pt-1"
                >
                  Explore Appliance Technology <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Authority Footnote */}
        <div className="mt-8 text-center text-xs text-slate-muted">
          * Clinical Notice: Exact case diagnosis, tooth movement staging feasibility, and material selection are determined solely by the treating dental professional based on full diagnostic records.
        </div>
      </div>
    </section>
  );
}
