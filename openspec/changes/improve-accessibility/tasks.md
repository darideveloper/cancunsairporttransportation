# Tasks

- [ ] Analyze color contrast for `--color-yellow` and `--color-blue` against white backgrounds.
- [ ] Define high-contrast alternatives in `src/styles/global.css` (e.g., `--color-yellow-contrast`, `--color-blue-contrast`) if existing dark variants are insufficient.
- [ ] Update `MenuBar.astro` to use high-contrast colors for the Menu Icon and "Menu" text.
- [ ] Refactor `NavLinks.astro` to improve link distinction or confirm `aria-hidden` behavior:
    - [ ] Ensure the hidden menu (desktop or mobile) is completely removed from the accessibility tree (using `visibility: hidden` or `display: none` effectively).
    - [ ] Alternatively, append context to labels (e.g., via `aria-label`) if both are present in the DOM.
- [ ] Verify `aria-label` on `menu-open-button` and `menu-close-button` in `MenuBar.astro`.
- [ ] (Optional) key these existing hardcoded labels into `src/messages/` for consistency.
