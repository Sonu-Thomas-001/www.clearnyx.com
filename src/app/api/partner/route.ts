import { NextRequest, NextResponse } from "next/server";
import { partnerFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validatedData = partnerFormSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
          message: "Please complete all mandatory partnership fields correctly.",
        },
        { status: 400 }
      );
    }

    // Check honeypot
    if (validatedData.data.honeypot && validatedData.data.honeypot.length > 0) {
      return NextResponse.json(
        { success: true, message: "Partnership application received." },
        { status: 200 }
      );
    }

    console.log("[CLEARNYX Partner Application]", {
      fullName: validatedData.data.fullName,
      designation: validatedData.data.designation,
      clinicName: validatedData.data.clinicName,
      email: validatedData.data.email,
      phone: validatedData.data.phone,
      city: validatedData.data.city,
      state: validatedData.data.state,
      practiceType: validatedData.data.practiceType,
      currentInterest: validatedData.data.currentInterest,
      timestamp: new Date().toISOString(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.PARTNERSHIP_TO_EMAIL || "partners@clearnyx.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "CLEARNYX Partnerships <partnerships@clearnyx.com>",
            to: [recipient],
            subject: `New Dental Practice Partner Application: ${validatedData.data.clinicName} (${validatedData.data.city})`,
            text: `
Doctor / Applicant: ${validatedData.data.fullName}
Designation: ${validatedData.data.designation}
Clinic / Practice: ${validatedData.data.clinicName}
Email: ${validatedData.data.email}
Phone: ${validatedData.data.phone}
Location: ${validatedData.data.city}, ${validatedData.data.state}
Practice Type: ${validatedData.data.practiceType}
Areas of Interest: ${validatedData.data.currentInterest.join(", ")}
Notes: ${validatedData.data.message || "None provided"}
Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            `.trim(),
          }),
        });
      } catch (emailErr) {
        console.error("[Email Delivery Error]", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your partnership inquiry with CLEARNYX. A dedicated clinical representative will contact your practice shortly with case onboarding details.",
    });
  } catch (error) {
    console.error("[Partner API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your partnership request.",
      },
      { status: 500 }
    );
  }
}

