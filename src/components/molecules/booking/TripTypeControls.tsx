import { useSearchFormStore } from '../../../store/search-form'
import clsx from 'clsx'
import { startTransition } from 'react'

interface Props {
  labels: {
    oneWay: string
    roundTrip: string
  }
}

export default function TripTypeControls({ labels }: Props) {
  const { tripType, setTripType } = useSearchFormStore()

  const handleSelect = (val: 'oneWay' | 'roundTrip') => {
    startTransition(() => {
      setTripType(val)
    })
  }

  const options: { id: 'oneWay' | 'roundTrip'; label: string }[] = [
    { id: 'oneWay', label: labels.oneWay },
    { id: 'roundTrip', label: labels.roundTrip },
  ]

  return (
    <div className='border-b w-full'>
      {options.map((option) => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleSelect(option.id)}
          aria-pressed={tripType === option.id}
          className={clsx(
            'px-2 sm:px-4 py-4 cursor-pointer w-1/2 max-w-32',
            tripType === option.id && 'border-b-2'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
