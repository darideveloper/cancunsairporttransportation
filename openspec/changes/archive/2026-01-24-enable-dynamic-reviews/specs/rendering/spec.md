# Rendering Requirements

## ADDED Requirements

### Requirement: Dynamic Review Count
The number of testimonials rendered MUST be controllable via component props, defaulting to 3 if unspecified.

#### Scenario: Default behavior
Given the `Destinations` component is used without a `reviewsNum` prop
When it renders the `Testimonials` section
Then it should display exactly 3 reviews and use the first 3 available images.

#### Scenario: Custom review count
Given the `Destinations` component is used with `reviewsNum={5}`
And there are corresponding translations for items 1 through 5
When it renders the `Testimonials` section
Then it should display 5 reviews
And the images should cycle if fewer than 5 images are provided.
