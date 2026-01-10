# Implement Reliable Service Section

## Goal
Add a new "Reliable Transportation Service" section to the bottom of the index page using the `TextCard` component, extracting content from provided HTML and ensuring localization and SEO best practices.

## Proposed Changes
- **Translation Files**: Add new keys for the section title, paragraphs, and button text in `src/messages/en.json` and `src/messages/es.json`.
- **Index Page**: Add the new section to `src/pages/[lang]/index.astro`.
- **Components**:
    - Use `TextCard` as the main wrapper component.
        - Add class `flex flex-col-reverse md:flex-row-reverse items-center gap-8` to position text on the left and image on the right on desktop, and image below text on mobile (or standard stack). *Correction: Original HTML has text left, image right. `TextCard` renders `image` slot first. `flex-row-reverse` puts image (child 1) on right and content (child 2) on left.*
    - Render the text content (description) using `marked.parse(text)` inside a `div` with class `markdown`.
    - Use `ButtonCta` for the Call to Action button with `variant="blue"`.
        - Content structure inside button:
          ```astro
          <div class="flex items-center gap-3 text-left">
            <FaImages className="text-3xl" />
            <div class="flex flex-col leading-tight">
              <span class="text-lg font-bold">{label}</span>
              <span class="text-xs font-light">{sublabel}</span>
            </div>
          </div>
          ```
- **Assets**:
    - Add/Upload the image `client-app-es.png` (or webp) to `src/assets/images/clients/`.
    - Ensure `react-icons` is installed (it is) and import `FaImages` (or similar).

## Content Extraction

### English (en.json)
- **Title**: "Reliable Transportation Service"
- **Description**: "With over 10 years of experience providing private transportation services, Cancun Airport Transportation by Go is the number #1 Cancun Airport Transfers company in Cancun from Cancun Airport to hotels in Cancun and Riviera Maya.\n\nCancun Airport Transportation provides private, safe, and reliable Cancun airport shuttle services to your hotel or lodging in the Cancun Hotel Zone, Downtown Cancun, Playa Mujeres, Puerto Morelos, Playa del Carmen, Puerto Aventuras, Akumal, Tulum or any part of the Riviera Maya."
- **CTA Label**: "Client Photos"
- **CTA Sublabel**: "See more client pictures"

### Spanish (es.json)
- **Title**: "Servicio de Transporte Confiable"
- **Description**: "Con más de 10 años de experiencia en la prestación de servicios de transporte privado, Cancun Airport Transportation por Go es la empresa número 1 en traslados del Aeropuerto de Cancún a hoteles en Cancún y Riviera Maya.\n\nCancun Airport Transportation ofrece servicios privados, seguros y confiables de transporte del aeropuerto de Cancun a su hotel o alojamiento en la Zona Hotelera de Cancún, Centro de Cancún, Playa Mujeres, Puerto Morelos, Playa del Carmen, Puerto Aventuras, Akumal, Tulum o cualquier parte de la Riviera Maya."
- **CTA Label**: "Fotos de Clientes"
- **CTA Sublabel**: "Ver más fotos de clientes"
