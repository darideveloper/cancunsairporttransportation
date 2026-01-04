// Libs
import clsx from 'clsx'
import { startTransition } from 'react'

type Currency = 'USD' | 'MXN'

interface Props {
  value?: Currency
  onChange?: (val: Currency) => void
  labels: {
    usd: string
    mxn: string
  }
}

export default function CurrencyControls({
  value = 'MXN',
  onChange,
  labels,
}: Props) {
  const handleSelect = (val: Currency) => {
    startTransition(() => {
      onChange?.(val)
    })
  }

  const options: { id: Currency; label: string }[] = [
    { id: 'USD', label: labels.usd },
    { id: 'MXN', label: labels.mxn },
  ]

  // dummy state
  const selected = value || 'MXN'

  return (
    <div className='w-42 flex items-center justify-center'>
      {options.map((option) => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleSelect(option.id)}
          aria-pressed={selected === option.id}
          className={clsx(
            'px-5 py-4 cursor-pointer',
            selected === option.id
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
