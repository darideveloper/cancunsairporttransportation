# Proposal: Render BasicImageCards in Destinations.astro and Clean Styles

Render the `BasicImageCard` component twice in the `Destinations.astro` organism and remove all default styles from the `BasicImageCard` component to allow for full external styling control.

## User Context
The user wants to add informational cards to `Destinations.astro`. Additionally, the `BasicImageCard` molecule should be converted into a "headless" or style-less component, keeping only the structure and the empty `class` attributes.

## Scope
- Update `src/messages/en.json` and `src/messages/es.json` with the new content for the "Destinations" page.
- Modify `src/components/molecules/BasicImageCard.astro` to remove all Tailwind CSS classes from its elements, leaving only empty `class=""` attributes.
- Modify `src/components/organisms/Destinations.astro` to import and render `BasicImageCard` twice.
- Since the component will have no styles, any necessary styling for these specific instances will be handled in `Destinations.astro` or via parent classes.

## Proposed Changes

### Translations
Add a new `highlights` section to `pages.destinations` in both `en.json` and `es.json`.

**Keys to add:**
- `pages.destinations.highlights.reserve.*`
- `pages.destinations.highlights.contact.*`

### BasicImageCard.astro
- Remove all style classes from `article`, `img`, `Image`, `div`, and `h3`.
- Set `class=""` for all elements.

### Destinations.astro
- Import `BasicImageCard`.
- Render the cards at the bottom of the section.
- Apply styling if needed via global classes or local styles (though the user asked to "remove all the styles" in the component).

## Verification Plan
1. Validate translations are correctly loaded.
2. Check that `BasicImageCard` renders as a semantic but style-less container.
3. Run `openspec validate` to ensure compliance.
