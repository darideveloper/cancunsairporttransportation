# Proposal: Update Results Page Header Texts

The results page header text currently uses generic placeholders ("Available Transportation Options", "Choose the perfect vehicle for your journey"). The user has requested to update these to more engaging marketing copy in both English and Spanish.

## Problem
The current header text satisfies the requirement for a title and description but lacks the punch and emotional appeal desired for the results page.

## Proposed Changes
1. Update `src/messages/en.json` at `pages.results.title` and `pages.results.description`.
2. Update `src/messages/es.json` at `pages.results.title` and `pages.results.description`.

## What Changes

> [!NOTE] Spec: content-update
> - Updated `pages.results.title` and `pages.results.description` in `src/messages/en.json`.
> - Updated `pages.results.title` and `pages.results.description` in `src/messages/es.json`.

## Verification Plan
1. Manual visual check on the `/results` and `/es/resultados` pages.
2. Verify that the correct keys are being used in `Results.astro`.
