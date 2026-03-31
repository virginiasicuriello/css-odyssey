import AppHeader from "@/components/app-header";
import PageShell from "@/components/page-shell";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <AppHeader />
      <PageShell>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="mt-4 text-zinc-300">
          Welcome to CSS Odyssey.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/path/flexbox"
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-xl font-semibold">Flexbox</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Train alignment, spacing, and layout flow.
            </p>
          </Link>

          <Link
            href="/challenge/center-the-orb"
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-xl font-semibold">Sample Challenge</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Open a sample challenge page.
            </p>
          </Link>
        </div>
      </PageShell>
    </>
  );
}