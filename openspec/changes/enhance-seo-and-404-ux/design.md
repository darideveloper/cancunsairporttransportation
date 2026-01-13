# Design: SEO and UX Enhancements

## Context
We identified critical SEO and UX gaps in the current implementation of the global layout and error pages.

## Architectural Changes

### Global Layout (`Layout.astro`)
- **Current**: `<html lang="en">` is static.
- **Proposed**: Accept a `lang` prop or derive it from `Astro.params`.
  - Since `Layout.astro` is used by *all* pages, we must ensure it defaults gracefully if `lang` is missing (though our route structure `/[lang]/...` suggests it should always be available or derivable).
  - We will prefer passing `lang` as a prop if available, or falling back to `Astro.currentLocale` or `Astro.params.lang`.

### 404 Page (`404.astro`)
- **Interaction Change**:
  - `history.back()` -> Direct link to `/`.
  - This fundamentally changes the user journey from "try to go back to where you were" (which might be a broken link) to "start over from a safe place".
