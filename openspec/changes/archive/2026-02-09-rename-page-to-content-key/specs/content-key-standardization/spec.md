# content-key-standardization Specification

## Purpose
Standardize the identifier used for content lookup across components to improve clarity and maintainability.

## ADDED Requirements

### Requirement: Page Translation Keys (from translation-system)
The translation system MUST support a `pages` top-level key for page-specific content, accessed via a `contentKey` identifier.

#### Scenario: Accessing Page content
Given a component rendered with a specific `contentKey`
When it calls the translation helper `t()`
Then it SHOULD use `pages.${contentKey}.<section>` to retrieve dynamic text.
And the `contentKey` SHOULD default to the `pageKey` provided by the router in page components.

### Requirement: Component Property Naming
All components that dynamically fetch content based on a string identifier MUST use the property name `contentKey`.

#### Scenario: Renaming page prop to contentKey
Given a component like FaqSection or PricingSection
When it receives a prop to identify the page context
Then that prop MUST be named `contentKey`.
And the internal logic MUST use this `contentKey` for translation lookups and data filtering.
