import type { ChangeEvent } from "react";
import clsx from "clsx";

interface Props {
  id: string;
  label: string;
  value?: number;
  onChange?: (val: number) => void;
  disabled?: boolean;
}

export default function PassengerInput({
  id,
  label,
  value = 1,
  onChange,
  disabled,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(Number(e.target.value));
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={clsx(
          "focus:border-accent focus:ring-accent inline-block w-full rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 transition-all outline-none focus:ring-2",
          disabled && "cursor-not-allowed opacity-50",
        )}
      >
        {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
