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
  value,
  onChange,
  disabled,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(Number(e.target.value));
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <select
          id={id}
          value={value || 1}
          onChange={handleChange}
          disabled={disabled}
          className={clsx(
            "focus:border-accent focus:ring-accent inline-block w-full rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 transition-all outline-none focus:ring-2 appearance-none -webkit-appearance-none text-base md:text-sm",
            disabled && "cursor-not-allowed opacity-50",
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23333333'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.75rem center",
            backgroundSize: "1.5rem",
          }}
        >
          {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
