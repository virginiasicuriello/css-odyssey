import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import Link from "next/link";
import { challenges, paths } from "../../../lib/challenges";
import { getServerProgress } from "../../../lib/supabase/server-progress";

type PathPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PathPage({ params }: PathPageProps) {
  const { slug } = await params;

  const path = paths.find((item) => item.slug === slug);
  const pathChallenges = challenges.filter((item) => item.pathSlug === slug);

  const progress = await getServerProgress();
  const completedSlugs = progress.map((item) => item.challenge_slug);

  if (!path) {
    return (
      <>
        <AppHeader />
        <PageShell>
          <h1 className="text-4xl font-bold">Path not found</h1>
        </PageShell>
      </>
    );
  }

  const pathCompleted = pathChallenges.filter((c) =>
    completedSlugs.includes(c.slug)
  );

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Path
          </p>
          <h1 className="mt-3 text-4xl font-bold">{path.title}</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">{path.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-2 w-48 rounded-full bg-zinc-800">
              <div
                className="h-2 rounded-full bg-emerald-500 transition-all"
                style={{
                  width: `${
                    pathChallenges.length > 0
                      ? (pathCompleted.length / pathChallenges.length) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
            <span className="text-sm text-zinc-500">
              {pathCompleted.length}/{pathChallenges.length} completed
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          {pathChallenges.map((challenge) => {
            const isDone = completedSlugs.includes(challenge.slug);

            return (
              <Link
                key={challenge.slug}
                href={`/challenge/${challenge.slug}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {isDone ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-xs text-emerald-300">
                        ✓
                      </span>
                    ) : (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-500">
                        ○
                      </span>
                    )}

                    <h2 className="text-xl font-semibold">{challenge.title}</h2>
                  </div>

                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
                    {challenge.difficulty}
                  </span>
                </div>

                <p className="mt-3 pl-9 text-sm leading-6 text-zinc-400">
                  {challenge.description}
                </p>
              </Link>
            );
          })}
        </div>
      </PageShell>
    </>
  );
}