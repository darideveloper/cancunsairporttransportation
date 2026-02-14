import ButtonCta from "../atoms/ButtonCta";
import CheckListItem from "../atoms/CheckListItem";
import StarRating from "../atoms/StarRating";
import { FaUserFriends, FaSuitcase } from "react-icons/fa";

export interface VehicleBuyCardLabels {
  maxPassengers: string;
  maxLuggage: string;
  priceFrom: string;
  save: string;
  pricePerVehicle: string;
  bookNow: string;
}

export interface VehicleBuyCardProps {
  vehicleImage: string;
  vehicleName: string;
  maxPassengers: number;
  maxLuggage: number;
  price: number;
  originalPrice?: number;
  vehicleType?: string;
  rating: number; // 1 to 5
  description: string;
  items: string[];
  currencyCode: string;
  formattedPrice: string;
  formattedOriginalPrice?: string;
  labels: VehicleBuyCardLabels;
  token: string;
  onSelect?: () => void;
}

export default function VehicleBuyCard({
  vehicleImage,
  vehicleName,
  maxPassengers,
  maxLuggage,
  price,
  originalPrice,
  vehicleType,
  rating,
  description,
  items,
  currencyCode,
  formattedPrice,
  formattedOriginalPrice,
  labels,
  token,
  onSelect,
}: VehicleBuyCardProps) {
  // Generate SEO-friendly alt and title for the image
  const imageAlt = `${vehicleName} Private Transportation from Cancun Airport`;
  const imageTitle = `${vehicleName} Private Transportation from Cancun Airport`;

  const cardId = `vehicle-card-${vehicleName.toLowerCase().replace(/\s+/g, "-")}`;

  // Calculate savings
  const effectiveOriginalPrice = originalPrice ?? 0;
  const savings = effectiveOriginalPrice - price;
  const savingsPercentage =
    effectiveOriginalPrice > 0
      ? Math.round((savings / effectiveOriginalPrice) * 100)
      : 0;
  const hasSavings = savingsPercentage > 0;

  const handleSelect = () => {
    if (onSelect) {
      onSelect();
    }
  };

  const specifications = [
    {
      Icon: FaUserFriends,
      text: `${maxPassengers} ${labels.maxPassengers}`,
    },
    {
      Icon: FaSuitcase,
      text: `${maxLuggage} ${labels.maxLuggage}`,
    },
  ];

  return (
    <article
      className="border-gray/25 grid grid-cols-1 gap-4 border-b pb-6 xl:grid-cols-4"
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={cardId}
    >
      {/* Vehicle Overview Section */}
      <div className="flex items-center justify-start gap-6 xl:flex-col">
        <img
          src={vehicleImage}
          alt={imageAlt}
          title={imageTitle}
          width="300"
          height="200"
          loading="lazy"
          className="w-1/2 xl:mx-0 xl:w-full"
        />

        <div className="flex w-1/2 flex-col xl:w-full">
          <h3 className="text-xl font-bold" itemProp="name" id={cardId}>
            {vehicleName}
          </h3>

          {/* Rating */}
          <div
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
          >
            <StarRating
              rating={rating}
              withSchema={true}
              showNumeric={true}
              className=""
            />
          </div>
          {/* Capacity Icons */}
          <div className="flex flex-col gap-1">
            {specifications.map((spec, index) => (
              <CheckListItem
                key={index}
                as="div"
                unstyled
                Icon={spec.Icon}
                iconColor="text-gray-900"
                text={spec.text}
                className="px-0! py-0!"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description and Features Section */}
      <div className="border-gray/0 xl:border-gray/25 border-r border-l px-4 xl:col-span-2">
        <p className="" itemProp="description">
          {description}
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {items.map((item, index) => (
            <CheckListItem key={index} text={item} className="py-0!" />
          ))}
        </ul>
      </div>

      {/* Pricing Section */}
      <div
        className="mt-6 flex flex-col gap-1 text-center"
        itemProp="offers"
        itemScope
        itemType="https://schema.org/Offer"
      >
        <meta itemProp="price" content={price.toString()} />
        <meta itemProp="priceCurrency" content={currencyCode.toUpperCase()} />
        <meta itemProp="availability" content="https://schema.org/InStock" />

        <p className="text-sm">{labels.priceFrom}</p>

        {hasSavings && formattedOriginalPrice && (
          <p className="text-lg text-red-700">
            <del className="">{formattedOriginalPrice}</del>
          </p>
        )}

        <p className="text-2xl font-bold">{formattedPrice}</p>
        <p className="text-sm">{labels.pricePerVehicle}</p>

        <ButtonCta onClick={handleSelect} className="mt-2">
          {labels.bookNow}
        </ButtonCta>
      </div>
    </article>
  );
}
