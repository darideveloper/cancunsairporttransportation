# Proposal: Fix Blog Translation Linking

## Goal
Fix the bug where the blog post translation button redirects to the blog index instead of the specific translated article.

## Issue
The API returns `related_post` as a **slug string** (e.g., `"related-slug"`), but the frontend code expects a **numeric ID**. This type mismatch causes the lookup logic to fail, defaulting the translation path to the main blog page.

## Solution
1.  **Update Types**: Change `PostDetail.related_post` to `string | null` in `src/types/blog.ts`.
2.  **Update Logic**: Modify `src/pages/blog/[slug].astro` and `src/pages/es/blog/[slug].astro` to find the related post by matching the `slug` property instead of the `id` property.

## Risks
None. This is a fix for broken functionality.
