'use client';

import { useSyncExternalStore } from 'react';

import type { Clue, Exploration } from '@/types/exploration';

export interface ExplorationProgressEntry {
  explorationId: string;
  explorationSlug: string;
  explorationTitle: string;
  ecosystemId: string;
  ecosystemTitle: string;
  difficulty: Exploration['difficulty'];
  archetype: Exploration['archetype'];
  environment: string;
  patientInteractionLevel: string;
  teamworkIntensity: string;
  technologyIntensity: string;
  clueCategories: Clue['category'][];
  status: 'viewed' | 'started' | 'completed';
  lastViewedAt: string;
  completedAt?: string;
}

export interface MedQuestProgressState {
  completedExplorationIds: string[];
  savedExplorationIds: string[];
  recentlyViewedIds: string[];
  currentStreak: number;
  longestStreak: number;
  lastCompletionDate?: string;
  entries: ExplorationProgressEntry[];
}

export interface CareerInterestProfile {
  preferredEnvironments: Array<[string, number]>;
  preferredClueTypes: Array<[string, number]>;
  preferredCareerArchetypes: Array<[string, number]>;
  patientFacingInterest: number;
  operationalInterest: number;
}

const STORAGE_KEY = 'medquest-progress-v1';
const STORAGE_EVENT = 'medquest-progress-change';

const emptyState: MedQuestProgressState = {
  completedExplorationIds: [],
  savedExplorationIds: [],
  recentlyViewedIds: [],
  currentStreak: 0,
  longestStreak: 0,
  entries: [],
};

let cachedState = emptyState;
let cachedSerialized = '';

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function yesterdayKey(date = new Date()) {
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);

  return todayKey(yesterday);
}

function unique(values: string[]) {
  return [...new Set(values)];
}

function readState(): MedQuestProgressState {
  if (typeof window === 'undefined') return emptyState;

  const existing = window.localStorage.getItem(STORAGE_KEY);

  if (!existing) {
    cachedState = emptyState;
    cachedSerialized = '';

    return cachedState;
  }

  if (existing === cachedSerialized) {
    return cachedState;
  }

  try {
    cachedState = {
      ...emptyState,
      ...JSON.parse(existing),
    };
    cachedSerialized = existing;

    return cachedState;
  } catch {
    cachedState = emptyState;
    cachedSerialized = '';

    return cachedState;
  }
}

function writeState(state: MedQuestProgressState) {
  if (typeof window === 'undefined') return;

  cachedState = state;
  cachedSerialized = JSON.stringify(state);

  window.localStorage.setItem(STORAGE_KEY, cachedSerialized);
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

export function getProgressState() {
  return readState();
}

function subscribeToProgress(
  onStoreChange: () => void
) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cachedSerialized = '';
      onStoreChange();
    }
  };

  window.addEventListener(STORAGE_EVENT, onStoreChange);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener(
      STORAGE_EVENT,
      onStoreChange
    );
    window.removeEventListener('storage', handleStorage);
  };
}

export function useProgressState() {
  return useSyncExternalStore(
    subscribeToProgress,
    readState,
    () => emptyState
  );
}

export function saveProgressEntry(
  entry: ExplorationProgressEntry
) {
  const state = readState();
  const entries = state.entries.filter(
    (existingEntry) =>
      existingEntry.explorationId !== entry.explorationId
  );

  entries.push(entry);

  const nextState = {
    ...state,
    entries,
    recentlyViewedIds: unique([
      entry.explorationId,
      ...state.recentlyViewedIds,
    ]).slice(0, 8),
  };

  writeState(nextState);
}

export function markExplorationCompleted(
  explorationId: string
) {
  const state = readState();
  const completionDate = todayKey();
  const continuedStreak =
    state.lastCompletionDate === completionDate
      ? state.currentStreak
      : state.lastCompletionDate === yesterdayKey()
        ? state.currentStreak + 1
        : 1;

  const entries = state.entries.map((entry) =>
    entry.explorationId === explorationId
      ? {
          ...entry,
          status: 'completed' as const,
          completedAt: new Date().toISOString(),
        }
      : entry
  );

  const nextState = {
    ...state,
    completedExplorationIds: unique([
      ...state.completedExplorationIds,
      explorationId,
    ]),
    currentStreak: continuedStreak,
    longestStreak: Math.max(
      state.longestStreak,
      continuedStreak
    ),
    lastCompletionDate: completionDate,
    entries,
  };

  writeState(nextState);
}

export function toggleSavedExploration(
  explorationId: string
) {
  const state = readState();
  const isSaved =
    state.savedExplorationIds.includes(explorationId);
  const savedExplorationIds = isSaved
    ? state.savedExplorationIds.filter(
        (id) => id !== explorationId
      )
    : [...state.savedExplorationIds, explorationId];

  writeState({
    ...state,
    savedExplorationIds,
  });

  return !isSaved;
}

function ranked(
  values: string[]
): Array<[string, number]> {
  const counts = values.reduce<Record<string, number>>(
    (result, value) => ({
      ...result,
      [value]: (result[value] ?? 0) + 1,
    }),
    {}
  );

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

export function buildCareerInterestProfile(
  state = readState()
): CareerInterestProfile {
  const signalEntries = state.entries.filter(
    (entry) =>
      entry.status === 'completed' || entry.status === 'started'
  );

  const patientFacingInterest = signalEntries.filter(
    (entry) => entry.patientInteractionLevel === 'High'
  ).length;
  const operationalInterest = signalEntries.filter(
    (entry) =>
      entry.patientInteractionLevel === 'Low' ||
      entry.archetype === 'healthcare-operations'
  ).length;

  return {
    preferredEnvironments: ranked(
      signalEntries.map((entry) => entry.environment)
    ).slice(0, 4),
    preferredClueTypes: ranked(
      signalEntries.flatMap((entry) => entry.clueCategories)
    ).slice(0, 5),
    preferredCareerArchetypes: ranked(
      signalEntries.map((entry) => entry.archetype)
    ).slice(0, 4),
    patientFacingInterest,
    operationalInterest,
  };
}
