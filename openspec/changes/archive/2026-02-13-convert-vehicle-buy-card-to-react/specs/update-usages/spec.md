# Capability: update-usages

## ADDED Requirements

### Requirement: component-usage-update
All existing references to converted `.astro` components MUST be updated to their `.tsx` counterparts.

#### Scenario: Results page update
- **WHEN** `Results.astro` is updated
- **THEN** it MUST import and use the React version of `VehicleBuyCard`.

#### Scenario: Atomic components global update
- **WHEN** an Astro component uses `ButtonCta`, `CheckListItem`, or `StarRating`
- **THEN** it MUST import the new `.tsx` version.
