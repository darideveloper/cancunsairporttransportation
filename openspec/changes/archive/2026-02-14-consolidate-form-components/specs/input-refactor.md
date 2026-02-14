# Form Component Standardization

This spec details the consolidation of form components by standardizing on `Input.tsx` and `Textarea.tsx`, fixing existing bugs, and removing duplicate Astro components.

## Motivation

- Eliminated code duplication between `.astro` and `.tsx` versions.
- Fix a bug where `containerClassName` was erroneously applied to `label` elements in React components.
- Standardize on React components for inputs to support future interactivity or consistent styling.

## Proposed Implementation

### 1. `Input.tsx` Refactor

Remove `containerClassName` from the label element to fix styling leakage.

```tsx
// src/components/atoms/form/Input.tsx
import clsx from 'clsx';
import type { ComponentProps, ComponentType } from 'react';

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  label: string;
  name: string;
  icon?: ComponentType<{ className?: string }>;
  containerClassName?: string;
  className?: string; // Input element class
  error?: string;
}

export default function Input({
  label,
  name,
  icon: Icon,
  className,
  containerClassName,
  error,
  ...props
}: InputProps) {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className="mb-2 block font-bold"
      >
        {label}
      </label>
      <div className="relative text-gray-500 focus-within:text-accent">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <input
          id={name}
          name={name}
          className={clsx(
            "focus:border-accent focus:ring-accent placeholder:text-gray-dark inline-block w-full rounded-lg border border-gray-300 py-3 pr-3 transition-all outline-none focus:ring-2",
            Icon ? "pl-12!" : "pl-3",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
```

### 2. `Textarea.tsx` Refactor

Apply similar fix to `Textarea.tsx`.

```tsx
// src/components/atoms/form/Textarea.tsx
import clsx from 'clsx';
import type { ComponentProps, ComponentType } from 'react';

interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  label: string;
  name: string;
  icon?: ComponentType<{ className?: string }>;
  containerClassName?: string;
  className?: string;
  error?: string;
}

export default function Textarea({
  label,
  name,
  icon: Icon,
  className,
  containerClassName,
  rows = 4,
  error,
  ...props
}: TextareaProps) {
  return (
    <div className={containerClassName}>
      <label
        htmlFor={name}
        className="mb-2 block font-bold"
      >
        {label}
      </label>
      <div className="relative text-gray-500 focus-within:text-accent">
        {Icon && (
          <div className="pointer-events-none absolute top-4 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <textarea
          id={name}
          name={name}
          rows={rows}
          className={clsx(
            "focus:border-accent focus:ring-accent placeholder:text-gray-dark w-full rounded-lg border border-gray-300 py-3 pr-3 transition-all outline-none focus:ring-2",
            Icon ? "pl-12!" : "pl-3",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
```

## Migration Paths

### 1. `Reservation.astro`

Update usage of `Input.astro` to `Input.tsx`. No hydration is needed as the form relies on native POST submission.

```astro
// src/components/pages/store/Reservation.astro
// ...
import Input from '../../../components/atoms/form/Input.tsx'
// ...
<Input
  name='code'
  label={t('pages.reservation.form.code.label')}
  required
  // No client directive needed for static rendering
/>
```
