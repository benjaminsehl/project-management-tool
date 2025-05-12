import { Project } from '../types/Project';
import { ProjectTask } from '../types/GanttTypes';
import { parse, format } from 'date-fns';

export function transformProjectsToTasks(projects: Project[]): ProjectTask[] {
  return projects
    .filter(project => project.projectedStart?.date && project.engineering?.endDate)
    .map(project => {
      const startDate = parseDate(project.projectedStart.date);
      const endDate = parseDate(project.engineering.endDate);

      if (!startDate || !endDate) return null;

      return {
        projectId: project.vaultId,
        id: project.vaultId,
        name: project.project,
        team: project.team,
        champion: project.champion,
        priority: project.priority,
        plannedICs: project.engineering.plannedICs,
        start: startDate,
        end: endDate,
        progress: project.vaultStatus === 'On Track' ? 100 : 50,
        type: 'task',
        styles: {
          progressColor: project.vaultStatus === 'On Track' ? '#008060' : '#FFC453',
          progressSelectedColor: '#004C3F'
        }
      };
    })
    .filter((task): task is ProjectTask => task !== null);
}

function parseDate(dateString: string): Date | null {
  try {
    // Handle different date formats
    if (dateString.includes(',')) {
      return parse(dateString, 'MMM d, yyyy', new Date());
    }
    return parse(dateString, 'yyyy-MM-dd', new Date());
  } catch {
    return null;
  }
}
