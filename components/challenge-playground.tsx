"use client";

import { useMemo, useState } from "react";

type ChallengePlaygroundProps = {
  goal: string;
  instructions: string[];
  starterHtml: string;
  starterCss: string;
};

export default function ChallengePlayground({
  goal,
  instructions,
  starterHtml,
  starterCss,
}: ChallengePlaygroundProps) {
  const [cssCode, setCssCode] = useState(starterCss);

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

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Target
        </p>

        <h2 className="mt-3 text-2xl font-semibold">{goal}</h2>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-3">
          <iframe
            title="Challenge Preview"
            srcDoc={previewDocument}
            className="h-[400px] w-full rounded-xl border border-zinc-800 bg-white"
          />
        </div>
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
        </aside>
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
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              CSS Editor
            </p>

            <button
              type="button"
              onClick={() => setCssCode(starterCss)}
              className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            >
              Reset
            </button>
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