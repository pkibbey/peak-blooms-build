import { DateCard } from "@/components/date-card";
import { AlertCircle, Flame, InfoCircle } from "tabler-icons-react";

export default function Day20251201() {
  return (
    <DateCard
      date="2025-12-01"
      title="Auth Migration & Code Cleanup"
      summary="Migrated from next-auth to better-auth, simplified admin layout, and removed dead code with knip."
      tasks={[
        { name: "Update admin sidebar and simplify admin layout" },
        {
          name: "Add knip and remove all dead code",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Dead code removal improves maintainability. Unused code increases cognitive load and makes refactoring harder, so removing it keeps the codebase clean.",
          },
        },
        {
          name: "Replace next-auth with better-auth",
          lesson: {
            icon: <AlertCircle size={16} />,
            description:
              "Authentication library evaluation improves fit. Evaluating alternatives ensures the chosen library aligns with project requirements and architecture.",
          },
        },
      ]}
      skillsUsed={["better-auth", "Next.js", "TypeScript", "OAuth"]}
    />
  );
}
