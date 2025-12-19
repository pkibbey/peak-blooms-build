import { DateCard } from "@/components/date-card";

export default function Day20251130() {
  return (
    <DateCard
      date="2025-11-30"
      title="Typography System & Design Utilities"
      summary="Created reusable typography utility classes establishing design standards."
      tasks={[
        "Design scale",
        "Create utilities",
        "Document system",
        "Apply to components",
        "Add guidelines",
      ]}
      skillsUsed={["Tailwind CSS", "CSS", "Typography"]}
      lessonsLearned={[
        "Systems improve consistency",
        "Utilities integrate well",
        "Scales should be mathematical",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `fontSize: {'h1': ['3rem', {lineHeight: '1.2'}]}`,
      }}
    />
  );
}
