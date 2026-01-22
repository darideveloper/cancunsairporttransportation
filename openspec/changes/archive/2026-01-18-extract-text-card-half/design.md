# Design: TextCard Components

## Overview
Two new organism/molecule components: `TextCardHalf` and `TextCardSmall`.
Both wrap `TextCard` and handle dynamic translation fetching, but they offer distinct layouts found repeatedly in the content pages.

## Shared API (Both Components)
```astro
interface Props {
  page: string;       // Current page key (e.g., 'playaDelCarmen')
  section: string;    // Section key (e.g., 'safeTrip') (Used for ID if not provided)
  image: ImageMetadata;
  id?: string;        // Optional HTML id override (default: section)
  reverse?: boolean;  // If true, image is on the right
  baseKey?: string;   // Optional override for the full translation key path
  contentKey?: string;// Key for the text content (default: 'description')
  imageAltKey?: string; // Optional override key for alt text (default: 'title')
  imageClass?: string; // Optional class override for image
}
```

## Shared Logic
1. **Translation Lookup**:
   - `const lang = getLangFromUrl(Astro.url);`
   - `const t = useTranslations(lang);`
   - `const translationBase = baseKey || \`pages.${page}.${section}\`;`
   - `const title = t(\`${translationBase}.title\`);`
   - `const imageAlt = imageAltKey ? t(\`${translationBase}.${imageAltKey}\`) : title;`
   - `const contentText = t(\`${translationBase}.${contentKey || 'description'}\`);`
   - `const contentHtml = await marked.parse(contentText);`

## Component Specifics

### 1. TextCardHalf
- **Purpose**: 50/50 split between Image and Content. Commonly used for "Safe Trip" sections.
- **Layout**: CSS Grid.
- **Structure**:
  ```astro
  <TextCard
    id={id || section}
    title={title}
    class="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-8"
  >
    <Image
       slot="image"
       class={`h-full w-full rounded-xl object-cover ${imageClass || ''} ${reverse ? 'md:order-last' : ''}`}
       alt={imageAlt}
       widths={[348, 696, 1220, image.width]}
       sizes="(max-width: 768px) 348px, (max-width: 1024px) 450px, 610px"
       ...
    />
    <div set:html={contentHtml} class="markdown" />
  </TextCard>
  ```

### 2. TextCardSmall
- **Purpose**: Content focused section with a smaller accompanying image (approx 1/3 width). commonly used for "How to Move" sections.
- **Layout**: Flexbox.
- **Structure**:
  ```astro
  <TextCard
    id={id || section}
    title={title}
    class={`flex flex-col items-center justify-center gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
  >
    <Image
       slot="image"
       class={`h-full w-full rounded-xl object-cover md:w-1/2 lg:w-1/3 ${imageClass || ''}`}
       alt={imageAlt}
       widths={[400, 800, image.width]}
       sizes="(max-width: 768px) 400px, 800px"
       ...
    />
    <div set:html={contentHtml} class="markdown text-justify" />
  </TextCard>
  ```

## Refactoring Specifications (Exact Code)

### 1. src/pages/[lang]/index.astro

**Safe Trip (TextCardHalf)**
```astro
<TextCardHalf
  id="safe-trip-booking"
  page="home"
  section="safeTrip"
  baseKey="global.sections.safeTrip"
  contentKey="text"
  image={safeTripBookingImg}
  imageClass="object-left"
/>
```

**Why Choose Us (TextCardSmall)**
```astro
<div class="bg-accent/5 mt-12 py-12">
  <TextCardSmall
    id="why-choose-us"
    page="home"
    section="whyChooseUs"
    baseKey="global.sections.whyChooseUs"
    contentKey="text"
    imageAltKey="imageAlt"
    image={customClientImg}
    imageClass="object-right"
  />
</div>
```

### 2. src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro

**Safe Trip (TextCardHalf)**
```astro
<TextCardHalf
  id="safe-trip-booking"
  page={page}
  section="safeTrip"
  image={safeTripBookingImg}
  imageClass="object-right"
/>
```

**How To Move (TextCardSmall)**
```astro
<div class="bg-accent/5 mt-12 py-12">
  <TextCardSmall
    id="how-to-move"
    page={page}
    section="howToMove"
    contentKey="content"
    image={howToMoveImg}
    imageClass="object-right"
  />
</div>
```

### 3. src/pages/[lang]/cancun-to-tulum-shuttle.astro

**Safe Trip (TextCardHalf)**
```astro
<TextCardHalf
  id="safe-trip-booking"
  page={page}
  section="safeTrip"
  image={safeTripBookingImg}
  imageClass="object-right"
/>
```

**How To Move (TextCardSmall)**
```astro
<div class="bg-accent/5 mt-12 py-12">
  <TextCardSmall
    id="how-to-move"
    page={page}
    section="howToMove"
    contentKey="content"
    image={howToMoveImg}
    imageClass="object-right"
  />
</div>
```
