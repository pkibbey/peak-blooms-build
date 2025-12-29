export type InlineText = { kind: "text"; text: string };
export type InlineHover = {
  kind: "hover";
  trigger: string;
  body: string;
  icon?: string;
  triggerClass?: string;
  side?: "top" | "right" | "left" | "bottom";
};
export type InlineLink = {
  kind: "link";
  href: string;
  text: string;
  blank?: boolean;
};
export type InlineFormat = { kind: "em" | "strong"; segments: InlineSegment[] };
export type InlineSegment =
  | InlineText
  | InlineHover
  | InlineLink
  | InlineFormat;

export type Task =
  | { type: "paragraph"; segments: InlineSegment[] }
  | { type: "list"; ordered?: boolean; items: Task[] }
  | { type: "raw"; jsx: string };
