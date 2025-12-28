export interface DateMetadata {
  date: string;
  title: string;
  week: number;
  screenshot?: string;
  skillsUsed: string[];
}

export interface WeekMetadata {
  id: string;
  week: number;
  title: string;
  description: string;
  dateRange: string;
  milestones: string[];
}

export const weeksMetadata: WeekMetadata[] = [
  {
    id: "week-1",
    week: 1,
    title: "Foundation & Design System",
    description:
      "Setting up the project infrastructure, design systems, and core components",
    dateRange: "Nov 22 - 28",
    milestones: ["Project Setup", "Design System", "UI Components"],
  },
  {
    id: "week-2",
    week: 2,
    title: "Core Features & Data Layer",
    description:
      "Building core features with validation, data architecture, and authentication",
    dateRange: "Nov 29 - Dec 5",
    milestones: ["Validation", "Data Access Layer", "Authentication"],
  },
  {
    id: "week-3",
    week: 3,
    title: "Advanced Features & Optimization",
    description:
      "Implementing metrics, admin management, and performance improvements",
    dateRange: "Dec 6 - 12",
    milestones: ["Metrics System", "Admin Features", "Optimization"],
  },
  {
    id: "week-4",
    week: 4,
    title: "Performance, Testing & Polish",
    description:
      "Final refinements, build fixes, type unification, and deployment preparation",
    dateRange: "Dec 13 - 19",
    milestones: ["Build Fixes", "Type Unification", "Documentation"],
  },
];
