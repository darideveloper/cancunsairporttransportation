# Spec: Destinations Testimonials

## ADDED Requirements

### Requirement: Destinations Page Testimonials Section
The Destinations page MUST display a testimonials section with customer reviews specific to destination transportation services.

#### Scenario: Viewing testimonials on Destinations page in English
- **Given** the user is on the `/en/destinations` page
- **When** they scroll to the bottom of the main content
- **Then** they should see a testimonials section with the title "What our customers say"
- **And** they should see the description "The opinion of our customers is the most important thing for us"
- **And** they should see 3 customer testimonials with names, reviews, and profile images

#### Scenario: Viewing testimonials on Destinations page in Spanish
- **Given** the user is on the `/es/destinos` page
- **When** they scroll to the bottom of the main content
- **Then** they should see a testimonials section with the title "Lo que opinan nuestros clientes"
- **And** they should see the description "La opinión de nuestros clientes es lo más importante para nosotros"
- **And** they should see 3 customer testimonials with Spanish translations

#### Scenario: Testimonials section positioning
- **Given** the Destinations page is rendered
- **When** viewing the page structure
- **Then** the testimonials section MUST be positioned after the second BasicImageCard (customer service highlight)
- **And** it MUST be within the main content `<div>` with class "content md:w-1/2 lg:w-2/3"
- **And** it MUST appear before the closing `</div>` of the content section

### Requirement: Translation Keys for Destinations Testimonials
Translation files MUST contain all necessary keys for the destinations testimonials section.

#### Scenario: English translation structure
- **Given** the `en.json` translation file
- **Then** it MUST contain `pages.destinations.testimonials.title` with value "What our customers say"
- **And** it MUST contain `pages.destinations.testimonials.description` with value "The opinion of our customers is the most important thing for us"
- **And** it MUST contain `pages.destinations.testimonials.items.item1` through `item3` with properties: `name`, `text`, `imageAlt`, `imageTitle`, and `stars`

#### Scenario: Spanish translation structure
- **Given** the `es.json` translation file
- **Then** it MUST contain `pages.destinations.testimonials.title` with value "Lo que opinan nuestros clientes"
- **And** it MUST contain `pages.destinations.testimonials.description` with value "La opinión de nuestros clientes es lo más importante para nosotros"
- **And** it MUST contain `pages.destinations.testimonials.items.item1` through `item3` with Spanish translations

### Requirement: Client Images for Destinations Testimonials
The Destinations testimonials MUST use unique client images distinct from other pages.

#### Scenario: Client images exist and are imported
- **Given** the Destinations.astro component
- **Then** it MUST import 3 client images named `destinationsClient1Img`, `destinationsClient2Img`, and `destinationsClient3Img`
- **And** these images MUST be located in `src/assets/images/clients/`
- **And** the images MUST be in WebP format
- **And** the images MUST be passed to the Testimonials component via the `images` prop

#### Scenario: Generated images match existing style
- **Given** the generated client images
- **Then** they MUST be portrait-oriented headshots
- **And** they MUST have a professional, friendly appearance
- **And** they MUST be diverse in representation (different genders, ethnicities, ages)

### Requirement: Testimonial Content Authenticity
The testimonials MUST contain destination-specific content that feels authentic and relevant.

#### Scenario: English testimonial content
- **Given** the English testimonials
- **Then** testimonial 1 MUST be from a client with a Hispanic/Latino name
- **And** testimonial 2 MUST be from a client with a different cultural background
- **And** testimonial 3 MUST be from a client with yet another cultural background
- **And** each testimonial MUST mention specific destinations (e.g., Tulum, Playa del Carmen, Cancun)
- **And** each testimonial MUST have 5 stars

#### Scenario: Spanish testimonial translations
- **Given** the Spanish testimonials
- **Then** they MUST be natural Spanish translations (not literal word-for-word)
- **And** they MUST maintain the same sentiment and key points as the English versions
- **And** client names MUST remain the same in both languages

### Requirement: Component Integration
The Testimonials component MUST be properly integrated into the Destinations page.

#### Scenario: Component import and usage
- **Given** the Destinations.astro component file
- **Then** it MUST import the Testimonials component from `../../../components/organisms/Testimonials.astro`
- **And** it MUST import the 3 client images
- **And** it MUST render `<Testimonials page="destinations" images={[destinationsClient1Img, destinationsClient2Img, destinationsClient3Img]} />`
- **And** the component MUST be placed after line 152 (after the second BasicImageCard)
- **And** it MUST be before the closing `</div>` of the content section (before line 153)

#### Scenario: No styling conflicts
- **Given** the Testimonials component is added to the Destinations page
- **When** the page is rendered
- **Then** there MUST be no CSS conflicts or layout issues
- **And** the testimonials section MUST maintain consistent spacing with other sections
- **And** the responsive behavior MUST work correctly on mobile, tablet, and desktop
