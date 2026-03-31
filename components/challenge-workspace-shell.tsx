type ChallengeWorkspaceShellProps = {
    goal: string;
    instructions: string[];
    starterHtml: string;
    starterCss: string;
  };
  
  export default function ChallengeWorkspaceShell({
    goal,
    instructions,
    starterHtml,
    starterCss,
  }: ChallengeWorkspaceShellProps) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Target
          </p>
  
          <h2 className="mt-3 text-2xl font-semibold">{goal}</h2>
  
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-6">
            <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-950">
              <p className="text-sm text-zinc-500">
              Editable preview goes here
              </p>
            </div>
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

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Starter HTML
            </p>
  
            <pre className="mt-4 overflow-x-auto text-xs leading-6 text-zinc-300">
              {starterHtml}
            </pre>
          </div>
  
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Starter CSS
            </p>
  
            <pre className="mt-4 overflow-x-auto rounded-xl bg-black p-4 text-xs leading-6 text-zinc-300">
              {starterCss}
            </pre>
          </section>
        </aside>
      </div>
    );
  }