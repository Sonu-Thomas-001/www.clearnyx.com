import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "light" | "dark" | "symbol" | "stacked" | "stacked-white";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  href?: string;
}

export function Logo({
  variant = "light",
  className,
  width,
  height,
  priority = false,
  href = "/",
}: LogoProps) {
  let src = "/brand/logo-light.png";
  let defaultWidth = 175;
  let defaultHeight = 40;

  if (variant === "dark") {
    src = "/brand/logo-dark.png";
    defaultWidth = 175;
    defaultHeight = 40;
  } else if (variant === "symbol") {
    src = "/brand/logo-symbol.png";
    defaultWidth = 40;
    defaultHeight = 40;
  } else if (variant === "stacked") {
    src = "/brand/logo-stacked.png";
    defaultWidth = 140;
    defaultHeight = 70;
  } else if (variant === "stacked-white") {
    src = "/brand/logo-stacked-white.png";
    defaultWidth = 140;
    defaultHeight = 70;
  }

  const finalWidth = width || defaultWidth;
  const finalHeight = height || defaultHeight;

  const imageElement = (
    <div className={cn("relative inline-flex items-center shrink-0", className)}>
      <Image
        src={src}
        alt="CLEARNYX — Premium Clear Aligner Solutions"
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        className="w-auto h-auto object-contain max-h-10 sm:max-h-11"
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
        aria-label="CLEARNYX Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
