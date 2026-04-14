"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Pick a Path",
    description:
      "Choose Flexbox, Grid, or Responsive Design and start with easy challenges.",
  },
  {
    number: "02",
    title: "Solve Challenges",
    description:
      "Edit CSS in the live editor and watch your layout update in real time.",
  },
  {
    number: "03",
    title: "Track Progress",
    description:
      "Mark challenges as complete and watch your skill bars grow across each path.",
  },
  {
    number: "04",
    title: "Get AI Hints",
    description:
      "Stuck on a layout? Request a targeted hint without getting the full answer.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hiw-heading", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-heading",
          start: "top 85%",
        },
      });

      gsap.from(".hiw-step", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-step",
          start: "top 85%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="border-t border-zinc-900">
      <div ref={containerRef} className="mx-auto max-w-6xl px-6 py-16">
        <div className="hiw-heading mb-10">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="mt-2 text-zinc-400">
            Four steps from rusty to sharp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="hiw-step rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <span className="text-3xl font-bold text-zinc-700">
                {step.number}
              </span>

              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}