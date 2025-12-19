import { DateCard } from "@/components/date-card";

export default function Day20251122() {
  return (
    <DateCard
      date="2025-11-22"
      title="Project Setup & UI Component Foundation"
      summary="Initialized the Next.js project with TypeScript and established the design system foundation."
      tasks={[
        "Initialize Next.js project with TypeScript",
        "Set up Tailwind CSS",
        "Create Button component with CVA",
        "Implement class merging utility",
        "Integrate Radix UI Slot pattern",
      ]}
      skillsUsed={["Next.js", "TypeScript", "Tailwind CSS", "CVA", "Radix UI"]}
      lessonsLearned={[
        "Strong foundation reduces rework",
        "CVA provides type safety",
        "Slot pattern enables composition",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `const buttonVariants = cva(
  'inline-flex rounded-md font-medium',
  {variants: {variant: {default: 'bg-primary', outline: 'border border-input'}}}
);`,
      }}
    />
  );
}
