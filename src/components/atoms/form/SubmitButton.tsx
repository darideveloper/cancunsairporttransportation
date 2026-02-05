import clsx from "clsx";

interface Props {
  label: string;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export default function SubmitButton({
  label,
  className,
  ariaLabel,
  disabled,
}: Props) {
  return (
    <button
      type="submit"
      aria-label={ariaLabel}
      disabled={disabled}
      className={clsx(
        "bg-blue rounded-md px-5 py-4 text-white uppercase transition-all",
        className,
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      {label}
    </button>
  );
}
