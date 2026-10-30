"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/config/brand";
import { Logo } from "./Logo";
import { ArrowUpRight, Mail } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      id="main-header"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#00A6CE]/20 py-2.5 sm:py-3 shadow-[0_4px_25px_rgba(7,27,44,0.06)]"
          : "bg-white/85 backdrop-blur-sm border-b border-[#00A6CE]/12 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Right Header Contact & Launch Inquiry CTA */}
          <div className="flex items-center gap-1.5 sm:gap-4 lg:gap-6">
            <a
              href={`mailto:${BRAND_CONFIG.contactEmail}`}
              id="header-email-link"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#4A6072] hover:text-[#00A6CE] transition-colors font-medium p-1.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-[#DDF7FC]/50"
              title="Contact CLEARNYX Orthodontic Partnerships"
              aria-label="Email CLEARNYX"
            >
              <Mail className="w-4 h-4 text-[#00A6CE] flex-shrink-0" />
              <span className="hidden sm:inline">{BRAND_CONFIG.contactEmail}</span>
            </a>

            {/* Launch Inquiries Button */}
            <a
              href={`mailto:${BRAND_CONFIG.contactEmail}?subject=Launch%20Inquiry%20-%20CLEARNYX`}
              id="header-inquire-cta"
              className="group inline-flex items-center gap-1 px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-[#00A6CE] hover:bg-[#0092B5] rounded-full shadow-[0_2px_15px_rgba(0,166,206,0.3)] hover:shadow-[0_4px_20px_rgba(0,166,206,0.45)] transition-all duration-300 transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span className="sm:hidden">Inquire</span>
              <span className="hidden sm:inline">Launch Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

