import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-surface-soft">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-surface-border shadow-card">
        <Badge variant="cyan" size="md">
          404 ERROR
        </Badge>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Page Not Located
        </h1>

        <p className="text-sm text-slate-secondary leading-relaxed">
          The clear aligner page or clinical resource you requested could not be located. It may have moved or the URL may be incorrect.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="cyan"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>
          <Button
            href="/solutions"
            variant="outline"
            size="md"
            rightIcon={<Compass className="w-4 h-4" />}
          >
            Explore Solutions
          </Button>
        </div>

        <div className="pt-4 border-t border-surface-subtle text-xs text-slate-muted">
          Need clinical assistance?{" "}
          <Link href="/contact" className="text-cyan-brand hover:underline font-medium">
            Contact CLEARNYX Support
          </Link>
        </div>
      </div>
    </div>
  );
}

