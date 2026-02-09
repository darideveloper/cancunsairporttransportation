# Design: Enhance Vehicle Buy Card Component

## Architecture Overview

This enhancement follows the project's established patterns:
- **Reuse existing utilities**: Leverage `getFormattedPrice()` from `src/lib/utils.ts`
- **Follow schema.org patterns**: Mirror `Testimonial.astro`'s microdata approach
- **Atomic design**: Extract shared UI into atoms
- **i18n integration**: Use translation system for all user-facing text

## Component Changes

### 1. StarRating Atom Component

**Location**: `src/components/atoms/StarRating.astro`

**Purpose**: Provide a reusable, accessible star rating display

**Props Interface**:
```typescript
interface Props {
  rating: number;           // 1-5 rating value
  maxRating?: number;       // Default: 5
  showNumeric?: boolean;    // Show "4.5/5" text
  size?: "sm" | "md" | "lg"; // Icon size
  class?: string;           // Additional classes
}
```

**Implementation Details**:
- Uses `FaStar` from `react-icons/fa` (consistent with existing usage)
- Supports partial stars (e.g., 4.5 stars)
- Includes proper ARIA labels for accessibility
- Includes schema.org microdata support via props
- Uses `clsx` for conditional classes

**Accessibility**:
- `role="img"` on container
- `aria-label` with readable rating (e.g., "Rating: 4.5 out of 5 stars")
- Individual stars have `aria-hidden="true"`

**Schema.org Support**:
```astro
{withSchema && (
  <>
    <meta itemprop="ratingValue" content={rating.toString()} />
    <meta itemprop="bestRating" content={maxRating.toString()} />
  </>
)}
```

---

### 2. VehicleBuyCard Enhancements

**File**: `src/components/molecules/VehicleBuyCard.astro`

#### Change 2.1: Add Schema.org Microdata

**Pattern**: Follow `Testimonial.astro` inline microdata approach

**Structure**:
```html
<article 
  itemscope 
  itemtype="https://schema.org/Product"
  aria-labelledby={cardId}
>
  <h3 itemprop="name" id={cardId}>{vehicleName}</h3>
  
  <div 
    itemprop="aggregateRating" 
    itemscope 
    itemtype="https://schema.org/AggregateRating"
  >
    <StarRating rating={rating} withSchema={true} />
  </div>
  
  <p itemprop="description">{description}</p>
  
  <div 
    itemprop="offers" 
    itemscope 
    itemtype="https://schema.org/Offer"
  >
    <meta itemprop="price" content={price.toString()} />
    <meta itemprop="priceCurrency" content={currency} />
    <meta itemprop="availability" content="https://schema.org/InStock" />
  </div>
</article>
```

**Why inline microdata vs JSON-LD**:
- Consistent with existing `Testimonial` component
- Easier to maintain alongside component structure
- No separate script tag management

#### Change 2.2: Replace Manual Price Formatting

**Current Code** (lines 123-127):
```astro
<p class="">
  <del>{currency} ${originalPrice.toFixed(2)}</del>
</p>
<p class="">
  {currency} ${price.toFixed(2)}
</p>
```

**New Code**:
```astro
<p class="">
  <del>{getFormattedPrice(originalPrice, lang)}</del>
</p>
<p class="">
  {getFormattedPrice(price, lang)}
</p>
```

**Required Import**:
```typescript
import { getFormattedPrice } from "../../lib/utils";
```

**Benefits**:
- Automatic USD/MXN conversion based on `lang`
- Consistent formatting with `RatesTable`, `PrivateDetails`, etc.
- Respects locale-specific number formatting
- Includes currency code automatically

#### Change 2.3: Add Savings Calculation and Display

**New Script Logic** (add after line 48):
```typescript
// Calculate savings
const savings = originalPrice - price;
const savingsPercentage = originalPrice > 0 
  ? Math.round((savings / originalPrice) * 100) 
  : 0;
const hasSavings = savingsPercentage > 0;
```

**New UI Element** (insert after original price):
```astro
{hasSavings && (
  <div class="" role="status" aria-live="polite">
    <span class="">
      {t("global.ui.vehicleCard.save")} {savingsPercentage}%
    </span>
  </div>
)}
```

**Translation Keys Required**:
```json
// en.json
"global.ui.vehicleCard.save": "Save"

// es.json
"global.ui.vehicleCard.save": "Ahorra"
```

#### Change 2.4: Replace Inline Star Rating with Atom

**Current Code** (lines 73-82):
```astro
<div class="" aria-label={`Rating: ${rating} out of 5 stars`}>
  {
    stars.map((filled) => (
      <FaStar
        className={clsx(filled ? "text-accent" : "text-gray-300")}
        aria-hidden="true"
      />
    ))
  }
</div>
```

**New Code**:
```astro
<StarRating 
  rating={rating} 
  withSchema={true}
  class=""
/>
```

**Remove from script** (line 48):
```typescript
// DELETE THIS LINE:
const stars = Array.from({ length: 5 }, (_, i) => i < rating);
```

**Remove from imports** (line 11):
```typescript
// DELETE THIS:
import { FaStar } from "react-icons/fa";
```

**Add to imports**:
```typescript
import StarRating from "../atoms/StarRating.astro";
```

---

### 3. Testimonial Component Update

**File**: `src/components/molecules/Testimonial.astro`

#### Change 3.1: Replace Inline Star Rating

**Current Code** (lines 63-78):
```astro
<div
  class=""
  role="img"
  aria-label={`${stars} out of 5 stars`}
  itemprop="reviewRating"
  itemscope
  itemtype="https://schema.org/Rating"
>
  <meta itemprop="ratingValue" content={stars} />
  <meta itemprop="bestRating" content="5" />
  {
    Array.from({ length: parseInt(stars) }).map((_) => (
      <FaStar className="inline-block text-yellow" />
    ))
  }
</div>
```

**New Code**:
```astro
<div
  itemprop="reviewRating"
  itemscope
  itemtype="https://schema.org/Rating"
>
  <StarRating 
    rating={parseInt(stars)} 
    withSchema={true}
    class=""
  />
</div>
```

**Remove from imports**:
```typescript
// DELETE THIS:
import { FaStar } from "react-icons/fa";
```

**Add to imports**:
```typescript
import StarRating from "../atoms/StarRating.astro";
```

---

## Data Flow

```
VehicleBuyCard receives props
  ↓
Calculate savings (originalPrice - price)
  ↓
Format prices using getFormattedPrice(price, lang)
  ↓
Render with schema.org microdata
  ↓
StarRating atom renders rating with schema support
```

---

## Translation Strategy

### New Keys Required:

**English** (`src/messages/en.json`):
```json
{
  "global": {
    "ui": {
      "vehicleCard": {
        // ... existing keys
        "save": "Save"
      }
    }
  }
}
```

**Spanish** (`src/messages/es.json`):
```json
{
  "global": {
    "ui": {
      "vehicleCard": {
        // ... existing keys
        "save": "Ahorra"
      }
    }
  }
}
```

---

## Schema.org Validation

The microdata can be validated using:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/

Expected result: Valid Product with Offer and AggregateRating

---

## Backwards Compatibility

All changes are backwards compatible:
- Existing VehicleBuyCard usage continues to work
- Testimonial component maintains same API
- No breaking changes to props or behavior
- Only internal implementation changes

---

## Testing Strategy

1. **Visual Regression**: Ensure VehicleBuyCard looks identical
2. **Schema Validation**: Validate microdata with Google tools
3. **i18n Testing**: Verify prices format correctly in both languages
4. **Accessibility**: Test with screen readers
5. **StarRating Atom**: Test in both VehicleBuyCard and Testimonial contexts

---

## Performance Impact

- **Minimal**: No additional network requests
- **Positive**: Reduced code duplication (StarRating atom)
- **Neutral**: Schema.org microdata adds ~200 bytes per card
