# Design: BasicImageCard Component

## Architecture
The `BasicImageCard` will be an Astro molecule component. It will follow the existing project patterns for card components but with a focus on horizontal alignment.

## Component Structure
### Props
```typescript
interface Props {
  title: string;
  text?: string;
  image: {
    src: ImageMetadata | string;
    alt: string;
    title?: string;
  };
  contentClass?: string;
}
```

### Layout
- **Container**: `article`. Use `flex items-start gap-4`.
- **Image Section**: Fixed or flexible width column on the left.
- **Content Section**: `flex flex-col` column on the right containing `h3` and `p`.

### Styling
- Use Tailwind CSS 4.x utility classes.
- Apply subtle transitions consistent with the project's design system.

## Accessibility
- Use `article` as the semantic wrapper.
- `aria-labelledby` pointing to the title ID.
- Images must have `alt` text.
