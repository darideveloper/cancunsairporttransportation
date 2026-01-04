interface Props {
  id: string
  label: string
}

export default function DateInput({ id, label }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type='date'
        id={id}
      />
    </div>
  )
}
