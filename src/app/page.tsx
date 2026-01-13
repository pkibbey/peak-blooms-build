import Link from "next/link";
import { DeployedSite } from "@/components/deployed-site";
import { ExecutiveSummary } from "@/components/executive-summary";
import { Hero } from "@/components/hero";
import { Implementation } from "@/components/implementation";
import { Lessons } from "@/components/lessons";
import { SourceCode } from "@/components/source-code";

export default function DatesPage() {
  return (
    <main className="flex flex-col items-center relative w-full bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Executive Summary Section */}
      <ExecutiveSummary />

      {/* Implementation Section */}
      <Implementation />

      {/* Lessons Section */}
      <Lessons />

      {/* Deployed Site Section */}
      <DeployedSite />

      {/* Source Code Section */}
      <SourceCode />

      {/* Footer */}
      <footer className="w-full py-12 bg-muted">
        <div className="grid gap-6 max-w-4xl mx-auto px-4 text-center">
          <p className="text-base text-muted-foreground">
            <span className="text-primary">*</span> Time-saved estimates are
            calculated from personal metrics collected over 15+ years of
            software development. These values are derived from measured
            time-to-complete for similar tasks across multiple projects,
            adjusted conservatively to account for setup, debugging, and review
            overhead.
          </p>
          <small className="text-sm text-muted-foreground">
            Phineas Kibbey &copy; {new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </main>
  );
}
