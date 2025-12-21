import { DateCard } from "@/components/date-card";
import { AlertCircle, Bulb, InfoCircle } from "tabler-icons-react";

export default function Day20251128() {
  return (
    <DateCard
      date="2025-11-28"
      title="Media Management & Admin Features"
      summary="Implemented image uploads with validation, added bulk product filters, quantity selectors, and standardized page headers."
      tasks={[
        { name: "Add boxlot filter for bulk products" },
        { name: "Introduce Image upload to admin forms" },
        {
          name: "Add consisent page headers",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Consistent headers improve navigation. Standardized page headers provide visual anchors and help users understand their current location in the application.",
          },
        },
        {
          name: "Image validation",
          lesson: {
            icon: <AlertCircle size={16} />,
            description:
              "Image validation prevents errors. Validating image dimensions, file sizes, and formats ensures data quality and prevents loading broken or oversized images.",
          },
        },
        { name: "Add quantity selector to inspirations" },
      ]}
      skillsUsed={["React", "File Handling", "Validation", "TypeScript"]}
    />
  );
}
