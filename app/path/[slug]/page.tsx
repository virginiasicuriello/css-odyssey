import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import AnimatedPath from "../../../components/animated-path";
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

  return (
    <>
      <AppHeader />
      <PageShell>
        <Link
          href="/dashboard"
          className="mb-6 inline-block text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        <AnimatedPath
          path={path}
          pathChallenges={pathChallenges}
          completedSlugs={completedSlugs}
        />
      </PageShell>
    </>
  );
}