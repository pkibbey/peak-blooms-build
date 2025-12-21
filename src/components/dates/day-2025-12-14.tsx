import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251214() {
  return (
    <DateCard
      date="2025-12-14"
      title="Search & Data Model Refinement"
      summary="Implemented site search in navigation, moved phone to Address model, and added price visibility controls."
      tasks={[
        {
          name: "Added site search to navigation header",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Site search improves product discovery. A prominent search feature helps users find products faster, reducing friction in the shopping journey.",
          },
        },
        {
          name: "Hide prices for unapproved users",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Hidden prices incentivize user signup. Restricting price visibility encourages account creation and user engagement.",
          },
        },
        { name: "Move phone from user model to address model" },
      ]}
      skillsUsed={["Prisma", "TypeScript", "Search", "React"]}
    />
  );
}
