import { DateCard } from "@/components/date-card";

export default function Day20251123() {
  return (
    <DateCard
      date="2025-11-23"
      title="Database Schema & Dynamic Content Migration"
      summary="Introduced InspirationSet model and migrated all frontend components to fetch dynamic content from Prisma."
      tasks={[
        "Design InspirationSet model",
        "Set up seed data",
        "Refactor frontend fetching",
        "Update product loading",
        "Integrate throughout app",
      ]}
      skillsUsed={["Prisma", "PostgreSQL", "Next.js", "TypeScript", "React"]}
      lessonsLearned={[
        "Database-first enables scalability",
        "Refactoring needs dependency tracking",
        "Seeds critical for development",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model InspirationSet { id String @id @default(cuid()) name String products Product[] }`,
      }}
    />
  );
}
