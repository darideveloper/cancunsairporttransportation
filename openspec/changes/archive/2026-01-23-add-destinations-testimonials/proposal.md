# Proposal: Add Destinations Testimonials

## Overview
Add a testimonials section to the Destinations landing page (`src/components/pages/landing/Destinations.astro`) to display customer reviews specific to destination-related services. This will enhance social proof and user trust on the destinations page.

## Problem Statement
The Destinations page currently lacks customer testimonials, which are an important trust signal for users researching transportation options to various destinations in the Riviera Maya. Other pages (Home, Private, Luxury, etc.) already have testimonials sections, but the Destinations page does not.

## Proposed Solution
1. Add the existing `Testimonials` organism component to the Destinations page
2. Create new translation entries for destination-specific testimonials in both English and Spanish
3. Generate 3 new client images to accompany the testimonials
4. Position the testimonials section at the bottom of the main content area, before the closing `</div>` of the content section

## User Value
- Provides social proof specific to destination transportation services
- Increases user confidence in booking transportation to various destinations
- Maintains consistency with other pages that already feature testimonials
- Improves conversion rates by showcasing positive customer experiences

## Technical Approach
- Reuse the existing `Testimonials.astro` organism component (no component changes needed)
- Add translation keys under `pages.destinations.testimonials` in both `en.json` and `es.json`
- Generate 3 client portrait images using the image generation tool
- Import and use the Testimonials component with the `page="destinations"` prop
- Import the 3 new client images and pass them to the component

## Scope
**In Scope:**
- Adding Testimonials component to Destinations.astro
- Creating translation entries for 3 testimonials (EN + ES)
- Generating 3 client images
- Importing necessary assets

**Out of Scope:**
- Modifying the Testimonials component itself
- Adding testimonials to other pages
- Changing the layout or styling of the Destinations page beyond adding the testimonials section

## Dependencies
- Existing `Testimonials.astro` component
- Existing translation system
- Image generation capability

## Risks & Mitigations
- **Risk:** Generated images may not match the style of existing client images
  - **Mitigation:** Review generated images and regenerate if needed to match existing style
- **Risk:** Translation content may not align with destination-specific context
  - **Mitigation:** Ensure testimonial content specifically mentions destinations (Tulum, Playa del Carmen, Cancun)

## Detailed Content

### Testimonial 1
**Client Name:** Miguel R.  
**English Review:**  
"Excellent service for our trip to Tulum! The driver was punctual, professional, and the vehicle was spotless. The journey was comfortable and we arrived safely at our hotel. Highly recommend for anyone traveling to the Riviera Maya destinations."

**Spanish Review:**  
"¡Excelente servicio para nuestro viaje a Tulum! El conductor fue puntual, profesional y el vehículo estaba impecable. El viaje fue cómodo y llegamos seguros a nuestro hotel. Muy recomendable para cualquiera que viaje a los destinos de la Riviera Maya."

### Testimonial 2
**Client Name:** Lisa K.  
**English Review:**  
"We booked transportation to Playa del Carmen and couldn't be happier! The driver gave us great tips about local restaurants and beaches. The price was fair and the service was outstanding. Will definitely use them again for our next visit."

**Spanish Review:**  
"¡Reservamos transporte a Playa del Carmen y no podríamos estar más felices! El conductor nos dio excelentes consejos sobre restaurantes y playas locales. El precio fue justo y el servicio fue excepcional. Definitivamente los usaremos de nuevo en nuestra próxima visita."

### Testimonial 3
**Client Name:** James T.  
**English Review:**  
"Perfect transportation from Cancun Airport to our resort in the Hotel Zone. The booking process was easy, the driver was waiting for us at arrivals, and the ride was smooth. Great way to start our vacation in Cancun!"

**Spanish Review:**  
"Transporte perfecto desde el Aeropuerto de Cancún hasta nuestro resort en la Zona Hotelera. El proceso de reserva fue fácil, el conductor nos estaba esperando en llegadas y el viaje fue tranquilo. ¡Excelente manera de comenzar nuestras vacaciones en Cancún!"

### Title and Description

**English:**
- **Title:** "What our customers say"
- **Description:** "The opinion of our customers is the most important thing for us"

**Spanish:**
- **Title:** "Lo que opinan nuestros clientes"
- **Description:** "La opinión de nuestros clientes es lo más importante para nosotros"

### Client Images
Three professional headshot images have been generated:
1. **destinations-client-1.webp** - Hispanic/Latino male professional
2. **destinations-client-2.webp** - Asian female professional
3. **destinations-client-3.webp** - Black male professional

All images feature friendly, professional individuals with warm smiles in business casual attire.

## Success Criteria
- Testimonials section renders correctly on the Destinations page
- All text displays properly in both English and Spanish
- Images load correctly and match the existing client image style
- Section is positioned at the bottom of the main content as specified
- No build errors or console warnings
- Translations follow the existing pattern used by other pages
- Testimonial content mentions specific destinations (Tulum, Playa del Carmen, Cancun)
