import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  background?: "pure" | "soft" | "ice" | "navy";
  size?: "default" | "narrow" | "wide" | "full";
  noPadding?: boolean;
}

export function SectionContainer({
  as: Component = "section",
  background = "pure",
  size = "default",
  noPadding = false,
  className,
  children,
  ...props
}: SectionContainerProps) {
  const bgStyles = {
    pure: "bg-surface-pure",
    soft: "bg-surface-soft border-y border-surface-border/50",
    ice: "bg-ice-soft/30 border-y border-cyan-100",
    navy: "bg-navy-900 text-white",
  };

  const maxWidthStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-8xl",
    full: "max-w-none",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden",
        bgStyles[background],
        !noPadding && "py-16 sm:py-20 md:py-24 lg:py-28",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", maxWidthStyles[size])}>
        {children}
      </div>
    </Component>
  );
}
