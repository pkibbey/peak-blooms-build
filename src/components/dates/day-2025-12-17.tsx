import { DateCard } from "@/components/date-card";

export default function Day20251217() {
  return (
    <DateCard
      date="2025-12-17"
      title="Testing Framework & Type Refactor"
      summary="Added unit test framework and migrated admin/user APIs to server actions."
      tasks={[
        "Test setup",
        "Test files",
        "Generated types",
        "Admin migrations",
        "User migrations",
      ]}
      skillsUsed={["Testing", "TypeScript", "Prisma", "Actions"]}
      lessonsLearned={[
        "Tests catch regressions",
        "Generated prevent updates",
        "Batch improves perf",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `describe('Cart', () => {it('adds item', () => {...})});`,
      }}
    />
  );
}
