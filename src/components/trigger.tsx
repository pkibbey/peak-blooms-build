import type { PropsWithChildren } from "react";
import { HoverCardTrigger } from "./ui/hover-card";

export const Trigger = (props: PropsWithChildren) => (
  <HoverCardTrigger
    className="text-primary cursor-help underline decoration-dotted hover:text-primary/80 focus-ring"
    tabIndex={0}
    {...props}
  />
);
