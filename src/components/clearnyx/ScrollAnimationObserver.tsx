"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -50px 0px",
          threshold: 0.08,
        }
      );

      // 1. Explicitly tagged reveal elements
      const taggedElements = document.querySelectorAll<HTMLElement>(
        '[data-reveal="true"], .reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
      );
      taggedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("is-revealed");
        } else {
          observer?.observe(el);
        }
      });

      // 2. Automatically observe all standard sections (excluding parallax sticky tracks)
      const sections = document.querySelectorAll<HTMLElement>(
        'section:not([class*="h-[2"]):not([class*="sticky"])'
      );
      sections.forEach((sec) => {
        if (!sec.hasAttribute("data-reveal") && !sec.classList.contains("no-auto-reveal") && !sec.classList.contains("is-revealed")) {
          sec.classList.add("reveal-on-scroll");
          const rect = sec.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.88) {
            sec.classList.add("is-revealed");
          } else {
            observer?.observe(sec);
          }
        }
      });
    };

    // Small delay to ensure Next.js DOM has settled after navigation
    const timeout = setTimeout(setupObserver, 80);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
