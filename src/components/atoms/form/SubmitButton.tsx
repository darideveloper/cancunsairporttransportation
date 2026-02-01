interface Props {
  label: string;
  className?: string;
  ariaLabel?: string;
}

export default function SubmitButton({ label, className, ariaLabel }: Props) {
  return (
    <button
      type="submit"
      aria-label={ariaLabel}
      className={`bg-blue rounded-md px-5 py-4 text-white uppercase ${className}`}
    >
      {label}
    </button>
  );
}
