import { DateCard } from "@/components/date-card";

export default function Day20251128() {
  return (
    <DateCard
      date="2025-11-28"
      title="Media Handling & Data Integrity"
      summary="Implemented image upload functionality and enforced data integrity with non-nullable variants."
      tasks={[
        "Image upload component",
        "Integrate with products",
        "Non-null variants",
        "Image validation",
        "DB migrations",
      ]}
      skillsUsed={["React", "File handling", "Prisma", "TypeScript"]}
      lessonsLearned={[
        "Required fields ensure consistency",
        "Upload needs validation",
        "Constraints prevent bugs",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `<input type='file' accept='image/*' />`,
      }}
    />
  );
}
