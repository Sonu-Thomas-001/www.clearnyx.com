import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "navy" | "ice" | "neutral" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "ice",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium tracking-wide transition-colors rounded-full";

  const variantStyles = {
    ice: "bg-ice-soft text-navy-900 border border-cyan-200/60",
    cyan: "bg-cyan-brand/10 text-cyan-700 border border-cyan-300/40",
    navy: "bg-navy-900 text-white",
    neutral: "bg-surface-subtle text-slate-secondary border border-surface-border",
    outline: "bg-transparent text-navy-900 border border-surface-border",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1.5",
    md: "text-xs px-3.5 py-1 gap-1.5",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand shrink-0" />
      {children}
    </span>
  );
}

