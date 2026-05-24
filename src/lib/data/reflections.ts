import { supabase } from '@/lib/supabase';

export async function fetchReflectionsByExplorationId(
  explorationId: string
) {
  const { data, error } = await supabase
    .from('reflections')
    .select('*')
    .eq('exploration_id', explorationId);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((reflection) => ({
    ...reflection,

    explorationId:
      reflection.exploration_id,
  }));
}