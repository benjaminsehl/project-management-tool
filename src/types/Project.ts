interface Project {
  vaultId: string;
  parentId?: string;
  team: string;
  theme: string;
  project: string;
  mergedPhase: string;
  doneDate?: string;
  vaultStatus: string;
  vaultPhase: string;
  priority: string;
  champion: string;
  editions?: string;
  projectedStart: {
    cycle: string;
    date: string;
  };
  engineering: {
    effort: number;
    plannedICs: number;
    certainty: string;
    overflowWeeks: number;
    minWeeks: number;
    maxWeeks: number;
    buildWeeks: string;
    endDate: string;
  };
  assignments: {
    [key: string]: number;
  };
}

export type { Project };
