"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Stethoscope,
  ScanLine,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function DoctorPhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#E2EBF0] bg-slate-100">
              <Image
                src="/images/editorial/clearnyx-dental-clinic.jpg"
                alt="Modern dental clinic treatment room"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 inset-x-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#12C8E8]">
                  Practice Protection Promise
                </span>
                <p className="text-sm font-semibold leading-snug">
                  Orthodontic therapy belongs in the dental clinic, not in a home mailbox.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Standards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
                DOCTOR AUTONOMY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
                An Orthodontic Laboratory That Protects Your Practice.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#556977] leading-relaxed">
                Many aligner brands either market direct-to-consumer kits that attempt to replace your clinical oversight, or lock your practice into proprietary closed scanners and punishing annual case quotas. CLEARNYX takes the opposite approach.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B2C]">
                    Zero Direct-to-Consumer Disintermediation
                  </h3>
                  <p className="text-sm text-[#556977] mt-1 leading-relaxed">
                    We never sell impression putty kits online, solicit your patients for treatment, or bypass in-person clinic appointments. Every aligner prescription begins and ends under your direct clinical oversight.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 mt-1">
                  <ScanLine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B2C]">
                    Open-Architecture Scanner Freedom
                  </h3>
                  <p className="text-sm text-[#556977] mt-1 leading-relaxed">
                    Ingest raw STL, OBJ, or PLY files from virtually any intraoral scanner—including iTero, 3Shape TRIOS, Medit, Carestream, and Primescan. Zero file conversion penalties and zero hardware lock-ins.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 mt-1">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B2C]">
                    Collaborative Orthodontic Staging Desk
                  </h3>
                  <p className="text-sm text-[#556977] mt-1 leading-relaxed">
                    Direct phone and screen-share access to your assigned orthodontic CAD technician. Discuss velocity limits, attachments, and IPR staging live without dealing with offshore call centers.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#partner-form"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00A6CE] hover:text-[#0087AB] transition-colors"
              >
                <span>Request Clinical Onboarding Pack</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

