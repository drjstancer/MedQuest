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
import {
  getExplorationFromCatalog,
} from '@/lib/catalog';

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

  const catalogExploration =
    !exploration
      ? getExplorationFromCatalog(resolvedParams.slug)
      : null;

  if (!exploration && !catalogExploration) {
    return (
      <main className="min-h-screen bg-black text-white p-12">
        Exploration not found.
      </main>
    );
  }

  if (catalogExploration) {
    return (
      <ExplorationRuntime
        exploration={catalogExploration}
        career={catalogExploration.featuredCareer ?? null}
        clues={catalogExploration.clues}
        reflections={catalogExploration.reflections}
      />
    );
  }

  const supabaseExploration = exploration;

  const career =
    await fetchCareerById(
      supabaseExploration.featuredCareerId
    );

  const clues =
    await fetchCluesByExplorationId(
      supabaseExploration.id
    );

  const reflections =
    await fetchReflectionsByExplorationId(
      supabaseExploration.id
    );

  return (
    <ExplorationRuntime
      exploration={supabaseExploration}
      career={career}
      clues={clues}
      reflections={reflections}
    />
  );
}
