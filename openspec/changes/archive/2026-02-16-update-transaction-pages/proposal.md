# Update Transaction Status Pages

## Summary
Refactor `ThankYou.astro` and `Cancel.astro` to use a shared `TransactionStatus` organism component. This component will handle the layout, dynamic content (title, message, image), and static contact information.

## Motivation
Currently, the transaction pages are simple text blocks. We need to upgrade them to a rich, consistent layout with contact information and clear call-to-action buttons, as per the new design requirements. Using a shared component ensures consistency and simplifies maintenance.

## Solution Overview
1.  Create `src/components/organisms/TransactionStatus.astro`.
2.  Update `ThankYou.astro` and `Cancel.astro` to use this new component.
3.  Add necessary i18n keys and configure routes.
