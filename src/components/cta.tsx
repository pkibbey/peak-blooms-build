"use client";

import Image from "next/image";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <div className="relative mb-4 overflow-visible z-10 flex flex-col items-center rounded-sm">
      {/* CTA */}
      <div className="absolute z-10 -bottom-7">
        <Button
          onClick={() => {
            const element = document.getElementById("roadmap");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          variant="default"
          size="lg"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          View the Journey
        </Button>
      </div>
      <div>
        <Image
          width={2248}
          height={1298}
          src="/peak-blooms.png"
          alt="Peak Blooms live site preview"
          className="w-60"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
    </div>
  );
}
