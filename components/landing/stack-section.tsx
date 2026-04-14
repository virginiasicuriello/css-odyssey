"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Supabase",
  "Hugging Face",
  "Vercel",
];

export default function StackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".stack-heading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stack-heading",
          start: "top 85%",
        },
      });

      gsap.from(".stack-tag", {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stack-tag",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="border-t border-zinc-900">
      <div ref={containerRef} className="mx-auto max-w-6xl px-6 py-16">
        <div className="stack-heading mb-8">
          <h2 className="text-2xl font-semibold">Built With</h2>
          <p className="mt-2 text-zinc-400">
            A modern full-stack AI-assisted workflow.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="stack-tag rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}