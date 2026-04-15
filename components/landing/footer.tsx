export default function Footer() {
    return (
      <footer className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm font-semibold tracking-tight">CSS Odyssey</p>
  
            <p className="text-xs text-zinc-500">
              Built with Next.js, TypeScript, Tailwind, GSAP, Supabase &amp;
              Hugging Face.
            </p>
          </div>
        </div>
      </footer>
    );
  }