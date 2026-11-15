"use client";

import React from "react";
import Image from "next/image";
import { PartnerEnquiryForm } from "@/components/forms/PartnerEnquiryForm";
import {
  Gift,
  ShieldCheck,
  Package,
  Headphones,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export function ClinicOnboardingSection() {
  return (
    <section id="partner-form" className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Onboarding Perks & Starter Kit */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide mb-3">
                DOCTOR ONBOARDING & ACTIVATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Activate Your Clinical Portal in Under 24 Hours.
              </h2>
              <p className="mt-4 text-base text-slate-secondary leading-relaxed">
                Join forward-thinking dental clinics and orthodontic practices across India. Fill out your clinic details to receive your partner account and complimentary doctor welcome kit.
              </p>
            </div>

            {/* Doctor Starter Bundle Card */}
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-[#0A243A] text-white p-7 sm:p-8 shadow-xl border border-navy-800 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-brand/20 text-cyan-brand flex items-center justify-center font-bold">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Doctor Starter Welcome Bundle
                  </h3>
                  <p className="text-xs text-slate-400">
                    Dispatched to your registered clinic upon verification
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Free First Case 3D CAD Simulation</span>
                    <span className="text-slate-300">Experience our sub-millimeter staging quality on an actual patient with zero commitment.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Physical Practice Demo Kit</span>
                    <span className="text-slate-300">Includes real Standard & Multi-Layer aligner samples, chewies, patient cases, and typodont display.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dedicated Clinical Account Manager</span>
                    <span className="text-slate-300">Direct WhatsApp & phone contact for case logistics, pickup coordination, and CAD questions.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Chairside Patient Marketing Assets</span>
                    <span className="text-slate-300">Branded clinical brochures, counter displays, and digital social media kits for your clinic.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts */}
            <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border text-xs text-slate-secondary space-y-1">
              <p className="font-bold text-navy-900">Prefer direct clinic liaison?</p>
              <p>Email our partnership desk at <strong className="text-cyan-brand">partners@clearnyx.com</strong></p>
              <p>Clinical helpline available Mon–Sat, 9:00 AM – 7:00 PM IST.</p>
            </div>
          </div>

          {/* Right Column: The Partner Enquiry Form */}
          <div className="lg:col-span-7">
            <PartnerEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
