"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Image from "next/image";
import { X, CheckCircle, ArrowRight } from "lucide-react";

interface BookModalContextType {
  isOpen: boolean;
  openModal: (type?: "consultation" | "partner") => void;
  closeModal: () => void;
}

const BookModalContext = createContext<BookModalContextType | undefined>(undefined);

export function BookModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"consultation" | "partner">("consultation");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    role: "Doctor / Clinic",
    message: "",
  });

  const openModal = (type: "consultation" | "partner" = "consultation") => {
    setModalType(type);
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          practiceType: formData.role,
          message: formData.message || "Consultation booking request from website modal",
          source: "modal_booking",
        }),
      });
      setSubmitted(true);
    } catch {
      // Still show success to user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-navy-deep/60 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-light-grey overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-soft-white hover:bg-light-grey flex items-center justify-center text-slate transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-dark-text" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-ice-blue rounded-full flex items-center justify-center mx-auto text-brand-cyan">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep">Request Received</h3>
                <p className="text-sm text-slate max-w-sm mx-auto">
                  Thank you! Our clinical specialist will contact you within 2 hours to confirm your consultation schedule.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2.5 rounded-full bg-brand-cyan text-white font-medium hover:bg-electric-cyan transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-ice-blue/60 flex items-center justify-center p-2 border border-brand-cyan/20">
                    <Image
                      src="/brand/logo-symbol.png"
                      alt="CLEARNYX"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-deep">
                      {modalType === "partner" ? "Partner with CLEARNYX" : "Book a Consultation"}
                    </h3>
                    <p className="text-xs text-slate">Experience premium precision orthodontic solutions</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-deep mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-light-grey bg-soft-white text-dark-text text-sm focus:border-brand-cyan focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-navy-deep mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-light-grey bg-soft-white text-dark-text text-sm focus:border-brand-cyan focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy-deep mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Mumbai / Delhi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-light-grey bg-soft-white text-dark-text text-sm focus:border-brand-cyan focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-deep mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="doctor@dentalclinic.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-light-grey bg-soft-white text-dark-text text-sm focus:border-brand-cyan focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy-deep mb-1">
                      I am a
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-light-grey bg-soft-white text-dark-text text-sm focus:border-brand-cyan focus:bg-white outline-none transition-all"
                    >
                      <option value="Doctor / Clinic">Orthodontist / Dental Clinician</option>
                      <option value="Multi-location Clinic Owner">Multi-location Practice</option>
                      <option value="Patient seeking certified doctor">Patient Seeking Certified Doctor</option>
                      <option value="Distribution Partner">Distribution Partner</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3 px-6 rounded-full bg-brand-cyan hover:bg-electric-cyan text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-cyan flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    <span>{loading ? "Submitting..." : "Confirm & Schedule"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-center text-slate">
                    🔒 Certified Medical Grade ISO 13485 &amp; CDSCO Compliant.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </BookModalContext.Provider>
  );
}

export function useBookModal() {
  const context = useContext(BookModalContext);
  if (!context) {
    throw new Error("useBookModal must be used within a BookModalProvider");
  }
  return context;
}

