import { DateCard } from "@/components/date-card";

export default function Day20251201() {
  return (
    <DateCard
      date="2025-12-01"
      title="Authentication Migration & Content Pages"
      summary="Migrated from next-auth to better-auth and added company, support, and legal pages."
      tasks={[
        "Evaluate solutions",
        "Migrate auth",
        "Update config",
        "Company page",
        "Legal pages",
      ]}
      skillsUsed={["better-auth", "Next.js", "TypeScript", "OAuth"]}
      lessonsLearned={[
        "Evaluate enables better fit",
        "Phased reduces risk",
        "Legal essential",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `const auth = betterAuth({database: {db: prisma}});`,
      }}
    />
  );
}
