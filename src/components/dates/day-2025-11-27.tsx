import { DateCard } from "@/components/date-card";

export default function Day20251127() {
  return (
    <DateCard
      date="2025-11-27"
      title="Component Extraction & Account Management"
      summary="Extracted shared components into library and implemented comprehensive account management pages."
      tasks={[
        "Extract shared components",
        "Create utils library",
        "Account pages",
        "Profile editing",
        "Update exports",
      ]}
      skillsUsed={["React", "TypeScript", "Composition", "Refactoring"]}
      lessonsLearned={[
        "Refactoring prevents duplication",
        "Accounts improve retention",
        "Organization enables speed",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `export function useAccountSettings() { const [user, setUser] = useState(null); return { user }; }`,
      }}
    />
  );
}
