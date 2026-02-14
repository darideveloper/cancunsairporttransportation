## 1. Component Enhancements
- [x] 1.1 Update `VehicleBuyCard.tsx` to pass `showNumeric={true}` to the `StarRating` atom.
- [x] 1.2 Verify that the numerical rating appears correctly next to the stars.

## 2. New Organism Creation
- [x] 2.1 Create `src/components/organisms/VehicleBuyCards.tsx` as a React component.
- [x] 2.2 Implement `VehicleBuyCards` to take an array of vehicles and render them using `VehicleBuyCard`.
- [x] 2.3 Ensure the organism handles the layout (e.g., spacing/grid) for the cards.

## 3. Page Update
- [x] 3.1 Define 3 dummy vehicle data objects in `src/components/pages/store/Results.astro` frontmatter.
- [x] 3.2 Update `Results.astro` to import and use the `VehicleBuyCards` organism.
- [x] 3.3 Pass the dummy data to the `VehicleBuyCards` component.

## 4. Validation
- [x] 4.1 Run `npm run build` or start dev server to verify the UI.
- [x] 4.2 Ensure no regressions in `Results.astro` layout.
