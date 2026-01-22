# Proposal: Update Merida FAQ Content

## Why
The Cancun to Merida transportation page currently displays placeholder FAQ content (from the Tulum page) in both English and Spanish. Additionally, the FAQ section component is hardcoded to use a global description, preventing page-specific descriptions as requested by the user.

## What Changes
1.  **Update Translation Files**: Replace the placeholder Merida FAQ content in `src/messages/en.json` and `src/messages/es.json` with localized content.
2.  **Support Local Descriptions**: Update the `FaqSection` component to optionally use a page-specific description from the translation files, falling back to the global description if not present.

## Detailed Texts

### Spanish (ES)
- **FAQ Title**: `Transporte de Cancún a Mérida - Preguntas frecuentes`
- **FAQ Description**: `Te ayudamos a despejar todas tus dudas sobre nuestro servicio de traslado`
- **FAQ Items**:
    - **service24h**:
        - Q: `¿El servicio de transporte de Cancún a Mérida está disponible las 24 horas?`
        - A: `Sí, nuestro servicio de transporte opera las 24 horas para adaptarse a todos los horarios de vuelos, incluyendo llegadas tempranas y salidas nocturnas.`
    - **doorToDoor**:
        - Q: `¿Ofrecen servicio puerta a puerta para los traslados de Cancún a Mérida?`
        - A: `¡Absolutamente! Ofrecemos un servicio puerta a puerta, llevándote directamente desde el Aeropuerto de Cancún a tu hotel o destino en Mérida.`
    - **largeGroups**:
        - Q: `¿Puedo reservar un traslado privado para un grupo grande?`
        - A: `Sí, ofrecemos traslados privados para grupos de todos los tamaños, con vehículos que pueden acomodar hasta 16 pasajeros.`
    - **priceIncludes**:
        - Q: `¿Qué está incluido en el precio del servicio de transporte?`
        - A: `El precio incluye un traslado privado, todos los impuestos, peajes y propinas. No hay cargos ocultos.`

### English (EN)
- **FAQ Title**: `Cancun to Merida Transportation - FAQs`
- **FAQ Description**: `Rates for Transfer Services in Mérida and the Riviera Maya`
- **FAQ Items**:
    - **service24h**:
        - Q: `Is the Cancun to Merida shuttle service available 24/7?`
        - A: `Yes, our shuttle service operates 24/7 to accommodate all flight schedules, including early arrivals and late-night departures.`
    - **doorToDoor**:
        - Q: `Do you provide door-to-door service for Cancun to Merida transfers?`
        - A: `Absolutely! We offer convenient door-to-door service, taking you directly from Cancun Airport to your hotel or destination in Merida.`
    - **largeGroups**:
        - Q: `Can I book a private transfer for a large group?`
        - A: `Yes, we provide private transfers for groups of all sizes, with vehicles that can accommodate up to 16 passengers.`
    - **priceIncludes**:
        - Q: `What is included in the price of the shuttle service?`
        - A: `The price includes a private transfer, all taxes, tolls, and gratuities. There are no hidden fees.`

## Impact
- **Consistency**: Users will see correct information for the Merida destination.
- **Flexibility**: The `FaqSection` component will be more versatile, allowing for better SEO and targeted messaging on destination pages.
