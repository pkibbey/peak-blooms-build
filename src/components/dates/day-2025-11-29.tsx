import { DateCard } from "@/components/date-card";

export default function Day20251129() {
  return (
    <DateCard
      date="2025-11-29"
      title="Form Validation & Data Access Layer"
      summary="Implemented comprehensive form validation and centralized Data Access Layer for read operations."
      tasks={[
        "Create validation schemas",
        "Field-level validation",
        "Create DAL",
        "Migrate reads",
        "Error handling",
      ]}
      skillsUsed={["Zod", "TypeScript", "React", "Patterns"]}
      lessonsLearned={[
        "Centralized validation prevents issues",
        "DAL improves maintainability",
        "Early validation improves UX",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `const schema = z.object({name: z.string(), price: z.number()});`,
      }}
    />
  );
}
