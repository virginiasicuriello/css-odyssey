import AppHeader from "../../components/app-header";
import PageShell from "../../components/page-shell";
import Link from "next/link";
import { paths, challenges } from "../../lib/challenges";
import { getServerProgress } from "../../lib/supabase/server-progress";

export default async function DashboardPage() {
  const progress = await getServerProgress();

  const completedSlugs = progress.map((item) => item.challenge_slug);

  return (
    <>
      <AppHeader />
      <PageShell>
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Pick your next training path
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Focus on one layout system at a time and progress through visual
            challenges.
          </p>
        </div>

        {completedSlugs.length > 0 ? (
          <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Overall Progress
            </p>
            <p className="mt-3 text-3xl font-bold">
              {completedSlugs.length}{" "}
              <span className="text-lg font-normal text-zinc-400">
                / {challenges.length} challenges completed
              </span>
            </p>
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => {
            const pathChallenges = challenges.filter(
              (c) => c.pathSlug === path.slug
            );
            const pathCompleted = pathChallenges.filter((c) =>
              completedSlugs.includes(c.slug)
            );

            return (
              <Link
                key={path.slug}
                href={`/path/${path.slug}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Path
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{path.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {path.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-emerald-500 transition-all"
                      style={{
                        width: `${
                          pathChallenges.length > 0
                            ? (pathCompleted.length / pathChallenges.length) *
                              100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-zinc-500">
                    {pathCompleted.length}/{pathChallenges.length}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </PageShell>
    </>
  );
}