# Design: Luxury Page Pricing Translations

## Translation Mapping
The `PricingSection` component uses hardcoded keys `["luxury", "private", "group"]`. To show alternative services on the luxury page:
- `luxury` key will be used for "Private Transportation" (Standard Minivan).
- `private` key will be used for "Taxi Service".
- `group` key will be used for "Group Transportation".

Note: Since `PricingSection.astro` uses `vehicleImages[key]`, the `luxury` key will still render the `luxuryVehicleImg` (Suburban). This is a limitation of the current component architecture which relies on keys for both text and images. However, the requirement is to update the translations to match the provided HTML.

## Data Details
### English (en.json)
- **Title**: Other services similar to luxury transportation in Cancun
- **Subtitle**: List of our transportation services
- **Luxury Card**: Title: "Private Transportation", Price: "29.99", Description: "Travel comfortably in a fully equipped private service for up to 8 passengers. The service is private, with no waiting time or continuous stops."
- **Private Card**: Title: "Taxi Service", Price: "34.99", Description: "Travel comfortably in a fully equipped private service for up to 3 passengers. The service is private, with no waiting time or continuous stops."
- **Group Card**: Title: "Group Transportation", Price: "84.00", Description: "Traveling with a group of more than 8 passengers? Save money by booking our group transportation service. Our spacious and secure vehicles can accommodate up to 16 passengers."

### Spanish (es.json)
- **Title**: Otros servicios similares a transporte de lujo en Cancún
- **Subtitle**: Lista de nuestros servicios de transporte
- **Luxury Card**: Title: "Transporte privado", Price: "539.82", Description: "Viaje cómodamente en un servicio privado totalmente equipado para un máximo de 8 pasajeros. El servicio es privado, sin tiempos de espera ni paradas continuas."
- **Private Card**: Title: "Servicio de taxi", Price: "664.81", Description: "Viaje cómodamente en un servicio privado totalmente equipado para un máximo de 3 pasajeros. El servicio es privado, sin esperas ni paradas continuas."
- **Group Card**: Title: "Transporte de grupos", Price: "1512.00", Description: "¿Viaja con un grupo de más de 8 pasajeros? Ahorre dinero reservando nuestro servicio de transporte para grupos. Nuestros espaciosos y seguros vehículos pueden acomodar hasta 16 pasajeros."
