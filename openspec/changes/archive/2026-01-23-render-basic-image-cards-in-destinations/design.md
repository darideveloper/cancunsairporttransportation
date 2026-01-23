# Design: Render BasicImageCards and Remove Component Styles

## Problem
The `BasicImageCard` molecule currently has opinionated styles. The user wants to use it in `Destinations.astro` but also wants the component itself to be stripped of all styles.

## Architecture

### Headless Component Pattern
We will transform `BasicImageCard.astro` into a structural-only component. This means:
- All Tailwind classes are removed.
- Elements retain their semantic tags (`article`, `h3`, `div`).
- Empty `class=""` attributes are kept for future flexibility or if passed via props (though the current implementation might need refinement if `class` prop is used).

### Layout in Destinations.astro
The cards will be rendered in `Destinations.astro`. 

```astro
<div class="destinations-highlights mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
  <BasicImageCard
    title={t('pages.destinations.highlights.reserve.title')}
    image={{
      src: "/assets/img/destinations/book-now.png",
      alt: t('pages.destinations.highlights.reserve.imageAlt'),
      title: t('pages.destinations.highlights.reserve.imageTitle')
    }}
  >
    <div set:html={marked.parse(t('pages.destinations.highlights.reserve.text'))} />
  </BasicImageCard>
  
  <BasicImageCard
    title={t('pages.destinations.highlights.contact.title')}
    image={{
      src: "/assets/img/destinations/customer-service.png",
      alt: t('pages.destinations.highlights.contact.imageAlt'),
      title: t('pages.destinations.highlights.contact.imageTitle')
    }}
  >
    <div set:html={marked.parse(t('pages.destinations.highlights.contact.text'))} />
  </BasicImageCard>
</div>
```

### Component Structure (Post-Cleanup)
```astro
<article class="" aria-labelledby={id}>
  <div class="">
    <img src={...} class="" />
  </div>
  <div class="">
    <h3 class="" id={id}>{title}</h3>
    <div class="">
      <slot />
    </div>
  </div>
</article>
```
