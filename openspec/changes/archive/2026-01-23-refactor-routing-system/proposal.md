# Refactor Routing System

## Problem
Currently, routing configuration is distributed across `src/messages/en.json` and `src/messages/es.json`. Steps to add a new page or change a URL are duplicated and brittle. It is difficult to get a global view of the application's URL structure.

## Solution
Centralize all routing logic into a single configuration file `src/lib/i18n/routes.ts`. This file will serve as the single source of truth for both static path generation and link resolution.

## Plan
1.  Create `src/lib/i18n/routes.ts` containing the merged route map.
2.  Rename `astro.config.mjs` to `astro.config.ts` to allow importing TypeScript files.
3.  Update `astro.config.ts` to import `routes.ts` and dynamically generate the legacy `/en/` redirects.
4.  Update `src/lib/i18n/utils.ts` to consume the new `routes.ts` file.
5.  Update `src/pages/[...path].astro` to generate paths from `routes.ts`.
6.  Remove routing configuration from translation JSONs.

