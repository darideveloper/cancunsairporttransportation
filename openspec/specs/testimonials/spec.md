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

### Requirement: Page Specific Testimonials
The Testimonials component MUST be able to display different content based on the page it is used on.

#### Scenario: Displaying Playa del Carmen testimonials
Given I am on the "Playa del Carmen" page
When I view the Testimonials section
Then I should see testimonials fetched from `pages.playaDelCarmen.testimonials`
And the default global testimonials should not be shown

### Requirement: Global Fallback (Home Page)
The Testimonials component MUST support a default mode for pages where no specific testimonials are defined (e.g. Home).

#### Scenario: Displaying Home/Global testimonials
Given I am on the Home page (or any page without specific testimonials defined)
And no `page` prop is passed to the component
Then I should see testimonials fetched from `pages.home.testimonials` (formerly global)

### Requirement: Testimonials Component Logic
The `Testimonials.astro` component logic MUST be updated to support dynamic paths.

#### Scenario: Constructing translation path
Given the `Testimonials` component is rendered
When a `page` prop is provided (e.g. "playaDelCarmen")
Then the translation path should be `pages.playaDelCarmen.testimonials`
When no `page` prop is provided
Then the translation path should be `pages.home.testimonials`

### Requirement: Translation Structure
The translation files MUST be reorganized to support page-specific testimonials.

#### Scenario: Translation keys location
The `global.sections.testimonials` key should be moved to `pages.home.testimonials`.
A new key `pages.playaDelCarmen.testimonials` should be added.

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

### Requirement: Playa del Carmen Testimonial Content
The testimonials on the Playa del Carmen page MUST display the specific content provided by the user.

#### Scenario: Displaying new testimonials
Given I am on the Playa del Carmen page
When I view the Testimonials section
Then I should see "John P.", "Ana G.", and "Carlos R."
And the text should match the provided copy (e.g., "Excellent service! From the moment I arrived...")
And the images should be the default client images (1, 2, 3)

