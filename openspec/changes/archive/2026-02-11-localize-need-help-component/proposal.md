# Localize NeedHelp Component

@change-id: localize-need-help-component
@author: Antigravity
@created: 2026-02-11
@status: draft

## Summary

This proposal outlines the changes required to fully localize the `NeedHelp.astro` component and implement accessibility best practices for the images contained within it.

## Problem Statement

The current `NeedHelp.astro` component contains hardcoded Spanish text and iterates over a list of logo images without providing specific `alt` or `title` attributes. This limits the component's usability for non-Spanish speakers and accessibility for users relying on screen readers.

## Proposed Solution

1.  **Integrate i18n System**: utilizing existing `useTranslations` hook.
2.  **Externalize Strings**: Move hardcoded text to `messages/en.json` and `messages/es.json`.
3.  **Enhance Image Metadata**: Refactor the `logos` array to include metadata keys for `alt` and `title` attributes, which will be fetched from translations.

## Impact

-   **User Experience**: Non-Spanish speakers will see localized content.
-   **Accessibility**: Screen readers will announce meaningful descriptions for the logos.
-   **Maintainability**: Centralized translations make future updates easier.

## Risks

-   **Regressions**: Potential for broken layouts if text length varies significantly languages (low risk).
-   **Missing Keys**: If keys are not added to all language files, fallback behavior will apply.
