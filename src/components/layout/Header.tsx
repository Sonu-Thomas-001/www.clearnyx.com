"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { ArrowRight, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-surface-border shadow-subtle py-3"
          : "bg-white border-b border-surface-border/60 py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Logo variant="light" width={168} height={38} priority />
          </div>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <DesktopNav />
          </div>

          {/* Right Action: Become a Partner CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button
              href="/for-dentists"
              variant="ghost"
              size="sm"
              leftIcon={<Stethoscope className="w-3.5 h-3.5 text-cyan-brand" />}
              className="hidden xl:inline-flex text-xs text-slate-secondary hover:text-navy-900"
            >
              Doctor Portal
            </Button>
            <Button
              href={SITE_CONFIG.nav.cta.href}
              variant="cyan"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              className="font-semibold shadow-sm hover:shadow-cyan"
            >
              {SITE_CONFIG.nav.cta.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
