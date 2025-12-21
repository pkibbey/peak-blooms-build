import { DateCard } from "@/components/date-card";
import { InfoCircle, Stack } from "tabler-icons-react";

export default function Day20251126() {
  return (
    <DateCard
      date="2025-11-26"
      title="Navigation & Checkout Implementation"
      summary="Created BackLink navigation component, standardized table layouts, and implemented cart checkout functionality."
      tasks={[
        {
          name: "Create consistent BackLink navigation component",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Consistent navigation improves UX. A standardized back navigation component helps users move through the application intuitively and reduces friction.",
          },
        },
        {
          name: "Align table layouts",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Table layouts reduce code duplication. Creating shared table layouts and styles eliminates repetitive code and makes maintenance easier.",
          },
        },
        { name: "Remove shop filters" },
        { name: "Add cart checkout (witout payment processing)" },
      ]}
      skillsUsed={["React", "TypeScript", "Tailwind CSS", "Components"]}
    />
  );
}
