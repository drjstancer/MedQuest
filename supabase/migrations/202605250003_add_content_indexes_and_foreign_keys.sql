-- MedQuest canonical content indexes and relationship constraints.
-- Foreign keys that touch existing production tables are added NOT VALID
-- so current legacy rows are preserved. They can be validated after cleanup.

create index if not exists careers_slug_idx
  on public.careers (slug)
  where slug is not null;

create index if not exists explorations_slug_idx
  on public.explorations (slug)
  where slug is not null;

create index if not exists explorations_featured_career_id_idx
  on public.explorations (featured_career_id);

create index if not exists explorations_ecosystem_id_idx
  on public.explorations (ecosystem_id);

create index if not exists clues_exploration_id_display_order_idx
  on public.clues (exploration_id, display_order);

create index if not exists clues_career_id_idx
  on public.clues (career_id);

create index if not exists reflections_exploration_id_idx
  on public.reflections (exploration_id);

create index if not exists exploration_ecosystems_ecosystem_id_idx
  on public.exploration_ecosystems (ecosystem_id);

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'explorations_featured_career_id_fkey'
      and conrelid = 'public.explorations'::regclass
  ) then
    alter table public.explorations
      add constraint explorations_featured_career_id_fkey
      foreign key (featured_career_id)
      references public.careers (id)
      on update cascade
      on delete set null
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'explorations_ecosystem_id_fkey'
      and conrelid = 'public.explorations'::regclass
  ) then
    alter table public.explorations
      add constraint explorations_ecosystem_id_fkey
      foreign key (ecosystem_id)
      references public.ecosystems (id)
      on update cascade
      on delete set null
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'clues_exploration_id_fkey'
      and conrelid = 'public.clues'::regclass
  ) then
    alter table public.clues
      add constraint clues_exploration_id_fkey
      foreign key (exploration_id)
      references public.explorations (id)
      on update cascade
      on delete cascade
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'clues_career_id_fkey'
      and conrelid = 'public.clues'::regclass
  ) then
    alter table public.clues
      add constraint clues_career_id_fkey
      foreign key (career_id)
      references public.careers (id)
      on update cascade
      on delete set null
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'reflections_exploration_id_fkey'
      and conrelid = 'public.reflections'::regclass
  ) then
    alter table public.reflections
      add constraint reflections_exploration_id_fkey
      foreign key (exploration_id)
      references public.explorations (id)
      on update cascade
      on delete cascade
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'exploration_ecosystems_exploration_id_fkey'
      and conrelid = 'public.exploration_ecosystems'::regclass
  ) then
    alter table public.exploration_ecosystems
      add constraint exploration_ecosystems_exploration_id_fkey
      foreign key (exploration_id)
      references public.explorations (id)
      on update cascade
      on delete cascade
      not valid;
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'exploration_ecosystems_ecosystem_id_fkey'
      and conrelid = 'public.exploration_ecosystems'::regclass
  ) then
    alter table public.exploration_ecosystems
      add constraint exploration_ecosystems_ecosystem_id_fkey
      foreign key (ecosystem_id)
      references public.ecosystems (id)
      on update cascade
      on delete cascade
      not valid;
  end if;
end $$;
