import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import type { LocationData } from "../../../store/search-form";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: LocationData | string) => void;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function LocationAutocomplete({
  id,
  label,
  placeholder = "Search location...",
  value = "",
  onChange,
  disabled,
  required,
  icon: Icon,
}: Props) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<LocationData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchResults = async (keyword: string) => {
    if (keyword.length < 3) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_API_BASE}/legacy/autocomplete/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ keyword }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        // The API returns { items: [...] }
        const items = data.items || [];

        const mappedResults: LocationData[] = items.map((item: any) => ({
          name: item.name,
          lat: parseFloat(item.geo?.lat || "0"),
          lng: parseFloat(item.geo?.lng || "0"),
          address: item.address,
        }));

        setResults(mappedResults);
      }
    } catch (error) {
      console.error("Autocomplete fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setIsOpen(true);
    // Notify parent of string change (for controlled input feel)
    onChange?.(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchResults(val);
    }, 500);
  };

  const handleSelect = (item: LocationData) => {
    setQuery(item.name);
    setIsOpen(false);
    onChange?.(item);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label htmlFor={id} className="mb-2 block font-bold">
        {label}
      </label>
      <div className="focus-within:text-accent relative text-black">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <input
          id={id}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete="off"
          className={clsx(
            "focus:border-accent focus:ring-accent placeholder:text-gray inline-block w-full rounded-lg border border-gray-300 py-3 pr-3 transition-all outline-none focus:ring-2",
            Icon ? "pl-10" : "pl-3",
            disabled && "cursor-not-allowed opacity-50",
          )}
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          </div>
        )}
      </div>

      {isOpen && query.length >= 3 && (
        <ul className="ring-opacity-5 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black focus:outline-none sm:text-sm">
          {results.length > 0 ? (
            results.map((item, index) => (
              <li
                key={`${item.name}-${index}`}
                onClick={() => handleSelect(item)}
                className="relative cursor-pointer px-4 py-2 text-gray-900 select-none hover:bg-gray-100"
              >
                <span className="block truncate font-medium">{item.name}</span>
                {item.address && (
                  <span className="block truncate text-xs text-gray-500">
                    {item.address}
                  </span>
                )}
                {/* Optional: Add address if available */}
              </li>
            ))
          ) : !isLoading ? (
            <li className="relative cursor-default px-4 py-2 text-gray-700 select-none">
              No results found
            </li>
          ) : null}
        </ul>
      )}
    </div>
  );
}
