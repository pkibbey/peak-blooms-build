import { DateCard } from "@/components/date-card";
import { Bulb, Flame } from "tabler-icons-react";

export default function Day20251205() {
  return (
    <DateCard
      date="2025-12-05"
      title="Cart Features & Order Management"
      summary="Added quantity selectors, cart reset, reorder from history, and local database setup for development."
      tasks={[
        {
          name: "Add local database to improve development speed",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Local databases accelerate development. Using a local database eliminates network latency and allows developers to work offline.",
          },
        },
        {
          name: "Add quantity selector to product card",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Quantity selectors improve shopping experience. Inline quantity selection streamlines the shopping process and reduces clicks.",
          },
        },
        { name: "Add ability to reset cart" },
        {
          name: "Allow users to Reorder from previous orders",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Reorder from history increases convenience. Allowing repeat purchases from previous orders improves customer experience for frequent buyers.",
          },
        },
      ]}
      skillsUsed={["React", "TypeScript", "Prisma", "Validation"]}
    />
  );
}
