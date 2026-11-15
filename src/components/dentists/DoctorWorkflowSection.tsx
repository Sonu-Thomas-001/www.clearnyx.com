"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scan,
  FileCode,
  CheckCircle,
  Package,
  ArrowRight,
  Clock,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Capture Scans or Impressions",
    leadTime: "Immediate Upload",
    description:
      "Export open-format 3D files (STL/PLY/OBJ) from your intraoral scanner directly to our portal, or request our free insured PVS impression pickup across India.",
    icon: Scan,
  },
  {
    num: "02",
    title: "Orthodontic 3D Staging",
    leadTime: "48–72 Business Hours",
    description:
      "Our specialized orthodontic CAD team stages sequential movements, designs optimized attachments, and verifies collision clearances within biological limits.",
    icon: FileCode,
  },
  {
    num: "03",
    title: "Review & Clinical Approval",
    leadTime: "At Your Practice Pace",
    description:
      "Inspect the 3D simulation on any device. Discuss adjustments directly with your assigned planner, request free unlimited modifications, and approve when satisfied.",
    icon: CheckCircle,
  },
  {
    num: "04",
    title: "Direct Practice Delivery",
    leadTime: "5–7 Days to Clinic",
    description:
      "Custom thermoformed, laser-trimmed aligners are individually packaged, stage-labeled, and delivered to your clinic in our luxury patient presentation box.",
    icon: Package,
  },
];

export function DoctorWorkflowSection() {
  return (
    <section id="workflow" className="py-20 md:py-28 bg-[#F8FBFD] border-b border-[#E2EBF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDF7FC] text-[#0087AB] text-xs font-bold tracking-wider uppercase mb-3">
            PRACTICE ROUTINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B2C] tracking-tight leading-tight">
            How Cases Move from First Scan to Patient Delivery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556977]">
            A predictable, transparent digital workflow designed to integrate smoothly into your clinic schedule.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E2EBF0] p-7 shadow-subtle hover:shadow-card transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-[#00A6CE]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#071B2C]">
                    {step.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#00A6CE] font-bold mt-1.5 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.leadTime}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#556977] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Packaging Showcase Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#071B2C] via-[#0A243A] to-[#071B2C] text-white p-8 sm:p-12 shadow-xl border border-navy-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-[#12C8E8] uppercase tracking-wider">
              COMPLETE PATIENT PRESENTATION KIT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Delivered Ready for Chairside Handover.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every CLEARNYX patient kit arrives in an elegant magnetic-closure presentation box. Each aligner pouch is laser-etched with the patient identifier and stage sequence. Includes custom aligner case, chewies, removal tool, and patient compliance instructions.
            </p>
            <div className="pt-2">
              <Link
                href="#partner-form"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#12C8E8] hover:text-white transition-colors"
              >
                <span>Request Sample Demonstration Kit for Your Clinic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[360px] aspect-square">
              <Image
                src="/images/showcase/clearnyx-box.png"
                alt="CLEARNYX Luxury Clear Aligner Practice Presentation Box"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

