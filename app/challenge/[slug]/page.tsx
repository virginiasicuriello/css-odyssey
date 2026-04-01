import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import ChallengePlayground from "../../../components/challenge-playground";
import { challenges } from "../../../lib/challenges";
import { getChallengeContent } from "../../../lib/challenge-content";

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
  const content = getChallengeContent(slug);

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
        <div className="mb-10 border-b border-zinc-900 pb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Challenge
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-bold">{challenge.title}</h1>

            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
              {challenge.difficulty}
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-zinc-400">
            {challenge.description}
          </p>
        </div>

        {content ? (
          <ChallengePlayground
            goal={content.goal}
            instructions={content.instructions}
            starterHtml={content.starterHtml}
            starterCss={content.starterCss}
          />
        ) : (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">
              Not added yet.
            </p>
          </div>
        )}
      </PageShell>
    </>
  );
}