# Proposal: Genericize TransportationServices and rename to InfoIconCard

This proposal refactors the `TransportationServices.astro` organism into a generic `InfoIconCard.astro` component. While the original `TransportationServices.astro` section will be preserved, it will now internally use the new generic `InfoIconCard` component. This allows the core functionality (grid of icons/info) to be reused across other parts of the site.

## User Review Required

> [!IMPORTANT]
> The generic version of the section will be named `InfoIconCard.astro`. This naming convention was specifically requested, and it will serve as the "core/internal/small component" (reusable organism/molecule) for future sections.

> [!NOTE]
> `TransportationServices.astro` will be kept as a specific implementation for the homepage, but it will be refactored to wrap `InfoIconCard.astro`.

## Proposed Changes

### Components

#### [NEW] [InfoIconCard.astro](file:///develop/astro/cancunsairporttransportation/src/components/organisms/InfoIconCard.astro)
- Generic version of the transportation services section.
- Props:
    - `title`: Section title.
    - `description`: Section description.
    - `items`: Array of objects (title, text, Icon).
    - `class`: For external styling of the section container.
    - `titleColor`: To customize the title color.
    - `TopIcon`: Optional icon to the left of the title.
    - `BottomIcon`: Optional icon at the bottom of the section.

#### [MODIFY] [TransportationServices.astro](file:///develop/astro/cancunsairporttransportation/src/components/organisms/TransportationServices.astro)
- Refactored to use `InfoIconCard` internally.
- Passes existing translations and service data to `InfoIconCard`.

### Pages

#### [MODIFY] [index.astro](file:///develop/astro/cancunsairporttransportation/src/pages/[lang]/index.astro)
- No functional change needed as `TransportationServices` is preserved, but it now leverages the generic component.

## Verification Plan

### Automated Tests
- `openspec validate genericize-service-grid --strict`

### Manual Verification
- Verify the "Transportation Services" section on the homepage still renders correctly.
- Test `InfoIconCard` in a separate area with custom `class`, `titleColor`, and `TopIcon`/`BottomIcon` to ensure generic functionality.
