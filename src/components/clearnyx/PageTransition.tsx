"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [navProgress, setNavProgress] = useState(0);
  const prevPathnameRef = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger on genuine route change
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsNavigating(true);
      setNavProgress(25);

      // Instant scroll to top on route switch unless navigating to an anchor hash
      if (typeof window !== "undefined" && !window.location.hash) {
        window.scrollTo(0, 0);
      }

      // Smooth multi-stage progress laser beam
      const t1 = setTimeout(() => setNavProgress(70), 120);
      const t2 = setTimeout(() => setNavProgress(100), 260);
      const t3 = setTimeout(() => {
        setIsNavigating(false);
        setNavProgress(0);
      }, 480);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [pathname]);

  return (
    <>
      {/* TOP LUMINOUS LASER ROUTE PROGRESS LINE */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-[9990] h-[3px] pointer-events-none overflow-hidden"
      >
        <div
          className={`h-full bg-gradient-to-r from-[#00A6CE] via-[#12C8E8] to-[#80E8FF] shadow-[0_0_12px_rgba(18,200,232,0.9),0_0_24px_rgba(0,166,206,0.6)] ${
            isNavigating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: `${navProgress}%`,
            transition: isNavigating
              ? "width 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms ease"
              : "opacity 300ms ease, width 100ms ease",
          }}
        />
      </div>

      {/* CINEMATIC PAGE SWITCHING CONTENT CONTAINER */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1], // Luxury cubic easing
          }}
          className="flex-1 flex flex-col w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
