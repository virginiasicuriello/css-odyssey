import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import { challenges } from "../../../lib/challenges";
import { challengeContent } from "../../../lib/challenge-content";

type ChallengePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChallengePage({
  params,
}: ChallengePageProps) {
  const { slug } = await params;

  const challenge = challenges.find((item) => item.slug === slug);
  const content = challengeContent.find((item) => item.slug === slug);

  if (!challenge) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <h1 className="text-4xl font-bold">Challenge not found</h1>
        </PageShell>
      </>
    );
  }

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Challenge
          </p>

          <h1 className="mt-3 text-4xl font-bold">{challenge.title}</h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            {challenge.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Challenge Workspace
            </p>

            <div className="mt-6 rounded-xl border border-dashed border-zinc-700 p-6 text-zinc-400">
              Workspace UI
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Difficulty
              </p>
              <p className="mt-3 text-lg capitalize text-white">
                {challenge.difficulty}
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Instructions
              </p>

              {content ? (
                <ul className="mt-4 list-disc pl-5 text-sm leading-7 text-zinc-400">
                  {content.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-zinc-400">
                  No instructions yet for this challenge.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Starter HTML
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-black p-4 text-xs text-zinc-300">
                {content ? content.starterHtml : "No starter HTML yet."}
              </pre>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Starter CSS
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-black p-4 text-xs text-zinc-300">
                {content ? content.starterCss : "No starter CSS yet."}
              </pre>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}