"use client";

import React, { useSyncExternalStore } from "react";
import { LAUNCH_SCHEDULE } from "@/config/launch";
import { padZero } from "@/lib/utils";
import { Sparkles } from "lucide-react";

// Target timestamp in ms
const TARGET_TIMESTAMP = new Date(LAUNCH_SCHEDULE.targetDateISO).getTime();
const DEFAULT_30_DAYS_SECONDS = 30 * 24 * 60 * 60;

let listeners: Array<() => void> = [];
let intervalId: ReturnType<typeof setInterval> | null = null;

function subscribe(callback: () => void) {
  listeners.push(callback);
  if (!intervalId && typeof window !== "undefined") {
    intervalId = setInterval(() => {
      listeners.forEach((listener) => listener());
    }, 1000);
  }
  return () => {
    listeners = listeners.filter((l) => l !== callback);
    if (listeners.length === 0 && intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
}

function getClientSnapshot(): number {
  const diffMs = TARGET_TIMESTAMP - Date.now();
  return diffMs > 0 ? Math.floor(diffMs / 1000) : 0;
}

function getServerSnapshot(): number {
  return DEFAULT_30_DAYS_SECONDS;
}

export const Countdown: React.FC = () => {
  const remainingSeconds = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const isLive = remainingSeconds <= 0;
  const days = Math.floor(remainingSeconds / (24 * 3600));
  const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const countdownUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  if (isLive) {
    return (
      <div className="py-6 px-8 rounded-2xl bg-[#F4FBFD] border border-[#00A6CE]/30 text-center max-w-xl mx-auto shadow-sm">
        <div className="inline-flex p-2 rounded-full bg-white text-[#00A6CE] mb-2 shadow-sm">
          <Sparkles className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-[#071B2C] uppercase tracking-wider">
          {LAUNCH_SCHEDULE.liveMessage}
        </h3>
        <p className="text-xs text-[#4A6072] mt-1">
          Practitioner onboarding is now officially live across India.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl">
      {/* Live Launch Status Header */}
      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A6CE] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A6CE]" />
        </span>
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#071B2C] uppercase">
          Official Launch Countdown &bull; IST
        </span>
      </div>

      {/* Unified Precision Instrumentation Monolith */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#F5FBFE] via-white to-[#F0FAFD] border border-[#00A6CE]/30 p-1.5 sm:p-2.5 shadow-[0_10px_30px_rgba(0,166,206,0.08),0_2px_8px_rgba(7,27,44,0.04)]">
        {/* Subtle top cyan glow accent line */}
        <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#00A6CE] to-transparent rounded-full" />

        <div className="grid grid-cols-4 divide-x divide-[#00A6CE]/15">
          {countdownUnits.map((unit, index) => (
            <div
              key={unit.label}
              className={`flex flex-col items-center justify-center py-2 sm:py-3.5 px-1 sm:px-3 text-center transition-colors group ${
                index === 3 ? "relative" : ""
              }`}
            >
              {/* Number Value */}
              <div className="relative">
                <span className="text-2xl sm:text-4xl lg:text-[44px] font-black font-mono text-[#071B2C] leading-none tracking-tight group-hover:text-[#00A6CE] transition-colors">
                  {padZero(unit.value)}
                </span>
                {index === 3 && (
                  <span className="absolute -top-1 -right-2 sm:-right-2.5 w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-ping" />
                )}
              </div>

              {/* Unit Micro Pill */}
              <div className="mt-1 sm:mt-1.5">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#DDF7FC]/80 border border-[#00A6CE]/25 text-[9px] sm:text-[10px] font-extrabold text-[#00A6CE] uppercase tracking-[0.18em]">
                  {unit.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

