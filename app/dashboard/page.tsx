import AppHeader from "../../components/app-header";
import PageShell from "../../components/page-shell";
import Link from "next/link";
import { paths } from "../../lib/challenges";

export default function DashboardPage() {
  return (
    <>
      <AppHeader />
      <PageShell>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="mt-4 text-zinc-300">
          Choose a learning path and start training.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.slug}
              href={`/path/${path.slug}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
            >
              <h2 className="text-xl font-semibold">{path.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">
                {path.description}
              </p>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}