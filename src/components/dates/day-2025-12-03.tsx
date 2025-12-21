import { DateCard } from "@/components/date-card";
import { Bulb, Stack } from "tabler-icons-react";

export default function Day20251203() {
  return (
    <DateCard
      date="2025-12-03"
      title="Admin Enhancements & Data Management"
      summary="Added shop search, pagination and sortable tables, product-collection relationships, user profile editing, and mock images."
      tasks={[
        { name: "Add search to shop" },
        { name: "Update colors to use a color ID as opposed to a HEX value" },
        { name: "Add pagination to admin table views" },
        {
          name: "Add sortable columns to all tables",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Sortable tables enable data exploration. Allowing users to sort by different columns makes it easier to find and analyze data.",
          },
        },
        {
          name: "Allow products to be in many collections",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Many-to-many relationships provide flexibility. Supporting multiple collections per product enables richer product categorization without data duplication.",
          },
        },
        { name: "Add UI to allow users to change edit their profile details" },
        {
          name: "Use pixabay to add mock product images",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Image fallbacks improve robustness. Using placeholder services like Pixabay ensures the app displays properly even without custom product images.",
          },
        },
        { name: "Replace NextJS v15 with v16 to improve build speed" },
      ]}
      skillsUsed={["React", "Prisma", "Admin UI", "Search"]}
    />
  );
}
