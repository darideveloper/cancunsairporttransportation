import React from "react";
import clsx from "clsx";

// Icons
import checkedOn from "../../../assets/images/checkout/icons/checked-on.svg";
import checkedOff from "../../../assets/images/checkout/icons/checked-off.svg";

interface PaymentMethodProps {
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
  imageSrc: string;
  imageAlt: string;
  label: string;
  className?: string;
}

export default function PaymentMethod({
  value,
  isSelected,
  onSelect,
  imageSrc,
  imageAlt,
  label,
  className,
}: PaymentMethodProps) {
  return (
    <label
      className={clsx(
        "relative flex cursor-pointer items-center justify-between gap-4 rounded-xl border-2 p-4 transition-all",
        isSelected
          ? "border-accent bg-linear-to-r from-[#ff840033] to-transparent"
          : "border-gray-200 bg-linear-to-r from-[#ff84001a] to-transparent",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        {/* Custom Checkbox UI */}
        <div className="relative h-6 w-6 shrink-0">
          <input
            type="radio"
            name="paymentMethod"
            value={value}
            checked={isSelected}
            onChange={() => onSelect(value)}
            className="sr-only"
          />
          <img
            src={isSelected ? checkedOn.src : checkedOff.src}
            alt={isSelected ? "Selected" : "Not Selected"}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Label and Logo */}
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-md font-semibold text-gray-900 sm:text-lg">
            {label}
          </span>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>
    </label>
  );
}
