# Spec Component: Pricing Card I18n

## ADDED Requirements

### Requirement: Localized Badge Text
The "Most Popular" badge on the pricing card SHALL display text localized to the current page language, sourced from translation files.

#### Scenario: Displaying "Most Popular" badge
Given the user is viewing a pricing card marked as a best seller
When the page language is "es"
Then the badge should read "Más Popular" (or equivalent translation)
And when the page language is "en"
Then the badge should read "Most Popular"

### Requirement: Localized Price Label
The "Price from" label on the pricing card SHALL display text localized to the current page language, sourced from translation files.

#### Scenario: Displaying "Price From" label
Given the user is viewing a pricing card
When the page language is "es"
Then the label should read "Precio desde"
But when the page language is "en"
Then the label should read "Price from"
