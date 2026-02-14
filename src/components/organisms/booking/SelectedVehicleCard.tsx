import { FaMapMarkerAlt, FaThumbsUp, FaUsers } from "react-icons/fa";
import clsx from "clsx";
import { useSearchFormStore } from "../../../store/search-form";
import { useTranslations } from "../../../lib/i18n/utils";
import CheckListItem from "../../atoms/CheckListItem";
import H2 from "../../atoms/H2";

export interface SelectedVehicleCardProps {
  lang: "en" | "es";
  className?: string;
}

export default function SelectedVehicleCard({
  lang,
  className,
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
      Icon: FaUsers,
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
        "bg-gray/10 flex flex-col items-center gap-4 rounded-lg p-4 shadow-sm md:flex-row",
        className,
      )}
    >
      {/* Vehicle Image */}
      <div className="shrink-0">
        <img
          src={selectedVehicle.image}
          alt={selectedVehicle.name}
          className="h-auto w-52 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2">
        <H2 className="text-center font-normal md:text-right">
          <span className="font-bold">
            {t("global.booking.summary.privateTransportation")}
          </span>
          <span className="ml-2">
            {t("global.booking.summary.capacity", {
              maxPassengers: selectedVehicle.maxPassengers.toString(),
            })}
          </span>
        </H2>

        {/* Details Row */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 md:justify-end">
          {details.map((item, index) => (
            <CheckListItem
              key={index}
              as="div"
              unstyled
              Icon={item.Icon}
              iconColor="text-black"
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
