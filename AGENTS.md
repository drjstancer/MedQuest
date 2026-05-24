<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# MedQuest Agent Instructions

## Project Overview
MedQuest is a cinematic healthcare career exploration platform built with:
- Next.js 16
- TypeScript
- Tailwind
- Vercel deployment

The project focuses on:
- interactive healthcare explorations
- career discovery
- educational immersion
- scalable exploration content

## Current Priorities
1. Supabase migration
2. Content scalability
3. Reusable exploration architecture
4. Stable production builds

## Constraints
- Maintain current cinematic UX
- Do NOT redesign educational flow
- Do NOT overengineer auth/admin systems
- Preserve current routing structure
- Preserve IDs/slugs exactly

## Canonical Career Schema

id
slug
title
shortDescription
pathway
overview
education
salaryRange
jobOutlook
whatSurprisedMe
whatIWishIKnew
misconception
dayInTheLife
blsUrl
learnMoreUrl?
youtubeVideoId?
youtubeSearchUrl?
tags

## Naming Rules
- IDs are used for relationships
- Slugs are used for routes/URLs
- Use explorationId, NOT explorationSlug
- Remove deprecated fields:
  - professionalAssociation
  - youtubeSearch
  <!-- END:nextjs-agent-rules -->