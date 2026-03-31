import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import Link from "next/link";
import { challenges, paths } from "../../../lib/challenges";

type PathPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PathPage({ params }: PathPageProps) {
  const { slug } = await params;

  const path = paths.find((item) => item.slug === slug);
  const pathChallenges = challenges.filter((item) => item.pathSlug === slug);

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

  return (
    <>
      <AppHeader />
      <PageShell>
        <h1 className="text-4xl font-bold">{path.title}</h1>

        <p className="mt-4 text-zinc-300">{path.description}</p>

        <div className="mt-8 grid gap-4">
          {pathChallenges.map((challenge) => (
            <Link
              key={challenge.slug}
              href={`/challenge/${challenge.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{challenge.title}</h2>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase text-zinc-400">
                  {challenge.difficulty}
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-400">
                {challenge.description}
              </p>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}