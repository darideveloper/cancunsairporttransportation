import React from "react";
import clsx from "clsx";

interface PaymentMethodProps {
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
  images: string[];
  imageAlt: string;
  label?: string;
  className?: string;
}

export default function PaymentMethod({
  value,
  isSelected,
  onSelect,
  images,
  imageAlt,
  label,
  className,
}: PaymentMethodProps) {
  return (
    <label
      className={clsx(
        "relative flex! cursor-pointer items-center justify-center gap-4 rounded-xl border-2 p-6 transition-all",
        isSelected ? "border-blue bg-blue/5" : "border-gray-200",
        className,
      )}
    >
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        checked={isSelected}
        onChange={() => onSelect(value)}
        className="accent-blue h-5! w-5!"
      />
      <div className="flex items-center gap-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={imageAlt}
            className={clsx(label ? "h-8" : "h-16")}
          />
        ))}
        {label && <span className="max-w-28 text-sm font-semibold">{label}</span>}
      </div>
    </label>
  );
}
