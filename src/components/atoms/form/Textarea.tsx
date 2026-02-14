import clsx from "clsx";
import type { ComponentType, ComponentProps } from "react";

interface TextareaProps extends Omit<ComponentProps<"textarea">, "className"> {
  label: string;
  name: string;
  icon?: ComponentType<{ className?: string }>;
  containerClassName?: string;
  className?: string; // For the textarea element itself
  error?: string;
}

export default function Textarea({
  label,
  name,
  icon: Icon,
  className,
  containerClassName,
  rows = 4,
  error,
  ...props
}: TextareaProps) {
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className="mb-2 block font-bold">
        {label}
      </label>
      <div className="focus-within:text-accent relative text-gray-500">
        {Icon && (
          <div className="pointer-events-none absolute top-4 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <textarea
          id={name}
          name={name}
          rows={rows}
          className={clsx(
            "focus:border-accent focus:ring-accent placeholder:text-gray-dark w-full rounded-lg border border-gray-300 py-3 pr-3 transition-all outline-none focus:ring-2",
            Icon ? "pl-12!" : "pl-3",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          {...props}
        ></textarea>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
