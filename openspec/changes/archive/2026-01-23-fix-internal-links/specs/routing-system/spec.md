# routing-system Specification

## MODIFIED Requirements

### Requirement: Dynamic Utility Linking
- The `getLocalizedPath(pageKey, targetLang)` utility MUST return the correct URL for any given page and language.
#### Scenario: Components usage
- The `NavLinks`, `MenuBar` and `Logo` components MUST use `getLocalizedPath` to resolve their `href` attributes.
- Hardcoded string paths (e.g. `href="/contact"`) are FORBIDDEN in navigation components.

### Requirement: Route Map Configuration
- The routing configuration MUST be stored in `src/messages/en.json` and `src/messages/es.json` under a `routes` key.
- Each page key MUST be identical in both files to ensure correct cross-language mapping.
#### Scenario: Contact page
- The "contact" page MUST be defined in the `routes` object for both languages.
