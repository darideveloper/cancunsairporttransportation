# reusable-card-section Specification

## Purpose
Defines the behavior for the reusable CardGridSection component used to display grids of cards like Pricing and Destinations.

## Requirements
### Requirement: Card Grid Section Component
The system MUST provide a reusable card grid section component that handles dynamic rendering of pricing or destination cards with configurable layouts and translations.

#### Scenario: Render Pricing Section
Given a list of pricing items and a configuration
When the `CardGridSection` is rendered with `pricingTransportation` data
Then it should display a semantically correct section with "Pricing" heading
And it should invoke `PricingCard` for each item
And it should apply the `items-end` grid alignment

#### Scenario: Render Destinations Section
Given a list of destination items and a configuration
When the `CardGridSection` is rendered with `destinations` data
Then it should display "Destinations" heading
And each card should render with `reverse={true}`
And the grid should use `items-start` (default) alignment
And it should show a "View More" button at the bottom

#### Scenario: Dynamic Translations
Given a translation scope "my.scope" and an item with key "item1"
When the component renders
Then it should look up translations for "my.scope.items1.title"

#### Scenario: Image Aspect Ratio
Given an `imageClass` prop
When the component renders
Then it should apply that class to the `Image` component inside the card

