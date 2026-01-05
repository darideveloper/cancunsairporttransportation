# Design: Top Bar Component

## Architecture
The `TopBar` will be a static Astro component. Since it doesn't require complex client-side state (language switching is route-based), it won't need an interactive island.

## Component Structure (Atomic Design)

### Atoms (`src/components/atoms/`)
- **`LangLink.astro`**: A simple link for toggling language segments.
- **`SocialIcon.astro`**: A wrapper for `react-icons` with consistent styling.
- **`ContactItem.astro`**: A text + link group for phone numbers.

### Molecules (`src/components/molecules/`)
- **`TopBar.astro`**: Orchestrates the atoms into the three-column layout.
  - **Layout**: `flex justify-between items-center px-4 py-2 text-xs border-b border-brand-medium/10`
  - **Left**: `LangLink.astro`
  - **Center**: List of `ContactItem.astro`
  - **Right**: List of `SocialIcon.astro`

## i18n Strategy
New keys in `src/messages/*.json`:
- `globalSections.topbar.languageLabel`: "Language"
- `globalSections.topbar.mexicoPhone`: "Mexico & Rest of the world"
- `globalSections.topbar.usaCanadaPhone`: "USA / Canada"

## SEO & Accessibility

- **Semantic HTML**: The `TopBar` will use the `<section>` tag with an `aria-label="Utility navigation"`.
- **ARIA Labels**: 
    - Social links will have `aria-label="Follow us on Facebook"` and `aria-label="Follow us on Instagram"`.
    - Language switcher will have a `title` attribute for desktop hover.
- **Language Crawling**: 
    - Language toggles will use standard `<a>` tags with `href` to ensure search engines can discover the different language versions of the site.
- **Micro-formats**: Phone numbers will use the `tel:` protocol for both accessibility and mobile interaction.
- **Contrast**: Text uses `#757575` on white/off-white, ensuring it meets accessibility contrast ratios for small text.

## Styling
- Background: `#FFFFFF` or `var(--color-brand-bg)`
- Text: `var(--color-brand-medium)` (#757575)
- Hover Link: `var(--color-brand-primary)` (#FF8C00)
- Font: `var(--font-sans)` (Inter Variable)

## Constraints
- Must be responsive. On mobile, we might hide the phone numbers or stack them. For the initial version, we will focus on the desktop layout shown in the image and use a simple wrap for mobile.
