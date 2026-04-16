import { NextResponse } from "next/server";

const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { challengeTitle, goal, starterHtml, currentCss } = body;

    if (!challengeTitle || !goal || !starterHtml || !currentCss) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const prompt = `You are a CSS teaching assistant. A student is working on a CSS layout challenge.

Challenge: ${challengeTitle}
Goal: ${goal}

The HTML structure is:
${starterHtml}

The student's current CSS is:
${currentCss}

Give the student exactly three things:
1. One short hint about what CSS property or concept to focus on
2. One likely mistake in their current CSS
3. One concrete next step they should try

Rules:
- Do NOT give the full solution
- Do NOT rewrite their CSS
- Keep each point to 1-2 sentences
- Be encouraging but direct
- Use CSS terminology

Respond in this exact format:
Hint: [your hint]
Likely issue: [the issue]
Next step: [the next step]`;

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.1-8B-Instruct",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 300,
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("HF API error:", response.status, errorBody);
      return NextResponse.json(
        { error: "Could not generate hint. Try again." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";

    const hintMatch = text.match(/Hint:\s*(.*?)(?=Likely issue:|$)/s);
    const issueMatch = text.match(/Likely issue:\s*(.*?)(?=Next step:|$)/s);
    const nextMatch = text.match(/Next step:\s*(.*?)$/s);

    const result = {
      hint: hintMatch?.[1]?.trim() || "Try looking at your display and alignment properties.",
      likelyIssue: issueMatch?.[1]?.trim() || "Your layout container might be missing a display type.",
      nextStep: nextMatch?.[1]?.trim() || "Try adding display: flex to your container and see what changes.",
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI hint error:", error);
    return NextResponse.json(
      { error: "Could not generate hint. Try again." },
      { status: 500 }
    );
  }
}