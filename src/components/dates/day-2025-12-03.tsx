import { DateCard } from "@/components/date-card";

export default function Day20251203() {
  return (
    <DateCard
      date="2025-12-03"
      title="Admin Features & Table Enhancements"
      summary="Expanded admin with fallback images, email management, and sortable table system."
      tasks={[
        "Fallback images",
        "Email changes",
        "Product counts",
        "User table view",
        "Sortable columns",
      ]}
      skillsUsed={["React", "Prisma", "Admin UI", "Tables"]}
      lessonsLearned={[
        "Fallbacks improve UX",
        "Tables manage data",
        "Newsletters drive engagement",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `<img onError={()=>setError(true)} />`,
      }}
    />
  );
}
