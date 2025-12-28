"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background px-4 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-8">
          <h1 className="grid text-5xl md:text-6xl lg:text-5xl font-bold tracking-tight">
            <span className="leading-20 text-8xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              How I built
            </span>
            <span className="text-gray-800 text-5xl font-bold">
              Peak Blooms
            </span>
          </h1>

          <p className="text-xl md:text-2xl leading-8 text-muted-foreground font-light max-w-3xl mx-auto">
            A detailed journey documenting how I designed, developed, and
            deployed a modern web platform, by{" "}
            <HoverCard>
              <HoverCardTrigger
                target="_blank"
                href="https://github.com/pkibbey"
                className="text-primary cursor-help underline decoration-dotted hover:text-primary/80"
              >
                Phineas Kibbey
              </HoverCardTrigger>
              <HoverCardPositioner side="top">
                <HoverCardContent className="mb-4 p-0 border-0 bg-transparent shadow-none">
                  <a
                    href="https://github.com/pkibbey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Image
                      width={2248}
                      height={1298}
                      src="/github.png"
                      alt="GitHub profile preview"
                      className="w-80 rounded-lg shadow-lg"
                    />
                  </a>
                </HoverCardContent>
              </HoverCardPositioner>
            </HoverCard>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="pt-8">
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
      </div>
    </section>
  );
}
