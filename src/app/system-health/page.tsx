import Link from "next/link";

export default function SystemHealthPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">System Health</h1>

      <p className="text-muted-foreground mb-6">
        This section documents the architecture and performance considerations
        used during the sprint: React 19 Server Components, Server Actions,
        SSR/ISR strategies, and the CI approach for performance validation.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Server Components & Server Actions
        </h2>
        <p className="text-muted-foreground">
          The project uses React 19 Server Components and Server Actions to keep
          UI logic colocated with the server-side operations where appropriate,
          reducing client bundle size and improving time-to-interactive.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">SSR & ISR</h2>
        <p className="text-muted-foreground">
          Where appropriate, pages are rendered server-side for snapshots of
          content; ISR is used for content that benefits from occasional
          revalidation with low latency.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
        <p className="text-muted-foreground mb-2">
          Lighthouse snapshots or CI-generated reports can be referenced here.
          For now, placeholders are included and a follow-up CI job can be added
          to generate automated reports on each main branch.
        </p>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Placeholder: Lighthouse (Mobile) — 90</li>
          <li>Placeholder: Lighthouse (Desktop) — 98</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
