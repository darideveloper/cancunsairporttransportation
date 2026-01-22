# Tasks

1.  **Refactor Translations**:
    - Check content of `pages.privateAirportTransfer.privateDetails` in `en.json` and `es.json`.
    - Create `pages.private.privateDetails` with that content (duplicate/move).
    - Create `pages.luxury.privateDetails` with placeholder/copied structure (to be filled later or duplicates private for now if no text provided, but strict validation might fail if missing). *Note: User specifically asked for `group` page dynamic section, implying I should setup `group` content.*
    - Create `pages.group.privateDetails` with appropriate structure (copy from private as template).

2.  **Update Component**:
    - Modify `src/components/organisms/PrivateDetails.astro` to accept `page` prop.
    - Use prop to construct translation key.

3.  **Update Pages**:
    - Edit `src/pages/[lang]/group-transfers-cancun.astro`: Pass `page` prop.
    - Edit `src/pages/[lang]/luxury-transportation-cancun.astro`: Pass `page` prop.
    - Edit `src/pages/[lang]/private-airport-transfer-cancun.astro`: Pass `page` prop.

4.  **Verification**:
    - Ensure build passes.
    - Verify `PrivateDetails` renders correctly on all 3 pages (via visual check or unit test if available).
