import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251202() {
  return (
    <DateCard
      date="2025-12-02"
      title="Pagination, CSV & Data Management"
      summary="Implemented pagination and filtering, created CSV seeding with upsert logic, and improved shop and inspiration pages."
      tasks={[
        {
          name: "Change seed script to upsert instead of delete & create",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Upsert logic handles data updates safely. Upsert (update or insert) operations prevent data loss and are safer for seeding existing data.",
          },
        },
        {
          name: "Create script to parse a CSV file and seed all products",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "CSV enables bulk product imports. Parsing CSV files automates bulk data imports, reducing manual entry and improving data consistency.",
          },
        },
        {
          name: "Add pagination to shop view",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Pagination improves performance and UX. Breaking large datasets into pages reduces initial load time and makes browsing more intuitive.",
          },
        },
        { name: "Improve inspiration page design" },
        { name: "Re-add shop filters" },
        { name: "Prevent filter navigation from causing page scroll" },
      ]}
      skillsUsed={["CSV", "Prisma", "Next.js", "Node.js"]}
    />
  );
}
