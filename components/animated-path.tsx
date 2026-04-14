"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import type { PathItem, ChallengeItem } from "../lib/challenges";

type AnimatedPathProps = {
  path: PathItem;
  pathChallenges: ChallengeItem[];
  completedSlugs: string[];
};

export default function AnimatedPath({
  path,
  pathChallenges,
  completedSlugs,
}: AnimatedPathProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const pathCompleted = pathChallenges.filter((c) =>
    completedSlugs.includes(c.slug)
  );

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".challenge-card") as HTMLElement[];

      gsap.set(cards, { opacity: 1 });

      gsap.from(".path-heading", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.from(".path-bar-fill", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.4,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="path-heading mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Path
        </p>
        <h1 className="mt-3 text-4xl font-bold">{path.title}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{path.description}</p>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-2 w-48 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="path-bar-fill h-2 rounded-full bg-emerald-500"
              style={{
                width: `${
                  pathChallenges.length > 0
                    ? (pathCompleted.length / pathChallenges.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>
          <span className="text-sm text-zinc-500">
            {pathCompleted.length}/{pathChallenges.length} completed
          </span>
        </div>
      </div>

      <div className="grid gap-4">
        {pathChallenges.map((challenge) => {
          const isDone = completedSlugs.includes(challenge.slug);

          return (
            <Link
              key={challenge.slug}
              href={`/challenge/${challenge.slug}`}
              className="challenge-card rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {isDone ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-xs text-emerald-300">
                      ✓
                    </span>
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-500">
                      ○
                    </span>
                  )}

                  <h2 className="text-xl font-semibold">{challenge.title}</h2>
                </div>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
                  {challenge.difficulty}
                </span>
              </div>

              <p className="mt-3 pl-9 text-sm leading-6 text-zinc-400">
                {challenge.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}