# Tasks: Create Brand Header

- [ ] Add translation keys for Header in `src/messages/en.json` and `src/messages/es.json` under `globalSections.header`:
  - Navigation: `nav.airportTransportation`, `nav.playaDelCarmen`, `nav.tulumShuttle`
  - CTA: `cta.myBooking`, `logoAriaLabel`
  - Mobile: `mobile.translateWebsite`, `mobile.customerService`, `mobile.menuAriaLabel`, `mobile.closeMenuAriaLabel`, `mobile.openMenuAriaLabel`
- [ ] Create `Logo.astro` atom component using the existing logo from `src/assets/images/logo.svg` (link to `/${lang}/` for homepage).
- [ ] Create `Button.astro` atom as a global reusable component.
- [ ] Create `MobileMenu.tsx` React component for the responsive overlay interaction.
- [ ] Create `Header.astro` organism and implement responsive layout logic.
- [ ] Update `src/layouts/Layout.astro` to include the `Header` component.
- [ ] Verify responsiveness and accessibility (ARIA labels, keyboard navigation).
