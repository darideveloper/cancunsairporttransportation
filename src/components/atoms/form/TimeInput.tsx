import type { ChangeEvent } from "react";

interface Props {
  id: string;
  label: string;
  value?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  min?: string;
}

export default function TimeInput({
  id,
  label,
  value,
  onChange,
  disabled,
  min,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type="time"
        id={id}
        value={value || ""}
        onChange={handleChange}
        disabled={disabled}
        min={min}
        className={disabled ? "cursor-not-allowed opacity-50" : ""}
      />
    </div>
  );
}
