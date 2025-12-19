import { DateCard } from "@/components/date-card";

export default function Day20251202() {
  return (
    <DateCard
      date="2025-12-02"
      title="Pagination & CSV Seeding"
      summary="Added pagination for performance and created CSV seeding script with upsert logic."
      tasks={[
        "Pagination component",
        "API pagination",
        "CSV parser",
        "Upsert logic",
        "Seed script",
      ]}
      skillsUsed={["CSV", "Prisma", "Next.js", "Node.js"]}
      lessonsLearned={[
        "Pagination improves performance",
        "Upsert simplifies management",
        "CSV enables bulk ops",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `fs.createReadStream(file).pipe(csv()).on('data', row => {/*upsert*/});`,
      }}
    />
  );
}
