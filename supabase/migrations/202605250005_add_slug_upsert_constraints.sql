-- Support idempotent seed upserts by canonical slug keys.
-- Existing ecosystem rows keep their canonical IDs and receive matching slugs.

alter table if exists public.ecosystems
  add column if not exists slug text;

update public.ecosystems
set slug = id
where slug is null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'ecosystems_slug_key'
      and conrelid = 'public.ecosystems'::regclass
  ) then
    alter table public.ecosystems
      add constraint ecosystems_slug_key unique (slug);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'careers_slug_key'
      and conrelid = 'public.careers'::regclass
  ) then
    alter table public.careers
      add constraint careers_slug_key unique (slug);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'explorations_slug_key'
      and conrelid = 'public.explorations'::regclass
  ) then
    alter table public.explorations
      add constraint explorations_slug_key unique (slug);
  end if;
end $$;
