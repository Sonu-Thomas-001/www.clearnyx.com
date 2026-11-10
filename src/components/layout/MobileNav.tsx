"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>(["Solutions"]);
  const pathname = usePathname();

  // Close drawer upon route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleDropdown = (label: string) => {
    setExpandedDropdowns((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <div className="lg:hidden flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-navy-900 hover:text-cyan-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-dark/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-out Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-surface-border">
                <Logo variant="light" width={140} height={32} />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-navy-900 hover:text-cyan-brand rounded-md focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation items list */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
                <div className="text-xs font-semibold tracking-wider text-slate-muted uppercase mb-3">
                  Menu
                </div>

                {SITE_CONFIG.nav.main.map((item) => {
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = expandedDropdowns.includes(item.label);
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  if (hasChildren) {
                    return (
                      <div key={item.label} className="border-b border-surface-subtle pb-2">
                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            "flex items-center justify-between w-full py-2.5 text-base font-semibold transition-colors text-left",
                            isActive ? "text-cyan-brand" : "text-navy-900 hover:text-cyan-brand"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200 text-slate-secondary",
                              isExpanded && "rotate-180 text-cyan-brand"
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3 space-y-1.5 pt-1 pb-2"
                            >
                              {item.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "block py-2 text-sm rounded-md transition-colors",
                                    pathname === child.href
                                      ? "text-cyan-brand font-semibold"
                                      : "text-slate-secondary hover:text-navy-900"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block py-2.5 text-base font-semibold border-b border-surface-subtle transition-colors",
                        isActive ? "text-cyan-brand" : "text-navy-900 hover:text-cyan-brand"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="pt-6">
                  <div className="text-xs font-semibold tracking-wider text-slate-muted uppercase mb-3">
                    Professional Access
                  </div>
                  <Link
                    href="/for-dentists"
                    className="block p-3 rounded-lg bg-surface-soft border border-surface-border text-navy-900 text-sm font-semibold hover:border-cyan-300 transition-colors"
                  >
                    Clinical Case Onboarding & FAQ
                  </Link>
                </div>
              </div>

              {/* Drawer footer with CTA */}
              <div className="p-4 sm:p-6 border-t border-surface-border bg-surface-soft">
                <Button
                  href={SITE_CONFIG.nav.cta.href}
                  variant="cyan"
                  size="lg"
                  className="w-full"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {SITE_CONFIG.nav.cta.label}
                </Button>
                <p className="text-center text-xs text-slate-secondary mt-3">
                  Exclusively for certified dental professionals
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

