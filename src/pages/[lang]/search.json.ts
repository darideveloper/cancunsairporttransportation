
import { getPosts } from "../../lib/blog/api";
import { routes } from "../../lib/i18n/routes";

export const prerender = true;

export async function getStaticPaths() {
    return [
        { params: { lang: "en" } },
        { params: { lang: "es" } },
    ];
}

const STATIC_PAGES_METADATA = {
    home: {
        en: { title: "Home - Cancun Airport Transportation", description: "Official Cancun Airport Transportation services." },
        es: { title: "Inicio - Transporte Aeropuerto Cancún", description: "Servicios oficiales de transporte del aeropuerto de Cancún." },
    },
    taxi: {
        en: { title: "Cancun Airport Taxi", description: "Safe and reliable taxi service from Cancun Airport." },
        es: { title: "Taxi Aeropuerto Cancún", description: "Servicio de taxi seguro y confiable desde el aeropuerto de Cancún." },
    },
    akumal: {
        en: { title: "Cancun to Akumal Shuttle", description: "Private shuttle service from Cancun Airport to Akumal." },
        es: { title: "Transporte Cancún a Akumal", description: "Servicio de transporte privado desde el aeropuerto de Cancún a Akumal." },
    },
    tulum: {
        en: { title: "Cancun to Tulum Shuttle", description: "Direct transportation from Cancun Airport to Tulum." },
        es: { title: "Traslado Cancún a Tulum", description: "Transporte directo desde el aeropuerto de Cancún a Tulum." },
    },
    destinations: {
        en: { title: "Destinations", description: "Explore all our transportation destinations in Riviera Maya." },
        es: { title: "Destinos", description: "Explore todos nuestros destinos de transporte en Riviera Maya." },
    },
    group: {
        en: { title: "Group Transportation", description: "Transportation solutions for large groups and events." },
        es: { title: "Transporte para Grupos", description: "Soluciones de transporte para grandes grupos y eventos." },
    },
    luxury: {
        en: { title: "Luxury Transportation", description: "Premium luxury SUV transportation services." },
        es: { title: "Transporte de Lujo", description: "Servicios de transporte en SUV de lujo premium." },
    },
    private: {
        en: { title: "Private Transportation", description: "Private airport transfers just for you." },
        es: { title: "Transporte Privado", description: "Traslados privados al aeropuerto solo para usted." },
    },
    playa: {
        en: { title: "Cancun to Playa del Carmen", description: "Reliable shuttle to Playa del Carmen." },
        es: { title: "Cancún a Playa del Carmen", description: "Transporte confiable a Playa del Carmen." },
    },
    merida: {
        en: { title: "Cancun to Merida", description: "Transportation services to Merida." },
        es: { title: "Cancún a Mérida", description: "Servicios de transporte a Mérida." },
    },
    contact: {
        en: { title: "Contact Us", description: "Get in touch with our support team." },
        es: { title: "Contáctenos", description: "Póngase en contacto con nuestro equipo de soporte." },
    },
    terms: {
        en: { title: "Terms and Conditions", description: "Read our terms of service." },
        es: { title: "Términos y Condiciones", description: "Lea nuestros términos de servicio." },
    },
    privacy: {
        en: { title: "Privacy Policy", description: "Read our privacy policy." },
        es: { title: "Política de Privacidad", description: "Lea nuestra política de privacidad." },
    },
    reservation: {
        en: { title: "My Reservation", description: "Check your reservation status." },
        es: { title: "Mi Reservación", description: "Verifique el estado de su reservación." },
    },
    blog: {
        en: { title: "Blog", description: "Travel tips and news about Cancun." },
        es: { title: "Blog", description: "Consejos de viaje y noticias sobre Cancún." },
    },
};

export async function GET({ params }: { params: { lang: "en" | "es" } }) {
    const lang = params.lang;
    // 1. Process Blog Posts
    const posts = await getPosts(lang);

    const blogResults = posts.map((post) => {
        let url = lang === 'en' ? `/blog/${post.slug}` : `/es/blog/${post.slug}`;

        return {
            title: post.title,
            description: post.description,
            url: url,
            type: "blog",
        };
    });

    // 2. Process Static Pages
    const staticResults = Object.keys(routes).map((key) => {
        // @ts-ignore
        const routePath = routes[key][lang];
        if (routePath === undefined) return null;

        // @ts-ignore
        const metadata = STATIC_PAGES_METADATA[key]?.[lang] || { title: key, description: "" };

        const prefix = lang === 'en' ? '/' : '/';
        // Ensure path has leading slash if it's not empty, but routePath for 'en' might be empty string for home
        let finalUrl = `/${routePath}`;

        // Fix for home page which might be empty string
        if (routePath === "" && lang === 'en') finalUrl = "/";

        // Ensure no double slashes
        finalUrl = finalUrl.replace('//', '/');

        return {
            title: metadata.title,
            description: metadata.description,
            url: finalUrl,
            type: "page",
        };
    }).filter(Boolean);

    const allResults = [...staticResults, ...blogResults];

    return new Response(JSON.stringify(allResults), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
