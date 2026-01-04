import type { ChangeEvent } from 'react'

interface Props {
  id: string
  label: string
  value?: number
  onChange?: (val: number) => void
  disabled?: boolean
}

export default function PassengerInput({
  id,
  label,
  value,
  onChange,
  disabled,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value))
  }

  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        type='number'
        id={id}
        min='1'
        max='100'
        value={value || 1}
        onChange={handleChange}
        disabled={disabled}
        className={disabled ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  )
}
