# Tasks: Google Analytics Integration

- [x] **Add Gtag to Layout**: Insert the Google Analytics initialization script in the `<head>` of `src/layouts/Layout.astro`. Verify script presence and `window.gtag` definition. <!-- id: 0 -->
- [x] **Verify Configuration**: Ensure the `config` command for `AW-18013613191` is called on initialization. Check network hits to `google-analytics.com`. <!-- id: 1 -->
- [x] **Implement Tracking Logic in ThankYou**: Add a script block to `src/components/pages/store/ThankYou.astro` that listens for `astro:page-load`. <!-- id: 2 -->
- [x] **Store Data Extraction**: Access `useSearchFormStore` from `localStorage` within the script and validate retrieval of price, currency, and reservationId. <!-- id: 3 -->
- [x] **Cross-reference Check**: Implement validation to ensure the URL `code` matches the store `reservationId` before firing the event. <!-- id: 4 -->
- [x] **Fire Conversion Event**: Call `gtag('event', 'conversion', ...)` with correct parameters and verify the `collect` request in the network tab. <!-- id: 5 -->
- [x] **Deduplication Logic**: Add a flag in `sessionStorage` to ensure the conversion event only fires once per visit to the Thank You page. <!-- id: 6 -->
