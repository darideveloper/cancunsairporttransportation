# Design: ARIA Labels for Interactable Elements

## Context
The Cancun Airport Transportation website requires WCAG 2.1 AA compliance. An accessibility audit identified 8 components with missing or inadequate ARIA labeling. These components are used across 30+ pages in both English and Spanish, requiring a cross-cutting solution that supports internationalization.

### Stakeholders
- Screen reader users (primary beneficiaries)
- SEO team (improved semantic markup aids search engine understanding)
- Development team (consistent patterns reduce cognitive load)

## Goals
- Add proper ARIA attributes to all identified interactive elements
- Maintain backward compatibility (all props are optional with sensible defaults)
- Support i18n by enabling translated aria-labels via translation system
- Follow SEO best practices for interactive element markup

## Non-Goals
- Refactoring component architecture or file structure
- Adding new visual functionality
- Changing existing behavior for sighted users
- Adding automated accessibility testing infrastructure (separate initiative)

## Decisions

### Decision 1: Optional Props with Intelligent Defaults
**What**: All ARIA props will be optional. When not provided, components will derive accessible names from visible content.

**Why**: Maintains backward compatibility and reduces required changes at call sites. Only contexts requiring custom labels need updates.

**Alternatives Considered**:
- Required props: Rejected as it would break existing usages across 30+ pages
- Context-based auto-generation: Too complex and may produce incorrect labels

### Decision 2: Use Translation System for ARIA Labels
**What**: ARIA labels that need translation will use the existing `t()` translation function.

**Why**: Consistency with i18n system. Screen reader users in Spanish should hear Spanish labels.

**Example**:
```astro
aria-label={ariaLabel || t('global.accessibility.callPhone', { phone })}
```

### Decision 3: ID Generation Strategy
**What**: Use existing `generateId()` utility for unique IDs on interactive elements.

**Why**: Already established pattern in `BasicIconCard.astro`. Ensures uniqueness without manual tracking.

### Decision 4: Prop Naming Convention
**What**: Use standard HTML attribute names: `aria-label`, `title`, `id`.

**Why**: Follows web standards and Astro conventions. Developers don't need to learn custom prop names.

## Component-Specific Patterns

### Translation Schema
New keys to be added to `global.accessibility`:

| Key | English Value | Spanish Value | Purpose |
|-----|---------------|---------------|---------|
| `callAction` | "Call {label}: {phone}" | "Llamar a {label}: {phone}" | ContactItem aria-label |
| `bookingForm` | "Booking form" | "Formulario de reserva" | BookingForm aria-label |
| `viewDetails` | "View details for {item}" | "Ver detalles de {item}" | Card link aria-labels |
| `legal.terms` | "Read our Terms and Conditions" | "Leer nuestros Términos y Condiciones" | Footer link titles |
| `legal.privacy` | "Read our Privacy Policy" | "Leer nuestra Política de Privacidad" | Footer link titles |

### ButtonCta Pattern
```astro
interface Props extends HTMLAttributes<"a"> {
  href?: string;
  ariaLabel?: string; // New: explicit aria-label override
}

// Usage with aria-label
<ButtonCta href="/book" ariaLabel="Book your Cancun airport transfer">
  Book Now
</ButtonCta>
```

### NavLink Pattern
```astro
interface Props {
  link: string;
  label: string;
  ariaLabel?: string; // New
  title?: string;     // New
}
```

### ContactItem Pattern
```astro
// Auto-generated aria-label from props
<a
  href={`tel:${cleanPhone}`}
  aria-label={`${t('global.accessibility.call')} ${label}: ${phone}`}
>
```

## Risks / Trade-offs

### Risk: Over-labeling
**Risk**: Adding redundant aria-labels where visible text is sufficient.
**Mitigation**: Follow "If visible text describes the action, skip aria-label" rule. Only add when context is missing.

### Risk: Translation Gaps
**Risk**: Missing translations for new accessibility strings.
**Mitigation**: Add all new translation keys to both `en.json` and `es.json` in the same PR.

### Risk: Performance Impact
**Risk**: Additional props increase component size.
**Mitigation**: Optional props add negligible overhead. No runtime performance impact.

## Migration Plan

1. **Phase 1**: Update component interfaces (add optional props)
2. **Phase 2**: Add translation strings to both language files
3. **Phase 3**: Update components to use new props/defaults
4. **Phase 4**: Update key call sites with explicit labels where needed
5. **Verification**: Run axe-core audit on key pages

### Rollback
All changes are additive. Removing the optional props would restore previous behavior with no breaking changes.

## Open Questions
None - all architectural decisions are straightforward prop additions.
