import { NextRequest, NextResponse } from "next/server";
import { EnquiryFormData, EnquiryResponse } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryFormData = await request.json();

    const errors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full professional name.";
    }

    if (!body.designation || body.designation.trim().length === 0) {
      errors.designation = "Please select your professional designation.";
    }

    if (!body.clinicName || body.clinicName.trim().length < 2) {
      errors.clinicName = "Please provide your dental clinic or hospital name.";
    }

    if (!body.city || body.city.trim().length < 2) {
      errors.city = "Please state your practice city or location.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Please enter a valid professional email address.";
    }

    const cleanedPhone = (body.phone || "").replace(/[\s\-()+]/g, "");
    if (!body.phone || cleanedPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!body.consent) {
      errors.consent = "Professional consent is required to receive launch communications.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json<EnquiryResponse>(
        {
          success: false,
          message: "Please correct the highlighted validation errors.",
          errors,
        },
        { status: 400 }
      );
    }

    // Generate unique clinical partner inquiry reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const enquiryId = `CNX-IN-${Date.now().toString().slice(-4)}-${randomSuffix}`;

    // Log the partner registration securely for backend/server ingestion
    console.info(`[CLEARNYX B2B Partner Interest Logged] Ref: ${enquiryId}`, {
      name: body.fullName,
      designation: body.designation,
      clinic: body.clinicName,
      city: body.city,
      email: body.email,
      phone: body.phone,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json<EnquiryResponse>(
      {
        success: true,
        message:
          "Thank you for registering your interest. Our clinical partnerships team will connect with you prior to the India launch.",
        enquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CLEARNYX Enquiry Error]", error);
    return NextResponse.json<EnquiryResponse>(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please contact info@clearnyx.com directly.",
      },
      { status: 500 }
    );
  }
}
