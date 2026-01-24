# Add Privacy Policy Page

## Summary
Add a new Privacy Policy page to the application, fulfilling legal requirements. The page will use the existing `LegalLayout` and content collection system, supporting both English and Spanish translations.

## Motivation
The user requires a Privacy Policy page to comply with local regulations (Mexico's Federal Law of Protection of Personal Data) and to provide transparency to users.

## Approach
1.  **Content**: Create two new MDX entries in the `legal` content collection:
    *   `src/content/legal/en/privacy-policy.mdx`
    *   `src/content/legal/es/privacy-policy.mdx`
2.  **Component**: Implement `src/components/pages/legal/Privacy.astro` following the pattern established in `Terms.astro`.
    *   Fetch `privacy-policy` entry from `legal` collection based on language.
    *   Render using `LegalLayout`.
3.  **Validation**: Ensure content renders correctly for both languages.
