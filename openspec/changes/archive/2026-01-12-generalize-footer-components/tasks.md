# Tasks

1.  [x] Rename `src/components/molecules/FooterLinkList.astro` to `src/components/molecules/LinkList.astro`.
2.  [x] Rename `src/components/molecules/FooterContact.astro` to `src/components/molecules/ContactCard.astro`.
3.  [x] Refactor `ContactCard.astro`: Remove `lg:col-span-2` class from the root element.
4.  [x] Refactor `Footer.astro`:
    *   [x] Update imports to referenced new component names.
    *   [x] Wrap `ContactCard` usage in a `div` (or apply class to it if we decide to implement class prop) to maintain the `lg:col-span-2` layout in the footer grid.
5.  [x] Verify the Footer visual structure matches the original design (4 columns on desktop).
6.  [x] Delete old files (if rename didn't handle it automatically).
