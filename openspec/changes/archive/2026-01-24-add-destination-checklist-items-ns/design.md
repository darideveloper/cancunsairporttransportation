# Design: Add Destination Checklist Items

## Architecture
The implementation follows the existing pattern for the Destinations page:
- **Data**: Translations are stored in JSON files in `src/messages/`.
- **Logic**: Astro components fetch translations using `useTranslations`.
- **UI**: Atoms (`CheckListItem`) are used to ensure design consistency.

## Layout Decision
The user provided HTML using a `div` with class `two-elements-items` containing two `div`s.
To align with project conventions and the existing `CheckListItem` atom:
1. We will use `CheckListItem.astro` which renders an `<li>`.
2. We will wrap these in a `<ul>` with Tailwind classes to achieve the two-element layout.
3. The Tailwind classes `grid grid-cols-2 gap-4` will be used on the `<ul>` to mirror the intended "two-elements" layout.

## Translation Keys
The new keys will be placed under `pages.destinations.checklist` to keep them scoped to the Destinations page, following the structure of other service-related content.

## Component Flexibility
We will check if `CheckListItem.astro` needs a small adjustment to be more flexible (e.g., removing the hardcoded `bg-white` if it doesn't match the sidebar's aesthetics, or making it a prop). Based on the sidebar context, white cards are common, so the default `CheckListItem` should fit well.
