"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import type { PathItem, ChallengeItem } from "../lib/challenges";

type AnimatedDashboardProps = {
  paths: PathItem[];
  challenges: ChallengeItem[];
  completedSlugs: string[];
};

export default function AnimatedDashboard({
  paths,
  challenges,
  completedSlugs,
}: AnimatedDashboardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".dash-heading", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.from(".dash-overall", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".dash-grid", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".dash-bar-fill", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="dash-heading mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Pick your next training path
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Focus on one layout system at a time and progress through visual
          challenges.
        </p>
      </div>

      {completedSlugs.length > 0 ? (
        <div className="dash-overall mb-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Overall Progress
          </p>
          <p className="mt-3 text-3xl font-bold">
            {completedSlugs.length}{" "}
            <span className="text-lg font-normal text-zinc-400">
              / {challenges.length} challenges completed
            </span>
          </p>
        </div>
      ) : null}

    <div className="dash-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const pathChallenges = challenges.filter(
            (c) => c.pathSlug === path.slug
          );
          const pathCompleted = pathChallenges.filter((c) =>
            completedSlugs.includes(c.slug)
          );

          return (
            <Link
              key={path.slug}
              href={`/path/${path.slug}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-600 hover:bg-zinc-900"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Path
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{path.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {path.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="dash-bar-fill h-2 rounded-full bg-emerald-500"
                    style={{
                      width: `${
                        pathChallenges.length > 0
                          ? (pathCompleted.length / pathChallenges.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                <span className="text-xs text-zinc-500">
                  {pathCompleted.length}/{pathChallenges.length}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}