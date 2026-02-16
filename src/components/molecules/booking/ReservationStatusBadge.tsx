import clsx from "clsx";

export interface ReservationStatusBadgeProps {
  status: string;
  // Removing 'lang' if it's not strictly needed for logic, but keeping it if we want to translate the label here.
  // The original component accepted 'lang'.
  // We can pass the translated label directly or use a hook if we were using a hook-based i18n solution.
  // Given getTranslations is a util we can call with lang, let's keep lang.
  lang?: "en" | "es";
  size?: "sm" | "md" | "lg";
  // Alternatively, just pass the label string if the parent handles translation.
  // But let's mirror the original API for easier migration.
}

export default function ReservationStatusBadge({
  status,
  size = "md",
}: ReservationStatusBadgeProps) {
  const statusKey = status as "CONFIRMED" | "PENDING" | "CANCELLED";

  const statusClasses = {
    CONFIRMED: "text-blue border-blue bg-blue/10",
    PENDING: "text-yellow-600 border-yellow-600 bg-yellow-50",
    CANCELLED: "text-red-600 border-red-600 bg-red-50",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-2",
  };

  // If status is not one of the keys, default to something safe or handle it.
  // The original code: const label = status === 'CONFIRMED' ? 'CONFIRMED' : status
  const label = status === "CONFIRMED" ? "CONFIRMED" : status;
  const colorClass =
    statusClasses[statusKey] || "text-gray-600 border-gray-600 bg-gray-50";

  return (
    <span
      className={clsx(
        "inline-block rounded border text-center font-bold uppercase",
        colorClass,
        sizeClasses[size],
      )}
    >
      {label}
    </span>
  );
}
