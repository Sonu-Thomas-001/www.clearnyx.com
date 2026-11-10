"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Send, ShieldCheck } from "lucide-react";

export function ContactForm() {
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
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      designation: "",
      city: "",
      subject: "",
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerState({ status: "loading", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setServerState({
          status: "success",
          message: result.message || "Thank you. Your message has been received.",
        });
        reset();
      } else {
        setServerState({
          status: "error",
          message:
            result.message ||
            "Unable to send message at this time. Please try again or contact us directly at info@clearnyx.com.",
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
      className="space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-card"
    >
      {/* Server Success State */}
      {serverState.status === "success" && (
        <div className="p-4 rounded-xl bg-ice-soft/80 border border-cyan-300 text-navy-900 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Inquiry Transmitted Successfully</p>
            <p className="mt-1 text-slate-secondary">{serverState.message}</p>
          </div>
        </div>
      )}

      {/* Server Error State */}
      {serverState.status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Submission Notice</p>
            <p className="mt-1 text-red-700">{serverState.message}</p>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from view) */}
      <input
        type="text"
        {...register("honeypot")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Full Name <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Dr. Rajesh Sharma"
            {...register("fullName")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Professional Email <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="dr.rajesh@clinic.com"
            {...register("email")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Phone Number <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            {...register("phone")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Organization / Clinic */}
        <div>
          <label
            htmlFor="organization"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Clinic / Organization <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="organization"
            type="text"
            placeholder="Sharma Orthodontic Center"
            {...register("organization")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.organization && (
            <p className="text-xs text-red-600 mt-1">{errors.organization.message}</p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label
            htmlFor="designation"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            Designation <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="designation"
            type="text"
            placeholder="Consultant Orthodontist"
            {...register("designation")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.designation && (
            <p className="text-xs text-red-600 mt-1">{errors.designation.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
          >
            City <span className="text-cyan-brand">*</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="Bengaluru"
            {...register("city")}
            className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
          />
          {errors.city && (
            <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
        >
          Subject <span className="text-cyan-brand">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Clinical Inquiry regarding Multi-Layer Aligners"
          {...register("subject")}
          className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-navy-900 text-sm focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand outline-none transition-colors"
        />
        {errors.subject && (
          <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
        >
          Message / Clinical Query <span className="text-cyan-brand">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Please share details regarding your inquiry. Note: Please do not attach or share confidential patient identifiable health records via this general marketing form."
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
            I consent to CLEARNYX contacting me regarding professional orthodontic solutions and confirm that no sensitive patient health records are contained in this submission.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 pl-7">{errors.consent.message}</p>
        )}
      </div>

      {/* Privacy note */}
      <div className="p-3 bg-surface-soft rounded-lg border border-surface-border flex items-center gap-2 text-xs text-slate-muted">
        <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0" />
        <span>Your professional contact details are protected under our Privacy Policy.</span>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="cyan"
        size="lg"
        isLoading={isSubmitting || serverState.status === "loading"}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full font-semibold"
      >
        Transmit Clinical Inquiry
      </Button>
    </form>
  );
}

