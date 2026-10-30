"use client";

import React from "react";
import { X, ShieldCheck } from "lucide-react";
import { BRAND_CONFIG } from "@/config/brand";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B2C]/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-[#00A6CE]/30 p-6 sm:p-8 text-left shadow-[0_25px_60px_rgba(7,27,44,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#F5FBFE] text-[#4A6072] hover:text-[#071B2C] border border-[#00A6CE]/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[#DDF7FC] text-[#00A6CE] border border-[#00A6CE]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="privacy-modal-title" className="text-xl font-bold text-[#071B2C]">
              Practitioner Privacy & Data Policy
            </h3>
            <p className="text-xs text-[#5A7184]">CLEARNYX Clinical Partnerships &bull; India</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#4A6072] leading-relaxed pt-3 border-t border-[#00A6CE]/15">
          <p>
            <strong className="text-[#071B2C]">1. Professional Data Collection:</strong> Information submitted via the CLEARNYX coming soon portal is utilized solely for clinical practitioner verification, introductory communication, and coordination of early-access orthodontic technology onboarding in India.
          </p>
          <p>
            <strong className="text-[#071B2C]">2. B2B Confidentiality:</strong> We do not sell, rent, or share clinician or clinic details with any third-party marketing entities. All submissions are stored in secure, encrypted cloud repositories compliant with applicable Indian Information Technology regulations.
          </p>
          <p>
            <strong className="text-[#071B2C]">3. Communication Preferences:</strong> Registered dental clinicians will receive only essential launch-related operational updates and clinical partnership materials. You may request removal or modification of your details at any time by contacting{" "}
            <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-[#00A6CE] underline font-semibold">
              {BRAND_CONFIG.contactEmail}
            </a>.
          </p>
          <p>
            <strong className="text-[#071B2C]">4. Regulatory Notice:</strong> CLEARNYX clear aligner systems are designed exclusively for prescription and monitoring by qualified dental and orthodontic healthcare practitioners.
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-[#00A6CE]/15 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-[#00A6CE] hover:bg-[#0092B5] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
