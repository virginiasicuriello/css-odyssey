import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import { challenges } from "../../../lib/challenges";

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
            <div className="mt-6 rounded-xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">
              CSS editor and live preview go here.
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
                Coming Next
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm leading-7 text-zinc-400">
                <li>challenge instructions</li>
                <li>target layout</li>
                <li>editable CSS</li>
                <li>live preview</li>
              </ul>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}