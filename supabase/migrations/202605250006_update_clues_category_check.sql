-- Expand clue category validation to match the canonical MedQuest type.
-- NOT VALID preserves existing production rows while enforcing the check for new writes.

alter table if exists public.clues
  drop constraint if exists clues_category_check;

alter table if exists public.clues
  add constraint clues_category_check
  check (
    category in (
      'environment',
      'skills',
      'tools',
      'communication',
      'teamwork',
      'education',
      'patient-care',
      'critical-thinking',
      'systems',
      'technology',
      'community'
    )
  )
  not valid;
