"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useBookModal } from "./BookModalContext";
import {
  ChevronDown,
  Layers,
  Stethoscope,
  Phone,
  ArrowRight,
  ShieldCheck,
  X,
  Menu,
  Activity,
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const drawerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.038,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const drawerItemVariants: Variants = {
  hidden: { opacity: 0, x: -16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: {
      duration: 0.16,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"conditions" | null>(null);
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

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menu: "conditions") => {
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
          className={`w-full max-w-7xl 2xl:max-w-[1360px] mx-auto rounded-full transition-all duration-300 border ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-[#E2EBF0] shadow-[0_12px_40px_rgba(7,27,44,0.08)] py-2 sm:py-2.5 px-3 sm:px-5 lg:px-6"
              : "bg-white/90 backdrop-blur-lg border-white/80 shadow-[0_8px_30px_rgba(7,27,44,0.05)] py-2 sm:py-3 px-3.5 sm:px-5 lg:px-6"
          } flex items-center justify-between gap-2 sm:gap-4`}
        >
          {/* Brand Logo */}
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
                className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
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

            {/* How It Works */}
            <Link
              href="/how-it-works"
              onClick={closeMenu}
              className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                pathname === "/how-it-works"
                  ? "bg-[#DDF7FC] text-[#00A6CE] font-bold"
                  : "text-[#071B2C]/80 hover:text-[#071B2C] hover:bg-[#F8FBFD]"
              }`}
            >
              How It Works
            </Link>

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

              {/* Modern Animated Flyout Panel for Conditions */}
              <AnimatePresence>
                {activeDropdown === "conditions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.16 } }}
                    transition={{ duration: 0.22, ease: luxuryEase }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] z-50 origin-top"
                  >
                    <div className="bg-white/98 backdrop-blur-2xl border border-[#E2EBF0] rounded-3xl p-5 shadow-[0_24px_50px_rgba(7,27,44,0.14)]">
                      <div className="flex items-center justify-between mb-3 px-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate">
                          Malocclusions We Treat
                        </p>
                        <Link
                          href="/#conditions"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              onClick={() => openModal("partner")}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 lg:px-4 xl:px-5 py-2 sm:py-2.5 rounded-full bg-[#00A6CE] hover:bg-[#008fb3] text-white text-xs xl:text-[13px] font-bold shadow-[0_4px_14px_rgba(0,166,206,0.35)] hover:shadow-[0_6px_20px_rgba(0,166,206,0.5)] transition-all duration-200 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Hamburger Toggle Button with Smooth Icon Morph */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8FBFD] hover:bg-[#EEF3F6] active:scale-95 flex items-center justify-center text-[#071B2C] border border-[#E2EBF0] transition-all overflow-hidden cursor-pointer shadow-xs"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: luxuryEase }}
                    className="flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-[#071B2C]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.22, ease: luxuryEase }}
                    className="flex items-center justify-center"
                  >
                    <Menu className="w-5 h-5 text-[#071B2C]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Modern Full-Screen Mobile Drawer with Smooth Luxury Switch Animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)", transition: { duration: 0.22, ease: [0.32, 0, 0.67, 0] } }}
            transition={{ duration: 0.36, ease: luxuryEase }}
            className="fixed inset-0 z-[5000] lg:hidden bg-white/98 backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            {/* Drawer Top Navigation Bar */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.04, ease: luxuryEase }}
              className="px-5 py-3.5 border-b border-[#E2EBF0] flex items-center justify-between bg-white/90 backdrop-blur-md shrink-0"
            >
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <Image
                  src="/brand/logo-primary.png"
                  alt="CLEARNYX"
                  width={132}
                  height={28}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={closeMenu}
                className="w-9 h-9 rounded-full bg-[#F8FBFD] hover:bg-[#EEF3F6] border border-[#E2EBF0] flex items-center justify-center text-[#071B2C] transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Drawer Scrollable Links with Staggered Cascading Animation */}
            <motion.div
              variants={drawerContainerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
            >
              {/* Doctor Priority Banner Card */}
              <motion.div variants={drawerItemVariants}>
                <Link
                  href="/for-dentists"
                  onClick={closeMenu}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                    pathname === "/for-dentists"
                      ? "bg-[#DDF7FC] border-[#00A6CE] text-[#00A6CE] shadow-sm"
                      : "bg-[#F8FBFD] hover:bg-[#DDF7FC]/40 border-[#00A6CE]/20 text-[#071B2C]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00A6CE] text-white flex items-center justify-center shadow-xs shrink-0">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-[#071B2C]">For Dentists &amp; Clinics</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00A6CE]/15 text-[#00A6CE]">
                          B2B
                        </span>
                      </div>
                      <p className="text-xs text-[#556977]">Doctor portal, pricing &amp; 3D staging</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#00A6CE] shrink-0" />
                </Link>
              </motion.div>

              {/* Core Links List */}
              <div className="space-y-1">
                {[
                  { href: "/", label: "Home", icon: Home, desc: "Overview & technology" },
                  { href: "/technology", label: "Dual-Polymer Tech", icon: Layers, desc: "Standard PETG & Multi-Layer Pro" },
                  { href: "/how-it-works", label: "How It Works", icon: Sparkles, desc: "6-step clinical protocol" },
                  { href: "/#conditions", label: "Conditions We Treat", icon: Activity, desc: "Crowding, spacing, open bite & more" },
                  { href: "/become-a-partner", label: "Become a Partner", icon: ArrowUpRight, desc: "Join our doctor network" },
                  { href: "/resources", label: "Clinical Resources", icon: BookOpen, desc: "Orthodontic guides & whitepapers" },
                  { href: "/about", label: "About CLEARNYX", icon: ShieldCheck, desc: "Lab precision & clinical philosophy" },
                  { href: "/contact", label: "Contact Us", icon: Mail, desc: "Clinic support & partner enquiries" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.href} variants={drawerItemVariants}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`group flex items-center justify-between p-3 rounded-2xl transition-all ${
                          isActive
                            ? "bg-[#DDF7FC]/70 text-[#00A6CE] font-bold"
                            : "text-[#071B2C] hover:bg-[#F8FBFD] active:scale-[0.99]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isActive
                                ? "bg-[#00A6CE] text-white"
                                : "bg-[#F8FBFD] text-[#556977] group-hover:bg-[#DDF7FC] group-hover:text-[#00A6CE]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-bold block leading-tight">
                              {item.label}
                            </span>
                            <span className="text-[11px] text-[#647887]">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                            isActive ? "text-[#00A6CE]" : "text-[#94A3B8]"
                          }`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* B2B Trust Badge */}
              <motion.div
                variants={drawerItemVariants}
                className="p-3.5 rounded-2xl bg-[#F8FBFD] border border-[#E2EBF0] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#DDF7FC] text-[#00A6CE] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071B2C]">Strict B2B Aligner Provider</p>
                  <p className="text-[11px] text-[#556977]">Exclusively empowering certified dental practices</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Drawer Footer Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2, ease: luxuryEase }}
              className="p-4 border-t border-[#E2EBF0] space-y-2 bg-[#F8FBFD]/80 backdrop-blur-md shrink-0"
            >
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openModal("partner");
                }}
                className="w-full py-3 px-4 rounded-full bg-[#00A6CE] hover:bg-[#008fb3] active:scale-[0.98] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Partner Onboarding / Demo Kit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919072334032"
                className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-[#F8FBFD] active:scale-[0.98] border border-[#E2EBF0] text-[#071B2C] text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A6CE]" />
                <span>Doctor Hotline: +91 9072334032</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
