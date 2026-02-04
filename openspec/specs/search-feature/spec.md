# search-feature Specification

## Purpose
TBD - created by archiving change implement-site-search. Update Purpose after archive.
## Requirements
### Requirement: Search Index Generation
The system SHALL generate a static JSON search index for each supported language (`en`, `es`) at build time, accessible via a standard URL.

#### Scenario: Build process generation
- **WHEN** the project is built using `astro build`
- **THEN** `dist/en/search.json` and `dist/es/search.json` files exist
- **AND** the files contain an array of objects with `title`, `description`, `url`, and `type`.

#### Scenario: Development mode access
- **WHEN** running in `npm run dev`
- **AND** a request is made to `/en/search.json`
- **THEN** it returns the most recent content data without requiring a restart.

### Requirement: Search Interface
The system SHALL provide a search input that filters content instantly on the client side.

#### Scenario: Filtering results
- **WHEN** the user types "taxi" into the search bar
- **THEN** the dropdown displays list items where the title or description contains "taxi"
- **AND** clicking a result navigates to that URL.

#### Scenario: Language Context
- **WHEN** the user is viewing a Spanish page (`/es/...`)
- **THEN** the search bar queries `/es/search.json`
- **AND** only shows Spanish content results.

