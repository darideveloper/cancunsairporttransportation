# Design: Luxury Transportation Testimonials Update

## Testimonial Mapping

| Item  | Name         | Image           | Alt (EN)                               | Alt (ES)                                      |
| :---- | :----------- | :-------------- | :------------------------------------- | :-------------------------------------------- |
| item1 | Alexander M. | `luxury-1.webp` | Comment from our customer Alexander M. | Comentarios de nuestros clientes Alexander M. |
| item2 | Sofia H.     | `luxury-2.webp` | Comment from our customer Sofia H.     | Comentarios de nuestros clientes Sofia H.     |
| item3 | Daniel R.    | `luxury-3.webp` | Comment from our customer Daniel R.    | Comentarios de nuestros clientes Daniel R.    |

## Translation Structure

The `luxury` page testimonials will be updated in both `en.json` and `es.json` under `pages.luxury.testimonials`.

### Spanish (es.json)
```json
"testimonials": {
    "title": "Traslados de Lujo en Cancún - Lo que nuestros clientes dicen de nosotros",
    "description": "La opinión de nuestros clientes es lo más importante para nosotros.",
    "items": {
        "item1": {
            "name": "Alexander M.",
            "text": "Reservé el servicio de transporte de lujo para viajar de Cancún a Tulum, y la puntualidad y profesionalismo del conductor fueron sobresalientes.",
            "imageAlt": "Comentarios de nuestros clientes Alexander M.",
            "imageTitle": "Comentarios de nuestros clientes Alexander M.",
            "stars": "5"
        },
        "item2": {
            "name": "Sofia H.",
            "text": "Nuestro traslado de lujo desde el aeropuerto de Cancún a nuestro hotel en Playa del Carmen fue impecable. El conductor era amable y proporcionó grandes recomendaciones sobre lugares para visitar. El precio también era muy razonable. ¡Un servicio excepcional!",
            "imageAlt": "Comentarios de nuestros clientes Sofia H.",
            "imageTitle": "Comentarios de nuestros clientes Sofia H.",
            "stars": "5"
        },
        "item3": {
            "name": "Daniel R.",
            "text": "He utilizado este servicio de transporte de lujo del aeropuerto de Cancún para un viaje de un día a Chichen Itza, y todo fue fantástico.",
            "imageAlt": "Comentarios de nuestros clientes Daniel R.",
            "imageTitle": "Comentarios de nuestros clientes Daniel R.",
            "stars": "5"
        }
    }
}
```

### English (en.json)
```json
"testimonials": {
    "title": "Cancun Luxury Transfers - What our clients say about us",
    "description": "The opinion of our clients is the most important thing for us.",
    "items": {
        "item1": {
            "name": "Alexander M.",
            "text": "I booked the luxury transportation service to travel from Cancun to Tulum, and the driver's punctuality and professionalism were outstanding.",
            "imageAlt": "Comment from our customer Alexander M.",
            "imageTitle": "Comment from our customer Alexander M.",
            "stars": "5"
        },
        "item2": {
            "name": "Sofia H.",
            "text": "Our luxury transfer from Cancun airport to our hotel in Playa del Carmen was flawless. The driver was amiable and provided great recommendations on places to visit. The price was also very reasonable. Exceptional service!",
            "imageAlt": "Comment from our customer Sofia H.",
            "imageTitle": "Comment from our customer Sofia H.",
            "stars": "5"
        },
        "item3": {
            "name": "Daniel R.",
            "text": "I used this Cancun Airport Luxury Transportation service for a day trip to Chichen Itza, and everything was fantastic.",
            "imageAlt": "Comment from our customer Daniel R.",
            "imageTitle": "Comment from our customer Daniel R.",
            "stars": "5"
        }
    }
}
```

## Image Assets
- New images will be generated using AI and converted to `.webp` format.
- Filenames: `luxury-1.webp`, `luxury-2.webp`, `luxury-3.webp`.
- Path: `src/assets/images/clients/`.
