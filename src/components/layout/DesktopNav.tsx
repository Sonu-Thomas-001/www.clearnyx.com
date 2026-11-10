"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function DesktopNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
      {SITE_CONFIG.nav.main.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        const hasChildren = Boolean(item.children && item.children.length > 0);

        if (hasChildren) {
          const isOpen = activeDropdown === item.label;

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                  isActive
                    ? "text-cyan-brand font-semibold"
                    : "text-navy-900 hover:text-cyan-brand"
                )}
                aria-expanded={isOpen}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 text-slate-secondary",
                    isOpen && "rotate-180 text-cyan-brand"
                  )}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                  >
                    <div className="bg-white rounded-xl shadow-card border border-surface-border p-2">
                      {item.children?.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className={cn(
                              "block p-3 rounded-lg transition-all focus-visible:outline-none",
                              isChildActive
                                ? "bg-ice-soft text-navy-900"
                                : "hover:bg-surface-soft text-navy-900"
                            )}
                          >
                            <div className="text-sm font-semibold text-navy-900 hover:text-cyan-brand flex items-center justify-between">
                              {child.label}
                              {isChildActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand" />
                              )}
                            </div>
                            {child.description && (
                              <p className="text-xs text-slate-secondary mt-1 leading-normal line-clamp-2">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        );
                      })}
                    </div>
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
              "relative px-3 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
              isActive
                ? "text-cyan-brand font-semibold"
                : "text-navy-900 hover:text-cyan-brand"
            )}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-brand rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

