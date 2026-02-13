import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { clsx } from "clsx";

interface StarRatingProps {
  rating: number; // 1-5 rating value
  maxRating?: number; // Default: 5
  showNumeric?: boolean; // Show "4.5/5" text
  size?: "sm" | "md" | "lg"; // Icon size
  withSchema?: boolean; // Enable schema.org microdata (Default: false)
  className?: string; // Additional classes
}

export default function StarRating({
  rating,
  maxRating = 5,
  showNumeric = false,
  size = "md",
  withSchema = false,
  className,
}: StarRatingProps) {
  // Calculate stars
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      stars.push("full");
    } else if (rating >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={clsx("flex items-center gap-1", sizeClasses[size], className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {withSchema && (
        <>
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="bestRating" content={maxRating.toString()} />
        </>
      )}

      <div className="flex text-yellow-400">
        {stars.map((type, index) => {
          if (type === "full") {
            return <FaStar key={index} aria-hidden="true" />;
          } else if (type === "half") {
            return <FaStarHalfAlt key={index} aria-hidden="true" />;
          } else {
            return (
              <FaRegStar
                key={index}
                aria-hidden="true"
                className="text-gray-300"
              />
            );
          }
        })}
      </div>

      {showNumeric && (
        <span className="ml-2 text-gray-600">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
}
