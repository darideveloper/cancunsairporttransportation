# Standardized LinkList Component

## ADDED Requirements

### Requirement: Support simple link items
The `LinkList` component MUST be able to render a list of simple links, each consisting only of text and a href, preserving the existing concise style.

#### Scenario: Rendering a simple link list
Given I use the `LinkList` component
And I provide a `title` "Destinations"
And I provide items with just `text` and `href`
When the component renders
Then it should display the section title
And it should display a list of links
And each link should display the text only.

### Requirement: Support titled items (Contact style)
The `LinkList` component MUST support items with an optional label (`title`) displayed above the main text/value, useful for contact information.

#### Scenario: Rendering a list with item titles (Contact style)
Given I use the `LinkList` component
And I provide items with `title` (label), `text`, and `href`
When the component renders
Then it should display the item title (small/uppercase) above the item text.
And the item text should be the main link.

### Requirement: Support non-link text items
The `LinkList` component MUST support rendering items that are purely informational text without a hyperlink.

#### Scenario: Rendering non-link items
Given I use the `LinkList` component
And I provide an item with `text` but no `href`
When the component renders
Then it should display the text in a non-interactive element (e.g. span or p).
