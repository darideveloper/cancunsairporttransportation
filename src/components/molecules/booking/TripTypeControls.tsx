import { startTransition } from 'react'
import clsx from 'clsx'

type TripType = 'oneWay' | 'roundTrip'

interface Props {
  value?: TripType
  onChange?: (val: TripType) => void
  labels: {
    oneWay: string
    roundTrip: string
  }
}

export default function TripTypeControls({
  value = 'roundTrip',
  onChange,
  labels,
}: Props) {
  const handleSelect = (val: TripType) => {
    startTransition(() => {
      onChange?.(val)
    })
  }

  const options: { id: TripType; label: string }[] = [
    { id: 'oneWay', label: labels.oneWay },
    { id: 'roundTrip', label: labels.roundTrip },
  ]

  // dummy state
  const selected = value || 'roundTrip'

  return (
    <div className='border-b w-full'>
      {options.map((option) => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleSelect(option.id)}
          aria-pressed={selected === option.id}
          className={clsx(
            'px-2 sm:px-4 py-4 cursor-pointer w-1/2 max-w-32',
            selected === option.id && 'border-b-2'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
