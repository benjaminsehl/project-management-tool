import {
  IndexTable,
  Text,
  Badge,
  useIndexResourceState,
  LegacyCard,
} from '@shopify/polaris';
import { Project } from '../types/Project';

interface ProjectTableProps {
  projects: Project[];
}

export function ProjectTable({ projects }: ProjectTableProps) {
  const resourceName = {
    singular: 'project',
    plural: 'projects',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(projects);

  const rowMarkup = projects.map(
    (project, index) => (
      <IndexTable.Row
        id={project.vaultId}
        key={project.vaultId}
        selected={selectedResources.includes(project.vaultId)}
        position={index}
      >
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {project.team}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>{project.project}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress={project.vaultStatus === 'On Track' ? 'complete' : 'incomplete'}>
            {project.vaultStatus}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{project.priority}</IndexTable.Cell>
        <IndexTable.Cell>{project.champion}</IndexTable.Cell>
        <IndexTable.Cell>{project.engineering.plannedICs}</IndexTable.Cell>
        <IndexTable.Cell>{project.engineering.buildWeeks}</IndexTable.Cell>
        <IndexTable.Cell>{project.engineering.endDate}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <LegacyCard>
      <IndexTable
        resourceName={resourceName}
        itemCount={projects.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        headings={[
          {title: 'Team'},
          {title: 'Project'},
          {title: 'Status'},
          {title: 'Priority'},
          {title: 'Champion'},
          {title: 'Planned ICs'},
          {title: 'Build Weeks'},
          {title: 'End Date'},
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
}
