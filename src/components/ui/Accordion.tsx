"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("divide-y divide-surface-border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className="py-5 transition-colors">
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left group focus-visible:outline-none"
            >
              <span className="text-base sm:text-lg font-semibold text-navy-900 group-hover:text-cyan-brand transition-colors pr-6">
                {item.question}
              </span>
              <span
                className={cn(
                  "w-8 h-8 rounded-full border border-surface-border flex items-center justify-center shrink-0 transition-transform duration-200 bg-surface-soft group-hover:border-cyan-300",
                  isOpen && "rotate-180 bg-ice-soft border-cyan-300 text-cyan-brand"
                )}
              >
                <ChevronDown className="w-4 h-4 text-navy-900" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 text-slate-secondary text-sm sm:text-base leading-relaxed pr-6">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

