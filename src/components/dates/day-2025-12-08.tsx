import { DateCard } from "@/components/date-card";
import { Flame, Stack, Bulb } from "tabler-icons-react";

export default function Day20251208() {
  return (
    <DateCard
      date="2025-12-08"
      title="Metrics System & Admin Management"
      summary="Implemented database query metrics, replaced dynamic hero with static components, and added admin product management."
      tasks={[
        {
          name: "Create database query metrics system",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Metrics reveal performance bottlenecks. Tracking database queries helps identify slow operations and optimize hot paths.",
          },
        },
        {
          name: "Replace dynamic Hero with static components",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Static components improve performance. Dynamic components turned out to add too much complexity. The cost-benefit of using static components was far more beneficial to this project.",
          },
        },
        {
          name: "Allow admins to manage collection and inspiration products",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Collection management increases flexibility. Giving admins fine-grained control over product collections enables better content curation.",
          },
        },
        { name: "Add market price support for products" },
      ]}
      skillsUsed={["Prisma", "Next.js", "Metrics", "TypeScript"]}
    />
  );
}
