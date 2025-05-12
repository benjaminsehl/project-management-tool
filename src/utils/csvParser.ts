import Papa from 'papaparse';
import { Project } from '../types/Project';

export function parseProjectsCsv(csvContent: string): Project[] {
  const { data } = Papa.parse(csvContent, {
    header: true,
    skipEmptyLines: true
  });

  return data.map((row: any) => ({
    vaultId: row['Vault ID'],
    team: row['Team'],
    project: row['Project'],
    vaultStatus: row['Vault Status'] || 'Not Started',
    priority: row['Priority'],
    champion: row['Champion'],
    engineering: {
      plannedICs: parseInt(row['Planned ENG ICs']) || 0,
      buildWeeks: row['Build weeks'] || 'TBD',
      endDate: row['Project end date'] || 'TBD'
    },
    // Add more field mappings as needed
  }));
}
