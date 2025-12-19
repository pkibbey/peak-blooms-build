import { DateCard } from "@/components/date-card";

export default function Day20251209() {
  return (
    <DateCard
      date="2025-12-09"
      title="Payment Model & Market Pricing"
      summary="Removed billing address and added market price support for variants."
      tasks={[
        "Remove address",
        "Market price field",
        "Update types",
        "Add roses type",
        "Update cart",
      ]}
      skillsUsed={["Prisma", "TypeScript", "E-commerce"]}
      lessonsLearned={[
        "Removing simplifies",
        "Market pricing flexible",
        "Clear terms prevent confusion",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `model Variant { price Decimal isMarketPrice Boolean }`,
      }}
    />
  );
}
