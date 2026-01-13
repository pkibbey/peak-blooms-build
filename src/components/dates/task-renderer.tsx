"use client";

import type { Task } from "./task";

export default function TaskRenderer({ tasks }: { tasks?: Task[] }) {
  if (!tasks || tasks.length === 0) return null;

  return (
    <>
      {tasks.map((task, idx) => {
        return (
          <p key={idx} className="text-sm text-foreground-muted leading-normal">
            {task.text}
          </p>
        );
      })}
    </>
  );
}
