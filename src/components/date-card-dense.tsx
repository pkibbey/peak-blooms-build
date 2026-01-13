"use client";

import TaskRenderer from "@/components/dates/task-renderer";
import type { DayMetadata } from "@/components/dates-metadata";
import { Card } from "@/components/ui/card";

interface DateCardDenseProps {
  day: DayMetadata;
}

export function DateCardDense({ day }: DateCardDenseProps) {
  const title = day.title;

  return (
    <Card className="py-3.5 px-4 border-border/30" aria-label={title}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          {title && (
            <h4 className="text-base font-semibold text-foreground">{title}</h4>
          )}

          <div className="text-sm text-muted-foreground mt-1.5 leading-snug">
            <TaskRenderer tasks={day.tasks} />
          </div>
        </div>
      </div>
    </Card>
  );
}
