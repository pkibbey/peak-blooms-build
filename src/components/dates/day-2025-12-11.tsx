import { DateCard } from "@/components/date-card";

export default function Day20251211() {
  return (
    <DateCard
      date="2025-12-11"
      title="Theme System & Schema Consolidation"
      summary="Implemented light/dark mode with CSS variables and consolidated product variants."
      tasks={[
        "Theme provider",
        "CSS variables",
        "Replace colors",
        "Consolidate variants",
        "Phone validation",
      ]}
      skillsUsed={["CSS", "Context", "Prisma", "TypeScript"]}
      lessonsLearned={[
        "Variables enable theming",
        "Consolidating reduces complexity",
        "Phone needs intl handling",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `:root { --bg: 0 0% 100%; }`,
      }}
    />
  );
}
