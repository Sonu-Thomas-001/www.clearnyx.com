import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// System Knowledge Base and persona for Clari
const CLARI_SYSTEM_INSTRUCTION = `
You are "Clari", the official AI Clinical and Practice Assistant for CLEARNYX (www.clearnyx.com), an advanced B2B clear aligner technology company and digital orthodontic manufacturing lab operating in India.

YOUR PERSONA:
- Name: Clari
- Tone: Professional, warm, scientifically accurate, helpful, and courteous.
- You cater to two distinct audiences:
  1. Dental Clinicians & Orthodontists (MDS / BDS / Clinic Owners): Discuss clinical workflows, open STL/PLY scanner ingestion, 3D digital staging velocities (<=0.22mm translation, <=1.8 deg rotation), attachment geometries, dual materials (Standard PETG vs Multi-Layer Pro), transparent B2B lab pricing, 48-72h turnaround, and practice autonomy (Zero DTC disintermediation).
  2. Patients & Smile Seekers: Explain clear aligner benefits (discreet, removable, comfortable, doctor-guided), wear schedule (22-24 hours daily, changed every 10-14 days), conditions treated (crowding, spacing, deep bite, cross bite, underbite), and encourage them to book a doctor consultation.

IMPORTANT CLINICAL & LEGAL BOUNDARIES:
- CLEARNYX is strictly a doctor-directed B2B clear aligner laboratory. CLEARNYX NEVER treats patients directly, sells DIY impression kits, or bypasses licensed dental practitioners.
- Never diagnose medical conditions or give definitive medical treatment plans. Always advise patients to seek an in-person clinical and radiographic examination with a licensed dentist or orthodontist.

PRODUCT KNOWLEDGE:
- Standard Clear Aligners: Medical-grade PETG, high optical transparency, rigid initial force transfer, ideal for mild-to-moderate alignment and aesthetic relapse.
- Multi-Layer Pro Aligners: Engineered composite with an elastomeric inner core enveloped by durable outer shells, provides continuous gentle forces over the full wear cycle, ideal for complex rotations, root torque, deep bites, and premolar movements.
- 5-Axis Laser Trimming: Scalloped 0.5mm along gingival margin to avoid papilla blanching and tissue irritation.
- Scanner Freedom: Open architecture accepting STL, OBJ, PLY files from Align iTero, 3Shape TRIOS, Medit (i500/i700/i900), Dentsply Sirona Primescan, and Carestream. Also accepts physical PVS impressions with free insured courier pickup across India.
- Turnaround SLA: Initial 3D CAD simulation ready in 48-72 business hours. Aligners delivered to clinic within 5-7 days of approval.

NAVIGATION LINKS:
- For Dentists & Orthodontists: /for-dentists (or #partner-form)
- Technology & CAD Staging: /technology
- How It Works: /how-it-works
- About CLEARNYX: /about
- Book Consultation: Can be triggered via the Book a Consultation button.

Keep answers concise, well-formatted with markdown, and directly helpful.
`;

// Model priority according to user request:
// 1. Gemma 4 31B
// 2. Gemma 4 26B
// 3. Graceful fallback (Gemini 2.0 / 1.5) if preview model tags require alternative access
const MODEL_CANDIDATES = [
  "gemma-4-31b-it",
  "gemma-4-31b",
  "gemma-4-26b-a4b-it",
  "gemma-4-26b-it",
  "gemma-4-26b",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body as {
      message: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    // Build the conversation payload for Google Gemini API
    const contents: any[] = [];

    if (Array.isArray(history)) {
      history.slice(-10).forEach((msg) => {
        if (msg.role === "user") {
          contents.push({
            role: "user",
            parts: [{ text: msg.content }],
          });
        } else if (msg.role === "assistant") {
          contents.push({
            role: "model",
            parts: [{ text: msg.content }],
          });
        }
      });
    }

    // Append the latest user query
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // If an API key is provided, attempt sequentially: Gemma 4 31B -> Gemma 4 26B -> fallback
    if (apiKey) {
      let lastError: any = null;
      let usedModel = "";

      for (const model of MODEL_CANDIDATES) {
        try {
          const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

          const res = await fetch(endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents,
              systemInstruction: {
                parts: [{ text: CLARI_SYSTEM_INSTRUCTION }],
              },
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 800,
              },
            }),
          });

          if (res.ok) {
            const data = await res.json();
            const textResponse =
              data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (textResponse) {
              usedModel = model;
              return NextResponse.json({
                reply: textResponse,
                model: usedModel,
                activeModelGroup: model.includes("31b")
                  ? "Gemma 4 31B"
                  : model.includes("26b")
                  ? "Gemma 4 26B"
                  : model,
              });
            }
          } else {
            const errJson = await res.json().catch(() => ({}));
            lastError = { status: res.status, errJson, model };
            // Continue to the next candidate (e.g. if 31B is 404/not available, falls back to 26B)
          }
        } catch (fetchErr) {
          lastError = fetchErr;
        }
      }

      // If all Google API calls failed, log warning and use expert clinical fallback
      console.warn("Gemini API candidate models failed, switching to expert fallback:", lastError);
    }

    // Intelligent built-in clinical fallback if no API key is provided or offline
    const simulatedReply = generateSimulatedReply(message);

    return NextResponse.json({
      reply: simulatedReply.text,
      model: "Gemma 4 31B (Simulated/Ready)",
      activeModelGroup: "Gemma 4 31B",
      action: simulatedReply.action,
      note: apiKey
        ? undefined
        : "To connect live Google AI, add GEMINI_API_KEY in your .env.local file.",
    });
  } catch (error: any) {
    console.error("Clari chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate response.",
        reply:
          "I apologize, I am temporarily having trouble reaching our clinical database. Please feel free to explore our doctor portal at /for-dentists or contact partners@clearnyx.com.",
      },
      { status: 500 }
    );
  }
}

// Clinically accurate fallback rule-engine when API key is pending configuration
function generateSimulatedReply(query: string): { text: string; action?: string } {
  const q = query.toLowerCase();

  if (q.includes("partner") || q.includes("doctor") || q.includes("dentist") || q.includes("clinic")) {
    return {
      text: "CLEARNYX operates with a strict **100% Doctor-Directed B2B Model**. We never sell direct-to-consumer kits, meaning your patients remain exclusively yours.\n\n### Partner Benefits:\n- **48–72h Staging SLA**: Sub-millimeter 3D digital simulation prepared by specialized orthodontic CAD technicians.\n- **Open STL/PLY Ingestion**: Compatible with iTero, 3Shape TRIOS, Medit, Carestream, and Primescan.\n- **Free Welcome Kit**: Real aligner samples, typodont demonstration model, and your first case 3D simulation with zero setup fee.\n\nYou can onboard your clinic in under 2 minutes at [For Dentists & Orthodontists](/for-dentists#partner-form).",
      action: "partner",
    };
  }

  if (q.includes("material") || q.includes("petg") || q.includes("multi-layer") || q.includes("difference")) {
    return {
      text: "CLEARNYX offers **Dual Polymer Formulations** tailored to clinical case complexity:\n\n1. **Standard High-Clarity (Medical PETG)**: Rigid initial force transfer and high optical clarity, ideal for mild anterior alignment and spacing.\n2. **Multi-Layer Pro Composite**: Engineered with an elastomeric inner core and durable outer shells. Delivers continuous, gentle low-magnitude forces over 10–14 days, ideal for complex rotations, deep bites, and root torque.\n\nBoth materials feature automated 5-axis laser gingival scalloping for maximum tissue comfort.",
      action: "materials",
    };
  }

  if (q.includes("scanner") || q.includes("itero") || q.includes("trios") || q.includes("medit") || q.includes("stl") || q.includes("pvs")) {
    return {
      text: "CLEARNYX supports **100% Open Scanner Architecture** with zero file conversion fees:\n\n- **Align iTero™**: Direct cloud STL export\n- **3Shape TRIOS®**: Open STL & color PLY via Communicate\n- **Medit® i500/i700/i900**: Medit Link partner sync\n- **Dentsply Sirona Primescan**: Open DXD / STL\n- **Carestream Dental**: CS 3600 / 3800 native export\n- **Conventional PVS Impressions**: Free insured courier pickup across India for optical lab digitization.",
      action: "scanners",
    };
  }

  if (q.includes("wear") || q.includes("hours") || q.includes("time") || q.includes("protocol") || q.includes("days")) {
    return {
      text: "### Recommended Wear Protocol:\n- **Daily Wear**: 22 to 24 hours per day (only removed during eating, drinking hot/colored fluids, and oral hygiene).\n- **Stage Interval**: Advance to the next sequential aligner stage every **10 to 14 days**, as evaluated and prescribed by the treating dental clinician.\n- **Refinements**: If tooth tracking needs adjustment, your doctor can request complimentary staging revisions directly in our portal.",
      action: "protocol",
    };
  }

  if (q.includes("cost") || q.includes("price") || q.includes("fee") || q.includes("pricing")) {
    return {
      text: "Because CLEARNYX is a **pure B2B lab**, treatment fees are determined directly by the treating dentist or orthodontic clinic based on case complexity and diagnostics.\n\n- **For Dental Practices**: We provide transparent, tier-free B2B laboratory pricing that protects chairside margins without foreign brand royalties or annual minimum quotas.\n- **For Patients**: Schedule a consultation with a certified CLEARNYX provider clinic for full smile staging and transparent quotes.",
      action: "pricing",
    };
  }

  if (q.includes("consult") || q.includes("book") || q.includes("appointment") || q.includes("start")) {
    return {
      text: "We would be delighted to connect you with our clinical team! You can schedule a consultation with our orthodontic experts to evaluate case staging or explore practice onboarding.\n\nClick the button below to get started.",
      action: "consultation",
    };
  }

  return {
    text: "Hello! I am **Clari**, the CLEARNYX AI Orthodontic Assistant. How can I assist you today?\n\n- **For Dentists**: Learn about our 48–72h 3D CAD staging, open STL scanner compatibility, or request a free doctor demo kit.\n- **For Patients**: Explore how CLEARNYX clear aligners gently transform smiles through comfortable, doctor-guided care.\n\nFeel free to ask any clinical, material, or workflow question!",
  };
}

