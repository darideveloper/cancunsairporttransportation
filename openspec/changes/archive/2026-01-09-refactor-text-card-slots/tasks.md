# Tasks

- [x] Refactor `TextCard.astro`
  - [x] Remove `image`, `alt`, `width`, `height`, `classImage` props from `Props` interface.
  - [x] Replace `Image` component usage with `<slot name="image" />`.
  - [x] Ensure `slot` has appropriate placement and styling wrappers if needed (though `PricingCard` reference suggests the slot content handles its own styling or the parent positions it). Note: `TextCard` currently applies classes to the `Image`. We might need to wrap the slot or rely on the passed content to have classes. The reference `PricingCard` usage passes `class="..."` to the `Image` in the slot. `TextCard` currently uses `classImage` prop. We will expect the consumer to pass the class to the image in the slot.
- [x] Update `index.astro`
  - [x] Update `safe-trip-booking` usage of `TextCard`.
  - [x] Update `why-choose-us` usage of `TextCard`.
- [x] Verify
  - [x] Run `npm run dev` and check the home page.
  - [x] Verify `safe-trip-booking` image renders correctly.
  - [x] Verify `why-choose-us` image renders correctly.
