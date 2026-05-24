import { supabase } from '@/lib/supabase';

export async function fetchExplorations() {
  const { data, error } = await supabase
    .from('explorations')
    .select('*');

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((exploration) => ({
  ...exploration,
  cinematicIntro:
    exploration.cinematic_intro,

  estimatedDurationSeconds:
    exploration.estimated_duration_seconds,

  featuredCareerId:
    exploration.featured_career_id,

  revealTitle:
    exploration.reveal_title,

  revealNarrative:
    exploration.reveal_narrative,

  recommendedNext:
    exploration.recommended_next,
}));
}

export async function fetchExplorationBySlug(
  slug: string
) {
  const { data, error } = await supabase
    .from('explorations')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return {
  ...data,

  cinematicIntro:
    data.cinematic_intro,

  estimatedDurationSeconds:
    data.estimated_duration_seconds,

  featuredCareerId:
    data.featured_career_id,

  revealTitle:
    data.reveal_title,

  revealNarrative:
    data.reveal_narrative,

  recommendedNext:
    data.recommended_next,
};
}