# Spec: Testimonials Section

## ADDED Requirements

### Requirement: Testimonials Section Component
The project MUST include a `Testimonials` organism component that displays client feedback.

#### Scenario: Rendering the section
- GIVEN the component is rendered on the homepage
- THEN it MUST display a title using the `H2` component with a unique ID.
- AND it MUST display an introductory text.
- AND it MUST render exactly 3 `Testimonial` molecule components.
- AND it MUST include a `<script type="application/ld+json">` with `schema.org/Review` structured data for each testimonial.

### Requirement: Testimonial Molecule Component
The `Testimonial` component MUST display individual client reviews.

#### Scenario: Testimonial details
- GIVEN a testimonial is rendered
- THEN it MUST include the client's photo using `astro:assets` `Image`.
- AND it MUST include the client's name.
- AND it MUST include a star rating.
- AND it MUST include the testimonial text.
- AND it MUST use semantic HTML: `<figure>` for the container, `<blockquote>` for the text, and `<figcaption>` for the author info.
- AND it MUST use `aria-roledescription="testimonial"`.

### Requirement: Optimization and Performance
The section MUST follow web vitals best practices.

#### Scenario: Image optimization
- GIVEN a testimonial image is rendered
- THEN it MUST have explicit `width` and `height` attributes.
- AND it MUST have `loading="lazy"` set.
- AND it MUST have localized `alt` and `title` attributes.

### Requirement: Translation Integration
All content in the Testimonials section MUST be localized.

#### Scenario: Multi-language support
- GIVEN the user switches the language
- THEN all text, including image alts, titles, and JSON-LD content, MUST update according to the selected language.

