import { DateCard } from "@/components/date-card";

export default function Day20251216() {
  return (
    <DateCard
      date="2025-12-16"
      title="Server Actions Migration & Type System"
      summary="Refactored to server actions for cart, products, collections and unified type system."
      tasks={[
        "Cart actions",
        "Product actions",
        "Collection actions",
        "Type files",
        "Update components",
      ]}
      skillsUsed={["Next.js", "TypeScript", "Server actions", "React"]}
      lessonsLearned={[
        "Actions reduce latency",
        "Unified types improve IDE",
        "Modular easier maintain",
      ]}
      codeSnippet={{
        language: "typescript",
        code: `'use server'; export async function addToCart(productId) {...}`,
      }}
    />
  );
}
