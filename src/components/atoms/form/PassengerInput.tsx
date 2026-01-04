interface Props {
  id: string
  label: string
  min?: number
  max?: number
}

export default function PassengerInput({
  id,
  label,
  min = 1,
  max = 20,
}: Props) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        type='number'
        id={id}
        min={min}
        max={max}
        defaultValue={min}
      />
    </div>
  )
}
