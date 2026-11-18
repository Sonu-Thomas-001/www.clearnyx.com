"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

export interface ModernSelectOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
}

export interface ModernSelectProps {
  id?: string;
  name?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | ModernSelectOption)[];
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export function ModernSelect({
  id: propId,
  name,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option...",
  error,
  icon,
  disabled = false,
  className = "",
  required = false,
}: ModernSelectProps) {
  const generatedId = useId();
  const id = propId || generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Normalize options into ModernSelectOption format
  const normalizedOptions: ModernSelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
        onChange(normalizedOptions[focusedIndex].value);
        setIsOpen(false);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) =>
          prev < normalizedOptions.length - 1 ? prev + 1 : 0
        );
      }
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(normalizedOptions.length - 1);
      } else {
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : normalizedOptions.length - 1
        );
      }
      return;
    }
  };

  const handleSelect = (optValue: string) => {
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-bold uppercase tracking-wider text-[#071B2C] mb-1.5"
        >
          {label} {required && <span className="text-[#00A6CE]">*</span>}
        </label>
      )}

      {/* Modern Trigger Button */}
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? undefined : id}
        className={`w-full px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border text-left flex items-center justify-between gap-3 text-sm transition-all duration-200 cursor-pointer ${
          disabled
            ? "opacity-60 cursor-not-allowed bg-[#F8FBFD] border-[#E2EBF0] text-gray-400"
            : isOpen
            ? "border-[#00A6CE] ring-2 ring-[#00A6CE]/20 bg-white shadow-sm"
            : error
            ? "border-red-400 bg-red-50/30 text-[#071B2C]"
            : "border-[#E2EBF0] bg-[#F8FBFD] hover:bg-white hover:border-[#00A6CE]/50 text-[#071B2C]"
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {icon && <span className="text-[#00A6CE] shrink-0">{icon}</span>}
          <span
            className={`truncate font-medium ${
              selectedOption ? "text-[#071B2C]" : "text-[#647887]"
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.22, ease: luxuryEase }}
          className="shrink-0 text-[#647887]"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      {/* Hidden input for standard form compliance */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Modern Glassmorphic Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.16 } }}
            transition={{ duration: 0.22, ease: luxuryEase }}
            className="absolute left-0 right-0 top-full mt-2 z-[999] origin-top bg-white/98 backdrop-blur-2xl rounded-2xl border border-[#E2EBF0] shadow-[0_16px_40px_rgba(7,27,44,0.12)] p-1.5 overflow-hidden"
          >
            <ul
              ref={listboxRef}
              role="listbox"
              tabIndex={-1}
              className="max-h-60 overflow-y-auto space-y-1 py-0.5 focus:outline-none"
            >
              {normalizedOptions.map((opt, index) => {
                const isSelected = opt.value === value;
                const isFocused = index === focusedIndex;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    className={`group px-3.5 py-2.5 rounded-xl cursor-pointer flex items-center justify-between gap-3 text-sm transition-all duration-150 ${
                      isSelected
                        ? "bg-[#DDF7FC] text-[#00A6CE] font-bold shadow-xs"
                        : isFocused
                        ? "bg-[#F8FBFD] text-[#071B2C]"
                        : "text-[#071B2C] hover:bg-[#F8FBFD]"
                    }`}
                  >
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="truncate">{opt.label}</span>
                        {opt.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00A6CE]/15 text-[#00A6CE]">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.description && (
                        <span className="text-xs text-[#647887] font-normal truncate mt-0.5">
                          {opt.description}
                        </span>
                      )}
                    </div>

                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-[#00A6CE] shrink-0"
                      >
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </motion.span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
    </div>
  );
}
