import Link from "next/link";
import { paths } from "../lib/challenges";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold">CSS Odyssey</h1>

          <p className="mt-4 text-lg text-zinc-300">
            Master CSS layout like a game.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/dashboard"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </main>
  );
}