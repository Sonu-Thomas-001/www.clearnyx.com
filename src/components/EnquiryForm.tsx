"use client";

import React, { useState } from "react";
import { EnquiryFormData, EnquiryResponse } from "@/types";
import { BRAND_CONFIG } from "@/config/brand";
import { CheckCircle2, AlertCircle, Loader2, Send, Building, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

export const EnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    designation: "",
    clinicName: "",
    city: "",
    email: "",
    phone: "",
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<EnquiryResponse | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.designation) {
      newErrors.designation = "Please select your professional designation.";
    }

    if (!formData.clinicName.trim() || formData.clinicName.trim().length < 2) {
      newErrors.clinicName = "Please enter your clinic or practice name.";
    }

    if (!formData.city.trim() || formData.city.trim().length < 2) {
      newErrors.city = "Please enter your city/location.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const cleanedPhone = formData.phone.replace(/[\s\-()+]/g, "");
    if (!formData.phone.trim() || cleanedPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to receive launch updates to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    setGeneralError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setGeneralError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: EnquiryResponse = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(data);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setGeneralError(data.message || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      setGeneralError(
        `Unable to connect to submission server. Please email directly to ${BRAND_CONFIG.contactEmail}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#00A6CE]/30 text-center shadow-[0_15px_40px_rgba(7,27,44,0.08)]">
        <div className="w-16 h-16 rounded-full bg-[#DDF7FC] border border-[#00A6CE]/40 flex items-center justify-center mx-auto mb-5 text-[#00A6CE]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#071B2C] mb-2">Registration Confirmed</h3>
        <p className="text-sm text-[#4A6072] max-w-md mx-auto mb-6">
          {submitSuccess.message}
        </p>
        {submitSuccess.enquiryId && (
          <div className="inline-block px-4 py-2 rounded-lg bg-[#F5FBFE] border border-[#00A6CE]/30 text-xs text-[#071B2C] mb-6 font-mono font-bold">
            Partner Reference ID:{" "}
            <span className="text-[#00A6CE]">
              {submitSuccess.enquiryId}
            </span>
          </div>
        )}
        <div className="pt-4 border-t border-[#00A6CE]/15 text-xs text-[#5A7184]">
          Questions regarding launch onboarding? Contact our Clinical Director directly at{" "}
          <a
            href={`mailto:${BRAND_CONFIG.contactEmail}?subject=Partner%20Inquiry%20${submitSuccess.enquiryId || ""}`}
            className="text-[#00A6CE] underline font-semibold hover:text-[#0092B5]"
          >
            {BRAND_CONFIG.contactEmail}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-2xl bg-white border border-[#00A6CE]/25 shadow-[0_20px_50px_rgba(7,27,44,0.06)]"
    >
      {generalError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-700 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
          <span>{generalError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            Full Name <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Dr. Rajesh Sharma"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.fullName ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] placeholder-[#5A7184]/50 text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Professional Designation */}
        <div>
          <label
            htmlFor="designation"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            Designation <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <Briefcase className="w-4 h-4" />
            </div>
            <select
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.designation ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            >
              <option value="" disabled className="text-[#5A7184]">
                Select Clinical Role
              </option>
              <option value="Orthodontist">
                Orthodontist (MDS)
              </option>
              <option value="General Dentist">
                General Dental Practitioner (BDS / MDS)
              </option>
              <option value="Clinic Director / Owner">
                Dental Clinic Director / Owner
              </option>
              <option value="Prosthodontist">
                Prosthodontist
              </option>
              <option value="Other Specialist">
                Other Dental Specialist
              </option>
            </select>
          </div>
          {errors.designation && (
            <p className="mt-1 text-xs text-red-500">{errors.designation}</p>
          )}
        </div>

        {/* Dental Clinic Name */}
        <div>
          <label
            htmlFor="clinicName"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            Dental Clinic / Hospital <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <Building className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="clinicName"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
              placeholder="Apex Orthodontic Center"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.clinicName ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] placeholder-[#5A7184]/50 text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            />
          </div>
          {errors.clinicName && (
            <p className="mt-1 text-xs text-red-500">{errors.clinicName}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            City / State <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <MapPin className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Mumbai, Maharashtra"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.city ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] placeholder-[#5A7184]/50 text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            />
          </div>
          {errors.city && (
            <p className="mt-1 text-xs text-red-500">{errors.city}</p>
          )}
        </div>

        {/* Professional Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            Professional Email <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="doctor@clinic.com"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.email ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] placeholder-[#5A7184]/50 text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold text-[#071B2C] mb-2 uppercase tracking-wider"
          >
            Mobile Number (India) <span className="text-[#00A6CE]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A7184]">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FDFF] border ${
                errors.phone ? "border-red-500" : "border-[#00A6CE]/25"
              } text-[#071B2C] placeholder-[#5A7184]/50 text-sm focus:outline-none focus:border-[#00A6CE] focus:bg-white focus:ring-1 focus:ring-[#00A6CE] transition-all`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Professional Consent Checkbox */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-[#00A6CE]/40 text-[#00A6CE] focus:ring-[#00A6CE]"
          />
          <span className="text-xs text-[#5A7184] leading-relaxed">
            I confirm I am a registered dental healthcare professional in India and consent to receiving official clinical partnership updates and onboarding documentation from CLEARNYX.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-500">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        id="enquiry-submit-btn"
        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00A6CE] hover:bg-[#0092B5] text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(0,166,206,0.3)] hover:shadow-[0_6px_25px_rgba(0,166,206,0.45)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-white" />
            <span>Validating Practitioner Credentials...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Register Your Interest</span>
          </>
        )}
      </button>

      <p className="mt-4 text-[11px] text-[#5A7184] text-center sm:text-left">
        CLEARNYX maintains strict confidentiality. No patient or practitioner information is shared with third parties.
      </p>
    </form>
  );
};
