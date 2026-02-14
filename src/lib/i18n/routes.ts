export const routes = {
  home: {
    en: "",
    es: "es",
  },
  taxi: {
    en: "cancun-airport-taxi",
    es: "es/taxi-aeropuerto-cancun",
  },
  akumal: {
    en: "cancun-to-akumal-shuttle",
    es: "es/transporte-cancun-akumal",
  },
  tulum: {
    en: "cancun-to-tulum-shuttle",
    es: "es/traslado-cancun-tulum",
  },
  destinations: {
    en: "destinations",
    es: "es/destinos",
  },
  group: {
    en: "group-transfers-cancun",
    es: "es/transporte-para-grupos-cancun",
  },
  luxury: {
    en: "luxury-transportation-cancun",
    es: "es/transporte-de-lujo-cancun",
  },
  private: {
    en: "private-airport-transfer-cancun",
    es: "es/transporte-privado-cancun",
  },
  playa: {
    en: "transportation-from-cancun-airport-to-playa-del-carmen",
    es: "es/transportacion-cancun-a-playa-del-carmen",
  },
  merida: {
    en: "transportation-from-cancun-to-merida",
    es: "es/traslado-de-cancun-a-merida",
  },
  terms: {
    en: "terms-and-conditions",
    es: "es/terminos-y-condiciones",
  },
  contact: {
    en: "contact",
    es: "es/contacto",
  },
  privacy: {
    en: "privacy",
    es: "es/privacidad",
  },
  reservation: {
    en: "my-reservation",
    es: "es/mi-reservacion",
  },
  blog: {
    en: "blog",
    es: "es/blog",
  },
  results: {
    en: "results",
    es: "es/resultados",
  },
  register: {
    en: "register",
    es: "es/registro",
  },
} as const;

export type PageKey = keyof typeof routes;
