import { LegacyCard, Text } from '@shopify/polaris';
import { Project } from '../types/Project';

interface CapacityTimelineProps {
  projects: Project[];
}

export function CapacityTimeline({ projects }: CapacityTimelineProps) {
  return (
    <LegacyCard>
      <LegacyCard.Section>
        <Text variant="headingMd" as="h2">
          Capacity Timeline
        </Text>
      </LegacyCard.Section>
      {/* Timeline visualization will be implemented here */}
    </LegacyCard>
  );
}
