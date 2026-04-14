"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="border-t border-zinc-900">
      <div ref={containerRef} className="mx-auto max-w-6xl px-6 py-20">
        <div className="cta-content text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to level up your CSS?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Start with Flexbox, move to Grid, conquer Responsive Design. Track
            your progress and get AI-powered hints along the way.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-lg bg-white px-6 py-3 font-medium text-black"
            >
              Get Started Free
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-medium text-white"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}