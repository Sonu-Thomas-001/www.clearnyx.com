"use client";

import React from "react";
import { useBookModal } from "./BookModalContext";
import { Phone, Stethoscope } from "lucide-react";

export function MobileStickyBar() {
  const { openModal } = useBookModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3500] md:hidden p-3 bg-white/95 backdrop-blur-md border-t border-light-grey shadow-lg flex items-center gap-3">
      <a
        href="tel:+919072334032"
        className="flex-1 py-2.5 px-3 rounded-full bg-soft-white border border-light-grey text-navy-deep text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-light-grey transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-brand-cyan" />
        <span>Doctor Hotline</span>
      </a>

      <button
        type="button"
        onClick={() => openModal("partner")}
        className="flex-[1.4] py-2.5 px-4 rounded-full bg-brand-cyan hover:bg-electric-cyan text-white text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
      >
        <Stethoscope className="w-3.5 h-3.5" />
        <span>Partner With Us</span>
      </button>
    </div>
  );
}

