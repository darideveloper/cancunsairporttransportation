# Proposal: Create PrivateDetails Organism Component

## Why
The private-airport-transfer-cancun page needs a dedicated section to display detailed pricing information in a structured, accessible format. This will improve user experience by providing transparent pricing and clear service details, ultimately increasing conversion rates by reducing friction in the booking process.

## What Changes
- Create new `PrivateDetails.astro` organism component
- Add translation data structure to `en.json` and `es.json`
- Integrate component into private-airport-transfer-cancun page
- Implement accessible pricing table with 5 columns (Arrival, Departure, One Way, Round Trip, Capacity)
- Add markdown-rendered description section
- Include "Book Now" CTA that links to booking form on same page

## Impact
- **Affected Specs**: `ui-private-details-component` (new capability)
- **Affected Code**: 
  - `src/components/organisms/PrivateDetails.astro` (new)
  - `src/pages/[lang]/private-airport-transfer-cancun.astro` (modified)
  - `src/messages/en.json` (modified)
  - `src/messages/es.json` (modified)

## Problem
The private-airport-transfer-cancun page needs a dedicated component to display detailed pricing and service information for private airport transfers. This component should present pricing data in a clear, accessible table format with a call-to-action to encourage bookings.

## Proposed Solution
Create a new Astro component `PrivateDetails.astro` in `src/components/organisms/` that will be rendered on the `/[lang]/private-airport-transfer-cancun` page.

### Component Features
- **Title Section**: Uses `SectionHeading` molecule component with title and markdown-rendered descriptive text
- **Pricing Table**: Displays service pricing with columns for Arrival, Departure, One Way, Round Trip, and Capacity
- **Call-to-Action**: "Book Now" button that scrolls to the booking form on the same page
- **Data Source**: `pages.privateAirportTransfer.privateDetails` in translation files (both en.json and es.json)
- **Styling**: Tailwind CSS utility classes only (no `<style>` blocks)

### Component Structure

#### 1. Title and Description Section
- Uses existing `SectionHeading` molecule component
- Markdown-rendered text content for SEO-rich descriptions
- Proper heading hierarchy (H2 via SectionHeading)

#### 2. Pricing Table
```
| Arrival | Departure | One Way | Round Trip | Capacity |
| ------- | --------- | ------- | ---------- | -------- |
| CUN     | Hotel     | $XX.XX  | $XX.XX     | 1-8 pax  |
| Hotel   | CUN       | $XX.XX  | $XX.XX     | 1-8 pax  |
```

#### 3. Call-to-Action Button
- "Book Now" button using existing `ButtonCta` atom component
- Smooth scroll to `#booking-form` anchor on the same page
- Prominent placement below the table

### SEO & Optimization Standards

#### 1. Semantic HTML
```html
<section 
  id="private-details" 
  aria-labelledby="private-details-heading"
  class="py-12 md:py-16 lg:py-20"
>
```
- ✅ Descriptive `id` for deep linking and analytics
- ✅ `aria-labelledby` for accessibility
- ✅ Responsive padding using Tailwind utilities

#### 2. Table Accessibility
```html
<table class="w-full border-collapse">
  <caption class="sr-only">Private Transfer Pricing Details</caption>
  <thead>
    <tr>
      <th scope="col">Arrival</th>
      <th scope="col">Departure</th>
      <th scope="col">One Way</th>
      <th scope="col">Round Trip</th>
      <th scope="col">Capacity</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data rows -->
  </tbody>
</table>
```
- ✅ Proper `<table>` semantics with `<thead>`, `<tbody>`
- ✅ `<caption>` for screen readers (visually hidden with `sr-only`)
- ✅ `scope="col"` for column headers
- ✅ Responsive table design with horizontal scroll on mobile

#### 3. Markdown Rendering
- Uses `marked` library (already in project) to parse markdown content
- Allows rich text formatting in translation files
- Maintains SEO-friendly HTML output

#### 4. Component Reuse
- ✅ **SectionHeading**: Reuses existing molecule component for title
- ✅ **ButtonCta**: Reuses existing atom component for CTA
- ✅ **Translation System**: Integrates with existing i18n setup
- ✅ **Markdown Parser**: Uses existing `marked` library

### Content Strategy
Translation data structure for both English and Spanish:

```json
{
  "pages": {
    "privateAirportTransfer": {
      "privateDetails": {
        "title": "Private Airport Transfer Details",
        "description": "Our **private airport transfer service** offers the best rates and comfort for your journey. We provide professional drivers, modern vehicles, and 24/7 customer support.\n\nBook with confidence knowing you're getting the best service in Cancun.",
        "table": {
          "title": "Service Pricing",
          "headers": {
            "arrival": "Arrival",
            "departure": "Departure",
            "oneWay": "One Way",
            "roundTrip": "Round Trip",
            "capacity": "Capacity"
          },
          "rows": [
            {
              "arrival": "Cancun Airport (CUN)",
              "departure": "Hotel Zone",
              "oneWay": "$29.99 USD",
              "roundTrip": "$59.99 USD",
              "capacity": "1-8 passengers"
            },
            {
              "arrival": "Hotel Zone",
              "departure": "Cancun Airport (CUN)",
              "oneWay": "$29.99 USD",
              "roundTrip": "$59.99 USD",
              "capacity": "1-8 passengers"
            }
          ]
        },
        "cta": {
          "text": "Book Now",
          "href": "#booking-form"
        }
      }
    }
  }
}
```

### Project Conventions Compliance
- ✅ **Tailwind CSS Only**: No `<style>` blocks
- ✅ **Project Colors**: `text-accent`, `text-black`, `text-gray-dark`, `border-gray`
- ✅ **Project Fonts**: `font-title`, `font-sans`
- ✅ **Static Astro Component**: No unnecessary React
- ✅ **Component Reuse**: Uses existing SectionHeading and ButtonCta
- ✅ **Translation Integration**: Follows existing i18n patterns
- ✅ **Markdown Support**: Uses existing `marked` library

### Responsive Design
```html
<div class="container mx-auto px-4">
  <!-- Title Section -->
  <SectionHeading ... />
  
  <!-- Markdown Content -->
  <div class="prose max-w-none mb-8" set:html={descriptionHtml} />
  
  <!-- Table Section -->
  <div class="mb-6">
    <h3 class="text-xl font-bold mb-4">{tableTitle}</h3>
  </div>
  
  <!-- Responsive Table Wrapper -->
  <div class="w-full overflow-x-auto rounded-xl mb-8">
    <table class="w-full min-w-[600px]">
      <!-- Table content -->
    </table>
  </div>
  
  <!-- CTA Button -->
  <div class="text-center">
    <ButtonCta ... />
  </div>
</div>
```

- ✅ **Mobile-First**: Horizontal scroll for table on small screens
- ✅ **Container Pattern**: `container mx-auto px-4` for consistent width
- ✅ **Responsive Typography**: Scales appropriately across devices
- ✅ **Flexible Layout**: Adapts to various screen sizes

## Expected Outcome
- A production-ready, SEO-optimized `PrivateDetails` component
- Updated translation files (en.json and es.json) with pricing data
- Component integrated into the private-airport-transfer-cancun page
- **Accessibility Features**: Semantic table structure, ARIA labels, keyboard navigation
- **SEO Benefits**: Structured pricing data, markdown-rich content, proper heading hierarchy
- **User Experience**: Clear pricing information, easy-to-use CTA, responsive design
- **100% Project Compliance**: Tailwind CSS, component reuse, i18n integration

## Implementation Recommendations

### Table Data Structure
- Keep pricing data in translation files for easy updates
- Support multiple rows for different service types (if needed in future)
- Maintain consistency with existing RatesTable component patterns

### Accessibility Testing
1. **Screen Reader**: Test with NVDA/JAWS for table navigation
2. **Keyboard Navigation**: Ensure CTA button is keyboard accessible
3. **Color Contrast**: Verify all text meets WCAG 2.1 AA standards
4. **Mobile Testing**: Test table scroll behavior on actual devices

### Performance
- ✅ Static component (no JavaScript overhead)
- ✅ Minimal DOM complexity
- ✅ Markdown parsed at build time
- ✅ Reuses existing components (smaller bundle)

