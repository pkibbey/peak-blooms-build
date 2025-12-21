import { DateCard } from "@/components/date-card";
import { Flame, Bulb } from "tabler-icons-react";

export default function Day20251210() {
  return (
    <DateCard
      date="2025-12-10"
      title="Performance & Type System Updates"
      summary="Optimized performance by disabling prefetch and removing logs, improved UI with toast notifications, and used generated types."
      tasks={[
        { name: "Restrict metrics to development environment" },
        {
          name: "User rich colours in toast notifications",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Rich UI feedback improves experience. Colorful, well-designed notifications make feedback more noticeable and easier to understand.",
          },
        },
        { name: "Remove static params from dynamic pages" },
        {
          name: "Disable link prefetching for all instances",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Disabling prefetch prevents unnecessary requests. Prefetching speculation can waste bandwidth, so disabling it saves data for users.",
          },
        },
        {
          name: "Replace static defined types with prisma generated types",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Generated types stay in sync with schema. Auto-generated types from Prisma ensure type safety and prevent schema drift.",
          },
        },
        { name: "Remove dead code using knip" },
        { name: "Add phone number support to user profiles" },
        {
          name: "Trash the product variants concept for being too complicated",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Removing complexity improves usability. The variants feature added maintenance burden without proportional user value, so removing it was the right call.",
          },
        },
      ]}
      skillsUsed={["Next.js", "TypeScript", "Optimization"]}
    />
  );
}
