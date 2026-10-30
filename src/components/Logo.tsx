import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND_CONFIG } from "@/config/brand";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "symbol";
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
}) => {
  if (variant === "symbol") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6CE] rounded-lg p-1 transition-opacity ${className}`}
        aria-label={`${BRAND_CONFIG.name} - Home`}
      >
        <div className="relative w-9 h-9 flex items-center justify-center">
          <Image
            src="/images/clearnyx-symbol.png"
            alt="CLEARNYX Icon"
            width={36}
            height={36}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        className={`inline-flex flex-col items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6CE] rounded-lg p-1 transition-opacity ${className}`}
        aria-label={`${BRAND_CONFIG.name} - Home`}
      >
        <div className="relative w-36 h-20">
          <Image
            src="/images/Clearnyx_Logo.png"
            alt={`${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`}
            fill
            sizes="160px"
            className="object-contain group-hover:scale-[1.02] transition-all duration-300"
            priority
          />
        </div>
      </Link>
    );
  }

  // Default: Horizontal Brand Logo with navy typography & cyan symbol for pure white background
  // Aspect ratio is 3917:813 ≈ 4.818:1
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A6CE] rounded-lg py-1 transition-opacity ${className}`}
      aria-label={`${BRAND_CONFIG.name} - Home`}
    >
      <div
        className="relative flex items-center h-7 sm:h-9 w-[130px] sm:w-[174px]"
      >
        <Image
          src="/images/Clearnyx_Logo_Horizontal.png"
          alt={`${BRAND_CONFIG.name} - ${BRAND_CONFIG.tagline}`}
          fill
          sizes="(max-width: 640px) 130px, 174px"
          className="object-contain object-left group-hover:scale-[1.02] transition-transform duration-300"
          priority
        />
      </div>
    </Link>
  );
};

