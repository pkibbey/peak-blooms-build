import { DateCard } from "@/components/date-card";

export default function Day20251213() {
  return (
    <DateCard
      date="2025-12-13"
      title="Theme Refactoring & Component Updates"
      summary="Simplified theme system and consolidated Cart and Order concepts."
      tasks={[
        "Simplify theme",
        "Search spacing",
        "Consolidate models",
        "Rename routes",
        "Update deps",
      ]}
      skillsUsed={["React", "Tailwind", "Radix UI", "Prisma"]}
      lessonsLearned={[
        "Simpler easier maintain",
        "Consolidate reduces complexity",
        "Updates keep current",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model Order { id String status String items OrderItem[] }`,
      }}
    />
  );
}
