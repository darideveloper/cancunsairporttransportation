# Proposal: Fix React Component Props

## Overview
Recent conversion of several `.astro` components to React (`.tsx`) has led to a mismatch in prop naming. React components use `className` instead of the standard HTML `class` attribute. This proposal aims to fix all occurrences where React components are still being passed a `class` prop in Astro templates, ensuring styles are correctly applied.

## Capabilities
- `fix-className-props`: Update all Astro components to use `className` when passing styles to React components.

## What Changes

> [!NOTE] Spec: fix-className-props
> - ADDED: Replace `class` prop with `className` in all Astro templates where React components are used to ensure CSS styles are correctly applied.

## Success Criteria
- [ ] No React component in an Astro template receives a `class` prop.
- [ ] All updated components render with their intended styles.
- [ ] Build process completes successfully without prop-related warnings.
