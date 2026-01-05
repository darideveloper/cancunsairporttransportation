# Design: PricingCard Component

## Architecture
The `PricingCard` will be a **Molecule** component located at `src/components/molecules/PricingCard.astro`. It will compose `ButtonCta` (Atom) and standard HTML elements.

## Component Interface (Props)
```typescript
interface Props {
  imageFile: ImageMetadata; // Using Astro's ImageMetadata for optimized images
  imageAlt: string;
  imageTitle?: string;
  title: string;
  bestSeller?: boolean; // Defaults to false
  price: number | string;
  ctaLink: string;
  ctaText: string;
  reverse?: boolean; // Defaults to false
  currency?: 'usd' | 'mxn'; // Defaults to 'usd'
}
```

## Internal Logic
1.  **Best Seller Badge**: If `bestSeller` is true, render a div/span with text "MostPopular" and a Star icon (from `react-icons/fa` or similar).
2.  **Layout Ordering**:
    -   Use a Flexbox column layout.
    -   If `reverse` is true: Title comes before Image.
    -   If `reverse` is false (default): Image comes before Title.
    -   *Implementation Note*: This can be achieved by conditionally rendering the HTML order OR using CSS `order`. HTML order is often better for screen readers if the visual order matches logical importance, but here standard "Image then Title" vs "Title then Image" are both valid. We will use conditional rendering of HTML blocks for cleaner markup.
3.  **Price Formatting**:
    -   Display "Price from" / "Precio desde" (hardcoded to "Price from" per request, but good to keep in mind localization).
    -   Format price with currencyCode (e.g. `$100 USD`).
4.  **CTA**:
    -   Use `<ButtonCta>` component.
    -   Pass `ctaLink` and `ctaText`.

## Semantic HTML & SEO
-   **Root Element**: `<article>` or `<div>` with a class like `pricing-card`. If it represents a product in a list, `<article>` is semantic.
-   **Headings**: `title` should be an `<h3>` (assuming these cards are inside a section with an `<h2>`).
-   **Images**: Use `<Image />` from `astro:assets` for automatic optimization (webp/avif).
-   **Accessibility**:
    -   `aria-label` on the card if necessary to describe the product context, though usually the content is sufficient.
    -   Alt text for images provided via prop.

## Dependencies
-   `astro:assets` for image handling.
-   `react-icons` for the star icon.
-   `src/components/atoms/ButtonCta.astro`.
