"use client";

import React, { useState } from "react";
import {
  Scan,
  Check,
  FileCheck,
  Shield,
  HelpCircle,
  ArrowRight,
  HardDriveDownload,
  Camera,
} from "lucide-react";

interface ScannerSystem {
  name: string;
  maker: string;
  models: string;
  format: string;
  transferMethod: string;
  badge: string;
}

const SCANNERS: ScannerSystem[] = [
  {
    name: "iTero™ Intraoral Scanners",
    maker: "Align Technology",
    models: "Element 2, Element 5D, Element Flex, Lumina",
    format: "Open STL via myiTero cloud or direct export",
    transferMethod: "Select 'Export open STL' from case export menu or route directly via lab ID",
    badge: "Direct Cloud Export",
  },
  {
    name: "3Shape TRIOS®",
    maker: "3Shape",
    models: "TRIOS 3, TRIOS 4, TRIOS 5 Wireless",
    format: "Open STL & Color PLY",
    transferMethod: "Connect via 3Shape Communicate™ portal or manual folder export",
    badge: "Direct Communicate",
  },
  {
    name: "Medit® Intraoral Scanners",
    maker: "Medit Corp",
    models: "i500, i600, i700, i700 Wireless, i900",
    format: "Medit Link Open STL / OBJ / PLY",
    transferMethod: "One-click partnership via Medit Link Partner search or direct folder sync",
    badge: "Medit Link Partner",
  },
  {
    name: "Dentsply Sirona Primescan",
    maker: "Dentsply Sirona",
    models: "Primescan AC, Omnicam",
    format: "Open DXD / STL via Connect Case Center",
    transferMethod: "Select open lab recipient in Connect Case Center or export local STL",
    badge: "Open DXD / STL",
  },
  {
    name: "Carestream Dental CS",
    maker: "Carestream Dental",
    models: "CS 3600, CS 3700, CS 3800",
    format: "Native open STL / PLY",
    transferMethod: "Direct export from CS Imaging software directly into doctor portal",
    badge: "Plug & Play STL",
  },
  {
    name: "Conventional PVS Impressions",
    maker: "Polyvinyl Siloxane (Any Brand)",
    models: "Light Body + Heavy Body / Putty Two-Step",
    format: "Precision 3D Optical Desktop Lab Digitization",
    transferMethod: "Book complimentary insured reverse-courier pickup through portal",
    badge: "Free Courier Pickup",
  },
];

export function ScannerEcosystem() {
  const [selectedScanner, setSelectedScanner] = useState<ScannerSystem>(SCANNERS[0]);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wide">
              OPEN SCANNER ARCHITECTURE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Plug Your Existing Intraoral Scanner Right In.
            </h2>

            <p className="text-base text-slate-secondary leading-relaxed">
              No proprietary scanner lock-in. No mandatory hardware upgrades. Whether you use iTero, TRIOS, Medit, or take analog PVS impressions, CLEARNYX ingests your raw clinical data seamlessly with zero conversion fees.
            </p>

            <div className="p-5 rounded-2xl bg-surface-soft border border-surface-border space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                <Camera className="w-4 h-4 text-cyan-brand" />
                Diagnostic Photo Protocol
              </h4>
              <p className="text-xs text-slate-secondary leading-relaxed">
                For optimal digital staging, submit 8 standard clinical photographs along with your scan: Frontal (at rest & smiling), Profile, Maxillary Occlusal, Mandibular Occlusal, and Right/Center/Left Buccal in centric occlusion.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#partner-form"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-brand hover:text-cyan-700 transition-colors"
              >
                <span>Request Scanner Connection Guide</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Scanner Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCANNERS.map((scanner, idx) => {
                const isSelected = selectedScanner.name === scanner.name;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedScanner(scanner)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                      isSelected
                        ? "bg-navy-900 text-white border-navy-900 shadow-xl"
                        : "bg-surface-soft text-navy-900 border-surface-border hover:border-cyan-brand/50 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                            : "bg-cyan-100 text-cyan-800"
                        }`}
                      >
                        {scanner.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {scanner.maker}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-bold tracking-tight ${
                        isSelected ? "text-white" : "text-navy-900"
                      }`}
                    >
                      {scanner.name}
                    </h3>

                    <p
                      className={`text-xs mt-1 ${
                        isSelected ? "text-slate-300" : "text-slate-secondary"
                      }`}
                    >
                      Models: {scanner.models}
                    </p>

                    <div
                      className={`mt-4 pt-3 border-t text-xs ${
                        isSelected
                          ? "border-white/10 text-slate-300"
                          : "border-surface-border text-slate-600"
                      }`}
                    >
                      <span className="font-semibold block mb-0.5">Workflow:</span>
                      <span className="text-[11px] leading-relaxed block">
                        {scanner.transferMethod}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
