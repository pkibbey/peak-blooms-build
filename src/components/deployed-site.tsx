"use client";

import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

export function DeployedSite() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30">
      <div className="bg-background p-8 md:p-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            View the Live Site
          </h2>
          <p className="text-lg text-muted-foreground">
            Check out the deployed Peak Blooms application live on Vercel
          </p>
        </div>

        <div className="relative mb-4 overflow-visible z-10 flex flex-col items-center rounded-sm">
          {/* CTA */}
          <div className="absolute z-10 -bottom-7">
            <div className="pt-4">
              <HoverCard>
                <HoverCardTrigger
                  target="_blank"
                  href="https://peak-blooms.vercel.app/"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Visit Live Site
                </HoverCardTrigger>
                <HoverCardPositioner side="top">
                  <HoverCardContent className="mb-4 p-0 border-0 bg-transparent shadow-none">
                    <a
                      href="https://peak-blooms.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <Image
                        width={2248}
                        height={1298}
                        src="/peak-blooms.png"
                        alt="Peak Blooms live site preview"
                        className="w-80 rounded-lg shadow-lg"
                      />
                    </a>
                  </HoverCardContent>
                </HoverCardPositioner>
              </HoverCard>
            </div>
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
      </div>
    </section>
  );
}
