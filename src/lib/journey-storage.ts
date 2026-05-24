export interface JourneyEntry {
  explorationTitle: string;

  selectedCareer: string;

  reflectionChoice: string;

  wasCorrect: boolean;

  completedAt: string;
}

const STORAGE_KEY = 'medquest-journey';

export function saveJourneyEntry(
  entry: JourneyEntry
) {
  if (typeof window === 'undefined') return;

  const existing =
    window.localStorage.getItem(STORAGE_KEY);

  const parsed: JourneyEntry[] = existing
    ? JSON.parse(existing)
    : [];

  parsed.push(entry);

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(parsed)
  );
}

export function getJourneyEntries(): JourneyEntry[] {
  if (typeof window === 'undefined') return [];

  const existing =
    window.localStorage.getItem(STORAGE_KEY);

  return existing ? JSON.parse(existing) : [];
}