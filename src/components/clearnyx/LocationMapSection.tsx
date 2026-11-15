import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { MapPin, Navigation, ExternalLink, Building2, Truck, Cpu } from "lucide-react";

export function LocationMapSection() {
  const address = SITE_CONFIG.contacts.address;
  const mapQuery = encodeURIComponent(`${address.line1}, ${address.city}, ${address.state}, ${address.country}`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 md:py-20 bg-surface-soft border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-brand text-xs font-bold tracking-wider uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Operations & Digital Planning Facility
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Centralized Laboratory & Clinical Hub
            </h2>
            <p className="mt-2 text-sm text-slate-secondary max-w-2xl">
              All digital orthodontic treatment setups, 3D printing simulations, and automated laser-trimming dispatches are coordinated from our central facility in Bengaluru.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-cyan-brand text-white text-xs font-semibold tracking-wide transition-colors duration-200 shrink-0 shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Map Container & Facility Badges */}
        <div className="rounded-3xl border border-surface-border bg-white overflow-hidden shadow-sm">
          {/* Responsive Map Embed */}
          <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-slate-100">
            <iframe
              title="CLEARNYX Operations Center Location"
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Logistics & Facility Info Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-border bg-white border-t border-surface-border">
            <div className="p-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-brand flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Facility Address
                </div>
                <div className="text-xs text-slate-secondary mt-1">
                  {address.line1}, {address.city}, {address.state} {address.postalCode}, {address.country}
                </div>
                <div className="text-[11px] text-slate-muted mt-0.5">
                  {address.note}
                </div>
              </div>
            </div>

            <div className="p-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-brand flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Digital CAD & Planning
                </div>
                <div className="text-xs text-slate-secondary mt-1">
                  Integrated 3D staging facility accepting STL/PLY files directly from doctor intraoral scans.
                </div>
              </div>
            </div>

            <div className="p-6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-brand flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Priority Logistics Desk
                </div>
                <div className="text-xs text-slate-secondary mt-1">
                  Express medical courier dispatch across 500+ Indian cities with cold-chain packaging standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

