"use client";

import { CheckCircle, Database, GitBranch, Zap } from "lucide-react";
import type { ComponentType } from "react";
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
import { daysMetadata } from "./dates-metadata";
import { Accordion } from "./ui/accordion";

interface ThemeConfig {
  id: string;
  key:
    | "foundation"
    | "core-features"
    | "data-architecture"
    | "performance-quality";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const themeConfigs: ThemeConfig[] = [
  {
    id: "theme-foundation",
    key: "foundation",
    title: "Foundation & Infrastructure",
    description:
      "Setting up the project infrastructure, design systems, database schema, and core authentication",
    icon: GitBranch,
    accentColor: "from-blue-50 to-blue-50/30",
  },
  {
    id: "theme-core-features",
    key: "core-features",
    title: "E-Commerce Core Features",
    description:
      "Building shopping cart, checkout, product catalog, pagination, admin management, and user-facing features",
    icon: CheckCircle,
    accentColor: "from-emerald-50 to-emerald-50/30",
  },
  {
    id: "theme-data-architecture",
    key: "data-architecture",
    title: "Data Architecture & Optimization",
    description:
      "Implementing metrics system, database indexes, admin enhancements, and performance optimizations",
    icon: Database,
    accentColor: "from-purple-50 to-purple-50/30",
  },
  {
    id: "theme-performance-quality",
    key: "performance-quality",
    title: "Performance & Quality Engineering",
    description:
      "Server actions migration, build optimization, type unification, and comprehensive testing (80% coverage)",
    icon: Zap,
    accentColor: "from-orange-50 to-orange-50/30",
  },
];

// Mapping of dates to day components
const dateComponentMap: Record<string, ComponentType> = {
  "2025-11-22": Day20251122,
  "2025-11-23": Day20251123,
  "2025-11-24": Day20251124,
  "2025-11-25": Day20251125,
  "2025-11-26": Day20251126,
  "2025-11-27": Day20251127,
  "2025-11-28": Day20251128,
  "2025-11-29": Day20251129,
  "2025-11-30": Day20251130,
  "2025-12-01": Day20251201,
  "2025-12-02": Day20251202,
  "2025-12-03": Day20251203,
  "2025-12-04": Day20251204,
  "2025-12-05": Day20251205,
  "2025-12-08": Day20251208,
  "2025-12-09": Day20251209,
  "2025-12-10": Day20251210,
  "2025-12-11": Day20251211,
  "2025-12-12": Day20251212,
  "2025-12-13": Day20251213,
  "2025-12-14": Day20251214,
  "2025-12-15": Day20251215,
  "2025-12-16": Day20251216,
  "2025-12-17": Day20251217,
  "2025-12-18": Day20251218,
};

export function StrategicThemes() {
  return (
    <section id="strategic-themes" className="w-full py-20 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Strategic Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A detailed breakdown of work organized by architectural themes
          </p>
        </div>

        {/* Themes sections */}
        {themeConfigs.map((themeConfig) => {
          // Get all days for this theme
          const themeDays = daysMetadata.filter(
            (day) => day.theme === themeConfig.key,
          );

          // Get day components in order
          const dayComponents = themeDays
            .map((day) => dateComponentMap[day.date])
            .filter(Boolean);

          return (
            <div
              key={themeConfig.id}
              id={themeConfig.id}
              className={`space-y-8 scroll-mt-20 bg-gradient-to-br ${themeConfig.accentColor} rounded-lg p-8 md:p-12 border border-border/50`}
            >
              {/* Theme Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <themeConfig.icon className="w-6 h-6 text-primary" />
                  <Badge variant="outline" className="text-xs">
                    {themeConfig.key
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {themeConfig.title}
                </h3>
                <p className="text-muted-foreground max-w-3xl">
                  {themeConfig.description}
                </p>
                <div className="text-sm text-muted-foreground font-medium pt-2">
                  {themeDays.length} day{themeDays.length !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Days Cards */}
              <div className="grid grid-cols-1 gap-4">
                <Accordion>
                  {dayComponents.map((DayComponent, index) => (
                    <DayComponent key={index} />
                  ))}
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
