# render-pricing-card Specification

## Purpose
TBD - created by archiving change create-pricing-card. Update Purpose after archive.
## Requirements
### Requirement: Component Props
The component MUST accept `imageFile`, `imageAlt`, `title`, `price`, `ctaLink`, and `ctaText` as core properties.

#### Scenario: Rendering basic content
Given the component is passed a title "Cancun Shuttle", an image, and a price,
When the component renders,
Then it should display the title "Cancun Shuttle", the image with provided alt text, and the price.

### Requirement: Best Seller Badge
If the `bestSeller` prop is true, the component MUST display a visual badge with text "MostPopular" and a star icon at the top.

#### Scenario: Displaying best seller
Given `bestSeller` is true,
When the component renders,
Then it should show the "MostPopular" text and star icon.

### Requirement: Layout Reversal
The component MUST swap the vertical position of the image and title based on the `reverse` prop.

#### Scenario: Default layout
Given `reverse` is false or undefined,
When the component renders,
Then the image should appear before the title in the DOM order.

#### Scenario: Reversed layout
Given `reverse` is true,
When the component renders,
Then the title should appear before the image in the DOM order.

### Requirement: Call to Action
The component MUST render a button linking to the `ctaLink`.

#### Scenario: Rendering CTA
Given `ctaLink` is "/book-now" and `ctaText` is "Book Now",
When the component renders,
Then it should display a button with text "Book Now" that links to "/book-now".

### Requirement: Dynamic Content Slot
The component MUST include a default `<slot />` to render child content passed from the parent.

#### Scenario: Rendering slot content
Given the component is passed child content "<div>Feature List</div>",
When the component renders,
Then it should display "Feature List" within the card body.

