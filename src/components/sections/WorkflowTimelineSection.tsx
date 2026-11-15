import React from "react";
import Link from "next/link";
import { ArrowRight, ScanLine, MonitorSmartphone, CheckCircle2, Layers, PackageCheck, Smile } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WORKFLOW_STAGES } from "@/content/workflow";

const ICONS = [
  ScanLine,
  MonitorSmartphone,
  CheckCircle2,
  Layers,
  PackageCheck,
  Smile,
];

export function WorkflowTimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="cyan">CLINICAL WORKFLOW</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-3">
              A Structured Approach to Every Case.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
              From diagnostic impression submission to patient alignment, our six-stage collaborative process guarantees quality, consistency, and clinical predictability.
            </p>
          </div>
          <Button
            href="/how-it-works"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-end"
          >
            View Full Workflow
          </Button>
        </div>

        {/* 6-Stage Grid / Horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 relative">
          {WORKFLOW_STAGES.map((stage, idx) => {
            const Icon = ICONS[idx] || Smile;
            return (
              <div
                key={stage.step}
                className="bg-white rounded-xl border border-surface-border p-5 flex flex-col justify-between shadow-subtle hover:border-cyan-300 hover:shadow-card transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-cyan-brand uppercase tracking-wider">
                      {stage.stage}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-ice-soft text-cyan-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-secondary leading-relaxed line-clamp-4">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-subtle text-[11px] text-slate-muted">
                  Deliverable: <span className="font-semibold text-navy-900">{stage.deliverables}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wear Schedule Clinical Qualification */}
        <div className="mt-10 p-4 rounded-xl bg-ice-soft/40 border border-cyan-200/60 flex items-center justify-between flex-wrap gap-4 text-xs text-navy-900">
          <div>
            <span className="font-bold text-cyan-brand">Prescribed Wear Schedules:</span> Recommended 22–24 hours/day with stage changes every 10–14 days, as determined by the treating dental professional based on clinical evaluation.
          </div>
          <Link
            href="/how-it-works"
            className="text-cyan-brand hover:text-cyan-electric font-semibold flex items-center gap-1"
          >
            Learn more about wear protocols <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

