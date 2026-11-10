"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerFormSchema, PartnerFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, ShieldCheck, Stethoscope } from "lucide-react";

const PRACTICE_TYPES = [
  "General Dental Practice",
  "Specialist Orthodontic Clinic",
  "Multi-Location Practice Group",
  "Institutional / Hospital Dental Wing",
  "Dental Academy / Research Clinic",
];

const INTEREST_AREAS = [
  "Standard Clear Aligners (PETG)",
  "Multi-Layer Clear Aligners",
  "3D Digital Treatment Planning",
  "Practice Onboarding & Starter Kits",
  "Multi-Chair Volume Collaboration",
];

export function PartnerEnquiryForm() {
  const [serverState, setServerState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      fullName: "",
      designation: "",
      clinicName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      practiceType: "",
      currentInterest: ["Standard Clear Aligners (PETG)"],
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: PartnerFormValues) => {
    setServerState({ status: "loading", message: "" });
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setServerState({
          status: "success",
          message:
            result.message ||
            "Thank you. Your partnership application has been received.",
        });
        reset();
      } else {
        setServerState({
          status: "error",
          message:
            result.message ||
            "Unable to submit partnership application at this time. Please contact us at partners@clearnyx.com.",
        });
      }
    } catch {
      setServerState({
        status: "error",
        message: "A network error occurred. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 bg-white p-6 sm:p-10 rounded-2xl border border-surface-border shadow-card"
    >
      <div className="flex items-center gap-2 pb-2 border-b border-surface-border">
        <Stethoscope className="w-5 h-5 text-cyan-brand" />
        <h3 className="text-lg font-bold text-navy-900">
          Dental Practice Partner Application
        </h3>
      </div>

      {serverState.status === "success" && (
        <div className="p-5 rounded-xl bg-ice-soft/80 border border-cyan-300 text-navy-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Application Received</p>
            <p className="mt-1 text-slate-secondary">{serverState.message}</p>
          </div>
        </div>
      )}

      {serverState.status === "error" && (
        <div className="p-5 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Application Notice</p>
            <p className="mt-1 text-red-700">{serverState.message}</p>
          </div>
        </div>
      )}

      <input
        type="text"
        {...register("honeypot")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="p_fullName"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Full Name <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_fullName"
            type="text"
            placeholder="Dr. Ananya Iyer"
            {...register("fullName")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_designation"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Professional Designation <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_designation"
            type="text"
            placeholder="MDS Orthodontics / Clinical Director"
            {...register("designation")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.designation && (
            <p className="text-xs text-red-600 mt-1">{errors.designation.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_clinicName"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Clinic / Organization Name <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_clinicName"
            type="text"
            placeholder="Apex Dental & Orthodontics"
            {...register("clinicName")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.clinicName && (
            <p className="text-xs text-red-600 mt-1">{errors.clinicName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_email"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Professional Email <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_email"
            type="email"
            placeholder="dr.ananya@apexdental.com"
            {...register("email")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_phone"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Phone Number <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_phone"
            type="tel"
            placeholder="+91 98765 12345"
            {...register("phone")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_practiceType"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Type of Practice <span className="text-cyan-brand">*</span>
          </label>
          <select
            id="p_practiceType"
            {...register("practiceType")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm bg-white focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          >
            <option value="">Select practice type...</option>
            {PRACTICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.practiceType && (
            <p className="text-xs text-red-600 mt-1">{errors.practiceType.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_city"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            City <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_city"
            type="text"
            placeholder="Mumbai"
            {...register("city")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.city && (
            <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="p_state"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            State <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="p_state"
            type="text"
            placeholder="Maharashtra"
            {...register("state")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.state && (
            <p className="text-xs text-red-600 mt-1">{errors.state.message}</p>
          )}
        </div>
      </div>

      {/* Areas of Interest Multi-Select */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
          Areas of Interest <span className="text-cyan-brand">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {INTEREST_AREAS.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2.5 p-3 rounded-lg border border-surface-border hover:bg-surface-soft cursor-pointer transition-colors text-xs text-navy-900 font-medium"
            >
              <input
                type="checkbox"
                value={interest}
                {...register("currentInterest")}
                className="w-4 h-4 rounded border-surface-border text-cyan-brand focus:ring-cyan-brand"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
        {errors.currentInterest && (
          <p className="text-xs text-red-600 mt-1">{errors.currentInterest.message}</p>
        )}
      </div>

      {/* Optional Message */}
      <div>
        <label
          htmlFor="p_message"
          className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
        >
          Additional Practice Details / Comments (Optional)
        </label>
        <textarea
          id="p_message"
          rows={3}
          placeholder="Share approximate monthly aligner case volume, intraoral scanner in use, or specific inquiries."
          {...register("message")}
          className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors resize-y"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("consent")}
            className="w-4 h-4 rounded border-surface-border text-cyan-brand focus:ring-cyan-brand mt-0.5"
          />
          <span className="text-xs text-slate-secondary leading-relaxed">
            I confirm that I am a licensed dental practitioner or practice administrator, agree to receive CLEARNYX partnership communication, and acknowledge that no patient identifiable records should be submitted through this form.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 pl-7">{errors.consent.message}</p>
        )}
      </div>

      <div className="p-3 bg-surface-soft rounded-lg border border-surface-border flex items-center gap-2 text-xs text-slate-muted">
        <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0" />
        <span>Strict B2B Confidentiality: We do not share clinic details with third parties.</span>
      </div>

      <Button
        type="submit"
        variant="cyan"
        size="lg"
        isLoading={isSubmitting || serverState.status === "loading"}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full font-semibold"
      >
        Submit Partner Application
      </Button>
    </form>
  );
}

