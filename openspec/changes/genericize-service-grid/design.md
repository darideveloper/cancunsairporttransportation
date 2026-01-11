# Design: InfoIconCard (Generic Grid Section)

## Overview
Transform the "Transportation Services" structure into a reusable `InfoIconCard` component.

## Architecture

### Component: InfoIconCard.astro (Organism)
This component encapsulates a section with a heading and a grid of cards.

```typescript
interface Props {
  title: string;
  description?: string;
  items: {
    title: string;
    text: string;
    Icon: any;
  }[];
  class?: string;
  titleColor?: string;
  TopIcon?: any;
  BottomIcon?: any;
}
```

### Layout Structure
- `<section class={className}>`
  - `<div class="heading-wrapper flex items-center gap-2 justify-center">`
    - `{TopIcon && <TopIcon className="text-2xl" />}`
    - `<SectionHeading title={title} class="flex-grow">`
      - `{titleColor && <style>{`#heading-${id} { color: ${titleColor}; }`}</style>}`
      - `<p class="max-w-2xl mx-auto">{description}</p>`
    - `</SectionHeading>`
  - `</div>`
  - `<div class="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">`
    - `Map through items and render ServiceCard`
  - `</div>`
  - `{BottomIcon && <div class="mt-12 flex justify-center"><BottomIcon className="text-3xl" /></div>}`
- `</section>`

## Implementation Details
- **Styling**: The `class` prop will be merged with default section classes.
- **Title Color**: Will be applied either as an inline style or a scoped class to the `SectionHeading`'s title.
- **Icons**: Supporting React Icons passed as props.

## Reusability
The component `TransportationServices.astro` will now look like:
```astro
---
import InfoIconCard from "./InfoIconCard.astro";
// ... data
---
<InfoIconCard 
  title={t("...")} 
  description={t("...")} 
  items={services} 
  class="container mt-12 py-12"
/>
```
