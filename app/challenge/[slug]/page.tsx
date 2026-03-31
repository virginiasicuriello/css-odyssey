import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import ChallengeWorkspaceShell from "../../../components/challenge-workspace-shell";
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

        {content ? (
          <ChallengeWorkspaceShell
            goal={content.goal}
            instructions={content.instructions}
            starterHtml={content.starterHtml}
            starterCss={content.starterCss}
          />
        ) : (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-400">
              This challenge does not have content yet.
            </p>
          </div>
        )}
      </PageShell>
    </>
  );
}