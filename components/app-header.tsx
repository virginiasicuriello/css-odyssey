import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          CSS Odyssey
        </Link>

        <nav className="flex gap-4 text-sm text-zinc-300">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/path/flexbox">Flexbox Path</Link>
          <Link href="/challenge/center-the-orb">Sample Challenge</Link>
        </nav>
      </div>
    </header>
  );
}