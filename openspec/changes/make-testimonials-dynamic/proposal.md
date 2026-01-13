# Proposal: Make Testimonials Section Dynamic

## Summary
Refactor the `Testimonials` component to accept dynamic content via props, allowing different pages (specifically the "Transportation from Cancun Airport to Playa del Carmen" page) to display unique testimonials, images, and titles while preserving the existing content on the index page.

## Problem
The current `Testimonials.astro` component hardcodes the testimonials data and translation keys. This prevents other pages from showing different testimonials without duplicating code or creating a separate component. The user wants specific testimonials for the Playa del Carmen page with new images and randomly generated names.

## Solution
1.  **Refactor `Testimonials.astro`**:
    *   Update the component to accept optional props: `title`, `description`, and `items`.
    *   The `items` prop will be an array of testimonial objects `{ name, text, stars, image, imageAlt, imageTitle, date }`.
    *   Implement fallback logic: If props are not provided, use the existing default `baseSections.testimonials` translations and images (preserving index page behavior).
2.  **Update Translation Files**:
    *   Add new translation keys for the Playa del Carmen testimonials (title, description, reviews) in `src/messages/en.json` and `src/messages/es.json`.
3.  **Generate Assets**:
    *   Generate 3 new client images (`client-playa-1`, `client-playa-2`, `client-playa-3`) using the `generate_image` tool.
4.  **Update Playa del Carmen Page**:
    *   Import the new images.
    *   Retrieve the new translations.
    *   Construct the `testimonials` data array.
    *   Pass the dynamic data to the `<Testimonials />` component.
