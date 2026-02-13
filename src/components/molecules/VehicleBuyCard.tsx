import clsx from "clsx";
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

interface VehicleBuyCardProps {
  vehicleImage: string;
  vehicleName: string;
  maxPassengers: number;
  maxLuggage: number;
  price: number;
  originalPrice: number;
  rating: number; // 1 to 5
  description: string;
  items: string[];
  currencyCode: string;
  formattedPrice: string;
  formattedOriginalPrice: string;
  labels: VehicleBuyCardLabels;
}

export default function VehicleBuyCard({
  vehicleImage,
  vehicleName,
  maxPassengers,
  maxLuggage,
  price,
  originalPrice,
  rating,
  description,
  items,
  currencyCode,
  formattedPrice,
  formattedOriginalPrice,
  labels,
}: VehicleBuyCardProps) {
  // Generate SEO-friendly alt and title for the image
  const imageAlt = `${vehicleName} Private Transportation from Cancun Airport`;
  const imageTitle = `${vehicleName} Private Transportation from Cancun Airport`;

  const cardId = `vehicle-card-${vehicleName.toLowerCase().replace(/\s+/g, "-")}`;

  // Calculate savings
  const savings = originalPrice - price;
  const savingsPercentage =
    originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;
  const hasSavings = savingsPercentage > 0;

  return (
    <article
      className=""
      itemScope
      itemType="https://schema.org/Product"
      aria-labelledby={cardId}
    >
      <div className="">
        {/* Vehicle Overview Section */}
        <div className="">
          <div className="">
            <img
              src={vehicleImage}
              alt={imageAlt}
              title={imageTitle}
              width="300"
              height="200"
              loading="lazy"
              className=""
            />
          </div>

          <div className="">
            <h3 className="" itemProp="name" id={cardId}>
              {vehicleName}
            </h3>

            {/* Rating */}
            <div
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <StarRating rating={rating} withSchema={true} />
            </div>
          </div>

          {/* Capacity Icons */}
          <div className="">
            <span
              className=""
              aria-label={`Maximum ${maxPassengers} passengers`}
            >
              <FaUserFriends className="" aria-hidden="true" />
              <span className="">
                {maxPassengers} {labels.maxPassengers}
              </span>
            </span>

            <span className="" aria-label={`Maximum ${maxLuggage} luggage`}>
              <FaSuitcase className="" aria-hidden="true" />
              <span className="">
                {maxLuggage} {labels.maxLuggage}
              </span>
            </span>
          </div>
        </div>

        {/* Description and Features Section */}
        <div className="">
          <p className="" itemProp="description">
            {description}
          </p>

          <ul className="">
            {items.map((item, index) => (
              <CheckListItem key={index} text={item} />
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div
          className=""
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="price" content={price.toString()} />
          <meta itemProp="priceCurrency" content={currencyCode.toUpperCase()} />
          <meta itemProp="availability" content="https://schema.org/InStock" />

          <div className="">
            <p className="">{labels.priceFrom}</p>

            <div className="">
              <div className="flex items-center gap-2">
                <p className="">
                  <del className="">{formattedOriginalPrice}</del>
                </p>

                {hasSavings && (
                  <div className="" role="status" aria-live="polite">
                    <span className="">
                      {labels.save} {savingsPercentage}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            <p className="">{formattedPrice}</p>
            <p className="">{labels.pricePerVehicle}</p>
          </div>
        </div>

        {/* Action Section */}
        <div className="">
          <ButtonCta href="#" className="">
            {labels.bookNow}
          </ButtonCta>
        </div>
      </div>
    </article>
  );
}
