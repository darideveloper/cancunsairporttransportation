# Update Playa del Carmen Testimonials

## Problem
The user wants to update the content of the testimonials on the Playa del Carmen page. The current testimonials ("Sarah M.", "Michael T.", etc.) should be replaced with new specific content provided by the user ("John P.", "Ana G.", "Carlos R.").

## Solution
We will update the translation files (`en.json` and `es.json`) for the `pages.playaDelCarmen.testimonials` key with the new content.

## Scope
- `src/messages/en.json`
- `src/messages/es.json`
- `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` (To update image imports if names/images don't align, though user request implies using existing image slots but maybe reverting to default client images if "John P" corresponds to `client1` etc. The request shows `1.webp`, `2.webp`, `3.webp`. I will check if I need to change the image props passed in the page file).

Wait, the user provided HTML snippet shows:
`/assets/img/clients/1.webp` -> John P.
`/assets/img/clients/2.webp` -> Ana G.
`/assets/img/clients/3.webp` -> Carlos R.

In the previous step, I set the Playa del Carmen page to use specific gallery images (`pdcClient1`, `pdcClient2`, `pdcClient3`).
If the user now wants "John P.", "Ana G.", "Carlos R." with images `1.webp`, `2.webp`, `3.webp`, this implies I should likely REVERT the custom image passing for this page (or pass the standard client images explicitly) and update the text.

Actually, looking at the user's request, they pointed to the lines where `Testimonials` is called with `images={[pdcClient1, pdcClient2, pdcClient3]}`.
And they provided HTML that uses `clients/1.webp`, etc.
So I should probably change the `images` prop in `transportation-from-cancun-airport-to-playa-del-carmen.astro` to use the standard client images (or remove the prop to fallback to default, as the default in `Testimonials.astro` IS `client1Img`, `client2Img`, `client3Img`).

However, the user says "update the testimonials of this page, to this info".
The "info" includes text AND images.
The images in the snippet happen to be the default ones (1, 2, 3).
The text is specific.

So plan:
1. Update `en.json` and `es.json` `pages.playaDelCarmen.testimonials` with the new text.
2. Update `transportation-from-cancun-airport-to-playa-del-carmen.astro` to NOT pass the `images` prop (so it falls back to 1, 2, 3) OR pass the specific ones if they differ from default (but 1, 2, 3 ARE the default).
I'll likely just remove the `images` prop I added in the previous step, effectively "reverting" the image part but keeping the "page" prop, and updating the text content.

## Risks
- Regression on other pages? No, `pages.home` uses `pages.home.testimonials` which serves "Juan P", "Ana G", "Carlos R" (wait, the new request ALSO has "John P", "Ana G", "Carlos R" but with specific text).
The Home page currently has:
Item 1: Juan P.
Item 2: Ana G.
Item 3: Carlos R.

The User request for Playa del Carmen:
Item 1: John P.
Item 2: Ana G.
Item 3: Carlos R.

The text is different though.
Home Ana G: "Our transfer from Cancun airport to our hotel..."
PdC Ana G: "Reservé el servicio de transporte con Go Transfers..." / "I booked the transportation service..."

So I definitely need to update the `pages.playaDelCarmen.testimonials` content.
And for images, the user snippet shows `clients/1.jpg`. The default `Testimonials` uses `clients/1.webp`. So removing the `images` prop will use the correct images (1, 2, 3).
