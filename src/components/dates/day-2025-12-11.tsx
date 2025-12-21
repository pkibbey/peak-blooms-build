import { DateCard } from "@/components/date-card";
import { Bulb, Stack, Flame } from "tabler-icons-react";

export default function Day20251211() {
  return (
    <DateCard
      date="2025-12-11"
      title="Dark/Light Theme Implementation"
      summary="Implemented theme system with light/dark mode toggle using CSS variables and context."
      tasks={[
        {
          name: "Add Theme support with Dark/Light toggle switch",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "CSS variables enable flexible theming. CSS custom properties allow dynamic theme switching without duplicating styles. Context provides theme state management across the app.",
          },
        },
      ]}
      skillsUsed={["CSS", "Context", "TypeScript", "React"]}
    />
  );
}
