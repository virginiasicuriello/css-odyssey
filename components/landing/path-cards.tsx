"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import type { PathItem } from "../../lib/challenges";

gsap.registerPlugin(ScrollTrigger);

type PathCardsProps = {
  paths: PathItem[];
};

export default function PathCards({ paths }: PathCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".paths-heading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".paths-grid", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.0,
      });
    },
    { scope: containerRef }
  );
  
  return (
    <section>
      <div ref={containerRef} className="mx-auto max-w-6xl px-6 py-16">
        <div className="paths-heading mb-8">
          <h2 className="text-2xl font-semibold">Core Paths</h2>
          <p className="mt-2 text-zinc-400">
            Train the layout skills that matter most.
          </p>
        </div>

        <div className="paths-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.slug}
              href={`/path/${path.slug}`}
              className="path-card rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
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
  );
}