import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = contactFormSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validatedData.error.flatten().fieldErrors,
          message: "Validation failed. Please correct the highlighted fields.",
        },
        { status: 400 }
      );
    }

    // Check honeypot for spam protection
    if (validatedData.data.honeypot && validatedData.data.honeypot.length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // Process submission: Log securely in production environment
    console.log("[CLEARNYX Contact Lead]", {
      fullName: validatedData.data.fullName,
      email: validatedData.data.email,
      phone: validatedData.data.phone,
      organization: validatedData.data.organization,
      city: validatedData.data.city,
      subject: validatedData.data.subject,
      timestamp: new Date().toISOString(),
    });

    // If Resend API key is provided, deliver email server-side
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "info@clearnyx.com";

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "CLEARNYX Inquiries <leads@clearnyx.com>",
            to: [recipient],
            subject: `New Contact Inquiry: ${validatedData.data.subject} [${validatedData.data.organization}]`,
            text: `
Name: ${validatedData.data.fullName}
Email: ${validatedData.data.email}
Phone: ${validatedData.data.phone}
Organization: ${validatedData.data.organization}
Designation: ${validatedData.data.designation}
City: ${validatedData.data.city}
Subject: ${validatedData.data.subject}
Message: ${validatedData.data.message}
Date: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
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
        "Thank you for contacting CLEARNYX. Your inquiry has been received and our professional team will respond shortly.",
    });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

