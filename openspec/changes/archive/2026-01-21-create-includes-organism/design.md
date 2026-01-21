# Design: Includes Organism Component

## Architecture
The component will be a static Astro component since it doesn't require client-side interactivity.

## Component Structure
`src/components/organisms/Includes.astro`
- Props: None (as it uses global data).
- Structure:
    ```html
    <section 
      id="service-includes" 
      aria-labelledby="includes-title"
      class="py-12 md:py-16 lg:py-20"
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left side: Title and Image -->
          <div class="includes-content-left">
            <h2 
              id="includes-title"
              class="text-3xl md:text-4xl lg:text-5xl font-title font-bold text-black mb-6"
            >
              {title}
            </h2>
            <Image 
              src={image} 
              alt={imageAlt} 
              title={imageTitle}
              width={600}
              height={400}
              loading="lazy"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <!-- Right side: List of items -->
          <div class="includes-content-right">
            <ul class="space-y-4">
              {items.map((item, index) => (
                <li 
                  key={index}
                  class="flex items-start gap-3 text-lg text-gray-dark"
                >
                  <span class="text-accent mt-1" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    ```

## Data Model
Translation files `src/messages/en.json` and `src/messages/es.json` will be updated:
```json
"global": {
  "sections": {
    "includes": {
      "title": "What's Included in Your Transfer?",
      "image": "/path/to/image.webp",
      "imageAlt": "Professional transportation service showing included amenities",
      "imageTitle": "Premium transportation service features",
      "items": [
        "Professional bilingual driver",
        "Air-conditioned vehicle",
        "Flight monitoring and tracking",
        "Meet and greet service",
        "All taxes and tolls included",
        "24/7 customer support",
        "Free cancellation up to 24 hours",
        "Complimentary bottled water"
      ]
    }
  }
}
```

## SEO & Accessibility Enhancements
- **Semantic HTML**: `<section>` element with descriptive `id="service-includes"`
- **ARIA Labels**: `aria-labelledby="includes-title"` linking section to heading
- **Heading Hierarchy**: Single `<h2>` with unique `id="includes-title"`
- **Image Optimization**:
  - Use Astro's `Image` component from `astro:assets`
  - Explicit `width` and `height` to prevent layout shift (CLS)
  - `loading="lazy"` for performance
  - Descriptive `alt` text for screen readers
  - `title` attribute for additional context
- **List Semantics**: Proper `<ul>` and `<li>` structure
- **Visual Indicators**: Checkmark icon with `aria-hidden="true"` (decorative)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: 
  - Lazy loading for images
  - Optimized image formats (WebP recommended)
  - Minimal DOM nesting
- **Accessibility**:
  - Sufficient color contrast (text-gray-dark on white background)
  - Keyboard navigation support (native HTML elements)
  - Screen reader friendly markup

## Styling Approach
- **Tailwind CSS Only**: No `<style>` blocks (per project conventions)
- **Responsive Grid**: `grid-cols-1 lg:grid-cols-2` for mobile-first layout
- **Spacing**: Consistent padding/margin using Tailwind utilities
- **Typography**: `font-title` for heading, default for body text
- **Colors**: Project color variables (`text-black`, `text-gray-dark`, `text-accent`)

