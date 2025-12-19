import { DateCard } from "@/components/date-card";

export default function Day20251204() {
  return (
    <DateCard
      date="2025-12-04"
      title="Shipping & Branding UI Updates"
      summary="Added shipping banner throughout site and updated product cards with featured collections."
      tasks={[
        "Shipping banner",
        "Add to pages",
        "Update cards",
        "Page padding",
        "Featured collections",
      ]}
      skillsUsed={["React", "Tailwind CSS", "Design"]}
      lessonsLearned={[
        "Shipping builds confidence",
        "Featured highlight offerings",
        "Spacing improves design",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `<div className='bg-blue-50'>Free shipping</div>`,
      }}
    />
  );
}
