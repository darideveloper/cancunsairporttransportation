import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import clsx from "clsx";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: "blog" | "page";
}

export default function SearchWidget({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [allData, setAllData] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch data on first open
  useEffect(() => {
    if (isOpen && allData.length === 0) {
      setLoading(true);
      fetch(`/${currentLang}/search.json`)
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load search index", err);
          setLoading(false);
        });
    }
  }, [isOpen, currentLang]);

  // Filter results
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = allData
      .filter(
        (item) =>
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery),
      )
      .slice(0, 8); // Limit to 8 results
    setResults(filtered);
  }, [query, allData]);

  return (
    <div className="" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-dark hover:text-accent p-2 transition-colors"
        aria-label="Search"
      >
        <FaSearch size={20} />
      </button>

      {/* Dropdown Container */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute top-16 left-0 z-50 mt-2 w-80 rounded-lg border border-gray-100 bg-white p-4 shadow-xl duration-200 sm:w-96">
          {/* Input Field */}
          <div className="relative mb-3">
            <input
              type="text"
              className="focus:border-accent focus:ring-accent w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-black outline-none focus:ring-1"
              placeholder={currentLang === "es" ? "Buscar..." : "Search..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
              {loading ? (
                <div className="border-accent h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
              ) : (
                <FaSearch size={14} />
              )}
            </div>
          </div>

          {/* Results List */}
          <div className="custom-scrollbar max-h-80 overflow-y-auto">
            {results.length > 0 ? (
              <ul className="space-y-2">
                {results.map((result, idx) => (
                  <li key={idx}>
                    <a
                      href={result.url}
                      className="block rounded-md p-2 transition-colors hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className={clsx(
                            "rounded px-1.5 py-0.5 text-xs font-bold tracking-wider uppercase",
                            result.type === "blog"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700",
                          )}
                        >
                          {result.type === "blog"
                            ? currentLang === "es"
                              ? "Blog"
                              : "Blog"
                            : currentLang === "es"
                              ? "Página"
                              : "Page"}
                        </span>
                        <h4 className="flex-1 truncate text-sm font-semibold text-gray-900">
                          {result.title}
                        </h4>
                      </div>
                      <p className="line-clamp-2 text-xs text-gray-500">
                        {result.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              query.length > 0 &&
              !loading && (
                <div className="py-4 text-center text-sm text-gray-500">
                  {currentLang === "es"
                    ? "No se encontraron resultados"
                    : "No results found"}
                </div>
              )
            )}

            {/* Initial State / Suggestions could go here */}
            {query.length === 0 && !loading && (
              <div className="py-2 text-center text-xs text-gray-400">
                {currentLang === "es"
                  ? "Escribe para buscar..."
                  : "Type to search..."}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
