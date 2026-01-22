# Update Luxury Transportation Translations

## Goal
Update the translation texts for the "Luxury Transportation" page in both English and Spanish, specifically the "Private Details" section which includes the description and pricing table.

## English Content (`src/messages/en.json`)

**Key:** `pages.luxury.privateDetails`

**Content:**
```json
{
    "title": "Cancun Luxury Transportation",
    "description": "Our Cancun Airport Luxury Transportation is the ultimate choice for traveling from the airport. Designed to accommodate up to 8 passengers, our service offers a premium, comfortable, and safe ride from Cancun International Airport to your hotel, Airbnb, or home in the Hotel Zone of Cancun, Playa del Carmen, Tulum, and the Riviera Maya.\n\nUnquestionably, our luxury transportation service is the top choice for Cancun airport transfers. Available around the clock, this service ensures you travel exclusively with your party, avoiding the need to share the vehicle with strangers or make unnecessary stops on the way to your destination.\n\nCancun Airport Transportation by Go Transfers provides a secure and elegant service, featuring airport meet and greet, professional and bilingual drivers, and travel insurance for all passengers. With over 10 years of experience in offering luxury transfers in Cancun, we ensure our clients have the best experience on their journey with personalized and top-tier service.",
    "table": {
        "title": "Cancun Airport Luxury Transportation Prices",
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
                "oneWay": "$84.00 USD",
                "roundTrip": "$160.00 USD",
                "capacity": "Up to 5 passengers"
            },
            {
                "arrival": "Cancun Hotel Zone",
                "departure": "Cancun Airport",
                "oneWay": "$84.00 USD",
                "roundTrip": "$160.00 USD",
                "capacity": "Up to 5 passengers"
            }
        ]
    },
    "cta": {
        "text": "Book now",
        "href": "#booking-form"
    }
}
```

## Spanish Content (`src/messages/es.json`)

**Key:** `pages.luxury.privateDetails`

**Content:**
```json
{
    "title": "Transportación de lujo en Cancún",
    "description": "Nuestro servicio de transportación de lujo en el Aeropuerto de Cancún es la mejor opción para viajar desde el aeropuerto. Diseñado para acomodar hasta 8 pasajeros, nuestro servicio ofrece un viaje de lujo, cómodo y seguro desde el Aeropuerto Internacional de Cancún a su hotel, Airbnb o casa en la Zona Hotelera de Cancún, Playa del Carmen, Tulum y la Riviera Maya.\n\nSin duda, nuestro servicio de transporte de lujo es la mejor opción para trasladarse al aeropuerto de Cancún. Disponible las 24 horas del día, este servicio le asegura viajar exclusivamente con su grupo, evitando la necesidad de compartir el vehículo con extraños o hacer paradas innecesarias en el camino a su destino.\n\nCancun Airport Transportation por Go Transfers ofrece un servicio seguro y elegante, con recogida en el aeropuerto, conductores profesionales y bilingües, y seguro de viaje para todos los pasajeros. Con más de una década de experiencia ofreciendo traslados de lujo en Cancún, nos aseguramos de que nuestros clientes tengan la mejor experiencia en su viaje con un servicio personalizado y de primer nivel.",
    "table": {
        "title": "Transporte de Lujo en el Aeropuerto de Cancún - Precios",
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
                "departure": "Cancún Zona Hotelera",
                "oneWay": "$1,596 MXN",
                "roundTrip": "$3,040 MXN",
                "capacity": "Hasta 5 pasajeros"
            },
            {
                "arrival": "Cancún Zona Hotelera",
                "departure": "Cancún Aeropuerto",
                "oneWay": "$1,596 MXN",
                "roundTrip": "$3,040 MXN",
                "capacity": "Hasta 5 pasajeros"
            }
        ]
    },
    "cta": {
        "text": "Reserva Ahora",
        "href": "#booking-form"
    }
}
```
