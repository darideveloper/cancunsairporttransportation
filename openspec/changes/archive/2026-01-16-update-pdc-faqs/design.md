# Design: Update Playa del Carmen FAQs

## Localization Mapping

The following keys will be used in `pages.playaDelCarmen.faq.items`:

| Key                 | English Question                                                                            | Spanish Question                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `cost`              | How much is Transportation from Cancun to Playa del Carmen?                                 | ¿Cuánto cuesta el transporte de Cancún a Playa del Carmen?                                   |
| `safe`              | Is Transportation from Cancun Airport to Playa del Carmen safe?                             | ¿Es seguro el transporte del Aeropuerto de Cancún a Playa del Carmen?                        |
| `benefits`          | What benefits can I get with a shuttle to Playa del Carmen from Cancun?                     | ¿Qué beneficios puedo obtener con un servicio de transporte a Playa del Carmen desde Cancún? |
| `howToGet`          | How do I get from Cancun Airport to Playa del Carmen?                                       | ¿Cómo llegar del Aeropuerto de Cancún a Playa del Carmen?                                    |
| `distance`          | How far is Playa del Carmen from Cancun Airport?                                            | ¿A qué distancia está Playa del Carmen del Aeropuerto de Cancún?                             |
| `placesToVisit`     | What places can I visit in Playa del Carmen with a shuttle from Cancun to Playa del Carmen? | *N/A (Missing in original Spanish source)*                                                   |
| `uber`              | Is there an Uber in Playa del Carmen?                                                       | ¿Hay Uber en Playa del Carmen?                                                               |
| `cheapest`          | What is the cheapest airport shuttle from Cancun to Playa del Carmen?                       | ¿Cuál es el servicio de transporte más barato de Cancún a Playa del Carmen?                  |
| `otherDestinations` | What other destinations can I book for my shuttle service?                                  | ¿Qué otros destinos puedo reservar para mi servicio de transporte?                           |

> [!NOTE]
> For the `placesToVisit` item, I will skip it in Spanish as it was not provided in the original HTML source, or I can provide a translation if requested. For now, I'll follow the provided source strictly.

## Component Integration
The `FaqSection` component in `src/pages/[lang]/transportation-from-cancun-airport-to-playa-del-carmen.astro` already uses the `page` prop set to `playaDelCarmen`. Updating the JSON files will automatically reflect the changes on the site.
