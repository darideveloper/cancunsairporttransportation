interface Props {
  label: string
  className?: string
}

export default function SubmitButton({ label, className }: Props) {
  return (
    <button
      type='submit'
      className={`px-5 py-4 bg-blue text-white uppercase rounded-md ${className}`}
    >
      {label}
    </button>
  )
}
