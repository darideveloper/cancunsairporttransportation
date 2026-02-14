# Tasks: Fix React Component Props

## Preparation
- [x] Verify all instances of `class` usage for React components. <!-- id: task-verify-usages -->

## Updates
- [x] Update `ButtonCta` usages in `.astro` files to use `className`. <!-- id: task-update-buttoncta -->
- [x] Update `CheckListItem` usages in `.astro` files to use `className`. <!-- id: task-update-checklistitem -->
- [x] Update `StarRating` and `VehicleBuyCard` usages to ensure `className` is used if needed. <!-- id: task-update-others -->

## Validation
- [x] Run `npm run build` to ensure no build errors. <!-- id: task-build-validation -->
- [x] Inspect the generated HTML in development to verify classes are present on React components. <!-- id: task-visual-validation -->
