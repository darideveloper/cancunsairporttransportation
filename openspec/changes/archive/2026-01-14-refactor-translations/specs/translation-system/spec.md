# translation-system Specification

## ADDED Requirements

### Requirement: Global Translation Keys
The translation system MUST support a `global` top-level key for all shared content.

#### Scenario: Assessing Global content
Given I am editing a translation file
When I look at the `global` key
Then I should see `branding`, `topbar`, `footer`, `ratesTable`, and `sections`.
And I should NOT see page-specific content mixed in.

### Requirement: Page Translation Keys
The translation system MUST support a `pages` top-level key for page-specific content.

#### Scenario: Assessing Page content
Given I am editing a translation file
When I look at the `pages` key
Then I should see keys corresponding to specific routes (e.g., `home`, `playaDelCarmen`).
And I should find dynamic text that varies per page inside these keys.

### Requirement: Static vs Dynamic Split
Static text (repeated exactly across pages) MUST be in `global` or `global.sections`.
Dynamic text (changing contexts per page but same section layout) MUST be in `pages.<page>.<section>`.

#### Scenario: Reliable Service Section
Given the "Reliable Service" section appears on multiple pages
When the text is identical
Then it should be sourced from `global.sections.reliableService`.
When the description differs for `playaDelCarmen`
Then the overrides should be in `pages.playaDelCarmen.reliableService`.
