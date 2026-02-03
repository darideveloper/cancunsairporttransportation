# Web Chat Requirements

## ADDED Requirements

### Requirement: Widget Visibility
The chat widget MUST be present on every page of the application to ensure support availability.

#### Scenario: Global Availability
Given a user visits any page on the website
Then the Tawk.to chat widget should be visible in the bottom right corner (default position)
And the widget script should be loaded from the correct source URL `https://embed.tawk.to/682b4275b26df01905316062/1irkfn78h`

### Requirement: API Availability
The integration MUST expose the Tawk.to API for programmatic control by other components.

#### Scenario: programmatic access
Given the page has finished loading
Then the global object `Tawk_API` should be defined on the `window` object
And calling `Tawk_API.maximize()` should open the chat window
