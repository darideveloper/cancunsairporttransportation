# Design: Testimonials Section

## Architecture
The testimonials section follows the project's atomic design pattern, prioritizing semantic HTML and SEO.

### Components

#### 1. Testimonial (Molecule)
`src/components/molecules/Testimonial.astro`
- **Structure**:
  - `<figure>` as the main container for the testimonial.
  - `<blockquote>` for the client's testimonial text.
  - `<figcaption>` for the client's attribution (name, stars).
- **Sub-elements**:
  - `Image` (Astro): Client photo in a `div` or directly in `<figcaption>`.
  - Client name (e.g., `<strong>` or `<span>`).
  - Client stars (represented as simple text or icons).
- **SEO & Accessibility**:
  - `aria-roledescription="testimonial"` on the container.
  - `alt` and `title` for the client image (localized).
  - Explicit `width` and `height` for the image to prevent Layout Shift (CLS).
  - `loading="lazy"` for the image (since it's typically below the fold).

#### 2. Testimonials (Organism)
`src/components/organisms/Testimonials.astro`
- **Section**:
  - `<section>` with `aria-labelledby="testimonials-title"`.
  - `H2` (Atom): Section title with `id="testimonials-title"`.
  - Introductory text in a `<p>`.
  - Grid of 3 `Testimonial` components.
- **Structured Data**:
  - Implement **JSON-LD** (`schema.org/Review` or `schema.org/AggregateRating`) to provide search engines with structured testimonial data. 
- **Data**:
  - All content is retrieved from the translation files (`t('baseSections.testimonials.*')`).

## Data Structure (Translations)
```json
"testimonials": {
  "title": "What Our Clients Say",
  "description": "Read about the experiences of our happy travelers.",
  "items": {
    "client1": {
      "name": "John Doe",
      "text": "Great service! Very punctual and professional.",
      "imageAlt": "John Doe, a happy client",
      "imageTitle": "John Doe Review",
      "stars": "5"
    },
    ...
  }
}
```

## Assets
- Client photos will be stored in `src/assets/images/testimonials/`.
- Optimized webp formats will be used.

