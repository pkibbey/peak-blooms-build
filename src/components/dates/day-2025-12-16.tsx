import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251216() {
  return (
    <DateCard
      date="2025-12-16"
      title="Server Actions & Performance Refactoring"
      summary="Migrated to server actions for all operations, added soft-delete and order snapshots, and moved user fetching to Nav."
      tasks={[
        { name: "Move user fetching out of layout and into Nav component" },
        {
          name: "Refactor API calls to use server actions for performance improvements",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Server actions reduce latency and improve performance. Running critical operations on the server eliminates round-trip network calls.",
          },
        },
        {
          name: "Add product soft-delete functionality",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Soft-delete preserves data integrity. Marking records as deleted rather than removing them preserves historical data and enables undo functionality.",
          },
        },
        {
          name: "Save order snapshots to preserve price history",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Order snapshots maintain price history accuracy. Storing product prices at order time prevents price changes from affecting historical records.",
          },
        },
        { name: "Refactor cart retreival to fix cart bug" },
      ]}
      skillsUsed={["Next.js", "TypeScript", "Server Actions", "React"]}
    />
  );
}
