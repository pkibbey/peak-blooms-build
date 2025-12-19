import { DateCard } from "@/components/date-card";

export default function Day20251125() {
  return (
    <DateCard
      date="2025-11-25"
      title="Major Refactoring: Variants & Server-Side Logic"
      summary="Comprehensive refactoring of product pricing model and migration of auth and cart logic to server-side."
      tasks={[
        "Migrate pricing to variants",
        "Create join table",
        "Move auth checks",
        "Server-side data fetching",
        "Static button text",
      ]}
      skillsUsed={["Prisma", "Next.js", "Server Components", "Radix UI"]}
      lessonsLearned={[
        "Variants provide flexibility",
        "Server auth reduces surface",
        "Static text prevents confusion",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model Product {id String @id name String variants ProductVariant[]}`,
      }}
    />
  );
}
