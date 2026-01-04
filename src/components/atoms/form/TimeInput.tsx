import type { ChangeEvent } from 'react'

interface Props {
  id: string
  label: string
  value?: string
  onChange?: (val: string) => void
  disabled?: boolean
}

export default function TimeInput({
  id,
  label,
  value,
  onChange,
  disabled,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <input
        type='time'
        id={id}
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        className={disabled ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  )
}
