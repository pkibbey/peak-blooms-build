import { Badge } from "@/components/ui/badge";
import {
  Day20251122,
  Day20251123,
  Day20251124,
  Day20251125,
  Day20251126,
  Day20251127,
  Day20251128,
  Day20251129,
  Day20251130,
  Day20251201,
  Day20251202,
  Day20251203,
  Day20251204,
  Day20251205,
  Day20251208,
  Day20251209,
  Day20251210,
  Day20251211,
  Day20251212,
  Day20251213,
  Day20251214,
  Day20251215,
  Day20251216,
  Day20251217,
  Day20251218,
} from "./dates";

const weeks = [
  {
    id: "week-1",
    title: "Foundation & Design System",
    description: "Setting up project infrastructure and core components",
    dates: [
      Day20251122,
      Day20251123,
      Day20251124,
      Day20251125,
      Day20251126,
      Day20251127,
      Day20251128,
    ],
  },
  {
    id: "week-2",
    title: "Core Features & Data Layer",
    description: "Building validation and data architecture",
    dates: [
      Day20251129,
      Day20251130,
      Day20251201,
      Day20251202,
      Day20251203,
      Day20251204,
      Day20251205,
    ],
  },
  {
    id: "week-3",
    title: "Advanced Features & Optimization",
    description: "Metrics system and performance improvements",
    dates: [Day20251208, Day20251209, Day20251210, Day20251211, Day20251212],
  },
  {
    id: "week-4",
    title: "Performance, Testing & Polish",
    description: "Final refinements and deployment preparation",
    dates: [
      Day20251213,
      Day20251214,
      Day20251215,
      Day20251216,
      Day20251217,
      Day20251218,
    ],
  },
];

export function DailyCards() {
  return (
    <section id="dates" className="w-full py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive breakdown of work completed each day
          </p>
        </div>

        {/* Weeks sections */}
        {weeks.map((week, index) => (
          <div key={week.id} id={week.id} className="space-y-12 scroll-mt-20">
            <div className="grid items-center space-y-2">
              <Badge variant="default" className="justify-self-center text-xs">
                Week {index + 1}
              </Badge>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border/50" />
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center px-4">
                  {week.title}
                </h3>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <p className="text-center text-muted-foreground">
                {week.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {week.dates.map((DateComponent, index) => (
                <DateComponent key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
