import { DateCard } from "@/components/date-card";

export default function Day20251124() {
  return (
    <DateCard
      date="2025-11-24"
      title="Data Model Refinement & Cart API"
      summary="Refined data model by removing stock fields and implemented batch cart API for bulk additions."
      tasks={[
        "Remove stock fields",
        "Design batch API",
        "Update button text",
        "Optimize cart ops",
        "Update UI",
      ]}
      skillsUsed={["Prisma", "TypeScript", "REST API", "Next.js"]}
      lessonsLearned={[
        "Simplifying removes complexity",
        "Batch ops more efficient",
        "API anticipates workflows",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `const result = await prisma.cartItem.createMany({data: items.map(item => ({...item}))});`,
      }}
    />
  );
}
