import { DateCard } from "@/components/date-card";

export default function Day20251218() {
  return (
    <DateCard
      date="2025-12-18"
      title="Order Model Refinement & Test Coverage"
      summary="Made delivery address optional and implemented autoincrementing order numbers."
      tasks={[
        "Optional address",
        "Autoincrement number",
        "DB migration",
        "Add tests",
        "Update docs",
      ]}
      skillsUsed={["Prisma", "TypeScript", "Testing", "Database"]}
      lessonsLearned={[
        "Optional enables flexibility",
        "Autoincrement user-friendly",
        "Tests ensure reliability",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model Order { orderNumber Int @default(autoincrement()) deliveryAddressId String? }`,
      }}
    />
  );
}
