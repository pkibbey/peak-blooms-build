import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251217() {
  return (
    <DateCard
      date="2025-12-17"
      title="Testing & Type System Unification"
      summary="Added vitest framework, completed server action migrations, refactored types to use generated Prisma types."
      tasks={[
        { name: "Refactor market price product support" },
        { name: "Add order timeline component to communicate delivery status" },
        { name: "Complete the refactor for the remaining APIs to server actions" },
        {
          name: "Refactor type system to use generated prisma types",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Generated types stay synchronized with schema. Auto-generating types from Prisma ensures schemas and types never drift apart.",
          },
        },
        {
          name: "Add vitest framework to support unit testing",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Testing frameworks automate quality assurance. Integrated testing frameworks enable developers to catch regressions automatically.",
          },
        },
      ]}
      skillsUsed={["Testing", "TypeScript", "Prisma", "Server Actions"]}
    />
  );
}
