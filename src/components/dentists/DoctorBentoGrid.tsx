"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  Cpu,
  Layers,
  PhoneCall,
  Activity,
  Check,
  Lock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function DoctorBentoGrid() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold tracking-wide mb-3">
            DOCTOR-CENTRIC ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Designed for Clinicians Who Refuse to Compromise on Autonomy.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-secondary leading-relaxed">
            Many aligner brands either market directly to consumers behind your back or lock your practice into proprietary closed ecosystems. CLEARNYX operates strictly as your precision back-office manufacturing lab.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: 100% Doctor Autonomy & Zero DTC (Span 7) */}
          <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-navy-900 to-[#0A243A] text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border border-navy-800 shadow-xl group">
            {/* Ambient Graphic Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-brand/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-brand border border-white/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-mono uppercase tracking-wider">
                Strict Non-Disintermediation Promise
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Zero Direct-to-Consumer Bypassing.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We do not sell aligners online. We do not provide DIY impression putty kits. We do not solicit your patients. All diagnostic records, case approvals, IPR execution, and retainer handoffs belong strictly chairside in your clinic.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 mt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-200 font-medium">You Bill the Patient</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-200 font-medium">Zero Quota Mandates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-slate-200 font-medium">100% Patient Loyalty</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Biomechanical Guardrails (Span 5) */}
          <div className="md:col-span-5 rounded-3xl bg-surface-soft border border-surface-border p-8 sm:p-10 flex flex-col justify-between shadow-card hover:shadow-elevated transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-brand flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                Biomechanical Velocity Guardrails.
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                Unrealistic staging velocities lead to tracking lag, unseated trays, and clinical frustration. Our CAD planning algorithm caps maximum tooth displacement strictly within biological parameters:
              </p>
            </div>

            <div className="space-y-2.5 pt-6 mt-4 border-t border-surface-border text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-border">
                <span className="text-navy-900 font-medium">Linear Translation</span>
                <span className="font-mono font-bold text-cyan-brand">&le; 0.22 mm / stage</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-border">
                <span className="text-navy-900 font-medium">Rotational Derotation</span>
                <span className="font-mono font-bold text-cyan-brand">&le; 1.8&deg; / stage</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-border">
                <span className="text-navy-900 font-medium">IPR Distribution</span>
                <span className="font-mono font-bold text-navy-900">Gradual (Max 0.3mm/visit)</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Dual Material Flexibility (Span 5) */}
          <div className="md:col-span-5 rounded-3xl bg-surface-soft border border-surface-border p-8 sm:p-10 flex flex-col justify-between shadow-card hover:shadow-elevated transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-ice-soft text-cyan-brand flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                Dual Medical Polymer Options.
              </h3>
              <p className="text-sm text-slate-secondary leading-relaxed">
                One material cannot solve every clinical scenario. CLEARNYX gives you the clinical freedom to prescribe the polymer architecture matched to your case objectives:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 mt-4 border-t border-surface-border text-xs">
              <div className="p-3 rounded-xl bg-white border border-surface-border">
                <span className="font-bold text-navy-900 block text-sm">Standard PETG</span>
                <span className="text-[11px] text-slate-secondary mt-1 block leading-tight">
                  Ultra-transparent, rigid force transfer for minor to moderate anterior alignment.
                </span>
              </div>

              <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-200">
                <span className="font-bold text-cyan-900 block text-sm">Multi-Layer Pro</span>
                <span className="text-[11px] text-cyan-800/80 mt-1 block leading-tight">
                  Elastomeric core for continuous gentle forces in complex rotations and root torque.
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Dedicated MDS Planning Desk (Span 7) */}
          <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-cyan-950 via-navy-900 to-navy-dark text-white p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border border-cyan-900/50 shadow-xl">
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-400/15 text-cyan-200 text-[11px] font-mono uppercase tracking-wider">
                Direct Specialist Collaboration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Dedicated Orthodontic CAD Review Desk.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No generic call center bots or unhelpful ticketing systems. Every CLEARNYX treatment plan is staged by experienced orthodontic technicians under MDS guidance. You have direct phone, WhatsApp, and screen-share access to your assigned planner.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-8 mt-6 border-t border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-brand/30 border border-cyan-400/40 flex items-center justify-center text-white font-bold text-xs">
                  MDS
                </div>
                <div>
                  <p className="font-semibold text-white">Direct Planner Access</p>
                  <p className="text-[11px] text-slate-400">Phone & screen-share staging reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-brand/30 border border-cyan-400/40 flex items-center justify-center text-white font-bold text-xs">
                  &infin;
                </div>
                <div>
                  <p className="font-semibold text-white">Unlimited Plan Revisions</p>
                  <p className="text-[11px] text-slate-400">Zero extra fees until you approve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
