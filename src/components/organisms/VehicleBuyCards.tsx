import { useState, useEffect } from "react";
import VehicleBuyCard, {
  type VehicleBuyCardProps,
} from "../molecules/VehicleBuyCard";
import VehicleBuyCardSkeleton from "../molecules/VehicleBuyCardSkeleton";
import { getVehicles } from "../../lib/transportation/api";
import { useTranslations } from "../../lib/i18n/utils";

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
    return (
      <div className="w-full py-12 text-center">
        <p className="text-gray-600">{t("pages.results.noVehicles")}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {vehicles.map((vehicle, index) => (
        <VehicleBuyCard key={`${vehicle.vehicleName}-${index}`} {...vehicle} />
      ))}
    </div>
  );
}
