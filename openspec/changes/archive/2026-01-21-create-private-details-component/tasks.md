# Implementation Tasks

## 1. Translation Data
- [x] 1.1 Add `pages.privateAirportTransfer.privateDetails` structure to `src/messages/en.json`
- [x] 1.2 Add `pages.privateAirportTransfer.privateDetails` structure to `src/messages/es.json`
- [x] 1.3 Include title, description (markdown), table data, and CTA text

## 2. Component Creation
- [x] 2.1 Create `src/components/organisms/PrivateDetails.astro`
- [x] 2.2 Import necessary dependencies (SectionHeading, ButtonCta, marked, i18n utils)
- [x] 2.3 Implement title section using SectionHeading component
- [x] 2.4 Parse and render markdown description
- [x] 2.5 Build accessible pricing table with proper semantic HTML
- [x] 2.6 Add "Book Now" CTA button with anchor link to #booking-form
- [x] 2.7 Apply Tailwind CSS styling (no style blocks)
- [x] 2.8 Ensure responsive design with mobile-first approach

## 3. Page Integration
- [x] 3.1 Import PrivateDetails component in `src/pages/[lang]/private-airport-transfer-cancun.astro`
- [x] 3.2 Add component to page layout in appropriate position
- [x] 3.3 Ensure booking form has `id="booking-form"` for CTA anchor link

## 4. Testing & Validation
- [x] 4.1 Verify component renders correctly on private-airport-transfer-cancun page
- [x] 4.2 Test markdown rendering displays properly
- [x] 4.3 Verify table is responsive and scrollable on mobile
- [x] 4.4 Test "Book Now" button scrolls to booking form
- [x] 4.5 Validate accessibility with screen reader
- [x] 4.6 Check color contrast and text readability
- [x] 4.7 Run OpenSpec validation: `openspec validate create-private-details-component --strict`
