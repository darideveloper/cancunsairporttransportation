# Design: Markdown Support in NoAvailability Component

## Context
The project uses `marked` for parsing Markdown in some Astro components but `NoAvailability.tsx` is a React/Preact component (implied by `.tsx` and `export default function`).

## Decision
1. **Translation Format**: Use `**` for bolding as requested.
2. **Parsing**:
   - Since `NoAvailability.tsx` is likely a client-side or hybrid component (it uses `FA` icons and `ButtonCta`), we should ensure `marked` is available or use a simple regex replacement if we want to avoid a heavy dependency for just bolding.
   - However, since the user explicitly asked to "do it using markdown in the translation files, like in other parts of the project", we will follow the `marked` pattern if it doesn't break React compatibility, or a similar safe-html approach.
   - Note: If it's a React component, `marked.parse()` returns a string which needs `dangerouslySetInnerHTML`.

## Trade-offs
- Using `marked` in a client component adds bundle size.
- Regex replacement `text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')` is lighter but less "markdown-like" if the user expands usage later.
- We will stick to the project's established pattern seen in `Destinations.astro`.
