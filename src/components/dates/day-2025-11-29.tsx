import { DateCard } from "@/components/date-card";
import { Bulb, Flame, Stack } from "tabler-icons-react";

export default function Day20251129() {
  return (
    <DateCard
      date="2025-11-29"
      title="Validation & Data Architecture"
      summary="Implemented comprehensive form validation with Zod, created unified Data Access Layer, and added price multiplier logic."
      tasks={[
        { name: "Add price multiplier logic" },
        {
          name: "Create unified Data Access Layer",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "DAL improves code maintainability. A centralized data access layer abstracts database queries, making it easier to modify data logic without changing business logic.",
          },
        },
        {
          name: "Add form validation",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Early validation enhances user experience. Validating form input on the client side before submission reduces server load and provides immediate feedback to users.",
          },
        },
      ]}
      skillsUsed={["Zod", "TypeScript", "Data Access", "React"]}
    />
  );
}
