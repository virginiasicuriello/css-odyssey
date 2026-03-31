import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">CSS Odyssey</h1>

        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          Master CSS layout like a game.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded-lg bg-white px-6 py-3 text-black font-medium"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/path/flexbox"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-white font-medium"
          >
            View Flexbox Path
          </Link>
        </div>
      </div>
    </main>
  );
}