import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid professional email address")
    .max(120, "Email address is too long"),
  phone: z
    .string()
    .min(8, "Please enter a valid contact number")
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(/^[0-9+\s\-()]+$/, "Phone number contains invalid characters"),
  organization: z
    .string()
    .min(2, "Organization or clinic name is required")
    .max(120, "Organization name is too long"),
  designation: z
    .string()
    .min(2, "Designation is required (e.g. Orthodontist, Clinical Director)")
    .max(80, "Designation is too long"),
  city: z
    .string()
    .min(2, "City is required")
    .max(60, "City name is too long"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to being contacted by CLEARNYX" }),
  }),
  honeypot: z.string().max(0).optional(),
});

export const partnerFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  designation: z
    .string()
    .min(2, "Professional designation is required (e.g. Orthodontist, Dentist, Practice Owner)")
    .max(80, "Designation is too long"),
  clinicName: z
    .string()
    .min(2, "Clinic or practice name is required")
    .max(120, "Practice name is too long"),
  email: z
    .string()
    .email("Please provide a valid professional email address")
    .max(120, "Email address is too long"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\s\-()]+$/, "Phone number contains invalid characters"),
  city: z
    .string()
    .min(2, "City is required")
    .max(60, "City name is too long"),
  state: z
    .string()
    .min(2, "State is required")
    .max(60, "State name is too long"),
  practiceType: z
    .string()
    .min(2, "Please select your practice type"),
  currentInterest: z
    .array(z.string())
    .min(1, "Please select at least one area of interest"),
  message: z
    .string()
    .max(2000, "Message cannot exceed 2000 characters")
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to professional partnership communication" }),
  }),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type PartnerFormValues = z.infer<typeof partnerFormSchema>;
