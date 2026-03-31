import Link from "next/link";
import { paths } from "../lib/challenges";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              AI-assisted full-stack project
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              CSS Odyssey
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">
              Master CSS layout through game-like challenges focused on
              Flexbox, Grid, and Responsive Design.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-lg bg-white px-6 py-3 font-medium text-black"
              >
                Enter Dashboard
              </Link>

              <Link
                href="/path/flexbox"
                className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white"
              >
                Start Flexbox Path
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Core Paths</h2>
            <p className="mt-2 text-zinc-400">
              Train the layout skills that matter most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.slug}
                href={`/path/${path.slug}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
              >
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {path.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}