# Consolidate Configuration

## ADDED Requirements

### Requirement: Configuration Source of Truth
The project MUST have a single source of truth for all business and contact data, avoiding duplication and inconsistency.

#### Scenario: Developer accessing contact info
- **GIVEN** a developer needs current phone numbers or address
- **WHEN** they check the project structure
- **THEN** all business data MUST be located in `src/data/site-config.ts`
- **AND** `src/lib/contact.ts` MUST NOT exist.

### Requirement: SEO Data Consistency
The SEO metadata generation MUST use the same business data values as the user-facing UI components to ensure data accuracy.

#### Scenario: Generating SEO tags
- **GIVEN** the `BaseSEO` component rendering metadata
- **WHEN** it accesses `BUSINESS_DATA`
- **THEN** it MUST receive the exact same values (Address, Phone) used in the visible UI components.

### Requirement: Detailed Configuration Exports
The configuration file MUST expose granular constants for specific contact details (phones, emails, maps) to support rich UI components.

#### Scenario: Configuring rich UI components
- **GIVEN** a component like `TopBar` that needs dual phone numbers (MX/USA)
- **WHEN** importing from `src/data/site-config.ts`
- **THEN** it MUST be able to import `PHONES` object with `mexico` and `usa` keys defined.
