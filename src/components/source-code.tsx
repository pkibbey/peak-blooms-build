"use client";

import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function SourceCode() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/30">
      <div className="bg-card p-8 md:p-12 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Explore the Code
          </h2>
          <p className="text-lg text-muted-foreground">
            View the complete source code and implementation details on GitHub
          </p>
        </div>

        <div className="pt-4">
          <HoverCard>
            <HoverCardTrigger
              target="_blank"
              href="https://github.com/pkibbey/peak-blooms"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              View on GitHub
            </HoverCardTrigger>
            <HoverCardPositioner side="top">
              <HoverCardContent className="mb-4 p-0 border-0 bg-transparent shadow-none">
                <a
                  href="https://github.com/pkibbey/peak-blooms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Image
                    width={2248}
                    height={1298}
                    src="/pkibbey_github.png"
                    alt="GitHub repository preview"
                    className="w-80 rounded-lg shadow-lg"
                  />
                </a>
              </HoverCardContent>
            </HoverCardPositioner>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
