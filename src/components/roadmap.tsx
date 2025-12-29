"use client";

import { Card } from "@/components/ui/card";
import { weeksMetadata } from "./dates-metadata";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full py-20 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the entire project timeline, broken down
            by week
          </p>
        </div>

        {/* Weeks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeksMetadata.map((week) => (
            <Card
              key={week.week}
              className="relative py-4 px-4 border border-border/50 hover:border-border transition-all hover:shadow-lg cursor-pointer hover:bg-muted/40 group"
              onClick={() => {
                const element = document.getElementById(`week-${week.week}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Content */}
              <div className="mt-2">
                <p className="flex flex-col gap-2 text-base font-semibold text-muted-foreground mb-2 tracking-wide">
                  <Badge
                    variant="default"
                    className="w-fit text-sm px-3 py-3 group-hover:bg-primary transition-colors"
                  >
                    Week {week.week}
                  </Badge>
                  <span className="text-xs">{week.dateRange}</span>
                </p>
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {week.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {week.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button
            onClick={() => {
              const element = document.getElementById("week-1");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="lg"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View the Timeline
          </Button>
        </div>
      </div>
    </section>
  );
}
