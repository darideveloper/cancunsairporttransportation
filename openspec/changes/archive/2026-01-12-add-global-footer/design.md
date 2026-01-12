# Design: Global Footer

## Architecture
The footer will be implemented as a static Astro component to ensure zero JavaScript on the client side, aligning with the project's performance goals.

### Component Structure
- `Footer.astro` (Organism): The main container managing the grid layout and high-level sections.
- `BottomBar.astro` (Molecule): A smaller component specifically for the copyright notice and legal links.

### Data Flow
- All content will be fetched from the translation JSON files using the current `src/messages/` system.
- The `Footer` component will receive the `lang` parameter to fetch the correct localized strings.

### Layout Details
- **Mobile**: Single column (flex-col).
- **Tablet**: Two-column grid (`grid-cols-2`).
- **Desktop**: Four-column grid (`grid-cols-4`).
- **Styling**: Tailwind CSS classes only, no scoped `<style>` blocks.

### Accessibility & SEO
- Use `<footer>` as the root element.
- Use `<nav>` for link lists with descriptive `aria-label`.
- Use `<ul>` and `<li>` for list items to improve screen reader navigation.
- Use `<a>` tags with `rel="noopener noreferrer"` for external links.
- Implement micro-formats like `tel:` and `mailto:`.
- Ensure the logo has an appropriate `alt` text.

## Translation Keys Structure
```json
{
  "globalSections": {
    "footer": {
      "tagline": "...",
      "columns": {
        "destinations": { "title": "...", "links": [...] },
        "services": { "title": "...", "links": [...] },
        "information": { "title": "...", "links": [...] },
        "contact": { "title": "...", "links": [...] },
        "moreServices": { "title": "...", "links": [...] }
      },
      "bottomBar": {
        "copyright": "...",
        "terms": "..."
      }
    }
  }
}
```
