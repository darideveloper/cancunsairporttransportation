import clsx from "clsx";
import type { ComponentProps } from "react";
import { forwardRef, useEffect, useState } from "react";
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

const CustomPhoneNumberInput = forwardRef<
  HTMLInputElement,
  ComponentProps<"input">
>((props, ref) => {
  // Filter out preferredCountries if it's passed (fixing the React warning)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { preferredCountries, ...rest } = props as any;
  return <input ref={ref} {...rest} />;
});

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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={containerClassName}>
      <label htmlFor={name} className="mb-2 block font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={clsx(
          "focus-within:border-accent focus-within:ring-accent relative w-full rounded-lg border border-gray-300 transition-all outline-none focus-within:ring-2",
          error &&
            "border-red-500 focus-within:border-red-500 focus-within:ring-red-500",
          className,
        )}
      >
        {mounted ? (
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
            className="flex items-center rounded-lg bg-white px-3" // Inner wrapper of the library
            inputComponent={CustomPhoneNumberInput}
            numberInputProps={{
              ...props,
              className:
                "border-none bg-transparent outline-none w-full placeholder:text-gray-dark text-black", // Remove built-in border, let parent handle it
              required,
            }}
          />
        ) : (
          <div className="flex items-center rounded-lg bg-white px-3 py-3">
            <input
              name={name}
              value={value}
              disabled={true}
              placeholder={placeholder}
              className="placeholder:text-gray-dark w-full border-none bg-transparent text-black outline-none"
            />
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
