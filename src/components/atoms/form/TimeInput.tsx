interface Props {
  id: string
  label: string
}

export default function TimeInput({ id, label }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type='time'
        id={id}
      />
    </div>
  )
}
