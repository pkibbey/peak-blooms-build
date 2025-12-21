import { DateCard } from "@/components/date-card";
import { InfoCircle } from "tabler-icons-react";

export default function Day20251212() {
  return (
    <DateCard
      date="2025-12-12"
      title="Terminology & Route Consolidation"
      summary="Unified shipping and delivery terminology across the application with consistent routing."
      tasks={[
        {
          name: "Replace all shipping concepts with delivery terminology",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Consistent terminology prevents confusion. Using the same terms consistently across documentation, UI, and code reduces cognitive load and improves clarity.",
          },
        },
      ]}
      skillsUsed={["Next.js", "TypeScript", "Routing"]}
    />
  );
}
