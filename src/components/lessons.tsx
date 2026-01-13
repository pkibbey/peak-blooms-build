"use client";

import { Code, Database, Users } from "tabler-icons-react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface Lesson {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

const lessons: Lesson[] = [
  {
    title: "The Balancing Act",
    description:
      "Lean on tools and automation to move faster, but retain human judgement — know when to guide the technology and when to let it lead.",
    icon: <Code size={20} />,
    tag: "Productivity",
  },
  {
    title: "MCP & Documentation",
    description:
      "For long-running or context-heavy interactions, set up MCP servers and keep clear documentation to mitigate context-window issues and make results reproducible.",
    icon: <Users size={20} />,
    tag: "Reliability",
  },
  {
    title: "AI-assisted Mock Data",
    description:
      "Generative AI is excellent for creating realistic mock data and test cases quickly, but treat AI outputs as drafts — validate them and avoid relying on unverified AI-generated data in production.",
    icon: <Database size={20} />,
    tag: "AI",
  },
];

export function Lessons() {
  return (
    <section id="lessons" className="w-full py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Lessons Learned
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Key insights gained through real challenges and wins that shaped the
            development process.
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, idx) => (
            <Card
              key={idx}
              className="p-5 border border-border/40 bg-card/50 backdrop-blur-sm hover:border-secondary/20 transition-all hover:shadow-md group"
            >
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg tracking-tight text-primary">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
