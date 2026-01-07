# testimonials Specification

## Purpose
TBD - created by archiving change add-testimonials-section. Update Purpose after archive.
## Requirements
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

### Requirement: Date Prop
The `Testimonial` component MUST accept a `date` prop as a string.

#### Scenario: Component accepts date
- **Given** a `Testimonial` component.
- **When** a `date` prop is passed.
- **Then** the component prop validation (TypeScript) should pass.

### Requirement: Render Date Before Name
The `Testimonial` component MUST render the `date` string before the `name` within the author section.

#### Scenario: Display date before name
- **Given** a `Testimonial` component with `date="01/2026"` and `name="John Doe"`.
- **Then** the rendered output should show "01/2026" followed by "John Doe".

### Requirement: Semantic Date
The `date` display MUST be semantic (e.g., using a `<time>` tag or appropriate attribute).

#### Scenario: Use time tag
- **Given** a `Testimonial` with a date.
- **Then** it should be wrapped in a `<time>` tag or have semantic attributes.

### Requirement: Parent Provides Date
The `Testimonials` component MUST provide a `date` for each testimonial from a local data constant.

#### Scenario: Provide date from parent data
- **Given** the `Testimonials` organism.
- **When** it renders `Testimonial` items.
- **Then** it passes a `date` prop to each item from a local data constant and not from translations.

### Requirement: Content Accuracy
The Testimonials section MUST display recent and authentic customer reviews as provided by the client.

#### Scenario: Verify English Content
- **Given** the user is viewing the site in English
- **When** they scroll to the Testimonials section
- **Then** they should see the title "Comments from our customers"
- **And** they should see 3 reviews from Juan P., Ana G., and Carlos R.
- **And** all reviews should show the date as the current month/year (e.g. "01/2026")

#### Scenario: Verify Spanish Content
- **Given** the user is viewing the site in Spanish
- **When** they scroll to the Testimonials section
- **Then** they should see the title "Comentarios de nuestros clientes"
- **And** they should see the corresponding Spanish translations for the reviews.

