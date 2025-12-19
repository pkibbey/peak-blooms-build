import { DateCard } from "@/components/date-card";

export default function Day20251205() {
  return (
    <DateCard
      date="2025-12-05"
      title="Address Validation & Cart Features"
      summary="Made company required and added quantity selectors to product cards."
      tasks={[
        "Address validation",
        "Quantity selector",
        "Cart reset",
        "Reorder quantity",
        "Local DB",
      ]}
      skillsUsed={["Validation", "TypeScript", "React", "Prisma"]}
      lessonsLearned={[
        "Company improves accuracy",
        "Selectors reduce steps",
        "Local DB improves workflow",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `const schema = z.object({company: z.string().min(1)});`,
      }}
    />
  );
}
