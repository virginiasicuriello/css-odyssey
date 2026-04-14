"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-label]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      });

      tl.from(
        "[data-hero-title]",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.3"
      );

      tl.from(
        "[data-hero-description]",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      );

      tl.from(
        "[data-hero-buttons]",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="border-b border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p
            data-hero-label
            className="text-sm uppercase tracking-[0.2em] text-zinc-500"
          >
            AI-assisted full-stack project
          </p>

          <h1
            data-hero-title
            className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl"
          >
            CSS Odyssey
          </h1>

          <p
            data-hero-description
            className="mt-6 max-w-2xl text-lg text-zinc-300"
          >
            Master CSS layout through game-like challenges focused on Flexbox,
            Grid, and Responsive Design.
          </p>

          <div
            data-hero-buttons
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}