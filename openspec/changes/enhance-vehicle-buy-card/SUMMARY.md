# OpenSpec Proposal Summary: enhance-vehicle-buy-card

## ✅ Validation Status
**PASSED** - `openspec validate enhance-vehicle-buy-card --strict`

## 📋 Overview

This proposal enhances the VehicleBuyCard component with four critical improvements:

1. **Schema.org Microdata** - Add Product/Offer structured data for SEO
2. **Standardized Price Formatting** - Use `getFormattedPrice()` utility
3. **Savings Display** - Calculate and show discount percentage
4. **Star Rating Atom** - Extract reusable component

## 📁 Files Created

### Core Documents
- `openspec/changes/enhance-vehicle-buy-card/proposal.md` - Problem statement and solution overview
- `openspec/changes/enhance-vehicle-buy-card/design.md` - Detailed implementation design with code examples
- `openspec/changes/enhance-vehicle-buy-card/tasks.md` - Step-by-step implementation checklist

### Spec Deltas (4 capabilities)
- `specs/star-rating-atom/spec.md` - Reusable star rating component
- `specs/vehicle-card-schema/spec.md` - Schema.org Product/Offer microdata
- `specs/price-formatting/spec.md` - Standardized price formatting
- `specs/savings-display/spec.md` - Discount percentage calculation and display

## 🎯 Key Changes

### 1. New Component: StarRating.astro
**Location**: `src/components/atoms/StarRating.astro`

**Props**:
```typescript
interface Props {
  rating: number;           // 1-5 rating value
  maxRating?: number;       // Default: 5
  withSchema?: boolean;     // Include schema.org microdata
  class?: string;           // Additional classes
}
```

**Usage**:
```astro
<StarRating rating={5} withSchema={true} />
```

**Replaces**: Inline star rating in VehicleBuyCard and Testimonial

---

### 2. VehicleBuyCard Schema.org Microdata

**Before**:
```astro
<article class="">
  <h3>{vehicleName}</h3>
  <!-- No structured data -->
</article>
```

**After**:
```astro
<article 
  itemscope 
  itemtype="https://schema.org/Product"
  aria-labelledby={cardId}
>
  <h3 itemprop="name" id={cardId}>{vehicleName}</h3>
  
  <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
    <StarRating rating={rating} withSchema={true} />
  </div>
  
  <p itemprop="description">{description}</p>
  
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    <meta itemprop="price" content={price.toString()} />
    <meta itemprop="priceCurrency" content={currency} />
    <meta itemprop="availability" content="https://schema.org/InStock" />
  </div>
</article>
```

---

### 3. Price Formatting Standardization

**Before**:
```astro
<p><del>{currency} ${originalPrice.toFixed(2)}</del></p>
<p>{currency} ${price.toFixed(2)}</p>
```

**After**:
```astro
<p><del>{getFormattedPrice(originalPrice, lang)}</del></p>
<p>{getFormattedPrice(price, lang)}</p>
```

**Result**:
- English: `$45.00 USD`
- Spanish: `$810.00 MXN` (auto-converted)

**Props Change**:
- ❌ Remove: `currency?: string`
- ✅ Currency determined by `lang` automatically

---

### 4. Savings Display

**New Script Logic**:
```typescript
const savings = originalPrice - price;
const savingsPercentage = originalPrice > 0 
  ? Math.round((savings / originalPrice) * 100) 
  : 0;
const hasSavings = savingsPercentage > 0;
```

**New UI**:
```astro
{hasSavings && (
  <div role="status" aria-live="polite">
    <span>{t("global.ui.vehicleCard.save")} {savingsPercentage}%</span>
  </div>
)}
```

**Example Output**:
- English: "Save 25%"
- Spanish: "Ahorra 25%"

---

## 🔄 Component Updates

### Files Modified:
1. `src/components/molecules/VehicleBuyCard.astro`
   - Add schema.org microdata
   - Replace manual price formatting
   - Add savings calculation
   - Use StarRating atom

2. `src/components/molecules/Testimonial.astro`
   - Use StarRating atom

3. `src/components/pages/store/Results.astro`
   - Remove `currency="USD"` prop

4. `src/messages/en.json`
   - Add `global.ui.vehicleCard.save: "Save"`

5. `src/messages/es.json`
   - Add `global.ui.vehicleCard.save: "Ahorra"`

### Files Created:
1. `src/components/atoms/StarRating.astro` (NEW)

---

## 📊 Impact Summary

### SEO Benefits:
- ✅ Rich snippets in Google search results
- ✅ Product schema with pricing and ratings
- ✅ Better search engine understanding

### Code Quality:
- ✅ Eliminates star rating duplication
- ✅ Consistent price formatting across app
- ✅ Follows established patterns

### User Experience:
- ✅ Clear savings display
- ✅ Consistent pricing presentation
- ✅ Better accessibility

### Maintenance:
- ✅ Single source of truth for ratings
- ✅ Centralized price formatting
- ✅ Easier to update and test

---

## 🧪 Validation Checklist

- [x] OpenSpec validation passes (`--strict`)
- [x] All spec deltas have scenarios
- [x] Design document includes code examples
- [x] Tasks are granular and verifiable
- [x] No breaking changes
- [x] Follows existing patterns
- [x] Translation keys documented

---

## 📝 Implementation Notes

### Order of Implementation:
1. Create StarRating atom (no dependencies)
2. Add schema.org to VehicleBuyCard
3. Replace price formatting
4. Add savings display
5. Update Testimonial to use StarRating
6. Update Results page sample data

### Testing Strategy:
1. Visual regression (ensure no visual changes)
2. Schema validation (Google Rich Results Test)
3. i18n testing (verify USD/MXN conversion)
4. Accessibility testing (screen reader)
5. Component isolation (test StarRating independently)

---

## 🔗 Related Specs

This change relates to:
- `testimonials` - Uses same schema.org pattern
- `pricing-card-i18n` - Uses same price formatting utilities
- `component-library` - Adds new atom component

---

## ✨ Next Steps

1. Review this proposal
2. Approve for implementation
3. Run `/openspec-apply enhance-vehicle-buy-card`
4. Validate with Google Rich Results Test
5. Archive change when complete
