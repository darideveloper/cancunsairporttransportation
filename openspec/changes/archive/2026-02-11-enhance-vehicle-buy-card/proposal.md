# Proposal: Enhance Vehicle Buy Card Component

## Problem Statement

The recently created `VehicleBuyCard` component lacks several critical features that are present in other project components and are essential for SEO, consistency, and user experience:

1. **Missing Schema.org Microdata**: Unlike the `Testimonial` component which includes structured data for reviews, `VehicleBuyCard` has no schema.org markup for Product/Offer, reducing SEO potential and preventing rich snippets in search results.

2. **Hardcoded Pricing Format**: The component manually formats prices with `toFixed(2)` instead of using the project's established `getFormattedPrice()` utility, breaking consistency with components like `RatesTable`, `PrivateDetails`, and `FaqSection`. This also prevents automatic USD/MXN conversion based on language.

3. **No Discount/Savings Display**: While the component accepts both `originalPrice` and `price`, it doesn't calculate or display the savings percentage, missing an opportunity to emphasize value to users.

4. **Duplicated Star Rating Logic**: The star rating implementation is duplicated between `VehicleBuyCard` and `Testimonial` components with different implementations, violating DRY principles and making maintenance harder.

## Proposed Solution

Enhance the `VehicleBuyCard` component and create a reusable `StarRating` atom to address all four issues:

### 1. Add Schema.org Product/Offer Microdata
Add structured data following the same pattern as `Testimonial` component's schema.org/Review implementation, using schema.org/Product and schema.org/Offer types.

### 2. Use Project's Price Formatting Utilities
Replace manual price formatting with `getFormattedPrice()` from `src/lib/utils.ts`, ensuring consistency with other pricing components and automatic currency conversion.

### 3. Calculate and Display Savings
Add logic to calculate savings percentage and display it prominently to emphasize the discount.

### 4. Extract Star Rating to Reusable Atom
Create `src/components/atoms/StarRating.astro` to eliminate duplication and provide a consistent rating display across the application.

## Scope

### In Scope:
- Modify `VehicleBuyCard.astro` to add schema.org microdata
- Replace manual price formatting with `getFormattedPrice()`
- Add savings calculation and display
- Create new `StarRating.astro` atom component
- Update `VehicleBuyCard.astro` to use `StarRating` atom
- Update `Testimonial.astro` to use `StarRating` atom
- Add translation keys for savings display

### Out of Scope:
- Other VehicleBuyCard improvements (hover effects, variants, loading states)
- Changes to pricing utilities themselves
- Updates to other components beyond Testimonial and VehicleBuyCard

## Impact Analysis

### Benefits:
- **SEO**: Schema.org markup enables rich snippets in search results
- **Consistency**: Unified price formatting across all components
- **Maintainability**: Single source of truth for star ratings
- **User Experience**: Clear savings display increases conversion potential
- **i18n**: Automatic currency conversion based on language

### Risks:
- **Low Risk**: Changes are additive and use existing patterns
- **Breaking Changes**: None - all changes are backwards compatible

## Dependencies

- Existing `src/lib/utils.ts` utilities (no changes needed)
- Translation system (minor additions only)
- Existing component structure (no architectural changes)

## Alternatives Considered

1. **Keep manual price formatting**: Rejected - breaks consistency
2. **Add savings without percentage**: Rejected - less impactful for users
3. **Keep duplicated star rating**: Rejected - violates DRY principles
4. **Use JSON-LD script tag for schema.org**: Rejected - inline microdata is more maintainable and follows existing Testimonial pattern

## Success Criteria

1. VehicleBuyCard renders valid schema.org Product/Offer markup
2. Prices display using `getFormattedPrice()` with correct currency
3. Savings percentage displays when `originalPrice > price`
4. StarRating atom works in both VehicleBuyCard and Testimonial
5. All existing functionality remains unchanged
6. OpenSpec validation passes with `--strict` flag
