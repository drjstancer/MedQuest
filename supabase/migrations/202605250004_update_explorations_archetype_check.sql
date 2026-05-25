-- Expand exploration archetype validation to match the canonical MedQuest type.
-- NULL remains allowed for backward compatibility with older rows.

alter table if exists public.explorations
  drop constraint if exists explorations_archetype_check;

alter table if exists public.explorations
  add constraint explorations_archetype_check
  check (
    archetype in (
      'emergency-response',
      'longitudinal-care',
      'diagnostic-mystery',
      'rehabilitation',
      'public-health',
      'mental-health',
      'surgical-care',
      'healthcare-operations',
      'community-care',
      'medical-technology'
    )
  );
