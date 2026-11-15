import React from "react";
import Link from "next/link";
import {
  Home,
  ArrowLeft,
  Compass,
  Stethoscope,
  Cpu,
  Mail,
  Sparkles,
  Search,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-2xl w-full text-center">
        {/* Subtle 404 Watermark */}
        <div className="relative inline-block mb-4">
          <span className="text-8xl sm:text-9xl font-black text-[#E2EBF0] tracking-tighter select-none font-heading block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#00A6CE] text-xs font-bold uppercase tracking-wider border border-[#D5E2EC] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE]" />
              <span>Page Out Of Alignment</span>
            </span>
          </div>
        </div>

        {/* Main Editorial Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071B2C] tracking-tight leading-tight">
          This page could not be located.
        </h1>

        <p className="mt-3.5 text-base text-[#556977] leading-relaxed max-w-lg mx-auto">
          The clear aligner resource or clinical page you are looking for has been moved or does
          not exist. Explore our key pathways below.
        </p>

        {/* 4 Clinical Quick Pathways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto my-8 text-left">
          <Link
            href="/"
            className="p-4 rounded-xl bg-white border border-[#E2EBF0] hover:border-[#00A6CE]/50 hover:shadow-sm transition-all group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 group-hover:bg-[#00A6CE] group-hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors block">
                CLEARNYX Homepage
              </span>
              <span className="text-[11px] text-[#718594] mt-0.5 block">
                Explore our clear aligner solutions
              </span>
            </div>
          </Link>

          <Link
            href="/how-it-works"
            className="p-4 rounded-xl bg-white border border-[#E2EBF0] hover:border-[#00A6CE]/50 hover:shadow-sm transition-all group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 group-hover:bg-[#00A6CE] group-hover:text-white transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors block">
                How It Works
              </span>
              <span className="text-[11px] text-[#718594] mt-0.5 block">
                Our 4-step treatment workflow
              </span>
            </div>
          </Link>

          <Link
            href="/for-dentists"
            className="p-4 rounded-xl bg-white border border-[#E2EBF0] hover:border-[#00A6CE]/50 hover:shadow-sm transition-all group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 group-hover:bg-[#00A6CE] group-hover:text-white transition-colors">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors block">
                For Dentists &amp; Clinics
              </span>
              <span className="text-[11px] text-[#718594] mt-0.5 block">
                B2B onboarding &amp; 3D lab staging
              </span>
            </div>
          </Link>

          <Link
            href="/technology"
            className="p-4 rounded-xl bg-white border border-[#E2EBF0] hover:border-[#00A6CE]/50 hover:shadow-sm transition-all group flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-[#E7F6FA] text-[#00A6CE] flex items-center justify-center shrink-0 group-hover:bg-[#00A6CE] group-hover:text-white transition-colors">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#071B2C] group-hover:text-[#00A6CE] transition-colors block">
                Polymer Technology
              </span>
              <span className="text-[11px] text-[#718594] mt-0.5 block">
                Dual polymers &amp; laser scalloping
              </span>
            </div>
          </Link>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00A6CE] hover:bg-[#0094BA] text-white font-bold text-xs shadow-xs hover:shadow transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#071B2C] hover:bg-[#0A2640] text-white font-bold text-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#00A6CE]" />
            <span>Contact Support Desk</span>
          </Link>
        </div>

        {/* Assistant Note */}
        <p className="mt-8 text-xs text-[#718594]">
          Looking for assistance? Click <strong className="text-[#071B2C]">Clari</strong> on the bottom-left to connect with our AI clinical concierge.
        </p>
      </div>
    </div>
  );
}
