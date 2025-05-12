import { Task } from 'gantt-task-react';

export interface ProjectTask extends Task {
  projectId: string;
  team: string;
  priority: string;
  champion: string;
  plannedICs: number;
}

export interface GanttViewProps {
  tasks: ProjectTask[];
}
