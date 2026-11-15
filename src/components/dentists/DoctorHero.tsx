"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  CheckCircle2,
  SlidersHorizontal,
  Eye,
  FileCheck2,
} from "lucide-react";

interface CasePreset {
  id: string;
  name: string;
  indication: string;
  stages: number;
  velocity: string;
  attachments: number;
  iprTotal: string;
  material: string;
  previewNote: string;
}

const CASE_PRESETS: CasePreset[] = [
  {
    id: "crowding",
    name: "Class I Moderate Crowding",
    indication: "Lower anterior crowding with 3.2mm arch deficiency",
    stages: 16,
    velocity: "0.20 mm / stage",
    attachments: 6,
    iprTotal: "0.8 mm (Interproximal)",
    material: "CLEARNYX Multi-Layer Pro",
    previewNote: "Sequential derotation of 32 & 42 with buccal attachment retention vectors.",
  },
  {
    id: "spacing",
    name: "Maxillary Diastema Closure",
    indication: "Central incisor diastema (2.4mm) with flared proclination",
    stages: 12,
    velocity: "0.18 mm / stage",
    attachments: 4,
    iprTotal: "0.0 mm (No IPR required)",
    material: "CLEARNYX Standard High-Clarity",
    previewNote: "Controlled bodily retroclination with palatal root torque preservation.",
  },
  {
    id: "deepbite",
    name: "Mild Deep Bite & Leveling",
    indication: "Overbite 60% with mild Spee curve exaggeration",
    stages: 20,
    velocity: "0.22 mm / stage",
    attachments: 8,
    iprTotal: "0.5 mm (Lower anterior)",
    material: "CLEARNYX Multi-Layer Pro",
    previewNote: "Anterior intrusion ramps with premolar extrusion mechanics for curve leveling.",
  },
];

export function DoctorHero() {
  const [selectedCase, setSelectedCase] = useState<CasePreset>(CASE_PRESETS[0]);
  const [activeStage, setActiveStage] = useState(8);

  return (
    <section className="relative w-full bg-navy-900 text-white overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 border-b border-surface-border/10">
      {/* Background Architectural Grid & Subtle Radial Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-brand/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-cyan-electric/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #12C8E8 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clinical Positioning */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
              <span>B2B ORTHODONTIC MANUFACTURING & CAD LAB</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.12]">
              The Doctor-First Aligner Partner Engineered for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-brand via-cyan-electric to-white">
                Clinical Autonomy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Sub-millimeter 3D digital staging, open-architecture scanner compatibility, and certified biocompatible polymers. CLEARNYX powers your orthodontic practice without bypassing your clinic or compromising your patient relationships.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#partner-form"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-brand to-cyan-electric text-navy-900 font-bold text-sm tracking-wide shadow-cyan hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Onboard Your Practice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#roi-calculator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/15 hover:border-white/25 active:scale-[0.98] transition-all"
              >
                <SlidersHorizontal className="w-4 h-4 text-cyan-300" />
                <span>Calculate Practice Economics</span>
              </Link>
            </div>

            {/* Micro Doctor Confidence Notes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-2xl font-extrabold text-white">48–72h</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">3D Staging SLA</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">0.01mm</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Laser Cut Precision</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">100%</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Open STL / PLY</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan-brand">Zero DTC</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Strict Doctor-Only</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clinical Workstation Console Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0D2840] to-[#071B2C] border border-cyan-500/25 shadow-2xl p-4 sm:p-5 backdrop-blur-xl">
              {/* Console Window Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-300">
                    CLEARNYX_CAD_STUDIO // v3.4
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  MDS Approved
                </span>
              </div>

              {/* Case Preset Selector */}
              <div className="mt-3.5">
                <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                  Sample Clinical Case Simulation:
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-navy-dark/70 rounded-lg border border-white/5">
                  {CASE_PRESETS.map((preset) => {
                    const isSelected = selectedCase.id === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setSelectedCase(preset);
                          setActiveStage(Math.floor(preset.stages / 2));
                        }}
                        className={`text-xs py-1.5 px-2 rounded-md font-medium transition-all truncate text-center ${
                          isSelected
                            ? "bg-cyan-brand text-navy-900 font-bold shadow-sm"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {preset.id.charAt(0).toUpperCase() + preset.id.slice(1)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Central Viewport / CAD Simulation Card */}
              <div className="relative mt-4 rounded-xl bg-navy-dark/90 border border-white/10 p-4 overflow-hidden">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {selectedCase.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {selectedCase.indication}
                    </p>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300 border border-cyan-700/40">
                    STL Verified
                  </span>
                </div>

                {/* Staging Scrub Control */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-mono">
                      Staging Step: <strong className="text-cyan-brand">{activeStage}</strong> of {selectedCase.stages}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {(activeStage * 12)} Days in Wear
                    </span>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={selectedCase.stages}
                    value={activeStage}
                    onChange={(e) => setActiveStage(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-brand"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Initial (T0)</span>
                    <span>Mid-Point</span>
                    <span>Target Staging</span>
                  </div>
                </div>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10 text-xs">
                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      Max Velocity
                    </span>
                    <span className="font-mono font-bold text-cyan-300">
                      {selectedCase.velocity}
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      Active Attachments
                    </span>
                    <span className="font-mono font-bold text-white">
                      {selectedCase.attachments} Optimized
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      IPR Protocol
                    </span>
                    <span className="font-mono font-bold text-white">
                      {selectedCase.iprTotal}
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      Engineered Polymer
                    </span>
                    <span className="font-mono font-bold text-cyan-brand truncate block">
                      {selectedCase.material}
                    </span>
                  </div>
                </div>

                {/* Clinical Note Callout */}
                <div className="mt-3.5 p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-[11px] text-cyan-200/90 leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-electric shrink-0 mt-0.5" />
                  <span>{selectedCase.previewNote}</span>
                </div>
              </div>

              {/* Footer SLA Guarantee */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-brand" />
                  Treating Doctor Retains Final Modification Rights
                </span>
                <span className="font-mono text-cyan-electric font-semibold">
                  Zero Lock-In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
