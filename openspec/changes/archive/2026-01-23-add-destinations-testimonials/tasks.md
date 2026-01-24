# Tasks: Add Destinations Testimonials

## Implementation Tasks

### 1. Generate Client Images
- [x] Generate 3 diverse, professional client portrait images using the image generation tool
  - Image 1: Hispanic/Latino professional (male or female, 30-45 years old)
  - Image 2: Different ethnicity professional (male or female, 25-40 years old)  
  - Image 3: Different ethnicity professional (male or female, 35-50 years old)
- [x] Save images as `destinations-client-1.webp`, `destinations-client-2.webp`, `destinations-client-3.webp`
- [x] Place images in `/mnt/hd/develop/astro/cancunsairporttransportation/src/assets/images/clients/`
- [x] Verify images match the style and quality of existing client images

**Validation:** Images exist in the correct directory and are in WebP format

---

### 2. Add English Translations
- [x] Open `/mnt/hd/develop/astro/cancunsairporttransportation/src/messages/en.json`
- [x] Add `pages.destinations.testimonials` object with the following structure:
  ```json
  "testimonials": {
    "title": "What our customers say",
    "description": "The opinion of our customers is the most important thing for us",
    "items": {
      "item1": {
        "name": "[Random Hispanic/Latino name]",
        "text": "[Testimonial mentioning specific destination like Tulum]",
        "imageAlt": "Comment from our customer [name]",
        "imageTitle": "Comment from our customer [name]",
        "stars": "5"
      },
      "item2": {
        "name": "[Random name - different background]",
        "text": "[Testimonial mentioning specific destination like Playa del Carmen]",
        "imageAlt": "Comment from our customer [name]",
        "imageTitle": "Comment from our customer [name]",
        "stars": "5"
      },
      "item3": {
        "name": "[Random name - different background]",
        "text": "[Testimonial mentioning specific destination like Cancun]",
        "imageAlt": "Comment from our customer [name]",
        "imageTitle": "Comment from our customer [name]",
        "stars": "5"
      }
    }
  }
  ```
- [x] Ensure proper JSON formatting (no trailing commas, proper nesting)

**Validation:** JSON file is valid and contains all required keys

---

### 3. Add Spanish Translations
- [x] Open `/mnt/hd/develop/astro/cancunsairporttransportation/src/messages/es.json`
- [x] Add `pages.destinations.testimonials` object with Spanish translations:
  ```json
  "testimonials": {
    "title": "Lo que opinan nuestros clientes",
    "description": "La opinión de nuestros clientes es lo más importante para nosotros",
    "items": {
      "item1": {
        "name": "[Same name as English]",
        "text": "[Natural Spanish translation of English testimonial]",
        "imageAlt": "Comentario de nuestro cliente [name]",
        "imageTitle": "Comentario de nuestro cliente [name]",
        "stars": "5"
      },
      "item2": {
        "name": "[Same name as English]",
        "text": "[Natural Spanish translation of English testimonial]",
        "imageAlt": "Comentario de nuestro cliente [name]",
        "imageTitle": "Comentario de nuestro cliente [name]",
        "stars": "5"
      },
      "item3": {
        "name": "[Same name as English]",
        "text": "[Natural Spanish translation of English testimonial]",
        "imageAlt": "Comentario de nuestro cliente [name]",
        "imageTitle": "Comentario de nuestro cliente [name]",
        "stars": "5"
      }
    }
  }
  ```
- [x] Ensure translations are natural and idiomatic Spanish
- [x] Verify proper JSON formatting

**Validation:** JSON file is valid and Spanish translations are natural

---

### 4. Update Destinations.astro Component
- [x] Open `/mnt/hd/develop/astro/cancunsairporttransportation/src/components/pages/landing/Destinations.astro`
- [x] Add import for Testimonials component after line 19:
  ```typescript
  import Testimonials from "../../../components/organisms/Testimonials.astro";
  ```
- [x] Add imports for client images after line 27:
  ```typescript
  import destinationsClient1Img from "../../../assets/images/clients/destinations-client-1.webp";
  import destinationsClient2Img from "../../../assets/images/clients/destinations-client-2.webp";
  import destinationsClient3Img from "../../../assets/images/clients/destinations-client-3.webp";
  ```
- [x] Add Testimonials component after line 152 (after the second BasicImageCard):
  ```astro
  <!-- Testimonials -->
  <Testimonials 
    page="destinations" 
    images={[destinationsClient1Img, destinationsClient2Img, destinationsClient3Img]} 
  />
  ```
- [x] Ensure proper indentation and spacing

**Validation:** Component imports are correct and Testimonials is rendered in the right position

---

### 5. Test and Verify
- [x] Run `npm run dev` to start the development server
- [x] Navigate to `/en/destinations` and verify:
  - Testimonials section appears at the bottom of the main content
  - Title reads "What our customers say"
  - Description reads "The opinion of our customers is the most important thing for us"
  - 3 testimonials display with correct names, text, and images
  - All images load correctly
  - Layout is responsive on mobile, tablet, and desktop
- [x] Navigate to `/es/destinos` and verify:
  - Title reads "Lo que opinan nuestros clientes"
  - Description reads "La opinión de nuestros clientes es lo más importante para nosotros"
  - Spanish translations display correctly
  - Same images appear
- [x] Check browser console for any errors or warnings
- [x] Verify no layout shifts or styling conflicts

**Validation:** Page renders correctly in both languages with no errors

---

### 6. Validate with OpenSpec
- [x] Run `openspec validate add-destinations-testimonials --strict`
- [x] Resolve any validation errors
- [x] Ensure all requirements in the spec are met

**Validation:** OpenSpec validation passes with no errors

---

## Dependencies
- Task 1 must complete before Task 4 (need images to import)
- Tasks 2 and 3 can be done in parallel
- Task 4 depends on Tasks 1, 2, and 3
- Task 5 depends on Task 4
- Task 6 is final validation

## Estimated Effort
- Task 1: 15 minutes (image generation and placement)
- Task 2: 10 minutes (English translations)
- Task 3: 10 minutes (Spanish translations)
- Task 4: 5 minutes (component integration)
- Task 5: 10 minutes (testing)
- Task 6: 5 minutes (validation)

**Total: ~55 minutes**
