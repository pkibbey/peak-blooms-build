import { DateCard } from "@/components/date-card";
import { InfoCircle, Bulb, Stack } from "tabler-icons-react";

export default function Day20251204() {
  return (
    <DateCard
      date="2025-12-04"
      title="UI Components & Featured Collections"
      summary="Created reusable shipping banner and product card components, added featured collections, and fixed admin bugs."
      tasks={[
        {
          name: "Add featured properties to collections pages",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Featured content highlights key offerings. Showcasing featured collections draws attention to important products and improves discoverability.",
          },
        },
        { name: "Fix admin logout bug when editing own profile" },
        {
          name: "Add shipping banner component",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Shipping messaging builds customer confidence. Clear shipping information reassures customers and reduces purchase anxiety.",
          },
        },
        {
          name: "Create product card component",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "Reusable components reduce code duplication. A centralized product card component ensures consistent presentation across browse, search, and collection pages.",
          },
        },
      ]}
      skillsUsed={["React", "Tailwind CSS", "Components"]}
    />
  );
}
