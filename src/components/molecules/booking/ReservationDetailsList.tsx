import { getTranslations } from "../../../lib/i18n/utils";
import type { ReservationItem } from "../../../lib/transportation/legacy-api.types";

interface ReservationDetailsListProps {
  code: string;
  item: ReservationItem;
  lang: "en" | "es";
}

export default function ReservationDetailsList({
  code,
  item,
  lang,
}: ReservationDetailsListProps) {
  const t = getTranslations(lang);

  const details = [
    { label: t("pages.reservationDetail.details.code"), value: code },
    {
      label: t("pages.reservationDetail.details.service"),
      value: item.service_type_name,
    },
    // Passengers is not explicitly in the API response, so we omit it or would need to parse it from service name if possible.
    // {
    //   label: t('pages.reservationDetail.details.passengers'),
    //   value: '?',
    // },
    { label: t("pages.reservationDetail.details.from"), value: item.from.name },
    { label: t("pages.reservationDetail.details.to"), value: item.to.name },
    {
      label: t("pages.reservationDetail.details.pickup"),
      value: item.pickup,
    },
    ...(item.is_round_trip && item.departure_pickup
      ? [
          {
            label: t("pages.reservationDetail.details.returnPickup"),
            value: item.departure_pickup,
          },
        ]
      : []),
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <dl className="w-full text-left">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-100 last:border-b-0 md:flex-row"
          >
            <dt className="w-full bg-gray-50 px-6 py-4 font-bold text-gray-700 md:w-1/3">
              {detail.label}
            </dt>
            <dd className="w-full px-6 py-4 wrap-break-word text-gray-900 md:w-2/3">
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
