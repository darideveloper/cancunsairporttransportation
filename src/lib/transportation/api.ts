import { type VehicleBuyCardProps } from "../../components/molecules/VehicleBuyCard";
import { getFormattedPrice, getCurrencyCode } from "../utils";
import { useTranslations } from "../i18n/utils";

export async function getVehicles(
  lang: "en" | "es",
): Promise<VehicleBuyCardProps[]> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const t = useTranslations(lang);
  const currencyCode = getCurrencyCode(lang);

  const vehicleLabels = {
    maxPassengers: t("global.ui.vehicleCard.maxPassengers"),
    maxLuggage: t("global.ui.vehicleCard.maxLuggage"),
    priceFrom: t("global.ui.vehicleCard.priceFrom"),
    save: t("global.ui.vehicleCard.save"),
    pricePerVehicle: t("global.ui.vehicleCard.pricePerVehicle"),
    bookNow: t("global.ui.vehicleCard.bookNow"),
  };

  return [
    {
      vehicleImage: "https://placehold.co/300x200/png?text=Private+Van",
      vehicleName: "Private Transportation",
      maxPassengers: 8,
      maxLuggage: 8,
      price: 45.0,
      originalPrice: 60.0,
      rating: 5,
      description:
        "Our private transportation service is perfect for families and small groups. Enjoy a comfortable and safe ride from Cancun Airport to your destination.",
      items: [
        "Professional bilingual driver",
        "Flight monitoring included",
        "Travel insurance",
        "Air-conditioned vehicle",
        "Meet and greet at airport",
      ],
      currencyCode,
      formattedPrice: getFormattedPrice(45.0, lang),
      formattedOriginalPrice: getFormattedPrice(60.0, lang),
      labels: vehicleLabels,
    },
    {
      vehicleImage: "https://placehold.co/300x200/png?text=Luxury+SUV",
      vehicleName: "Luxury Transportation",
      maxPassengers: 6,
      maxLuggage: 5,
      price: 95.0,
      originalPrice: 120.0,
      rating: 4.8,
      description:
        "Travel in style and comfort with our premium luxury SUVs. Perfect for business travelers or couples seeking a more upscale experience.",
      items: [
        "Suburban or similar luxury vehicle",
        "Cold water and towels included",
        "Bilingual professional driver",
        "Premium travel insurance",
        "Direct non-stop service",
      ],
      currencyCode,
      formattedPrice: getFormattedPrice(95.0, lang),
      formattedOriginalPrice: getFormattedPrice(120.0, lang),
      labels: vehicleLabels,
    },
    {
      vehicleImage: "https://placehold.co/300x200/png?text=Large+Van",
      vehicleName: "Group Transportation",
      maxPassengers: 16,
      maxLuggage: 16,
      price: 135.0,
      originalPrice: 170.0,
      rating: 4.5,
      description:
        "Ideal for large groups, wedding parties, or corporate events. Our spacious vans ensure everyone travels together comfortably.",
      items: [
        "Volkswagen Crafter or similar",
        "Extra space for luggage",
        "Professional group coordinator",
        "Air-conditioned spacious interior",
        "Safe and efficient group travel",
      ],
      currencyCode,
      formattedPrice: getFormattedPrice(135.0, lang),
      formattedOriginalPrice: getFormattedPrice(170.0, lang),
      labels: vehicleLabels,
    },
  ];
}
