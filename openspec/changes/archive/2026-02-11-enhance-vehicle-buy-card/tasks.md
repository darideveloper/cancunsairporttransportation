# Tasks: Enhance Vehicle Buy Card Component

## Task 1: Create StarRating Atom Component
- [x] Create `src/components/atoms/StarRating.astro`
  - [x] Define Props interface with `rating`, `maxRating`, `showNumeric`, `size`, `withSchema`, `class`
  - [x] Import `FaStar` from `react-icons/fa`
  - [x] Import `clsx` for conditional classes
  - [x] Calculate filled/empty stars array
  - [x] Render stars with conditional filled/empty styling
  - [x] Add `role="img"` to container
  - [x] Add `aria-label` with readable rating text
  - [x] Add conditional schema.org microdata (`<meta itemprop="ratingValue">` and `<meta itemprop="bestRating">`)
  - [x] Add size variants (sm/md/lg) using clsx
  - [x] Add optional numeric display (e.g., "4.5/5")

## Task 2: Add Schema.org Microdata to VehicleBuyCard
- [x] Update `src/components/molecules/VehicleBuyCard.astro`
  - [x] Import `generateId` from `../../lib/utils`
  - [x] Generate unique `cardId` using `generateId("vehicle-card", vehicleName)`
  - [x] Add `itemscope` and `itemtype="https://schema.org/Product"` to `<article>`
  - [x] Add `aria-labelledby={cardId}` to `<article>`
  - [x] Add `itemprop="name"` and `id={cardId}` to vehicle name `<h3>`
  - [x] Wrap rating section with `<div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">`
  - [x] Add `itemprop="description"` to description `<p>`
  - [x] Wrap pricing section with `<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">`
  - [x] Add `<meta itemprop="price" content={price.toString()}>` inside offers div
  - [x] Add `<meta itemprop="priceCurrency" content={currency}>` inside offers div
  - [x] Add `<meta itemprop="availability" content="https://schema.org/InStock">` inside offers div

## Task 3: Replace Manual Price Formatting
- [x] Update `src/components/molecules/VehicleBuyCard.astro`
  - [x] Import `getFormattedPrice` from `../../lib/utils`
  - [x] Replace `{currency} ${originalPrice.toFixed(2)}` with `{getFormattedPrice(originalPrice, lang)}`
  - [x] Replace `{currency} ${price.toFixed(2)}` with `{getFormattedPrice(price, lang)}`
  - [x] Remove `currency` prop from Props interface (no longer needed)
  - [x] Update Results.astro to remove `currency="USD"` from sample data

## Task 4: Add Savings Calculation and Display
- [x] Update `src/components/molecules/VehicleBuyCard.astro` script section
  - [x] Add savings calculation: `const savings = originalPrice - price;`
  - [x] Add percentage calculation: `const savingsPercentage = originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;`
  - [x] Add boolean flag: `const hasSavings = savingsPercentage > 0;`
  - [x] Add savings display in template (after original price)
  - [x] Add conditional `{hasSavings && (...)}`  wrapper
  - [x] Add `<div role="status" aria-live="polite">` container
  - [x] Add savings text: `{t("global.ui.vehicleCard.save")} {savingsPercentage}%`
  - [x] Add empty `class=""` for styling
- [x] Add translation keys
  - [x] Add `"save": "Save"` to `src/messages/en.json` under `global.ui.vehicleCard`
  - [x] Add `"save": "Ahorra"` to `src/messages/es.json` under `global.ui.vehicleCard`

## Task 5: Replace Inline Star Rating in VehicleBuyCard
- [x] Update `src/components/molecules/VehicleBuyCard.astro`
  - [x] Import `StarRating` from `../atoms/StarRating.astro`
  - [x] Remove `FaStar` import from `react-icons/fa`
  - [x] Remove `const stars = Array.from({ length: 5 }, (_, i) => i < rating);` from script
  - [x] Replace inline star rating div (lines 73-82) with `<StarRating rating={rating} withSchema={true} class="" />`

## Task 6: Replace Inline Star Rating in Testimonial
- [x] Update `src/components/molecules/Testimonial.astro`
  - [x] Import `StarRating` from `../atoms/StarRating.astro`
  - [x] Remove `FaStar` import from `react-icons/fa`
  - [x] Replace inline star rating div (lines 63-78) with wrapper:
    ```astro
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <StarRating rating={parseInt(stars)} withSchema={true} class="" />
    </div>
    ```

## Task 7: Validation and Testing
- [x] Run `npm run dev` and verify no build errors
- [x] Test VehicleBuyCard on Results page
  - [x] Verify prices display with correct currency (USD in English, MXN in Spanish)
  - [x] Verify savings percentage displays correctly
  - [x] Verify star rating renders correctly
  - [x] Verify schema.org microdata is present in HTML
- [x] Test Testimonial component on Home page
  - [x] Verify star rating still renders correctly
  - [x] Verify schema.org microdata is still present
- [x] Validate schema.org markup
  - [x] Use Google Rich Results Test on a page with VehicleBuyCard
  - [x] Verify Product with Offer and AggregateRating is detected
- [x] Run `openspec validate enhance-vehicle-buy-card --strict`
  - [x] Resolve any validation errors
- [x] Test accessibility
  - [x] Verify ARIA labels are correct
  - [x] Test with screen reader (rating should be announced correctly)
