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

    const prompt = `You are a concise CSS teaching assistant. A student needs help with a CSS layout challenge.

Challenge: ${challengeTitle}
Goal: ${goal}

HTML:
${starterHtml}

Student's current CSS:
${currentCss}

Respond with exactly three lines in this format. Each line must be 1 sentence only. Do not write code. Do not give the solution. Just guide them.

Hint: [one sentence about which CSS concept or property to explore]
Likely issue: [one sentence about what is probably wrong or missing]
Next step: [one sentence telling them one specific thing to try next]`;

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
          max_tokens: 200,
          temperature: 0.7,
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
      hint:
        hintMatch?.[1]?.trim() ||
        "Try looking at your display and alignment properties.",
      likelyIssue:
        issueMatch?.[1]?.trim() ||
        "Your layout container might be missing a display type.",
      nextStep:
        nextMatch?.[1]?.trim() ||
        "Try adding display: flex to your container and see what changes.",
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