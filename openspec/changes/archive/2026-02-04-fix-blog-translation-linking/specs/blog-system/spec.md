# Spec Delta: Blog System

## MODIFIED Requirements

### Requirement: Language Switching on Post
The system MUST allow users to switch between English and Spanish versions of the same post.

#### Scenario: Switching to existing translation
When a user views a post that has a related post in the other language (linked via `related_post` slug), the language switcher button MUST link directly to that related post's URL.
- **Given** I am on a blog post page (e.g., /blog/my-post)
- **And** the post data contains a `related_post` slug pointing to the translated version (e.g., "mi-articulo")
- **Then** the logic must successfully resolve this slug to the translated post object
- **And** the language toggle button must point to the translated post URL (e.g., /es/blog/mi-articulo)
