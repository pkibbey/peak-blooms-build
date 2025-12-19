import { DateCard } from "@/components/date-card";

export default function Day20251210() {
  return (
    <DateCard
      date="2025-12-10"
      title="Performance Optimization & Quality"
      summary="Optimized performance by removing debug logs and disabling prefetch on links."
      tasks={[
        "Remove logs",
        "Disable prefetch",
        "Remove static params",
        "Fix signout",
        "Rich toasts",
      ]}
      skillsUsed={["Next.js", "Optimization", "TypeScript"]}
      lessonsLearned={[
        "Logs impact quality",
        "Prefetch prevents requests",
        "Rich toasts improve feedback",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `<Link href='' prefetch={false}>Link</Link>`,
      }}
    />
  );
}
