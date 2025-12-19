import { DateCard } from "@/components/date-card";

export default function Day20251212() {
  return (
    <DateCard
      date="2025-12-12"
      title="Route & Page Consolidation"
      summary="Removed /support/shipping and directed users to /support/delivery."
      tasks={[
        "Remove shipping page",
        "Update links",
        "Component refs",
        "Add redirects",
        "Update docs",
      ]}
      skillsUsed={["Next.js", "TypeScript", "Routing"]}
      lessonsLearned={[
        "Consolidation prevents fragmentation",
        "Refactoring prevents broken links",
        "Consistency improves UX",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `export async function redirect() {destination: '/support/delivery'}`,
      }}
    />
  );
}
