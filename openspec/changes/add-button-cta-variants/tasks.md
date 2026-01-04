1. Refactor `ButtonCta.astro` to introduce `Variant` type and `variants` configuration object.
2. Implement `variant` prop in `Props` interface with default value 'primary'.
3. Update template to use `clsx` for combining base classes, variant classes, and custom classes.
4. Verify `primary` variant looks identical to current implementation.
5. Verify `secondary` variant applies correct `bg-black text-white` classes.
