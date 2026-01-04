import type { ChangeEvent } from 'react'

interface Props {
  id: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (val: string) => void
  disabled?: boolean
}

export default function LocationSelect({
  id,
  label,
  placeholder = 'Select location',
  value,
  onChange,
  disabled,
}: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        className={disabled ? 'opacity-50 cursor-not-allowed' : ''}
      >
        <option
          value=''
          disabled
        >
          {placeholder}
        </option>
        <option value='cun'>Cancun Airport (CUN)</option>
        <option value='hotel-zone'>Hotel Zone</option>
        <option value='playa-mujeres'>Playa Mujeres</option>
      </select>
    </div>
  )
}
