import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DesignSystemPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Design System</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Buttons</h2>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <div className="p-4">
              <h3 className="font-medium">Card Title</h3>
              <p className="text-sm text-muted-foreground">
                Card body text and description
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h3 className="font-medium">Small Card</h3>
              <p className="text-sm text-muted-foreground">Smaller content</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Badges</h2>
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-primary underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
