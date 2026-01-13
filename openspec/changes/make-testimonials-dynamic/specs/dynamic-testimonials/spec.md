# Spec: Dynamic Testimonials Capability

## ADDED Requirements

### Requirement: Accept `title` and `description` props to override default content
The component MUST accept optional `title` and `description` props. If provided, these values MUST replace the default localized title and description.

#### Scenario: Custom Title
Given the Testimonials component is used
When `title` prop is "Custom Title"
Then the H2 heading displays "Custom Title"

### Requirement: Accept `items` prop to render custom testimonials
The component MUST accept an optional `items` prop. This prop MUST be an array of objects containing testimonial data (image, name, text, stars, date).

#### Scenario: Custom Items
Given the Testimonials component is used
When `items` prop is provided with an array of 3 objects
Then 3 Testimonial molecules are rendered with the provided data
And the JSON-LD structured data reflects these 3 items

### Requirement: Fallback to default content if props are missing
When the optional props are not provided, the component MUST maintain its original behavior by using the default translation keys and imported images.

#### Scenario: Default Usage
Given the Testimonials component is used without props
Then it displays the content from `baseSections.testimonials`
And it uses the default internal images

### Requirement: Add translation keys for Playa del Carmen testimonials
New translation keys MUST be added to support the specific content for the Playa del Carmen page.

#### Scenario: English Keys
Given the language is English
When accessing `pages.playaDelCarmen.testimonials.title`
Then the value matches "Our clients reviews - Cancun to Playa del Carmen"

#### Scenario: Spanish Keys
Given the language is Spanish
When accessing `pages.playaDelCarmen.testimonials.title`
Then the value matches "Opiniones de nuestros clientes - Cancún a Playa del Carmen"
