// Libs
import clsx from 'clsx'
import { useSearchFormStore } from '../../../store/search-form'
import { startTransition } from 'react'

interface Props {
  labels: {
    usd: string
    mxn: string
  }
}

export default function CurrencyControls({ labels }: Props) {
  const { currency, setCurrency } = useSearchFormStore()

  const handleSelect = (val: 'USD' | 'MXN') => {
    startTransition(() => {
      setCurrency(val)
    })
  }

  const options: { id: 'USD' | 'MXN'; label: string }[] = [
    { id: 'USD', label: labels.usd },
    { id: 'MXN', label: labels.mxn },
  ]

  return (
    <div className='border-b w-full flex justify-end'>
      {options.map((option) => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleSelect(option.id)}
          aria-pressed={currency === option.id}
          className={clsx(
            'px-2 sm:px-4 py-4 cursor-pointer w-1/2 max-w-32',
            currency === option.id && 'border-b-2'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
