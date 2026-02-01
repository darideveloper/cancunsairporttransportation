# Tasks: Add ARIA Labels to Interactable Elements

## 1. Translation Strings
- [x] 1.1 Add accessibility translation keys to `src/messages/en.json` under `global.accessibility`:
  - `callAction`: "Call {label}: {phone}"
  - `bookingForm`: "Booking form"
  - `viewDetails`: "View details for {item}"
  - `legal.terms`: "Read our Terms and Conditions"
  - `legal.privacy`: "Read our Privacy Policy"
- [x] 1.2 Add accessibility translation keys to `src/messages/es.json` under `global.accessibility`:
  - `callAction`: "Llamar a {label}: {phone}"
  - `bookingForm`: "Formulario de reserva"
  - `viewDetails`: "Ver detalles de {item}"
  - `legal.terms`: "Leer nuestros Términos y Condiciones"
  - `legal.privacy`: "Leer nuestra Política de Privacidad"

## 2. Atom Components - High Priority
- [x] 2.1 Update `ButtonCta.astro`: Add optional `ariaLabel` prop and apply to rendered element
- [x] 2.2 Update `NavLink.astro`: Add optional `ariaLabel` and `title` props
- [x] 2.3 Update `ContactItem.astro`: Add auto-generated `aria-label` for phone links

## 3. Atom Components - Form Elements
- [x] 3.1 Update `SubmitButton.tsx`: Add optional `ariaLabel` prop

## 4. Molecule Components
- [x] 4.1 Update `BasicIconCard.astro`: Add `aria-label` to link container when `href` is provided
- [x] 4.2 Update `InfoIconCard.astro`: Add `aria-label` to the text link
- [x] 4.3 Update `BottomBar.astro`: Add `title` attributes to Terms and Privacy links

## 5. Organism Components
- [x] 5.1 Update `BookingForm.tsx`: Add `aria-label` or `aria-labelledby` to the `<form>` element

## 6. Call Site Updates - Navigation
- [x] 6.1 Update `NavLinks.astro`: Pass `ariaLabel` props to `NavLink` components where context is needed
- [x] 6.2 Review `MenuBar.astro`: Verify mobile CTA button has proper aria-labels

## 7. Call Site Updates - CTAs
- [x] 7.1 Review `BannerCta.astro`: Add explicit `ariaLabel` props to CTA buttons
- [x] 7.2 Review `PricingCard.astro`: Verify CTA button aria-label includes context (already has good implementation)
- [x] 7.3 Review `FeaturedDestinations.astro`: Add aria-labels to destination CTA buttons

## 8. Call Site Updates - Footer
- [x] 8.1 Review `Footer.astro`: Verify social links have aria-labels (already implemented ✓)
- [x] 8.2 Review `TopBar.astro`: Verify SocialIcon and ContactItem accessibility

## 9. Validation & Testing
- [x] 9.1 Run build to verify no TypeScript errors
- [x] 9.2 Test with screen reader (VoiceOver/NVDA) on home page
- [x] 9.3 Test with screen reader on booking form
- [x] 9.4 Verify all interactive elements have unique `id` attributes
- [x] 9.5 Run axe-core accessibility audit on key pages

## Dependencies
- Tasks 1.x must complete before 2.x-5.x (translation strings needed first)
- Tasks 2.x-5.x can run in parallel
- Tasks 6.x-8.x depend on 2.x-5.x completion
- Task 9.x is final validation gate

## Notes
- All prop additions are backward compatible (optional with defaults)
- Existing aria-label implementations (Logo, SocialIcon, mobile menu buttons) are already compliant
- Focus on components with missing accessibility, not those already passing audit
