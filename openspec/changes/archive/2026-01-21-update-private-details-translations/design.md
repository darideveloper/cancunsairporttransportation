# Design

## Content Updates

### English (`src/messages/en.json`)
Key: `pages.privateAirportTransfer.privateDetails`

```json
{
    "title": "Cancun Private Transportation",
    "description": "Our Private Transportation service in Cancun is the perfect option for moving from the airport. With a capacity for up to 8 passengers and an affordable price, you can enjoy a comfortable and safe ride from Cancun International Airport to your hotel, Airbnb, or home in the Hotel Zone of Cancun, Playa del Carmen, Tulum, and the Riviera Maya.\n\nWithout a doubt, our private transportation service from Cancun is the most popular choice for Cancun airport transfers. Private transportation is available all day long, no need to share the vehicle with strangers or make unnecessary stops on the way to your hotel. Cancun Airport Transportation by Go Transfers offers a safe and affordable service, with airport meet and greet, professional and bilingual drivers, and travel insurance for all passengers. With more than 10 years of experience offering private transfers in Cancun with the highest quality, we provide our clients with the best experience on their trip through a personalized service.",
    "table": {
        "title": "Cancun Airport Private Transportation Prices",
        "headers": {
            "arrival": "Arrival",
            "departure": "Departure",
            "oneWay": "One Way",
            "roundTrip": "Round Trip",
            "capacity": "Capacity"
        },
        "rows": [
            {
                "arrival": "Cancun Airport",
                "departure": "Cancun Hotel Zone",
                "oneWay": "$24.00 USD",
                "roundTrip": "$48.00 USD",
                "capacity": "Up to 8 passengers"
            },
            {
                "arrival": "Cancun Hotel Zone",
                "departure": "Cancun Airport",
                "oneWay": "$24.00 USD",
                "roundTrip": "$48.00 USD",
                "capacity": "Up to 8 passengers"
            }
        ]
    },
    "cta": {
        "text": "Book now",
        "href": "#booking-form"
    }
}
```

### Spanish (`src/messages/es.json`)
Key: `pages.privateAirportTransfer.privateDetails`

```json
{
    "title": "Transportación Privada en Cancún",
    "description": "Nuestro servicio de Transportación Privada en Cancún es la opción perfecta para trasladarse desde el aeropuerto. Con una capacidad de hasta 8 pasajeros y un precio accesible, usted puede disfrutar de un viaje cómodo y seguro desde el Aeropuerto Internacional de Cancún a su hotel, Airbnb, o casa en la Zona Hotelera de Cancún, Playa del Carmen, Tulum, y la Riviera Maya.\n\nSin duda, nuestro servicio de transporte privado desde Cancún es la opción más popular en traslados al aeropuerto de Cancún. El transporte privado está disponible durante todo el día, no hay necesidad de compartir el vehículo con extraños o hacer paradas innecesarias en el camino a su hotel. Cancun Airport Transportation por Go Transfers ofrece un servicio seguro y asequible, con recogida en el aeropuerto, conductores profesionales y bilingües, y seguro de viaje para todos los pasajeros. Con más de 10 años de experiencia ofreciendo traslados privados en Cancún con la más alta calidad, brindamos a nuestros clientes la mejor experiencia en su viaje a través de un servicio personalizado.",
    "table": {
        "title": "Precios de Transportación Privada en el Aeropuerto de Cancún",
        "headers": {
            "arrival": "Llegada",
            "departure": "Salida",
            "oneWay": "Ida",
            "roundTrip": "Redondo",
            "capacity": "Capacidad"
        },
        "rows": [
            {
                "arrival": "Cancún Aeropuerto",
                "departure": "Hacia",
                "oneWay": "$539.82 MXN",
                "roundTrip": "$1,079.82 MXN",
                "capacity": "Hasta 8 pasajeros"
            },
            {
                "arrival": "Cancún Zona Hotelera",
                "departure": "Hacia",
                "oneWay": "$539.82 MXN",
                "roundTrip": "$1,079.82 MXN",
                "capacity": "Hasta 8 pasajeros"
            }
        ]
    },
    "cta": {
        "text": "Reserva Ahora",
        "href": "#booking-form"
    }
}
```

*Note: In the Spanish HTML provided, the headers were Llegada, Salida, Ida, Redondo, Capacidad. But in the rows, the cells used `data-label="Desde"`, `data-label="Hacia"`, etc. The existing JSON uses keys "arrival" and "departure". I matched the English keys structure but with the new values. I also noticed "Hacia" in the Spanish example rows vs "Salida" in header. I will use "Salida" for the header text as per the provided HTML table caption, but the JSON structure is crucial.*

Wait, looking at the Spanish HTML:
Header: Llegada, Salida, Ida, Redondo, Capacidad
Row 1: Desde: Cancún Aeropuerto, Hacia: Cancún Zona Hotelera...
Row 2: Desde: ..., Hacia: ...

In the JSON design above for Spanish I put "departure": "Hacia". I should probably check if I should put "Salida" or "Hacia".
The Header text is defined in `headers.departure`. The Row value is defined in `rows[].departure`.
In the provided HTML:
`<td>Arrival</td><td>Departure</td>` -> `Header`
`<td data-label="From">Cancun Airport</td><td data-label="To">Cancun Hotel Zone</td>` -> `Row`

So for the Spanish HEADER: "Salida".
For the Spanish ROW: "Cancún Zona Hotelera".
Ah, I see in my JSON draft I put "departure": "Hacia" for the row value? No, that was the `data-label`.
The row value is the destination name.
Row 1 Departure: "Cancún Zona Hotelera" (The destination)
Row 2 Departure: "Cancún Aeropuerto" (The destination)

Let me correct the Spanish JSON in the design to be accurate to the content, not the labels.

Corrected Spanish Rows:
Row 1: arrival="Cancún Aeropuerto", departure="Cancún Zona Hotelera"
Row 2: arrival="Cancún Zona Hotelera", departure="Cancún Aeropuerto"

I will write the file with this correction.
