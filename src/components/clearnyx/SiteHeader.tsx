"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBookModal } from "./BookModalContext";
import {
  ChevronDown,
  Layers,
  Sparkles,
  Stethoscope,
  Phone,
  ArrowRight,
  ShieldCheck,
  X,
  Menu,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "conditions" | null>(null);
  const pathname = usePathname();
  const { openModal } = useBookModal();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu: "solutions" | "conditions") => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Floating Island Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2.5 sm:px-6 md:px-8 ${
          isScrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-6"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-[#E2EBF0] shadow-[0_12px_40px_rgba(7,27,44,0.08)] py-2 sm:py-2.5 px-3 sm:px-5 lg:px-6"
              : "bg-white/90 backdrop-blur-lg border-white/80 shadow-[0_8px_30px_rgba(7,27,44,0.05)] py-2 sm:py-3 px-3.5 sm:px-5 lg:px-6"
          } flex items-center justify-between gap-2 sm:gap-4`}
        >
          {/* Brand Logo & Trust Tag */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center shrink-0 group focus-visible:outline-none"
              aria-label="CLEARNYX Home"
            >
              <Image
                src="/brand/logo-primary.png"
                alt="CLEARNYX — Premium Clear Aligner Solutions"
                width={150}
                height={32}
                priority
                className="h-6 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Verified Clinical Badge (Visible on wider screens to prevent overflow) */}
            <div className="hidden 2xl:flex items-center gap-1.5 pl-3 border-l border-[#E2EBF0] text-[11px] text-[#647887] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6CE] animate-pulse" />
              <span>CDSCO &amp; ISO 13485 Certified</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-xs xl:text-[13px] font-semibold text-[#071B2C]">
            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className={`px-2 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                pathname === "/"
                  ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                  : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
              }`}
            >
              Home
            </Link>

            {/* Aligners / Solutions Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-2 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeDropdown === "solutions" || pathname.startsWith("/solutions")
                    ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                    : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
                }`}
                aria-expanded={activeDropdown === "solutions"}
              >
                <span>Aligners</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "solutions" ? "rotate-180 text-[#00A6CE]" : ""
                  }`}
                />
              </button>

              {/* Flyout Panel for Aligners */}
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] animate-fadeIn">
                  <div className="bg-white/95 backdrop-blur-xl border border-light-grey/80 rounded-3xl p-5 shadow-[0_20px_50px_rgba(7,27,44,0.14)] grid grid-cols-12 gap-4">
                    <div className="col-span-7 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate px-2">
                        Orthodontic Systems
                      </p>

                      <Link
                        href="/solutions/standard-aligners"
                        onClick={closeMenu}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-soft-white transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-ice-blue/70 text-brand-cyan flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-navy-deep group-hover:text-brand-cyan transition-colors">
                              Standard Aligners
                            </span>
                            <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-soft-white text-slate border border-light-grey">
                              Single-Layer
                            </span>
                          </div>
                          <p className="text-[11px] text-slate line-clamp-1 mt-0.5">
                            High-clarity medical PETG for mild-to-moderate tooth alignment.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/multi-layer-aligners"
                        onClick={closeMenu}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-soft-white transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-ice-blue/70 text-brand-cyan flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-navy-deep group-hover:text-brand-cyan transition-colors">
                              Multi-Layer Composite
                            </span>
                            <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                              Pro
                            </span>
                          </div>
                          <p className="text-[11px] text-slate line-clamp-1 mt-0.5">
                            Elastomeric core for continuous orthodontic biomechanical force.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/technology"
                        onClick={closeMenu}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-soft-white transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-ice-blue/70 text-brand-cyan flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-navy-deep group-hover:text-brand-cyan transition-colors">
                            Digital Treatment Planning
                          </span>
                          <p className="text-[11px] text-slate line-clamp-1 mt-0.5">
                            High-precision 3D digital staging and doctor approval software.
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Right Featured Card */}
                    <div className="col-span-5 bg-gradient-to-br from-soft-white to-ice-blue/40 rounded-2xl p-4 border border-brand-cyan/15 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                          Precision Material
                        </span>
                        <h4 className="text-xs font-bold text-navy-deep mt-1 leading-snug">
                          Sub-Millimeter 0.01mm Accuracy
                        </h4>
                        <p className="text-[11px] text-slate mt-1.5 leading-relaxed">
                          Certified biocompatible polymers engineered for sustained tooth movement and maximum transparency.
                        </p>
                      </div>

                      <Link
                        href="/solutions"
                        onClick={closeMenu}
                        className="mt-3 text-[11px] font-bold text-brand-cyan hover:text-electric-cyan flex items-center gap-1 group/btn"
                      >
                        <span>Explore All Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Conditions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("conditions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-2 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                  activeDropdown === "conditions"
                    ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                    : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
                }`}
                aria-expanded={activeDropdown === "conditions"}
              >
                <span>Conditions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === "conditions" ? "rotate-180 text-[#00A6CE]" : ""
                  }`}
                />
              </button>

              {/* Flyout Panel for Conditions */}
              {activeDropdown === "conditions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] animate-fadeIn">
                  <div className="bg-white/95 backdrop-blur-xl border border-[#E2EBF0] rounded-3xl p-5 shadow-[0_20px_50px_rgba(7,27,44,0.14)]">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate">
                        Malocclusions We Treat
                      </p>
                      <Link
                        href="/solutions#conditions"
                        onClick={closeMenu}
                        className="text-[11px] font-semibold text-brand-cyan hover:underline"
                      >
                        Clinical Overview
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { title: "Crowding", desc: "Overlapping or shifted teeth", img: "/images/conditions/crowding.png" },
                        { title: "Spacing", desc: "Excessive gaps between teeth", img: "/images/conditions/spacing.png" },
                        { title: "Open Bite", desc: "Upper and lower teeth do not meet", img: "/images/conditions/open-bite.png" },
                        { title: "Deep Bite", desc: "Excessive overlap of front teeth", img: "/images/conditions/deep-bite.png" },
                        { title: "Cross Bite", desc: "Upper teeth fit inside lower teeth", img: "/images/conditions/cross-bite.png" },
                        { title: "Under Bite", desc: "Lower teeth extend past upper teeth", img: "/images/conditions/under-bite.png" },
                      ].map((item) => (
                        <Link
                          key={item.title}
                          href="/#conditions"
                          onClick={closeMenu}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-soft-white transition-colors group"
                        >
                          <div className="w-10 h-8 rounded-lg bg-soft-white flex items-center justify-center shrink-0 border border-[#E2EBF0] group-hover:border-[#00A6CE]/30">
                            <Image
                              src={item.img}
                              alt={item.title}
                              width={36}
                              height={28}
                              className="object-contain max-h-6"
                            />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-navy-deep group-hover:text-brand-cyan transition-colors block leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-slate line-clamp-1">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works */}
            <Link
              href="/#how-it-works"
              onClick={closeMenu}
              className="px-2.5 xl:px-3 py-1.5 rounded-full text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD] transition-all duration-200"
            >
              How It Works
            </Link>

            {/* For Dentists (B2B Hero Link) */}
            <Link
              href="/for-dentists"
              onClick={closeMenu}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                pathname === "/for-dentists"
                  ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                  : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 text-[#00A6CE]" />
              <span>For Dentists</span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMenu}
              className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                pathname === "/about"
                  ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                  : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                pathname === "/contact"
                  ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                  : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action / CTA Area */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct Doctor Phone Support (Full on 2XL) */}
            <a
              href="tel:+919072334032"
              className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#071B2C] hover:bg-[#F8FBFD] border border-transparent hover:border-[#E2EBF0] transition-all"
              title="Call Clinical Support"
            >
              <div className="w-5 h-5 rounded-full bg-[#DDF7FC] flex items-center justify-center text-[#00A6CE]">
                <Phone className="w-2.5 h-2.5" />
              </div>
              <span>+91 9072334032</span>
            </a>

            {/* Compact Phone Pill for XL Screens */}
            <a
              href="tel:+919072334032"
              className="hidden xl:flex 2xl:hidden w-8 h-8 rounded-full bg-[#DDF7FC] text-[#00A6CE] items-center justify-center hover:bg-[#00A6CE] hover:text-white transition-colors"
              title="Call Clinical Support: +91 9072334032"
              aria-label="Call Doctor Hotline"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* High-Impact Modern Solid Brand Cyan CTA (Hidden on mobile phones where MobileStickyBar provides thumb access) */}
            <button
              type="button"
              onClick={() => openModal("consultation")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 lg:px-4 xl:px-5 py-2 sm:py-2.5 rounded-full bg-[#00A6CE] hover:bg-[#008fb3] text-white text-xs xl:text-[13px] font-bold shadow-[0_4px_14px_rgba(0,166,206,0.35)] hover:shadow-[0_6px_20px_rgba(0,166,206,0.5)] transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#F8FBFD] hover:bg-[#EEF3F6] flex items-center justify-center text-[#071B2C] border border-[#E2EBF0] transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-navy-deep/40 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-x-3 top-20 bottom-6 bg-white rounded-3xl shadow-2xl border border-light-grey flex flex-col overflow-hidden animate-fadeIn">
            {/* Drawer Header */}
            <div className="p-5 border-b border-light-grey flex items-center justify-between">
              <Image
                src="/brand/logo-primary.png"
                alt="CLEARNYX"
                width={140}
                height={30}
                className="h-7 w-auto object-contain"
              />
              <button
                onClick={closeMenu}
                className="w-8 h-8 rounded-full bg-soft-white flex items-center justify-center text-slate hover:text-navy-deep"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Scrollable Links */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>

                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-brand-cyan" />
                    <span>Clear Aligner Solutions</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>

                <div className="pl-6 space-y-1 py-1">
                  <Link
                    href="/solutions/standard-aligners"
                    onClick={closeMenu}
                    className="block p-2 text-xs font-semibold text-slate hover:text-brand-cyan"
                  >
                    • Standard Aligners (Single-Layer)
                  </Link>
                  <Link
                    href="/solutions/multi-layer-aligners"
                    onClick={closeMenu}
                    className="block p-2 text-xs font-semibold text-slate hover:text-brand-cyan"
                  >
                    • Multi-Layer Composite Aligners (Pro)
                  </Link>
                  <Link
                    href="/technology"
                    onClick={closeMenu}
                    className="block p-2 text-xs font-semibold text-slate hover:text-brand-cyan"
                  >
                    • Digital Treatment Planning
                  </Link>
                </div>

                <Link
                  href="/#conditions"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-brand-cyan" />
                    <span>Conditions We Treat</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>

                <Link
                  href="/#how-it-works"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <span>How It Works</span>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>

                <Link
                  href="/for-dentists"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-brand-cyan bg-ice-blue/50 border border-brand-cyan/20"
                >
                  <div className="flex items-center gap-2.5">
                    <Stethoscope className="w-4 h-4" />
                    <span>For Dentists &amp; Clinics</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <span>About CLEARNYX</span>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-2xl font-bold text-navy-deep hover:bg-soft-white transition-colors"
                >
                  <span>Contact</span>
                  <ArrowRight className="w-4 h-4 text-slate" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="p-4 rounded-2xl bg-soft-white border border-light-grey space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-deep">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Certified Medical Grade Orthodontics</span>
                </div>
                <p className="text-[11px] text-slate leading-relaxed">
                  CDSCO MD-5 and ISO 13485 certified facilities. Customized for licensed dentists across India.
                </p>
              </div>
            </div>

            {/* Drawer Footer Action Buttons */}
            <div className="p-5 border-t border-light-grey space-y-2.5 bg-soft-white/60">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openModal("consultation");
                }}
                className="w-full py-3 px-4 rounded-full bg-brand-cyan hover:bg-electric-cyan text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Doctor Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919072334032"
                className="w-full py-2.5 px-4 rounded-full bg-white border border-light-grey text-navy-deep text-xs font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Call Clinical Support: +91 9072334032</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
