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
    let mutationObserver: MutationObserver | null = null;

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
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.1,
        }
      );

      const scanElements = () => {
        // Tagged reveal elements
        const targets = document.querySelectorAll<HTMLElement>(
          '[data-reveal="true"], .reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
        );
        targets.forEach((el) => {
          if (!el.classList.contains("is-revealed")) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
              el.classList.add("is-revealed");
            } else {
              observer?.observe(el);
            }
          }
        });
      };

      scanElements();

      // Continuous mutation monitoring for route transitions and lazy elements
      if (!mutationObserver) {
        mutationObserver = new MutationObserver(() => {
          scanElements();
        });
        mutationObserver.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }
    };

    // Staggered triggers to account for Next.js route transitions
    const t1 = setTimeout(setupObserver, 50);
    const t2 = setTimeout(setupObserver, 300);
    const t3 = setTimeout(setupObserver, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
