"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function AppHeader() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
  };

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

          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium transition hover:border-zinc-500 hover:text-white"
            >
              Log Out
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-white px-3 py-2 text-xs font-medium text-black"
            >
              Log In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}