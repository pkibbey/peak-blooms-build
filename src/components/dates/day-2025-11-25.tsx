import { DateCard } from "@/components/date-card";
import { Flame, InfoCircle, Stack } from "tabler-icons-react";

export default function Day20251125() {
  return (
    <DateCard
      date="2025-11-25"
      title="Server Components & UI Refactoring"
      summary="Refactored shop and auth to use server-side rendering, added cart page, managed content, and unified UI components."
      tasks={[
        {
          name: "Refactor shop to use server rendering",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Server components improve performance. Moving rendering to the server reduces client-side JavaScript and enables faster initial page loads.",
          },
        },
        { name: "Refactor auth for server-side logic" },
        { name: "Add shopping cart page" },
        { name: "Add content management for admin users" },
        { name: "Add more AI generated images" },
        {
          name: "Refactor for consistent terminology for all variables",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Consistent terminology reduces confusion. Using the same names for the same concepts throughout the codebase makes it easier for developers to understand and navigate.",
          },
        },
        {
          name: "Replace all basic html elements with ShadCN components",
          lesson: {
            icon: <Stack size={16} />,
            description:
              "UI components standardize interfaces. Replacing raw HTML with ShadCN components ensures consistent styling, accessibility, and behavior across the application.",
          },
        },
      ]}
      skillsUsed={["Next.js", "Server Components", "Radix UI", "TypeScript"]}
    />
  );
}
