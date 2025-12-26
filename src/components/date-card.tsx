"use client";

import { differenceInDays } from "date-fns";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronRight } from "tabler-icons-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface DateComponentProps {
  date: string;
  title: string;
  skillsUsed: string[];
  screenshot?: string;
  taskNode?: ReactNode;
}

export function DateCard({
  date,
  title,
  screenshot,
  taskNode,
}: DateComponentProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "bg-transparent rounded-lg transition-all ring-none",
        open && "shadow-xl bg-white",
      )}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="p-4">
          {/* Collapsible Header */}
          <CollapsibleTrigger className="relative overflow-hidden flex flex-1 justify-between items-center w-full">
            <h3 className="text-xl font-bold text-foreground relative z-10">
              Day {differenceInDays(date, new Date("2025-11-21"))}: {title}
            </h3>
            <ChevronRight
              className={cn(
                open && "rotate-90",
                "transition-transform relative z-10",
              )}
            />
          </CollapsibleTrigger>

          {/* Collapsible Content */}
          <CollapsibleContent>
            <div className="grid md:grid-cols-[auto_300px] gap-8 mt-2">
              <div className="space-y-3">
                {/* Tasks */}
                {taskNode}
              </div>

              {/* Screenshot */}
              {screenshot && (
                <Dialog>
                  <DialogTrigger className="group relative block aspect-video w-full overflow-hidden rounded-lg border border-border/70 shadow-2xs transition-all cursor-zoom-in outline-none">
                    <Image
                      src={screenshot}
                      alt={`Date ${date} screenshot`}
                      fill
                      className="object-cover bg-muted transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden border-none bg-transparent shadow-none">
                    <DialogClose className="relative w-full h-full flex items-center justify-center cursor-zoom-out outline-none">
                      <Image
                        src={screenshot}
                        alt={`Date ${date} screenshot full`}
                        width={1800}
                        height={1200}
                        className="max-w-full max-h-[90vh] h-auto w-auto object-contain rounded-lg shadow-md transition-all duration-300"
                        priority
                      />
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
}
