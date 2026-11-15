"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  UploadCloud,
  FileCode2,
  CheckCircle2,
  PackageCheck,
  ArrowRight,
  Eye,
  Sliders,
  Sparkles,
  Laptop,
  Layers,
  ChevronRight,
} from "lucide-react";

interface WorkflowStep {
  id: number;
  stageNum: string;
  title: string;
  tabLabel: string;
  leadTime: string;
  description: string;
  specs: { label: string; value: string }[];
  deliverables: string[];
  systemAction: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    stageNum: "01",
    tabLabel: "Scan & Prescribe",
    title: "Optical Scan & Prescription Ingestion",
    leadTime: "Immediate Upload (< 5 mins)",
    description:
      "Export open-format 3D digital impressions from your intraoral scanner (or request our PVS courier pickup). Fill out our clinical prescription specifying your chief complaints, anchor tooth boundaries, and extraction/expansion preferences.",
    specs: [
      { label: "Supported Formats", value: ".STL, .OBJ, .PLY, .DCM" },
      { label: "Scanner Integration", value: "iTero, 3Shape, Medit, Primescan" },
      { label: "Diagnostic Records", value: "8 Intraoral/Facial Photos + OPG" },
      { label: "Physical Impressions", value: "PVS pickup available across India" },
    ],
    deliverables: [
      "Instant automated file integrity validation",
      "Assigned dedicated senior orthodontic technician",
      "Immediate case ticketing with live timeline tracking",
    ],
    systemAction: "File Validation: 100% OK • Coordinates Aligned • Arch Occlusion Verified",
  },
  {
    id: 2,
    stageNum: "02",
    tabLabel: "3D CAD Staging",
    title: "Biomechanical CAD Treatment Staging",
    leadTime: "48 to 72 Business Hours",
    description:
      "Our specialized orthodontic CAD engineers segment individual crowns and roots, simulate sequential force vectors, and design optimized composite attachments. Movement velocities are restricted to biological limits to prevent root fenestration.",
    specs: [
      { label: "Translation Velocity", value: "0.20mm – 0.22mm / step" },
      { label: "Rotational Limit", value: "1.5° – 1.8° / step" },
      { label: "Collision Detection", value: "0.05mm precision clearance" },
      { label: "Attachment Library", value: "Beveled, Ellipsoid, Rectangular" },
    ],
    deliverables: [
      "Sequential stage-by-stage 3D tooth movement simulation",
      "Complete IPR distribution chart with exact contact points",
      "Attachment placement template guide design",
    ],
    systemAction: "Biomechanical Staging Engine: 18 Steps Generated • Zero Root Clashing Detected",
  },
  {
    id: 3,
    stageNum: "03",
    tabLabel: "Review & Approval",
    title: "Interactive Web 3D Review & Revisions",
    leadTime: "At Your Practice Pace",
    description:
      "Inspect the interactive 3D simulation on any device without installing heavy proprietary desktop software. Scrub through stages, measure tooth movements in millimeters, request staging modifications, or grant final clinical authorization with 1 click.",
    specs: [
      { label: "Platform Access", value: "Web Browser (Mobile, Mac, PC, iPad)" },
      { label: "Staging Revisions", value: "Unlimited free modifications" },
      { label: "Clinical Discussion", value: "Direct phone / screen-share review" },
      { label: "Approval Security", value: "Cryptographic doctor digital signature" },
    ],
    deliverables: [
      "Interactive 360-degree patient tooth rotation viewer",
      "Chairside patient demonstration view mode",
      "Printable clinical summary PDF with IPR stage alerts",
    ],
    systemAction: "Clinician Portal: Staging Approved • Direct Push to Automated Laser CAM Production",
  },
  {
    id: 4,
    stageNum: "04",
    tabLabel: "Delivery to Clinic",
    title: "Automated Fabrication & Practice Delivery",
    leadTime: "5 to 7 Days to Clinic Door",
    description:
      "Aligners are thermoformed using medical-grade certified polymers and laser-trimmed along the scalloped marginal gingiva for superior comfort. Each stage is individually sealed, laser-etched with patient ID and stage number, and delivered in a premium branded patient presentation box.",
    specs: [
      { label: "Trim Line Style", value: "Scalloped 0.5mm above gingival zenith" },
      { label: "Material Certification", value: "Class IIa Biocompatible Polymers" },
      { label: "Etching System", value: "Ultra-fine laser permanent stage etching" },
      { label: "Logistics Partner", value: "Express insured clinical courier" },
    ],
    deliverables: [
      "Complete sequence of custom patient aligners in sealed pouches",
      "Precision attachment placement template",
      "Doctor treatment tracking ledger & patient starter accessories",
    ],
    systemAction: "Packaging & Dispatch: Inspected • Laser Etched • Dispatched via Express Clinical Logistics",
  },
];

export function ClinicianWorkflowConsole() {
  const [activeStep, setActiveStep] = useState<WorkflowStep>(WORKFLOW_STEPS[0]);

  return (
    <section className="py-20 md:py-28 bg-surface-soft border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide mb-3">
            CLINICAL WORKFLOW CONSOLE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            How Cases Move from Scan to Chairside Delivery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-secondary">
            A frictionless digital pipeline designed to save you chairside hours, reduce lab delays, and give you complete control at every milestone.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center justify-between gap-2 max-w-4xl mx-auto p-1.5 rounded-2xl bg-white border border-surface-border shadow-sm mb-10 overflow-x-auto">
          {WORKFLOW_STEPS.map((step) => {
            const isActive = activeStep.id === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step)}
                className={`flex-1 min-w-[150px] sm:min-w-0 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-navy-900 text-white shadow-md font-bold"
                    : "text-slate-600 hover:text-navy-900 hover:bg-surface-subtle"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    isActive ? "bg-cyan-brand text-navy-900" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {step.stageNum}
                </span>
                <span>{step.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Workflow Display Console */}
        <div className="rounded-3xl bg-white border border-surface-border shadow-elevated overflow-hidden">
          {/* Top Status Header */}
          <div className="bg-navy-900 text-white px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-navy-800">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-cyan-brand/20 text-cyan-brand flex items-center justify-center font-mono font-bold text-sm border border-cyan-400/30">
                {activeStep.stageNum}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeStep.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Target Turnaround: <span className="text-cyan-brand font-semibold">{activeStep.leadTime}</span>
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ACTIVE SYSTEM STAGE</span>
            </div>
          </div>

          {/* Main Body Grid */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Overview & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                {activeStep.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="rounded-2xl bg-surface-soft border border-surface-border p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-brand" />
                  Clinical & Engineering Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {activeStep.specs.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white border border-surface-border">
                      <span className="text-[11px] text-slate-muted block">{item.label}</span>
                      <span className="font-bold text-navy-900 font-mono mt-0.5 block">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Deliverables */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Doctor Deliverables at This Stage:
                </h4>
                <div className="space-y-2">
                  {activeStep.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Simulated CAD / System Telemetry View */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#071B2C] text-white p-6 border border-cyan-500/20 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-mono text-slate-400">STATUS_FEED</span>
                  <span className="font-mono text-cyan-brand font-bold">ONLINE</span>
                </div>

                {/* Visual Stage Card */}
                <div className="aspect-[4/3] rounded-xl bg-navy-dark border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-brand/10 text-cyan-brand border border-cyan-400/20 flex items-center justify-center mb-4">
                    {activeStep.id === 1 && <UploadCloud className="w-8 h-8" />}
                    {activeStep.id === 2 && <Layers className="w-8 h-8" />}
                    {activeStep.id === 3 && <Laptop className="w-8 h-8" />}
                    {activeStep.id === 4 && <PackageCheck className="w-8 h-8" />}
                  </div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Milestone {activeStep.stageNum} of 04
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    {activeStep.title}
                  </p>
                </div>

                {/* System Terminal Action Log */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-cyan-300">
                  <span className="text-slate-500 mr-2">&gt;</span>
                  {activeStep.systemAction}
                </div>

                {/* Action CTA */}
                <a
                  href="#partner-form"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-brand text-navy-900 font-bold text-xs tracking-wide hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Submit Sample Case for Staging</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
