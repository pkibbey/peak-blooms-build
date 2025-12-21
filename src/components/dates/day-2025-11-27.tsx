import { DateCard } from "@/components/date-card";
import { Flame, InfoCircle, Bulb } from "tabler-icons-react";

export default function Day20251127() {
  return (
    <DateCard
      date="2025-11-27"
      title="Code Quality & Account Features"
      summary="Added linting and formatting, extracted reusable components, reorganized admin, and built account management pages."
      tasks={[
        {
          name: "Add biome.js for linting and code formatting",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Code formatting maintains consistency. Automated linting and formatting tools enforce coding standards, reduce code review friction, and improve readability.",
          },
        },
        { name: "Convert admin tab layout to page views" },
        { name: "Add shared card layout components" },
        {
          name: "Refactor large components into smaller files",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Component extraction reduces duplication. Breaking large components into smaller, focused pieces makes them reusable and easier to test and maintain.",
          },
        },
        {
          name: "Create order history pages",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Account features improve user retention. Providing users with access to their order history and account settings increases engagement and reduces support burden.",
          },
        },
      ]}
      skillsUsed={["React", "TypeScript", "Refactoring", "Code Quality"]}
    />
  );
}
