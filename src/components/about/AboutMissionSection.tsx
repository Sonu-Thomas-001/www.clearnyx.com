"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Stethoscope, ArrowRight, HeartPulse } from "lucide-react";

export function AboutMissionSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#E2EBF0] bg-slate-100">
              <Image
                src="/images/editorial/clearnyx-dental-clinic.jpg"
                alt="Modern clear aligner dental facility and consultation operatory"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#12C8E8]">
                  Our Medical Philosophy
                </span>
                <p className="text-sm font-semibold leading-snug">
                  Safe orthodontic therapy begins with a doctor's examination, not a mail-order box.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase">
              WHO WE ARE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
              Empowering Dental Practices to Lead the Aligner Revolution.
            </h2>

            <p className="text-base sm:text-lg text-[#556977] leading-relaxed">
              CLEARNYX was founded with a singular purpose: to bridge advanced 3D digital planning with certified orthodontic manufacturing, operating strictly as a collaborative partner for registered dentists and orthodontists in India.
            </p>

            <p className="text-base text-[#556977] leading-relaxed">
              In an industry increasingly crowded by direct-to-consumer services offering DIY impression kits and unmonitored treatments, CLEARNYX takes an uncompromising stand for clinical integrity. We believe that real orthodontic success demands in-person evaluation, full diagnostic records, precise attachment placement, and active doctor supervision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0]">
                <div className="w-10 h-10 rounded-xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#071B2C] text-sm">
                  100% Doctor-Led
                </h4>
                <p className="text-xs text-[#556977] mt-1 leading-relaxed">
                  Every case begins with your prescription and is handed directly to the patient at your dental chair.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0]">
                <div className="w-10 h-10 rounded-xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center mb-3">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#071B2C] text-sm">
                  Clinical Autonomy
                </h4>
                <p className="text-xs text-[#556977] mt-1 leading-relaxed">
                  Zero foreign brand royalty markups, zero hardware lock-in, and zero annual case volume minimums.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/for-dentists"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00A6CE] hover:text-[#0087AB] transition-colors"
              >
                <span>Explore Our Clinician Partnership Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
