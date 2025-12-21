import { DateCard } from "@/components/date-card";
import { Bulb, Flame } from "tabler-icons-react";

export default function Day20251209() {
  return (
    <DateCard
      date="2025-12-09"
      title="Auth & Production Optimization"
      summary="Replaced magic link with Google auth, simplified checkout, optimized seed scripts, and added static rendering."
      tasks={[
        { name: "Remove billing address from cart checkout" },
        {
          name: "Replace magic link authentication with google auth",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Google auth simplifies user experience. OAuth providers eliminate password management friction and leverage existing user accounts.",
          },
        },
        { name: "Fix seed script timeouts for production databases" },
        { name: "Fix login url for production environment" },
        {
          name: "Add static rendering for pages with static content",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Static rendering improves performance. Pre-rendering static pages at build time eliminates runtime rendering overhead.",
          },
        },
      ]}
      skillsUsed={["Prisma", "TypeScript", "OAuth"]}
    />
  );
}
