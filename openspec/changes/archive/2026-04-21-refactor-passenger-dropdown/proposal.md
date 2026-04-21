---
change-id: refactor-passenger-dropdown
title: Refactor Passenger Input to Dropdown
status: completed
author: Gemini CLI
date: 2026-04-20
---

# Proposal: Refactor Passenger Input to Dropdown

## Why
The current passenger selection in the booking form uses a numeric input field (`<input type="number">`). This implementation is suboptimal for mobile devices and allows users to enter values outside the logically supported range (1-25). Additionally, the UI styling is inconsistent with the modern, rounded-border design system described in the project documentation.

## What Changes
Refactor the `PassengerInput` component to use a native HTML `<select>` element. This ensures a consistent, cross-device experience (especially on mobile) and restricts selection to the supported range of 1 to 25 passengers.

The refactored component will:
1. Use a native `<select>` element with options from 1 to 25.
2. Apply standard Tailwind CSS classes for a modern, responsive appearance, aligning with the project's modern design system.
3. Include a custom SVG background arrow to ensure the dropdown is visually recognizable (compensating for the global `appearance-none` style).
4. Utilize `clsx` for robust conditional class management.

## Impact
- **UI/UX**: Improved mobile experience and restricted input range.
- **Consistency**: Aligns implementation with `docs/bookings/passengers.md`.
- **Maintainability**: Cleaner code using `clsx` and native elements.

## Spec Deltas
- **MODIFIED `booking-form`**: Update the `PassengerInput` requirement to specify a `<select>` element with a range of 1-25.
