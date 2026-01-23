# Proposal: Fix Header Translation Link

## Summary
The language switcher (Header translate button) currently redirects to the home page of the target language (e.g., `/es` or `/`) instead of the localized version of the current page. This is because the `pageKey` prop is not effectively passed from the router to the page components and then to the Layout/Header.

## Scope
- Update `src/pages/[...path].astro` to pass the `pageKey` prop to all page components (`Home`, `Taxi`, etc.).
- Refactor all page components in `src/components/pages/*.astro` to:
    - Accept `pageKey` as a prop.
    - Pass `pageKey` to the `<Layout>` component.
- Ensure `Layout.astro` correctly receives `pageKey` and passes it to the `Header`.

## Rationale
- **User Experience**: Users expect to stay on the same context when switching languages. Redirecting to home is confusing and frustrates the user journey.
- **Architectural Cleanup**: Completes the i18n routing refactor by fully integrating the `pageKey` concept across the component tree.

## Risk Assessment
- **Low Risk**: The change is purely prop propagation. It shouldn't affect existing logic other than enabling the correct link generation in the `Header`.
- **Validation**: Will explicitly verify the link generation on key pages (Home, Taxi, Tulum).
