import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  align = "left",
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-surface-border bg-gradient-to-b from-surface-soft via-white to-white",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center space-x-2 text-xs text-slate-secondary mb-6 overflow-x-auto whitespace-nowrap"
          >
            <Link
              href="/"
              className="hover:text-cyan-brand transition-colors focus-visible:outline-none"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-muted/60 shrink-0" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-cyan-brand transition-colors focus-visible:outline-none"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-navy-900 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Header content */}
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <div className="mb-4">
              <Badge variant="cyan">{eyebrow.toUpperCase()}</Badge>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-secondary leading-relaxed max-w-2xl">
            {description}
          </p>
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
