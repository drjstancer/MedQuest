import { supabase } from '@/lib/supabase';

export async function fetchCluesByExplorationId(
  explorationId: string
) {
  const { data, error } = await supabase
    .from('clues')
    .select('*')
    .eq('exploration_id', explorationId)
    .order('display_order');

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((clue) => ({
    ...clue,

    explorationId:
      clue.exploration_id,

    careerId:
      clue.career_id,

    order:
      clue.display_order,

    clueText:
      clue.clue_text,

    timePenaltySeconds:
      clue.time_penalty_seconds,
  }));
}
