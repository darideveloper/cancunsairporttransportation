import { type VehicleBuyCardProps } from "../../components/molecules/VehicleBuyCard";
import { getFormattedPrice, getCurrencyCode } from "../utils";
import { useTranslations } from "../i18n/utils";
import type {
  LegacyQuoteRequest,
  LegacyQuoteResponse,
  LegacyErrorResponse,
} from "./legacy-api.types";
import { useSearchFormStore } from "../../store/search-form";
import { vehicleFeatures } from "../../data/vehicle-features";

export async function getVehicles(
  lang: "en" | "es",
): Promise<VehicleBuyCardProps[]> {
  const searchFormState = useSearchFormStore.getState();

  // Validate required keys
  if (
    !searchFormState.locationFromData ||
    !searchFormState.locationToData ||
    !searchFormState.departureDate ||
    !searchFormState.departureTime ||
    (searchFormState.tripType === "roundTrip" &&
      (!searchFormState.returnDate || !searchFormState.returnTime))
  ) {
    console.warn("Missing required search form data");
    return [];
  }

  const payload: LegacyQuoteRequest = {
    type: searchFormState.tripType === "oneWay" ? "one-way" : "round-trip",
    language: lang,
    passengers: searchFormState.passengers,
    currency: searchFormState.currency,
    start: {
      place: searchFormState.locationFromData.name,
      lat: searchFormState.locationFromData.lat.toString(),
      lng: searchFormState.locationFromData.lng.toString(),
      pickup: `${searchFormState.departureDate} ${searchFormState.departureTime}`,
    },
    end: {
      place: searchFormState.locationToData.name,
      lat: searchFormState.locationToData.lat.toString(),
      lng: searchFormState.locationToData.lng.toString(),
      ...(searchFormState.tripType === "roundTrip" && {
        pickup: `${searchFormState.returnDate} ${searchFormState.returnTime}`,
      }),
    },
  };

  try {
    const response = await fetch(
      `${import.meta.env.PUBLIC_API_BASE}/legacy/quote/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        const errorData = (await response.json()) as LegacyErrorResponse;
        if (errorData.error?.code === "availability") {
          return [];
        }
      }
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = (await response.json()) as LegacyQuoteResponse;
    const t = useTranslations(lang);
    const storeCurrency = searchFormState.currency.toLowerCase() as
      | "usd"
      | "mxn";
    const currencyCode = getCurrencyCode(lang, storeCurrency);

    const vehicleLabels = {
      maxPassengers: t("global.ui.vehicleCard.maxPassengers"),
      maxLuggage: t("global.ui.vehicleCard.maxLuggage"),
      priceFrom: t("global.ui.vehicleCard.priceFrom"),
      save: t("global.ui.vehicleCard.save"),
      pricePerVehicle: t("global.ui.vehicleCard.pricePerVehicle"),
      bookNow: t("global.ui.vehicleCard.bookNow"),
    };

    return data.items
      .filter((item) => item.id.toString() !== "5")
      .map((item) => {
        // Feature Mapping
        const featureData = vehicleFeatures[item.id.toString()];
        const features = featureData?.features[lang];

        // Description Interpolation
        let description = features?.description || "";
        if (description) {
          description = description.replace(
            "{pax}",
            item.passengers.toString(),
          );
        }

        return {
          vehicleImage: item.image,
          vehicleName: item.name,
          maxPassengers: item.passengers,
          maxLuggage: item.luggage,
          price: parseFloat(item.price),
          // The API does not return an original price, so we'll use the price as a fallback if needed,
          // but typically 'originalPrice' is higher to show a discount.
          // Assuming no discount logic from API for now, or we can omit/mock if UI requires it.
          // Let's set it to undefined or same as price if strict, but UI might hide 'save' tag if they match.
          // Looking at previous mock data: price 45, original 60.
          // We will leave originalPrice undefined or implement logic if provided.
          // For now, let's map it to null or omit to avoid showing fake discount.
          // Actually, interface likely expects it. Let's make it optional in UI or handle here.
          // Checking VehicleBuyCardProps: it has originalPrice?: number.
          originalPrice: undefined,
          rating: featureData
            ? parseFloat(featureData.rating.split("/")[0])
            : 5,
          description: description,
          items: features?.items || [],
          currencyCode,
          formattedPrice: getFormattedPrice(parseFloat(item.price), lang, {
            currency: storeCurrency,
          }),
          // formattedOriginalPrice: ... (optional)
          labels: vehicleLabels,
          token: item.token,
        };
      });
  } catch (error) {
    console.error("Failed to fetch vehicles:", error);
    throw error;
  }
}
