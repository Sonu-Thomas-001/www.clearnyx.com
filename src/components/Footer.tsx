"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/config/brand";
import { PrivacyModal } from "./PrivacyModal";
import { Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <motion.footer
        id="main-footer"
        aria-label="Footer"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white border-t border-[#00A6CE]/15 py-3 sm:py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-[#5A7184]">
            {/* Copyright with bold MidCell Studios */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left">
              <span>© 2026 CLEARNYX.</span>
              <span>&bull;</span>
              <span>
                All rights reserved by{" "}
                <strong className="font-bold text-[#071B2C]">MidCell Studios</strong>
              </span>
            </div>

            {/* Quick Links & Contact */}
            <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs">
              <a
                href={`mailto:${BRAND_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-[#4A6072] hover:text-[#00A6CE] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A6CE]" />
                <span>{BRAND_CONFIG.contactEmail}</span>
              </a>

              <span className="text-[#00A6CE]/30">&bull;</span>

              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-[#4A6072] hover:text-[#00A6CE] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </motion.footer>


      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};

