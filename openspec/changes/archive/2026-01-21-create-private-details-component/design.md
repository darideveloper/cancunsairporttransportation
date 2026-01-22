# Design Document: PrivateDetails Component

## Context
The private-airport-transfer-cancun page requires a dedicated section to display detailed pricing information and service features for private airport transfers. This component needs to integrate seamlessly with the existing design system while providing clear, accessible pricing information to potential customers.

### Background
- **Current State**: The page lacks a dedicated pricing details section with tabular data
- **User Need**: Customers need clear, structured pricing information before booking
- **Business Goal**: Increase conversion by providing transparent pricing and easy access to booking form

### Constraints
- Must follow project's strict "no `<style>` blocks" policy
- Must reuse existing components (SectionHeading, ButtonCta)
- Must support both English and Spanish translations
- Must be fully accessible (WCAG 2.1 AA)
- Must be responsive and mobile-friendly

## Goals / Non-Goals

### Goals
- ✅ Create a reusable, production-ready organism component
- ✅ Display pricing data in an accessible table format
- ✅ Support markdown-rich content for SEO benefits
- ✅ Provide clear call-to-action to booking form
- ✅ Maintain consistency with existing component patterns
- ✅ Ensure full i18n support

### Non-Goals
- ❌ Dynamic pricing calculation (data comes from translation files)
- ❌ Interactive table features (sorting, filtering)
- ❌ Real-time availability checking
- ❌ Multi-step booking flow within component

## Decisions

### Decision 1: Component Architecture
**Choice**: Static Astro component (not React)

**Rationale**:
- No interactivity required beyond anchor link navigation
- Faster page load (no JavaScript hydration)
- Consistent with project's Islands Architecture pattern
- Simpler maintenance and testing

**Alternatives Considered**:
- React component: Rejected due to unnecessary complexity and performance overhead
- Inline HTML in page: Rejected due to lack of reusability

### Decision 2: Data Structure
**Choice**: Store pricing data in translation files under `pages.privateAirportTransfer.privateDetails`

**Rationale**:
- Consistent with existing project patterns (see RatesTable, Includes components)
- Easy for non-technical users to update pricing
- Supports i18n out of the box
- No database or CMS required

**Alternatives Considered**:
- Separate JSON/CSV file: Rejected due to added complexity
- Hardcoded in component: Rejected due to lack of flexibility and i18n support

### Decision 3: Markdown Support
**Choice**: Use existing `marked` library to parse description content

**Rationale**:
- Already used in the project (see private-airport-transfer-cancun.astro)
- Allows rich text formatting in translation files
- SEO-friendly HTML output
- Familiar syntax for content editors

**Alternatives Considered**:
- Plain text only: Rejected due to limited formatting options
- Custom parser: Rejected due to unnecessary complexity

### Decision 4: Table Structure
**Choice**: 5-column table (Arrival, Departure, One Way, Round Trip, Capacity)

**Rationale**:
- Matches user's specific requirements
- Clear separation of route and pricing information
- Capacity column provides important service details
- Familiar structure for users (similar to RatesTable)

**Alternatives Considered**:
- Simplified 3-column table: Rejected as it doesn't meet requirements
- Card-based layout: Rejected due to less efficient use of space for tabular data

### Decision 5: CTA Placement
**Choice**: Anchor link (`#booking-form`) below the table

**Rationale**:
- Smooth scroll to existing form on same page
- No page reload or navigation required
- Better user experience than opening new page
- Maintains context for the user

**Alternatives Considered**:
- Separate booking page: Rejected due to added friction
- Inline form: Rejected due to page layout constraints

## Component Reuse Strategy

### Existing Components Used
1. **SectionHeading** (`src/components/molecules/SectionHeading.astro`)
   - Purpose: Consistent title and description layout
   - Props: `title`, `id`, `class`
   - Slot: Markdown-rendered description

2. **ButtonCta** (`src/components/atoms/ButtonCta.astro`)
   - Purpose: Consistent CTA button styling
   - Props: `text`, `href`

### Why Reuse?
- Maintains design consistency across the site
- Reduces code duplication
- Easier maintenance (updates in one place)
- Smaller bundle size
- Follows DRY principle

## Accessibility Considerations

### Table Accessibility
- `<caption>` element with `sr-only` class for screen readers
- `scope="col"` on all column headers
- Proper `<thead>` and `<tbody>` structure
- Semantic `<th>` and `<td>` elements

### Keyboard Navigation
- CTA button is keyboard accessible (native `<a>` element)
- Smooth scroll behavior for anchor link
- No keyboard traps

### Screen Reader Support
- Descriptive `aria-labelledby` on section
- Table caption provides context
- Markdown content maintains heading hierarchy

### Visual Accessibility
- Sufficient color contrast (WCAG 2.1 AA)
- Responsive text sizing
- Clear visual hierarchy
- Horizontal scroll for table on mobile (prevents content overflow)

## Responsive Design Strategy

### Breakpoints
- **Mobile** (< 768px): Single column, horizontal scroll for table
- **Tablet** (768px - 1024px): Optimized table spacing
- **Desktop** (> 1024px): Full table width, optimal readability

### Mobile Optimizations
- `overflow-x-auto` on table wrapper
- `min-w-[600px]` on table to maintain readability
- Reduced padding on smaller screens
- Touch-friendly CTA button size

## Performance Considerations

### Build-Time Optimizations
- Markdown parsed at build time (not runtime)
- Static HTML generation (no client-side rendering)
- No JavaScript required for component functionality

### Runtime Performance
- Minimal DOM complexity
- No event listeners (except native anchor behavior)
- Reuses existing components (shared CSS)

### Core Web Vitals Impact
- **LCP**: Minimal impact (static content, no images)
- **CLS**: Zero layout shift (explicit dimensions)
- **FID**: Not applicable (no JavaScript)

## SEO Benefits

### Structured Content
- Semantic HTML table for pricing data
- Proper heading hierarchy (H2 → H3)
- Markdown-rich descriptions with keywords

### Crawlability
- All content server-rendered
- No JavaScript required for content access
- Descriptive anchor text for CTA

### Schema Markup Opportunity
- Future enhancement: Add structured data for pricing
- Not included in initial implementation

## Risks / Trade-offs

### Risk 1: Table Complexity on Mobile
- **Risk**: Small screens may struggle with 5-column table
- **Mitigation**: Horizontal scroll with clear visual indicators
- **Trade-off**: Accepted for data completeness

### Risk 2: Pricing Data Maintenance
- **Risk**: Pricing updates require code deployment
- **Mitigation**: Clear documentation in translation files
- **Trade-off**: Accepted for simplicity (no CMS required)

### Risk 3: Markdown Parsing Overhead
- **Risk**: Build time slightly increased
- **Mitigation**: Minimal impact (happens at build time, not runtime)
- **Trade-off**: Accepted for content flexibility

## Migration Plan

### Implementation Steps
1. Create translation data structure in both language files
2. Build component with proper imports and structure
3. Integrate into private-airport-transfer-cancun page
4. Test across devices and browsers
5. Validate with OpenSpec

### Rollback Strategy
- Component is additive (no breaking changes)
- Can be removed from page without affecting other components
- Translation data can remain (no harm if unused)

### Testing Checklist
- [ ] Visual regression testing
- [ ] Screen reader testing (NVDA/JAWS)
- [ ] Mobile device testing (iOS/Android)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse audit (target 90+ scores)
- [ ] OpenSpec validation

## Open Questions

### Resolved
- ✅ Should table support dynamic rows? **Answer**: Yes, via translation file array
- ✅ Should CTA open in new tab? **Answer**: No, anchor link on same page
- ✅ Should we support multiple pricing tiers? **Answer**: Not in initial version, can extend later

### Pending
- None at this time

## Future Enhancements

### Potential Improvements
1. **Structured Data**: Add JSON-LD schema for pricing
2. **Dynamic Pricing**: Integrate with API for real-time rates
3. **Currency Conversion**: Support multiple currencies
4. **Comparison Tool**: Allow users to compare service tiers
5. **Booking Integration**: Direct booking from table rows

### Not Planned
- Interactive table features (sorting, filtering)
- Real-time availability
- Payment processing within component
