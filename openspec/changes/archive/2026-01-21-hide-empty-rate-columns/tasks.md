# Tasks: Hide Empty Rate Columns

- [x] Implement visibility logic in `src/components/organisms/RatesTable.astro`
  - [x] Calculate `hasOw`, `hasRt`, and `colspan` for each `SERVICE_TIER`
  - [x] Filter `SERVICE_TIERS` to only include those with visible columns
  - [x] Update table header (`thead`) to use dynamic `colspan` and conditional rendering of sub-headers
  - [x] Update table body (`tbody`) to conditionally render `<td>` cells
- [x] Verify changes on Merida page
  - [x] Run `npm run dev` and check `/en/transportation-from-cancun-to-merida`
  - [x] Confirm "Taxi for Groups" is hidden
  - [x] Confirm table structure is still correct (headers align with data)
- [x] Verify changes on Home page
  - [x] Check `/en` and `/es`
  - [x] Confirm all columns are still visible (as they have data)
