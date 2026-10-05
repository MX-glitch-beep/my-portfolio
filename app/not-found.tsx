import React from "react";
import Container from "@/app/components/layout/ui/Container";
import Button from "@/app/components/layout/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-24">
      <Container size="reading">
        <div className="space-y-8 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-low border border-border-subtle text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono uppercase tracking-wider text-accent font-medium">
              404 Error
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground-primary tracking-tight">
              Page Not Found
            </h1>
            <p className="text-foreground-secondary text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              The requested route does not exist or has been relocated within the architecture.
            </p>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <Button href="/" variant="primary" size="md">
              Return to Safety
            </Button>
            <Button href="/projects" variant="outline" size="md">
              Explore Projects
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}