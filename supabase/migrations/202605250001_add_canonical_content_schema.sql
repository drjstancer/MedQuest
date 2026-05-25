-- MedQuest canonical content schema support.
-- Additive only: preserves existing production rows.

create table if not exists public.ecosystems (
  id text primary key,
  title text not null,
  description text not null,
  featured_pathways text[] not null default '{}',
  intended_difficulty_distribution jsonb not null default '{"Easy": 0, "Medium": 0, "Hard": 0}'::jsonb,
  age_bands text[] not null default '{}',
  future_capabilities text[] not null default '{}',
  tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table if exists public.careers
  add column if not exists slug text,
  add column if not exists title text,
  add column if not exists short_description text,
  add column if not exists pathway text,
  add column if not exists overview text,
  add column if not exists education text,
  add column if not exists salary_range text,
  add column if not exists job_outlook text,
  add column if not exists what_surprised_me text,
  add column if not exists what_i_wish_i_knew text,
  add column if not exists misconception text,
  add column if not exists day_in_the_life text,
  add column if not exists bls_url text,
  add column if not exists learn_more_url text,
  add column if not exists youtube_video_id text,
  add column if not exists youtube_search_url text,
  add column if not exists tags text[] not null default '{}';

alter table if exists public.explorations
  add column if not exists slug text,
  add column if not exists title text,
  add column if not exists cinematic_intro text,
  add column if not exists difficulty text,
  add column if not exists archetype text,
  add column if not exists estimated_duration_seconds integer,
  add column if not exists featured_career_id text,
  add column if not exists clue_ids text[] not null default '{}',
  add column if not exists reflection_prompt_ids text[] not null default '{}',
  add column if not exists reveal_title text,
  add column if not exists reveal_narrative text,
  add column if not exists recommended_next text[] not null default '{}',
  add column if not exists tags text[] not null default '{}';

alter table if exists public.clues
  add column if not exists exploration_id text,
  add column if not exists career_id text,
  add column if not exists display_order integer,
  add column if not exists clue_text text,
  add column if not exists time_penalty_seconds integer not null default 0,
  add column if not exists category text;

alter table if exists public.reflections
  add column if not exists exploration_id text,
  add column if not exists prompt text;
