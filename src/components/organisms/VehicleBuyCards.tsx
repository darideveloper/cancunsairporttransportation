// Hooks
import { useState, useEffect } from "react";

// Components
import VehicleBuyCard, {
  type VehicleBuyCardProps,
} from "../molecules/VehicleBuyCard";
import VehicleBuyCardSkeleton from "../molecules/VehicleBuyCardSkeleton";
import NoAvailability from "./NoAvailability";

// Utils
import { getVehicles } from "../../lib/transportation/api";
import { useTranslations } from "../../lib/i18n/utils";
import { useSearchFormStore } from "../../store/search-form";

interface VehicleBuyCardsProps {
  initialVehicles?: VehicleBuyCardProps[];
  lang: "en" | "es";
}

/**
 * Organism to render a list of vehicle buy cards.
 * This component is responsible for the layout and spacing of the vehicle results.
 */
export default function VehicleBuyCards({
  initialVehicles = [],
  lang,
}: VehicleBuyCardsProps) {
  const [vehicles, setVehicles] =
    useState<VehicleBuyCardProps[]>(initialVehicles);
  const [loading, setLoading] = useState(initialVehicles.length === 0);
  const [error, setError] = useState(false);

  const t = useTranslations(lang);
  const setSelectedVehicle = useSearchFormStore(
    (state) => state.setSelectedVehicle,
  );

  const fetchVehicles = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await getVehicles(lang);
      setVehicles(data);
    } catch (err) {
      console.error("Failed to fetch vehicles", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialVehicles.length === 0) {
      fetchVehicles();
    }
  }, [lang]);

  const handleVehicleSelect = (vehicle: VehicleBuyCardProps) => {
    setSelectedVehicle({
      token: vehicle.token,
      name: vehicle.vehicleName,
      image: vehicle.vehicleImage,
      maxPassengers: vehicle.maxPassengers,
      maxLuggage: vehicle.maxLuggage,
      price: vehicle.price,
      currency: vehicle.currencyCode,
      type: vehicle.vehicleType,
    });
    // Future step: Navigate to results page or next step
  };

  if (loading) {
    return (
      <div className="w-full space-y-6">
        {[1, 2, 3].map((i) => (
          <VehicleBuyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full rounded-lg border border-red-200 bg-red-50 py-12 text-center">
        <p className="mb-4 text-red-600">{t("pages.results.error")}</p>
        <button
          onClick={fetchVehicles}
          className="cursor-pointer rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          {t("pages.results.retry")}
        </button>
      </div>
    );
  }

  if (!vehicles || vehicles.length === 0) {
    return <NoAvailability lang={lang} />;
  }

  return (
    <div className="w-full space-y-6">
      {vehicles.map((vehicle, index) => (
        <VehicleBuyCard
          key={`${vehicle.vehicleName}-${index}`}
          {...vehicle}
          onSelect={() => handleVehicleSelect(vehicle)}
        />
      ))}
    </div>
  );
}
