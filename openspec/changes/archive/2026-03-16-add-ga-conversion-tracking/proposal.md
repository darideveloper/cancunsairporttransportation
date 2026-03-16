# Proposal: Add Google Analytics Conversion Tracking

Add Google Analytics initialization and dynamic conversion event tracking to the "Thank You" and "Gracias" pages to measure booking successes.

## Problem
The current application does not track conversions or user interactions via Google Analytics. Specifically, the conversion event required for Google Ads/Analytics on the "Thank You" page is missing, preventing the business from measuring the ROI of their marketing efforts.

## Why
This change is essential to capture conversion data, which allows for better decision-making regarding marketing spend and tracking successful customer bookings.

## What Changes
1.  **Initialize Google Analytics**: Add the base `gtag.js` script to the global `Layout.astro` component.
2.  **Dynamic Conversion Event**: Implement a client-side tracking script on the `ThankYou.astro` page.

## Proposed Solution
1.  **Initialize Google Analytics**: Add the base `gtag.js` script to the global `Layout.astro` component.
2.  **Dynamic Conversion Event**: Implement a client-side tracking script on the `ThankYou.astro` page that:
    *   Reads the `reservationId`, `price`, and `currency` from the Zustand store (`useSearchFormStore`).
    *   Cross-references with the `code` parameter in the URL for validation.
    *   Fires a `conversion` event to Google Analytics.
    *   Ensures compatibility with `astro:transitions` by listening for the `astro:page-load` event.

## Scope
-   **Layout**: Global initialization of GA.
-   **Thank You Page**: Dynamic event firing.
-   **State Management**: Accessing persisted booking data for tracking.

## Out of Scope
-   Tracking other events (e.g., clicks, searches) across the site.
-   Server-side tracking (API-based).
-   Cookie consent management (unless already present).
