import { DeployedSite } from "@/components/deployed-site";
import { ExecutiveSummary } from "@/components/executive-summary";
import { Hero } from "@/components/hero";
import { SourceCode } from "@/components/source-code";
import { StrategicThemes } from "@/components/strategic-themes";

export default function DatesPage() {
  return (
    <main className="flex flex-col items-center relative w-full bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Executive Summary Section */}
      <ExecutiveSummary />

      {/* Strategic Themes Section */}
      <StrategicThemes />

      {/* Lessons Section */}
      {/* <Lessons /> */}

      {/* Source Code Section */}
      <SourceCode />

      {/* Deployed Site Section */}
      <DeployedSite />

      {/* Footer */}
      <footer className="w-full py-12 bg-muted">
        <div className="grid gap-3 max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            A comprehensive journey of building and launching a modern web
            platform
          </p>
          <small className="text-sm text-muted-foreground">
            Phineas Kibbey &copy; 2025
          </small>
        </div>
      </footer>
    </main>
  );
}
