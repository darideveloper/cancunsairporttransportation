# Tasks: Make Transportation Services Dynamic

## Phase 1: Preparation
- [x] Research existing dynamic components (`FaqSection`, `PricingSection`).
- [x] Create OpenSpec proposal for `make-transportation-services-dynamic`.
  - [x] Create `proposal.md`.
  - [x] Create `design.md`.
  - [x] Create `tasks.md`.
  - [x] Create spec delta.
- [x] Validate proposal with `openspec validate make-transportation-services-dynamic --strict`.

## Phase 2: Implementation
- [x] Update translation files (`en.json`, `es.json`) to include page-specific transportation service content.
- [x] Refactor `TransportationServices.astro` to accept `page` prop and fetch dynamic translations.
- [x] Update `index.astro` to pass `page="home"` to `TransportationServices`.
- [x] Update Playa del Carmen page to pass `page="playaDelCarmen"` to `TransportationServices`.

## Phase 3: Verification
- [x] Verify content rendering on Home page (EN/ES).
- [x] Verify content rendering on Playa del Carmen page (EN/ES).
- [x] Verify optional description behavior.
- [x] Run `npm run build` to ensure no regressions.
- [x] Final `openspec validate` check.
