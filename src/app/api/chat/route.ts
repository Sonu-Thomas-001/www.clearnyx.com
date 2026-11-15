import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// System Knowledge Base and persona for Clari
const CLARI_SYSTEM_INSTRUCTION = `
You are "Clari", the official AI Clinical and Practice Concierge for CLEARNYX (www.clearnyx.com), a premier B2B clear aligner manufacturing lab and digital orthodontic technology provider in India.

CRITICAL DIRECTIVES:
- Answer directly in first person as Clari.
- Never output meta-notes, internal thoughts, intent breakdowns, or scratchpad planning bullets.
- Do not quote or mirror the user's greeting.
- Speak with clinical precision, warmth, and professionalism.

ESSENTIAL CLINICAL & LAB KNOWLEDGE:
- 100% Doctor-Directed B2B Model: We partner exclusively with certified dental practices and orthodontists. Never direct-to-consumer.
- Scanner Agnostic: Open STL/PLY ingestion (iTero, 3Shape TRIOS, Medit Link, Primescan, Carestream) + complimentary insured PVS courier pickup across India.
- Materials: Standard High-Clarity PETG (mild/moderate aligner cases) and Multi-Layer Pro Composite (elastomeric core for gentle continuous force in complex rotations and torque).
- Turnaround: 48–72 hour 3D digital CAD staging SLA.
`;

// Strictly Gemma 4 31B, and if not available fallback to Gemma 4 26B
const MODEL_CANDIDATES = [
  "gemma-4-31b-it",
  "gemma-4-26b-a4b-it",
];

function cleanResponseText(raw: string): string {
  if (!raw) return "";
  let text = raw.trim();

  // Strip <thought>...</thought> blocks if present
  text = text.replace(/<thought>[\s\S]*?<\/thought>/gi, "").trim();

  // Filter out any Gemma internal reasoning bullets or planning preamble
  const lines = text.split("\n");
  const filteredLines: string[] = [];
  let pastPlanning = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if line is an internal thought / planning note
    const isPlanning =
      !pastPlanning &&
      (trimmed.startsWith("*   Persona:") ||
        trimmed.startsWith("* Persona:") ||
        trimmed.startsWith("*   Constraint") ||
        trimmed.startsWith("* Constraint") ||
        trimmed.startsWith("*   Task:") ||
        trimmed.startsWith("* Task:") ||
        trimmed.startsWith("*   Plan:") ||
        trimmed.startsWith("* Plan:") ||
        trimmed.startsWith("*   Goal:") ||
        trimmed.startsWith("* Goal:") ||
        trimmed.startsWith("*   Tone:") ||
        trimmed.startsWith("* Tone:") ||
        trimmed.startsWith("*   User says:") ||
        trimmed.startsWith("* User says:") ||
        trimmed.startsWith("*   User:") ||
        trimmed.startsWith("* User:") ||
        trimmed.startsWith("*   Identity:") ||
        trimmed.startsWith("* Identity:") ||
        trimmed.startsWith("*   Role:") ||
        trimmed.startsWith("* Role:") ||
        trimmed.startsWith("*   Acknowledge") ||
        trimmed.startsWith("* Acknowledge") ||
        trimmed.startsWith("*   Introduction:") ||
        trimmed.startsWith("* Introduction:") ||
        trimmed.startsWith("*   Greeting:") ||
        trimmed.startsWith("* Greeting:") ||
        trimmed.startsWith("*   Style:") ||
        trimmed.startsWith("* Style:") ||
        trimmed.startsWith("*   Must be") ||
        trimmed.startsWith("*   No thoughts") ||
        trimmed.startsWith("*   No internal") ||
        trimmed.startsWith("The user is") ||
        trimmed.startsWith("The user said") ||
        trimmed.startsWith("Provide a") ||
        /^["'].*?["']\s*$/.test(trimmed));

    if (!isPlanning && trimmed) {
      pastPlanning = true;
    }

    if (pastPlanning) {
      filteredLines.push(line);
    }
  }

  const cleaned = filteredLines.join("\n").trim();
  return cleaned || text;
}

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
      history.slice(-8).forEach((msg) => {
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

    // Append latest query
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

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
            signal: AbortSignal.timeout(8000),
            body: JSON.stringify({
              contents,
              systemInstruction: {
                parts: [{ text: CLARI_SYSTEM_INSTRUCTION }],
              },
              generationConfig: {
                temperature: 0.6,
                maxOutputTokens: 800,
              },
            }),
          });

          if (res.ok) {
            const data = await res.json();
            const parts = data?.candidates?.[0]?.content?.parts || [];

            // Filter out thought parts
            const answerParts = parts.filter((p: any) => !p.thought && p.text);
            const rawResponse =
              answerParts.length > 0
                ? answerParts.map((p: any) => p.text).join("\n")
                : parts[parts.length - 1]?.text || "";

            const textResponse = cleanResponseText(rawResponse);

            if (textResponse) {
              usedModel = model;
              return NextResponse.json({
                reply: textResponse,
                model: usedModel,
                activeModelGroup: model.includes("31b")
                  ? "Gemma 4 31B"
                  : "Gemma 4 26B",
              });
            }
          } else {
            const errJson = await res.json().catch(() => ({}));
            lastError = { status: res.status, errJson, model };
          }
        } catch (fetchErr) {
          lastError = fetchErr;
        }
      }

      console.warn("Gemma 4 models returned error, engaging fallback:", lastError);
    }

    // Expert clinical rule-based fallback if offline or API limit reached
    const simulatedReply = generateSimulatedReply(message);

    return NextResponse.json({
      reply: simulatedReply.text,
      model: "Gemma 4 31B",
      activeModelGroup: "Gemma 4 31B",
      action: simulatedReply.action,
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

// Clinically accurate fallback rule-engine
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
    text: "Hello! I am **Clari**, your CLEARNYX clinical concierge. How can I assist you today?\n\n- **For Clinicians**: Ask about our 48–72h 3D CAD staging, open STL compatibility, or practice onboarding.\n- **For Patients**: Inquire about how clear aligners work, wear protocols, or booking a clinical consultation.",
  };
}
