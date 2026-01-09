# Refactor TextCard Slots

## Goal
Refactor the `TextCard` component to use a named `image` slot for rendering images, replacing the existing image-related props (`image`, `alt`, `width`, `height`, `classImage`). This aligns the component with the pattern used in `PricingCard` and provides greater flexibility for image rendering (e.g., using different image components or attributes).

## Context
The user requested updating "this component" (inferred to be `TextCard` based on context and similar patterns) to use an image slot, referencing the `PricingCard` implementation. The goal is to keep everything working, implying either backward compatibility or a complete refactor of all usages. Since usages are limited to `index.astro`, a complete refactor is cleaner.

## Strategy
1.  **Modify `TextCard.astro`**: Remove image props and add a named `image` slot.
2.  **Update Usages**: Refactor instances in `src/pages/[lang]/index.astro` to pass the image via the `slot="image"`.
3.  **Verification**: Ensure the build passes and the page renders correctly.
