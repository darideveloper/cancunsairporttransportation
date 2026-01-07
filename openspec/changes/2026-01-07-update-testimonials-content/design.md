# Design: Update Testimonials Content

## Overview
This change updates the text content of the Testimonials section to reflect real customer reviews.

## Architecture
-   **Translations**: Text content (reviews, names, titles, descriptions) is stored in `src/messages/{en,es}.json` and accessed via the existing `i18n` utility.
-   **Data Structure**: The `Testimonials.astro` component defines the `key`, `image`, and `date` for each testimonial. The `date` is treated as data and will be updated directly in the component file.
-   **Images**: The images are currently imported in `Testimonials.astro`. The provided HTML snippet references `clients/1.jpg`, `clients/2.jpg`, etc. The existing code uses `item1`, `item2`, `item3` keys which map to imported images. The matching of keys to the new content (Juan P -> item1, Ana G -> item2, Carlos R -> item3) is assumed based on order.

## Implementation Details
The keys `item1`, `item2`, and `item3` will be preserved.
-   **Images**: The existing imports for `client1Img`, `client2Img`, `client3Img` will be updated to point to `../../assets/images/clients/1.webp`, `2.webp`, and `3.webp` respectively.
-   **Dates**: Dates in the `testimonials` array will be dynamically generated using JavaScript in the component frontmatter to always show the current month and year in `MM/YYYY` format.
