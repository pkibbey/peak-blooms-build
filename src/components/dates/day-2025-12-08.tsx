import { DateCard } from "@/components/date-card";

export default function Day20251208() {
  return (
    <DateCard
      date="2025-12-08"
      title="Admin Collections & Metrics System"
      summary="Enabled product management in collections and introduced tracked database client for metrics."
      tasks={[
        "Collection product select",
        "API routes",
        "Remove hero banners",
        "Tracked DB client",
        "Database metrics",
      ]}
      skillsUsed={["Prisma", "Next.js", "Admin UI", "Metrics"]}
      lessonsLearned={[
        "Collection mgmt improves flexibility",
        "Tracked insights optimize perf",
        "Static simplifies",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `class TrackedPrisma { async query(name, fn) {...} }`,
      }}
    />
  );
}
