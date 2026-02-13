interface VehicleFeatureContent {
  description: string;
  items: string[];
}

interface VehicleFeatures {
  name: string;
  rating: string;
  features: {
    en: VehicleFeatureContent;
    es: VehicleFeatureContent;
  };
}

export const vehicleFeatures: Record<string, VehicleFeatures> = {
  "1": {
    name: "Private Standard",
    rating: "5/5",
    features: {
      en: {
        description:
          "Travel comfortably in a fully equipped private service for up to {pax} passengers. The service is private, with no waiting time or continuous stops.",
        items: [
          "Private Service",
          "Includes airport taxes and traveler's insurance",
          "This service is available every day 24/7",
          "Courtesy stop at convenience store on the route",
        ],
      },
      es: {
        description:
          "Viaje cómodamente en un servicio totalmente privado, equipado, para hasta {pax} pasajeros. El servicio es privado, sin tiempo de espera, ni paradas continuas.",
        items: [
          "Servicio Privado",
          "Incluye impuestos del Aeropuerto y Seguro de Viajero",
          "Este servicio esta disponible todos los días 24/7",
          "Parada de cortesía en tienda de conveniencia en el camino",
        ],
      },
    },
  },
  "4": {
    name: "Private Standard (Same as ID 1)",
    rating: "5/5",
    features: {
      en: {
        description:
          "Travel comfortably in a fully equipped private service for up to {pax} passengers. The service is private, with no waiting time or continuous stops.",
        items: [
          "Private Service",
          "Includes airport taxes and traveler's insurance",
          "This service is available every day 24/7",
          "Courtesy stop at convenience store on the route",
        ],
      },
      es: {
        description:
          "Viaje cómodamente en un servicio totalmente privado, equipado, para hasta {pax} pasajeros. El servicio es privado, sin tiempo de espera, ni paradas continuas.",
        items: [
          "Servicio Privado",
          "Incluye impuestos del Aeropuerto y Seguro de Viajero",
          "Este servicio esta disponible todos los días 24/7",
          "Parada de cortesía en tienda de conveniencia en el camino",
        ],
      },
    },
  },
  "2": {
    name: "Luxury Suburban",
    rating: "5/5",
    features: {
      en: {
        description:
          "Travel in a luxury Suburban. Ideal for small groups, couples or families up to 5 people. Fully equipped, the best option for your transfer from the airport to your hotel.",
        items: [
          "Includes airport taxes and insurance",
          "Private service, no waiting time, no continuous stops.",
          "Includes a free child seat, when requested",
          "Vehicle subject to availability",
          "Courtesy stop at convenience store on the way",
        ],
      },
      es: {
        description:
          "Viaje en una Suburban de lujo. Ideal para grupos pequeños, parejas o familias de hasta 5 personas. Totalmente equipada, la mejor opción para su traslado de aeropuerto a su hotel.",
        items: [
          "Incluye impuestos del Aeropuerto y Seguros",
          "Servicio Privado, sin tiempos de espera, ni paradas continuas",
          "Incluye una silla para niños gratis, cuando es solicitada",
          "Vehículo sujeto a disponibilidad",
          "Parada de cortesía en tienda de conveniencia en el camino",
        ],
      },
    },
  },
  "3": {
    name: "Group Van",
    rating: "5/5",
    features: {
      en: {
        description:
          "Travel in a Crafter Ideal for large groups, couples or families up to 15 people. Fully equipped, the best option for your transfer from the airport to your hotel.",
        items: [
          "Includes airport taxes and insurance",
          "Private service, no waiting time, no continuous stops.",
          "Includes a free child seat, when requested",
          "Service available every day, 24/7",
          "Courtesy stop at convenience store on the way",
        ],
      },
      es: {
        description:
          "Viaje en una Crafter Ideal para grupos grandes, parejas o familias de hasta 15 personas. Totalmente equipada, la mejor opción para su traslado de aeropuerto a su hotel.",
        items: [
          "Incluye impuestos del Aeropuerto y Seguros",
          "Servicio Privado, sin tiempos de espera, ni paradas continuas",
          "Incluye una silla para niños gratis, cuando es solicitada",
          "Servicio disponible todos los días, 24/7",
          "Parada de cortesía en tienda de conveniencia en el camino",
        ],
      },
    },
  },
};
