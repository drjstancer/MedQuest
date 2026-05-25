-- MedQuest exploration-to-ecosystem grouping support.
-- Additive only: existing explorations are not modified unless linked later.

create table if not exists public.exploration_ecosystems (
  exploration_id text not null,
  ecosystem_id text not null,
  created_at timestamptz not null default now(),
  primary key (exploration_id, ecosystem_id)
);

alter table if exists public.explorations
  add column if not exists ecosystem_id text;

insert into public.exploration_ecosystems (
  exploration_id,
  ecosystem_id
)
select
  id,
  ecosystem_id
from public.explorations
where ecosystem_id is not null
on conflict (exploration_id, ecosystem_id) do nothing;
