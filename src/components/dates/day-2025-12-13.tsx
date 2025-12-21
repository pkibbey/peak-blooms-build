import { DateCard } from "@/components/date-card";
import { Flame, Stack } from "tabler-icons-react";

export default function Day20251213() {
  return (
    <DateCard
      date="2025-12-13"
      title="UI Framework & Concept Consolidation"
      summary="Simplified theme system, combined Cart and Order concepts, and migrated UI from Radix to BaseUI."
      tasks={[
        {
          name: "Combine the Cart and Order concepts",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Simpler systems are easier to maintain. Consolidating redundant concepts reduces mental overhead and makes features easier to understand.",
          },
        },
        { name: "Revert theme system to use a single theme" },
        {
          name: "Replace RadixUI with BaseUI",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "UI framework migration improves design consistency. BaseUI provides better alignment with our design system and improved component APIs.",
          },
        },
        { name: "Refactor all UI primitives to use BaseUI" },
      ]}
      skillsUsed={["React", "Tailwind", "BaseUI", "TypeScript"]}
    />
  );
}
