import ExplorationRuntime from '@/components/explorations/ExplorationRuntime';

import {
  fetchExplorationBySlug,
} from '@/lib/data/explorations';

import {
  fetchCareerById,
} from '@/lib/data/careers';

import {
  fetchCluesByExplorationId,
} from '@/lib/data/clues';

import {
  fetchReflectionsByExplorationId,
} from '@/lib/data/reflections';

export default async function ExplorationPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const resolvedParams = await params;

  const exploration =
    await fetchExplorationBySlug(
      resolvedParams.slug
    );

  if (!exploration) {
    return (
      <main className="min-h-screen bg-black text-white p-12">
        Exploration not found.
      </main>
    );
  }

  const career =
    await fetchCareerById(
      exploration.featuredCareerId
    );

  const clues =
    await fetchCluesByExplorationId(
      exploration.id
    );

  const reflections =
    await fetchReflectionsByExplorationId(
      exploration.id
    );

  return (
    <ExplorationRuntime
      exploration={exploration}
      career={career}
      clues={clues}
      reflections={reflections}
    />
  );
}