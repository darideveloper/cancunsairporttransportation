# Proposal: Internationalize Results Page

## Problem
The Results page (`src/components/pages/store/Results.astro`) currently uses hardcoded English strings for its headings, descriptions, and buttons. Additionally, subcomponents like `RouteMap.tsx` have hardcoded accessibility labels. This prevents the page from being fully localized into Spanish.

## Solution
We will integrate the Results page and its subcomponents into the project's existing i18n system. This involves adding the necessary translation keys to the `en.json` and `es.json` files and updating the components to use the `useTranslations` helper.

## Scope
- **Translation Files**: Add `pages.results` namespace to `src/messages/en.json` and `src/messages/es.json`.
- **Results Component**: Update `src/components/pages/store/Results.astro` to fetch and use translations.
- **RouteMap Subcomponent**: Update `src/components/molecules/booking/RouteMap.tsx` to accept and use localized labels for ARIA attributes.

## Proposed Changes

### 1. Translation Files
Add the following structure to `pages.results` in both English and Spanish message files:
- `title`: Page heading.
- `description`: Sub-heading description.
- `sidebar.route.title`: Title for the route map section (supports Markdown for partial styling).
- `sidebar.route.modifyBtn`: Text for the modification button.
- `sidebar.route.mapAriaLabel`: Accessibility label for the interactive map.

### 2. Results.astro
- Import `getLangFromUrl` and `useTranslations` from `@lib/i18n/utils`.
- Import `marked` for rendering Markdown titles.
- Replace hardcoded text with `t()` calls.
- Pass localized labels to `RouteMap`.

### 3. RouteMap.tsx
- Add a `labels` prop to the `Props` interface.
- Use `labels.mapAriaLabel` for the `aria-label` attribute.

## Verification Plan
1. **Visual Check**: Toggle between English (`/`) and Spanish (`/es/`) versions of the results page to ensure all text updates correctly.
2. **SEO Check**: Verify that the `<title>` and `<meta name="description">` tags are correctly updated via `PageSEO`.
3. **Accessibility**: Inspect the map element to ensure the `aria-label` is translated.
4. **Validation**: Run `openspec validate` to ensure requirements and tasks are consistent.
