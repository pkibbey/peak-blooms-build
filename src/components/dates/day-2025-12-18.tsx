import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251218() {
  return (
    <DateCard
      date="2025-12-18"
      title="Test Coverage & Order Refinement"
      summary="Achieved 80% code coverage with unit tests, simplified order number logic, and improved documentation."
      tasks={[
        {
          name: "Add unit tests to achieve 80% code coverage",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Comprehensive tests ensure reliability. High test coverage reduces the surface area for bugs and increases confidence in refactoring.",
          },
        },
        {
          name: "Simplify order number logic",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Optional fields provide flexibility. Simplifying order numbering makes the system more maintainable and easier to reason about.",
          },
        },
        { name: "Clean up documentation" },
      ]}
      skillsUsed={["Testing", "TypeScript", "Prisma", "Documentation"]}
    />
  );
}
