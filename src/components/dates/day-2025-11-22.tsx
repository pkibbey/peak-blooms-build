import { Bulb, Stack } from "tabler-icons-react";
import { DateCard } from "@/components/date-card";

export default function Day20251122() {
  return (
    <DateCard
      date="2025-11-22"
      title="Project Setup & Design System"
      summary="Initialized Next.js with TypeScript, established design system foundation, and created reusable UI components."
      tasks={[
        {
          name: "Initialize Next.js project with TypeScript",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Setting up a strong foundation with TypeScript from the start prevents type-related bugs and improves code maintainability as the project grows.",
          },
        },
        {
          name: "Set up Tailwind CSS",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Foundation reduces rework. A well-configured build system and styling framework eliminates technical debt before it accumulates.",
          },
        },
        {
          name: "Add ShadCN to streamline workflow",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Component composition enables flexibility. Using pre-built, composable UI components from ShadCN accelerates development without sacrificing customization.",
          },
        },
        {
          name: "Create functional requirements and style guide",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Design systems maintain consistency. Clear documentation and design patterns ensure all team members build features cohesively.",
          },
        },
        { name: "Add Navigation component" },
        {
          name: "Add centralized icon system",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Centralized systems reduce duplication. Managing icons in one place makes updates easier and ensures visual consistency throughout the application.",
          },
        },
      ]}
      skillsUsed={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Radix UI",
      ]}
    />
  );
}
