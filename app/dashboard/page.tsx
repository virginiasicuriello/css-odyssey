import AppHeader from "../../components/app-header";
import PageShell from "../../components/page-shell";
import Link from "next/link";
import { paths } from "../../lib/challenges";

export default function DashboardPage() {
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
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
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}