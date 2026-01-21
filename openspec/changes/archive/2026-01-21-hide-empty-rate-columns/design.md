# Design: Dynamic Column Visibility in RatesTable

The goal is to make the `RatesTable` adaptive to the data it receives. If a specific service or trip type is unavailable for all listed destinations on a page, it should not occupy space in the table.

## Data Processing
We will process `SERVICE_TIERS` to calculate visibility flags for each tier and its respective One Way (`ow`) and Round Trip (`rt`) columns.

### Algorithm
1.  Iterate through `SERVICE_TIERS`.
2.  For each tier, check the `destinations` array:
    - `hasOw`: At least one destination has a value for `tier.owKey` that is not "N/A".
    - `hasRt`: At least one destination has a value for `tier.rtKey` that is not "N/A".
    - `isVisible`: Either `hasOw` or `hasRt` is true.
    - `colspan`: 2 if both `hasOw` and `hasRt` are true, 1 if only one is true.
3.  Filter out tiers where `isVisible` is false.

## Rendering Updates

### Table Header (`thead`)
- The first row of headers (`tier.label`) will use the calculated `colspan`.
- The second row of headers (One Way / Round Trip) will only render the sub-header if the corresponding `hasOw` or `hasRt` is true.

### Table Body (`tbody`)
- For each destination row, only render the `<td>` cells for the visible columns of the active tiers.

## Edge Cases
- **All columns N/A**: If for some reason all columns are "N/A", the table might look empty (only the Destination column). This is unlikely given the data, but the logic should handle it gracefully (it will just show the Destination column).
- **Inconsistent N/A**: If Destination A has OW but not RT, and Destination B has RT but not OW, both columns (OW and RT) will remain visible for both rows (showing "N/A" where appropriate). A column is only hidden if it is "N/A" for ALL destinations in the current view.
