import { DateCard } from "@/components/date-card";

export default function Day20251126() {
  return (
    <DateCard
      date="2025-11-26"
      title="Navigation & Table Layouts"
      summary="Added BackLink component and created reusable Table layouts for Inspirations and Collections."
      tasks={[
        "Create BackLink",
        "Design table component",
        "Update Inspirations page",
        "Update Collections page",
        "Consistent naming",
      ]}
      skillsUsed={["React", "TypeScript", "Tailwind CSS", "Components"]}
      lessonsLearned={[
        "Naming reduces confusion",
        "Tables reduce duplication",
        "BackLink improves UX",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `<Link href={href}><ChevronLeft />Back</Link>`,
      }}
    />
  );
}
