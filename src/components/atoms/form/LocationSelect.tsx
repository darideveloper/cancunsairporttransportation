import React from 'react'

interface Props {
  id: string
  label: string
  placeholder?: string
}

export default function LocationSelect({
  id,
  label,
  placeholder = 'Select location',
}: Props) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        defaultValue=''
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
