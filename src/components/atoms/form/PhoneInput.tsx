import clsx from "clsx";
import type { ComponentProps } from "react";
import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneInputProps extends Omit<
  ComponentProps<"input">,
  "className" | "value" | "onChange"
> {
  label: string;
  name: string;
  value?: string;
  onChange: (value?: string) => void;
  containerClassName?: string;
  className?: string; // For the input container
  error?: string;
}

export default function PhoneInput({
  label,
  name,
  value,
  onChange,
  className,
  containerClassName,
  error,
  disabled,
  placeholder,
  required,
  ...props
}: PhoneInputProps) {
  // Styles from Input.tsx to match exactly
  // containerClassName on Input.tsx is for the outer div wrapping label + input-wrapper
  // className on Input.tsx is for the input element itself

  return (
    <div className={containerClassName}>
      <label htmlFor={name} className="mb-2 block font-bold">
        {label}
      </label>
      <div
        className={clsx(
          "focus-within:border-accent focus-within:ring-accent relative w-full rounded-lg border border-gray-300 transition-all outline-none focus-within:ring-2",
          error &&
            "border-red-500 focus-within:border-red-500 focus-within:ring-red-500",
          className,
        )}
      >
        <PhoneInputLib
          international
          defaultCountry="US"
          value={value}
          onChange={(val) => onChange(val || "")} // PhoneInput can return undefined
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          limitMaxLength
          preferredCountries={["US", "GB", "ES", "MX"]}
          className="flex items-center rounded-lg bg-white px-3 py-3" // Inner wrapper of the library
          numberInputProps={{
            ...props,
            className:
              "border-none bg-transparent outline-none w-full placeholder:text-gray text-black", // Remove built-in border, let parent handle it
            required,
          }}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
