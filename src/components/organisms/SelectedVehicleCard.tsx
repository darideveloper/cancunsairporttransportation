import { FaUser, FaMapMarkerAlt, FaThumbsUp } from "react-icons/fa";
import clsx from "clsx";
import { useSearchFormStore } from "../../store/search-form";
import { useTranslations } from "../../lib/i18n/utils";
import CheckListItem from "../atoms/CheckListItem";

export interface SelectedVehicleCardProps {
  lang: "en" | "es";
}

export default function SelectedVehicleCard({
  lang,
}: SelectedVehicleCardProps) {
  const { selectedVehicle, locationFrom, locationTo, passengers, tripType } =
    useSearchFormStore();

  const t = useTranslations(lang);

  // Validation: Don't render if critical data is missing
  if (!selectedVehicle || !locationFrom || !locationTo || passengers < 1) {
    return null;
  }

  const tripTypeLabel =
    tripType === "oneWay"
      ? t("global.booking.tripType.oneWay")
      : t("global.booking.tripType.roundTrip");

  const details = [
    {
      Icon: FaUser,
      text: t("global.booking.summary.passengers", {
        count: passengers.toString(),
      }),
    },
    {
      Icon: FaMapMarkerAlt,
      text: t("global.booking.summary.origin", {
        location: locationFrom,
      }),
    },
    {
      Icon: FaMapMarkerAlt,
      text: t("global.booking.summary.destination", {
        location: locationTo,
      }),
    },
    {
      Icon: FaThumbsUp,
      text: tripTypeLabel,
    },
  ];

  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-sm md:flex-row",
      )}
    >
      {/* Vehicle Image */}
      <div className="shrink-0">
        <img
          src={selectedVehicle.image}
          alt={selectedVehicle.name}
          className="h-auto w-32 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        {/* Header: Vehicle Name and Capacity */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-900">
            {selectedVehicle.name}
          </h3>
          <p className="text-sm text-gray-600">
            {t("global.booking.summary.capacity", {
              maxPassengers: selectedVehicle.maxPassengers.toString(),
            })}
          </p>
        </div>

        {/* Details Row */}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
          {details.map((item, index) => (
            <CheckListItem
              key={index}
              as="div"
              unstyled
              Icon={item.Icon}
              iconColor="text-gray-400"
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
