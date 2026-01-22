# Update Group Transfers Text

## Problem
The "Group Transfers" page (`/group-transfers-cancun`) currently lacks specific translation keys for the "Includes" section, causing it to potentially display missing or incorrect text for the section title and image attributes.

## Solution
Add `includes` translation keys (`title`, `imageAlt`, `imageTitle`) to the `pages.group` object in both `es.json` and `en.json` files, as requested by the user.

## Impact
- `src/messages/es.json`: Add nested `includes` object to `pages.group`.
- `src/messages/en.json`: Add nested `includes` object to `pages.group`.
- `src/pages/[lang]/group-transfers-cancun.astro`: No changes needed (dynamic keys already in place).
