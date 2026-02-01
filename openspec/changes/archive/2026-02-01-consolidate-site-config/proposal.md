# Proposal: Consolidate Site Configuration and Contact Data

## Context
Currently, the project maintains two sources of truth for contact and business information:
1. `src/lib/contact.ts`: Contains detailed, formatted contact info (Phones, Email, Address, Socials) used by UI components.
2. `src/data/site-config.ts`: Contains specific `BUSINESS_DATA` structure used primarily for SEO metadata.

This duplication leads to inconsistency (e.g., different phone numbers, address formats) and increased maintenance burden.

## Objective
Consolidate all business and contact information into a single file: `src/data/site-config.ts`.
Eliminate `src/lib/contact.ts` and refactor all consumers to use the centralized configuration.

## Solution strategy
1.  **Enhance `src/data/site-config.ts`**: Move the granular constants (`PHONES`, `EMAIL`, `ADDRESS`, `SOCIAL_LINKS`, `GOOGLE_MAPS`, `BUSINESS_HOURS`) from `src/lib/contact.ts` into `src/data/site-config.ts`.
2.  **Unify `BUSINESS_DATA`**: Refactor `BUSINESS_DATA` in `site-config.ts` to derive its values from these granular constants, ensuring consistency between SEO tags and UI display.
3.  **Refactor Consumers**: Update all components (`TopBar`, `Footer`, `Contact` page, etc.) to import directly from `src/data/site-config.ts`.
4.  **Cleanup**: Delete `src/lib/contact.ts`.

## Risks
-   **Breaking SEO**: `BaseSEO.astro` relies on `BUSINESS_DATA` structure. We must ensure the refactored `BUSINESS_DATA` maintains or safely extends the expected schema.
-   **Data Mismatch**: There are minor discrepancies between the two files (e.g., Address "Region" vs "State"). We will prioritize `src/lib/contact.ts` values as they appear to be more detailed and display-ready, but we must verify if "CUN" vs "Quintana Roo" affects SEO schemas significantly. (We will use the full state name for better schema validity).

## Outcome
A single, authoritative file for all site configuration and contact details.
