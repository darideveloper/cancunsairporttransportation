# Refactor Content Pages to Use Dynamic Keys

## Summary
Refactor `src/pages/[lang]/cancun-to-tulum-shuttle.astro`, `src/pages/[lang]/index.astro`, and `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` to use the defined `page` variable for resolving translation keys dynamically. This reduces hardcoded strings and makes the pages easier to maintain and clone.

## Problem
Currently, translation keys are hardcoded in each page file (e.g., `"pages.cancunToTulumShuttle.safeTrip.description"`). This leads to redundancy and requires manual updates to multiple strings when creating new pages or renaming existing ones.

## Solution
Utilize the existing `page` constant (e.g., `const page = "cancunToTulumShuttle"`) to dynamically construct translation keys (e.g., `t(\`pages.${page}.safeTrip.description\`)`).
