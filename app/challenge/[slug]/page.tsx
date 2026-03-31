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
        <h1 className="text-4xl font-bold">{challenge.title}</h1>

        <p className="mt-4 text-zinc-300">{challenge.description}</p>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Difficulty</p>
          <p className="mt-2 text-white capitalize">{challenge.difficulty}</p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Coming next</p>
          <ul className="mt-3 list-disc pl-5 text-zinc-300">
            <li>challenge instructions</li>
            <li>target layout</li>
            <li>editable CSS</li>
            <li>live preview</li>
          </ul>
        </div>
      </PageShell>
    </>
  );
}