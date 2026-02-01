# Fix Heading Hierarchy

## Summary

Fix HTML heading hierarchy violations across multiple pages to comply with SEO best practices and accessibility standards. The project's `project.md` mandates "Enforce a logical `h1` through `h6` structure" but several pages skip heading levels.

## Problem Statement

A build analysis revealed **7 pages** with heading hierarchy violations:

| Page | Issue | Impact |
|------|-------|--------|
| `/destinations/` | H1 → H3 skip (missing H2 for content sections) | 🟠 Medium |
| `/es/destinos/` | H1 → H3 skip (missing H2 for content sections) | 🟠 Medium |
| `/privacy/` | H1 → H3 skip (no content H2s before footer) | 🟡 Medium |
| `/es/privacidad/` | H1 → H3 skip (no content H2s before footer) | 🟡 Medium |
| `/my-reservation/` | H2 → H4 skip ("Need help?" uses H4) | 🔴 High |
| `/es/mi-reservacion/` | H2 → H4 skip ("Necesitas ayuda?" uses H4) | 🔴 High |
| `/404.html` | H1 → H3 skip (no H2 content) | 🟡 Low |

These violations:
- Confuse screen readers and assistive technologies
- Negatively impact SEO rankings
- Violate the project's own standards in `project.md`

## Proposed Solution

### 1. Destinations Page (`Destinations.astro`)
- **Root cause**: `BasicImageCard` component uses `<h3>` but there's no parent `<h2>` section before the cards.
- **Fix**: Wrap the highlight cards section with an H2 section heading using `SectionHeading`.

### 2. Legal Pages (Privacy via `LegalLayout.astro` + MDX content)
- **Root cause**: MDX content starts directly with paragraphs or bold text, no H2 sections.
- **Fix**: Add H2 section headings within the MDX content to structure the legal text properly.

### 3. Reservation Page (`Reservation.astro`)
- **Root cause**: "Need help?" section uses `<h4>` directly after an `<h2>`, skipping `<h3>`.
- **Fix**: Change `<h4>` to `<h3>` for the "Need help?" section.

### 4. 404 Page (`404.astro`)
- **Root cause**: Page only has H1 "Page Not Found" with no subheadings before footer H3s.
- **Fix**: Add an H2 subtitle or accept this as a utility page exception (low priority).

## Scope

### In Scope
- Fixing heading hierarchy in affected page components
- Updating MDX content for legal pages
- Updating translation files if needed for new H2 section titles
- Ensuring all pages pass heading hierarchy validation

### Out of Scope
- Footer H3s are acceptable (they follow content H2s and are under semantic `<footer>`)
- Creating new components
- Changes to other SEO aspects

## Success Criteria

1. All pages have exactly one `<h1>` ✅ (already passes)
2. No heading level skips (H1 must be followed by H2, H2 by H3, etc.)
3. `npm run build` succeeds
4. Post-build validation shows zero heading hierarchy violations

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Content changes affect translations | Update both `en.json` and `es.json` simultaneously |
| MDX heading changes affect existing styles | Use existing `prose` classes in LegalLayout |
| Breaking semantic structure | Validate with accessibility tools post-change |

## Related Work

- **Specs**: `seo-optimization`, `base-seo`, `ui-section-heading`, `destinations-service-cards`
- **Project Standard**: `project.md` line 39: "Heading Hierarchy: Enforce a logical `h1` through `h6` structure"
