# file-structure Specification

## Purpose
TBD - created by archiving change move-merida-gallery-images. Update Purpose after archive.
## Requirements
### Requirement: Merida Image Assets
The system MUST store Merida gallery images in a dedicated directory.

#### Scenario: Merida gallery assets location
The gallery images for the Merida destination page must be located in `src/assets/images/destinations/cancun-to-merida/gallery/`.

- `client_1.webp`
- `client_2.webp`
- `client_3.webp`
- `client_4.webp`

### Requirement: Search Component Directory
The system SHALL organize search-related components in a lowercase directory.

#### Scenario: Search folder location
- **WHEN** developer looks for search components
- **THEN** they SHOULD be located in `src/components/search/`.

