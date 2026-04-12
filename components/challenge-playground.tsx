"use client";

import { useEffect, useMemo, useState } from "react";
import { saveProgress, getProgress } from "../lib/supabase/progress";

type ChallengePlaygroundProps = {
  slug: string;
  goal: string;
  instructions: string[];
  starterHtml: string;
  starterCss: string;
};

export default function ChallengePlayground({
  slug,
  goal,
  instructions,
  starterHtml,
  starterCss,
}: ChallengePlaygroundProps) {
  const [cssCode, setCssCode] = useState(starterCss);
  const [isCompleted, setIsCompleted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    async function loadProgress() {
      const progress = await getProgress();
      const match = progress.find((item) => item.challenge_slug === slug);

      if (match) {
        setIsCompleted(true);
      }

      setLoadingProgress(false);
    }

    loadProgress();
  }, [slug]);

  const previewDocument = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            html, body {
              margin: 0;
              padding: 0;
            }

            body {
              min-height: 100vh;
              background: #09090b;
              color: white;
            }

            ${cssCode}
          </style>
        </head>
        <body>
          ${starterHtml}
        </body>
      </html>
    `;
  }, [cssCode, starterHtml]);

  const handleReset = () => {
    setCssCode(starterCss);
  };

  const handleComplete = async () => {
    setSaving(true);

    const result = await saveProgress(slug);

    if (result.error) {
      alert(result.error === "Not logged in" ? "Please log in to save progress." : "Could not save progress. Try again.");
      setSaving(false);
      return;
    }

    setIsCompleted(true);
    setSaving(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Target
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{goal}</h2>
          </div>

          {loadingProgress ? (
            <span className="rounded-full border border-zinc-700 px-3 py-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
              Loading...
            </span>
          ) : isCompleted ? (
            <span className="rounded-full border border-emerald-700 bg-emerald-950 px-3 py-2 text-xs font-medium uppercase tracking-wide text-emerald-300">
              Completed
            </span>
          ) : null}
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-3">
          <iframe
            title="Challenge Preview"
            srcDoc={previewDocument}
            className="h-[400px] w-full rounded-xl border border-zinc-800 bg-white"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {!isCompleted ? (
            <button
              type="button"
              onClick={handleComplete}
              disabled={saving}
              className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Mark as Complete"}
            </button>
          ) : null}

          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-zinc-700 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Reset CSS
          </button>
        </div>

        {isCompleted ? (
          <div className="mt-6 rounded-2xl border border-emerald-800 bg-emerald-950/40 p-4">
            <p className="text-sm font-medium text-emerald-300">
              Nice work — this challenge is saved as complete.
            </p>
          </div>
        ) : null}

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Starter HTML
          </p>

          <pre className="mt-4 overflow-x-auto text-xs leading-6 text-zinc-300">
            {starterHtml}
          </pre>
        </div>
      </section>

      <aside className="space-y-6">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Instructions
          </p>

          <ul className="mt-4 list-disc pl-5 text-sm leading-7 text-zinc-400">
            {instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              CSS Editor
            </p>

            <span className="text-xs uppercase tracking-[0.15em] text-zinc-500">
              Live
            </span>
          </div>

          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            spellCheck={false}
            className="mt-4 h-[320px] w-full rounded-xl border border-zinc-800 bg-black p-4 font-mono text-sm leading-6 text-zinc-200 outline-none"
          />
        </section>
      </aside>
    </div>
  );
}