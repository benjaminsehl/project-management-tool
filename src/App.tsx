import { Page, Layout } from '@shopify/polaris';
import { ProjectTable } from './components/ProjectTable';
import { GanttView } from './components/GanttView';
import { mockProjects } from './utils/projectData';
import { transformProjectsToTasks } from './utils/projectTransformer';

export default function App() {
  const ganttTasks = transformProjectsToTasks(mockProjects);

  return (
    <Page title="Project Management" fullWidth>
      <Layout>
        <Layout.Section>
          <GanttView tasks={ganttTasks} />
        </Layout.Section>
        <Layout.Section>
          <ProjectTable projects={mockProjects} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
