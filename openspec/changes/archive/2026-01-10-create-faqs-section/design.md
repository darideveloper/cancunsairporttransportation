# Design

## Architecture
The FAQs section requires a mix of static content for SEO and interactive behavior for the accordion effect.

### Hybrid Approach
- **Astro Wrapper (`FaqSection.astro`)**: Uses the existing `SectionHeading` component for the title and introductory text (passed as children or props). It receives the array of FAQ items as a prop.
- **Rendering Loop**: The `FaqSection` component (or the page itself) maps over the FAQ items and renders a `FaqItem` for each one.
- **Interactive Component (`FaqItem.tsx`)**: A pure React component that renders a single question/answer pair. It manages its own open/close state.
- **Hydration Strategy**: `FaqItem` must be rendered with a client directive (e.g., `client:load`) that preserves the server-rendered HTML for SEO (SSR).
- **Styling**: `FaqItem` must have empty `className` attributes; no styles applied directly.

## Data Flow
1. **Definition**: The page (e.g., `index.astro`) defines a constant array of FAQ objects (e.g., keys to look up).
2. **Translation**: The page resolves the translations using `t()`.
3. **Passing**: The page passes the array of resolved data (question, answer) to `FaqSection`.
4. **Rendering**: `FaqSection` loops through the data and renders `FaqItem` for each entry.
