import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";

type ChallengePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ChallengePage({
  params,
}: ChallengePageProps) {
  const { slug } = await params;

  return (
    <>
      <AppHeader />
      <PageShell>
        <h1 className="text-4xl font-bold capitalize">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="mt-4 text-zinc-300">
          This is the challenge page.
        </p>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-400">Coming next:</p>
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