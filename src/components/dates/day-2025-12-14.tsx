import { DateCard } from "@/components/date-card";

export default function Day20251214() {
  return (
    <DateCard
      date="2025-12-14"
      title="Data Model Reorganization & NavSearch"
      summary="Moved phone field to Address model and implemented NavSearch autocomplete."
      tasks={[
        "Phone to address",
        "Schema update",
        "NavSearch component",
        "Product search",
        "Button refactor",
      ]}
      skillsUsed={["Prisma", "TypeScript", "React", "Autocomplete"]}
      lessonsLearned={[
        "Per-address phone accurate",
        "NavSearch improves discovery",
        "Hidden prices drive signup",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model Address { id String phone String userId String }`,
      }}
    />
  );
}
