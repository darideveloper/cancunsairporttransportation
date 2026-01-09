# Design

## Interface Changes

### `TextCard.astro`

**Current Props:**
```typescript
interface Props {
  id: string;
  title: string;
  image: ImageMetadata;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
  classImage?: string; // Used to style the internal Image
  reverse?: boolean;
}
```

**New Props:**
```typescript
interface Props {
  id: string;
  title: string;
  class?: string;
  reverse?: boolean;
}
```

**Slots:**
- `default`: Content (Markdown/Text).
- `image`: Image content.

## Usage Changes

**Before:**
```astro
<TextCard
  id="foo"
  title="Title"
  image={imgSrc}
  alt="Alt"
  classImage="object-right"
>
  Content
</TextCard>
```

**After:**
```astro
<TextCard
  id="foo"
  title="Title"
>
  <Image
    slot="image"
    src={imgSrc}
    alt="Alt"
    class="w-full h-full object-cover rounded-xl object-right"
  />
  Content
</TextCard>
```

## Styling Considerations
- `TextCard` currently applies `w-full h-full object-cover rounded-xl ${classImage} ${reverse ? "md:order-1" : "md:order-2"}` to the image.
- When moving to a slot, the `TextCard` can wrap the slot in a container that handles the layout order (`md:order-1`/`md:order-2`).
- However, the `PricingCard` reference usage shows the `Image` itself being passed with classes.
- The `TextCard` layout logic (`reverse`) toggles the order of the text div and the image.
- Structure:
    ```astro
    <section>
        <div class={textClass}>Text</div>
        <slot name="image" />
    </section>
    ```
    If `reverse` is true, we need to ensure the image slot appears visually in the correct order.
    Astro slots render where they are placed.
    We can either:
    1. Render the slot in two places conditionally (cleaner for layout control).
    2. Wrap the slot in a `div` that has the order classes.

    Current `TextCard` uses grid:
    ```astro
    <section class="grid md:grid-cols-2 ...">
      <div class={`... ${reverse ? "md:order-2" : "md:order-1"}`}>...</div>
      <Image class={`... ${reverse ? "md:order-1" : "md:order-2"}`} ... />
    </section>
    ```

    If we use a slot, we can't easily force classes onto the *slotted element* unless we wrap it.
    If we wrap it:
    ```astro
    <div class={`... ${reverse ? "md:order-1" : "md:order-2"}`}>
      <slot name="image" />
    </div>
    ```
    This works and preserves the layout logic without forcing the consumer to know about `md:order` classes.
    The consumer just provides the image (with its own sizing/object-fit classes if they want, or we can provide defaults on the wrapper).
    However, the current `Image` has `w-full h-full object-cover rounded-xl`. It's better to let the consumer control the image styles (as per the User's "update to use image from slot" request which often implies more control), BUT we should probably keep the structural/layout styles in the component or document them.
    
    The reference `PricingCard` passes `class="mx-auto w-9/12"` to the image.
    So in `TextCard`, we should probably just render the slot, maybe wrapped in a div for positioning if needed, or just render it.
    Given `TextCard` uses Flex/Grid order for `reverse`, wrapping the slot in a `div` with the order classes is the most robust way to handle the layout while giving the user control over the image itself.
    
    **Refined Design**:
    Wrap `slot="image"` in a container `div` that handles the `reverse` ordering logic.
    Consumer is responsible for image-specific styles (like `rounded-xl`, `object-cover`).
