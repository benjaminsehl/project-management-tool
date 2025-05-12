import { Project } from '../types/Project';

export const mockProjects: Project[] = [
{
    vaultId: "12345",
    team: "Flagship Themes",
    theme: "Project Goal",
    project: "Dusk",
    mergedPhase: "build",
    doneDate: "2025-06-30",
    vaultStatus: "On Track",
    vaultPhase: "build",
    priority: "P0",
    champion: "Ben Sehl",
    editions: "S'25",
    projectedStart: { cycle: "25-Q1C1", date: "2024-12-30" },
    engineering: {
      effort: 84,
      plannedICs: 7,
      certainty: "Fuzzy aim",
      overflowWeeks: 0,
      minWeeks: 12,
      maxWeeks: 24,
      buildWeeks: "12w - 24w",
      endDate: "2025-06-16",
    },
    assignments: {
      "Q1C1-W2": 6,
      "Q1C1-W3": 7,
      "Q1C1-W4": 5,
    },
  },
];
