import { DateCard } from "@/components/date-card";
import { AlertCircle, InfoCircle, Bulb } from "tabler-icons-react";

export default function Day20251215() {
  return (
    <DateCard
      date="2025-12-15"
      title="Build Fixes & Type Unification"
      summary="Fixed production build issues, unified session types across system, and updated development documentation."
      tasks={[
        {
          name: "Update co-pilot instructions",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Clear documentation improves team productivity. Well-documented processes and guidelines help new team members onboard faster.",
          },
        },
        {
          name: "Fix production build issues",
          lesson: {
            icon: <AlertCircle size={16} />,
            description:
              "Build verification prevents deployment issues. Testing builds in production-like environments catches environment-specific issues before they affect users.",
          },
        },
        {
          name: "Unify user session type across system",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Type unification prevents errors. Consistent type definitions across the codebase prevent bugs and improve IDE autocomplete.",
          },
        },
      ]}
      skillsUsed={["Build Tools", "Next.js", "TypeScript"]}
    />
  );
}
