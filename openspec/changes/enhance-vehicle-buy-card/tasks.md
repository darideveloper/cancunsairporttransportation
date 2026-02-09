# Tasks: Enhance Vehicle Buy Card Component

## Task 1: Create StarRating Atom Component
- [ ] Create `src/components/atoms/StarRating.astro`
  - [ ] Define Props interface with `rating`, `maxRating`, `showNumeric`, `size`, `withSchema`, `class`
  - [ ] Import `FaStar` from `react-icons/fa`
  - [ ] Import `clsx` for conditional classes
  - [ ] Calculate filled/empty stars array
  - [ ] Render stars with conditional filled/empty styling
  - [ ] Add `role="img"` to container
  - [ ] Add `aria-label` with readable rating text
  - [ ] Add conditional schema.org microdata (`<meta itemprop="ratingValue">` and `<meta itemprop="bestRating">`)
  - [ ] Add size variants (sm/md/lg) using clsx
  - [ ] Add optional numeric display (e.g., "4.5/5")

## Task 2: Add Schema.org Microdata to VehicleBuyCard
- [ ] Update `src/components/molecules/VehicleBuyCard.astro`
  - [ ] Import `generateId` from `../../lib/utils`
  - [ ] Generate unique `cardId` using `generateId("vehicle-card", vehicleName)`
  - [ ] Add `itemscope` and `itemtype="https://schema.org/Product"` to `<article>`
  - [ ] Add `aria-labelledby={cardId}` to `<article>`
  - [ ] Add `itemprop="name"` and `id={cardId}` to vehicle name `<h3>`
  - [ ] Wrap rating section with `<div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">`
  - [ ] Add `itemprop="description"` to description `<p>`
  - [ ] Wrap pricing section with `<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">`
  - [ ] Add `<meta itemprop="price" content={price.toString()}>` inside offers div
  - [ ] Add `<meta itemprop="priceCurrency" content={currency}>` inside offers div
  - [ ] Add `<meta itemprop="availability" content="https://schema.org/InStock">` inside offers div

## Task 3: Replace Manual Price Formatting
- [ ] Update `src/components/molecules/VehicleBuyCard.astro`
  - [ ] Import `getFormattedPrice` from `../../lib/utils`
  - [ ] Replace `{currency} ${originalPrice.toFixed(2)}` with `{getFormattedPrice(originalPrice, lang)}`
  - [ ] Replace `{currency} ${price.toFixed(2)}` with `{getFormattedPrice(price, lang)}`
  - [ ] Remove `currency` prop from Props interface (no longer needed)
  - [ ] Update Results.astro to remove `currency="USD"` from sample data

## Task 4: Add Savings Calculation and Display
- [ ] Update `src/components/molecules/VehicleBuyCard.astro` script section
  - [ ] Add savings calculation: `const savings = originalPrice - price;`
  - [ ] Add percentage calculation: `const savingsPercentage = originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;`
  - [ ] Add boolean flag: `const hasSavings = savingsPercentage > 0;`
- [ ] Add savings display in template (after original price)
  - [ ] Add conditional `{hasSavings && (...)}`  wrapper
  - [ ] Add `<div role="status" aria-live="polite">` container
  - [ ] Add savings text: `{t("global.ui.vehicleCard.save")} {savingsPercentage}%`
  - [ ] Add empty `class=""` for styling
- [ ] Add translation keys
  - [ ] Add `"save": "Save"` to `src/messages/en.json` under `global.ui.vehicleCard`
  - [ ] Add `"save": "Ahorra"` to `src/messages/es.json` under `global.ui.vehicleCard`

## Task 5: Replace Inline Star Rating in VehicleBuyCard
- [ ] Update `src/components/molecules/VehicleBuyCard.astro`
  - [ ] Import `StarRating` from `../atoms/StarRating.astro`
  - [ ] Remove `FaStar` import from `react-icons/fa`
  - [ ] Remove `const stars = Array.from({ length: 5 }, (_, i) => i < rating);` from script
  - [ ] Replace inline star rating div (lines 73-82) with `<StarRating rating={rating} withSchema={true} class="" />`

## Task 6: Replace Inline Star Rating in Testimonial
- [ ] Update `src/components/molecules/Testimonial.astro`
  - [ ] Import `StarRating` from `../atoms/StarRating.astro`
  - [ ] Remove `FaStar` import from `react-icons/fa`
  - [ ] Replace inline star rating div (lines 63-78) with wrapper:
    ```astro
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <StarRating rating={parseInt(stars)} withSchema={true} class="" />
    </div>
    ```

## Task 7: Validation and Testing
- [ ] Run `npm run dev` and verify no build errors
- [ ] Test VehicleBuyCard on Results page
  - [ ] Verify prices display with correct currency (USD in English, MXN in Spanish)
  - [ ] Verify savings percentage displays correctly
  - [ ] Verify star rating renders correctly
  - [ ] Verify schema.org microdata is present in HTML
- [ ] Test Testimonial component on Home page
  - [ ] Verify star rating still renders correctly
  - [ ] Verify schema.org microdata is still present
- [ ] Validate schema.org markup
  - [ ] Use Google Rich Results Test on a page with VehicleBuyCard
  - [ ] Verify Product with Offer and AggregateRating is detected
- [ ] Run `openspec validate enhance-vehicle-buy-card --strict`
  - [ ] Resolve any validation errors
- [ ] Test accessibility
  - [ ] Verify ARIA labels are correct
  - [ ] Test with screen reader (rating should be announced correctly)
