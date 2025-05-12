import { LegacyCard } from '@shopify/polaris';
import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { GanttViewProps } from '../types/GanttTypes';
import { useState } from 'react';

export function GanttView({ tasks }: GanttViewProps) {
  const [viewMode] = useState<ViewMode>(ViewMode.Month);

  return (
    <LegacyCard>
      <div style={{ height: '400px' }}>
        <Gantt
          tasks={tasks}
          viewMode={viewMode}
          listCellWidth=""
          columnWidth={150}
          ganttHeight={350}
          TooltipContent={({ task }) => (
            <div style={{ padding: '8px' }}>
              <p><strong>{task.name}</strong></p>
              <p>Team: {(task as any).team}</p>
              <p>Champion: {(task as any).champion}</p>
              <p>ICs: {(task as any).plannedICs}</p>
            </div>
          )}
        />
      </div>
    </LegacyCard>
  );
}
