# Testimonials Image Support


## ADDED Requirements

### Requirement: Dynamic Image Rendering
The `Testimonials` component MUST support rendering dynamic images passed via props, enabling different pages to show different client photos.

#### Scenario: Displaying passed images
Given the `Testimonials` component is rendered with an `images` prop containing a list of image objects
When the component renders the testimonial items
Then it MUST display the images from the `images` prop instead of the default images
And the images MUST be mapped to the testimonials in order (e.g., image[0] for item1, image[1] for item2)

#### Scenario: Fallback to default images
Given the `Testimonials` component is rendered without an `images` prop
When the component renders the testimonial items
Then it MUST display the default/fallback images currently defined in the component
