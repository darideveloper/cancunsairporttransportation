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
    <div className='w-42 flex items-center justify-center'>
      {options.map((option) => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleSelect(option.id)}
          aria-pressed={currency === option.id}
          className={clsx(
            'px-5 py-4 cursor-pointer',
            currency === option.id
              ? 'bg-black text-white'
              : 'bg-white text-black',
            option.id === 'USD' ? 'rounded-l-md' : 'rounded-r-md'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
