import { supabase } from '@/lib/supabase';

export async function fetchCareerById(id: string) {
  const { data, error } = await supabase
    .from('careers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return {
    ...data,

    shortDescription:
      data.short_description,

    salaryRange:
      data.salary_range,

    jobOutlook:
      data.job_outlook,

    whatSurprisedMe:
      data.what_surprised_me,

    whatIWishIKnew:
      data.what_i_wish_i_knew,

    dayInTheLife:
      data.day_in_the_life,

    blsUrl:
      data.bls_url,

    learnMoreUrl:
      data.learn_more_url,

    youtubeVideoId:
      data.youtube_video_id,

    youtubeSearchUrl:
      data.youtube_search_url,
  };
}