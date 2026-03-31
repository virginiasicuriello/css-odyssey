import AppHeader from "../../../components/app-header";
import PageShell from "../../../components/page-shell";
import Link from "next/link";

type PathPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PathPage({ params }: PathPageProps) {
  const { slug } = await params;

  return (
    <>
      <AppHeader />
      <PageShell>
        <h1 className="text-4xl font-bold capitalize">{slug} Path</h1>

        <p className="mt-4 text-zinc-300">
          This page will show challenges for the {slug} track.
        </p>

        <div className="mt-8">
          <Link
            href="/challenge/center-the-orb"
            className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-black"
          >
            Open Sample Challenge
          </Link>
        </div>
      </PageShell>
    </>
  );
}