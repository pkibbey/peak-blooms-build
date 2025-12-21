import { DateCard } from "@/components/date-card";
import { Flame, Bulb, InfoCircle } from "tabler-icons-react";

export default function Day20251130() {
  return (
    <DateCard
      date="2025-11-30"
      title="Typography, Performance & Site Pages"
      summary="Created typography utilities, added JWT auth, implemented database indexes, color properties, and generated company/legal pages."
      tasks={[
        {
          name: "Use JWT for auth to prevent database hits",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "JWT tokens reduce database load. Stateless JWT authentication eliminates expensive database lookups on every request and improves performance.",
          },
        },
        { name: "Add type safety to queries" },
        { name: "Add dynamic hero components" },
        { name: "Redirect unathenticated users" },
        { name: "Add product color properties with color picker UI for admins" },
        { name: "Introduce cart empty state" },
        {
          name: "Create typography utility classes in tailwind",
          lesson: {
            icon: <Bulb size={16} />,
            description:
              "Typography systems maintain consistency. Creating reusable typography utilities ensures uniform text styling across the application and reduces duplication.",
          },
        },
        {
          name: "Add database indexes to improve performance",
          lesson: {
            icon: <Flame size={16} />,
            description:
              "Database indexes significantly improve performance. Proper indexing on frequently queried columns dramatically speeds up database queries.",
          },
        },
        {
          name: "Generate company, support, legal pages, and sitemap",
          lesson: {
            icon: <InfoCircle size={16} />,
            description:
              "Legal pages build trust. Providing privacy policies, terms of service, and company information establishes credibility with users.",
          },
        },
      ]}
      skillsUsed={["Tailwind CSS", "TypeScript", "JWT", "Optimization"]}
    />
  );
}
