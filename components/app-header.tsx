import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="border-b border-zinc-800 bg-black/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CSS Odyssey
        </Link>

        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          <Link href="/dashboard" className="transition hover:text-white">
            Dashboard
          </Link>

          <Link href="/path/flexbox" className="transition hover:text-white">
            Flexbox
          </Link>

          <Link href="/path/grid" className="transition hover:text-white">
            Grid
          </Link>

          <Link href="/path/responsive" className="transition hover:text-white">
            Responsive
          </Link>
        </nav>
      </div>
    </header>
  );
}