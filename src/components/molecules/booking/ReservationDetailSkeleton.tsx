export default function ReservationDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-8 h-10 w-64 rounded bg-gray-200"></div>

        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-24 rounded-full bg-gray-200"></div>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="mt-4 flex flex-col items-center gap-2 md:mr-4 md:items-end">
              <div className="h-6 w-48 rounded bg-gray-200"></div>
              <div className="flex gap-2">
                <div className="h-4 w-32 rounded bg-gray-200"></div>
                <div className="h-4 w-40 rounded bg-gray-200"></div>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-4 border-l-0 border-gray-300 pl-0 md:flex-row md:border-l md:pl-8">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="h-4 w-24 rounded bg-gray-200"></div>
                <div className="h-6 w-20 rounded bg-gray-200"></div>
              </div>
              <div className="flex">
                <div className="h-10 w-32 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Update Action Skeleton */}
      <div className="mb-12 flex h-24 w-full flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 md:flex-row">
        <div className="h-4 w-64 rounded bg-gray-200"></div>
        <div className="h-10 w-32 rounded bg-gray-200"></div>
      </div>

      {/* Details List Skeleton */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="w-full">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex flex-col border-b border-gray-100 last:border-b-0 md:flex-row"
            >
              <div className="w-full px-6 py-4 md:w-1/3">
                <div className="h-4 w-32 rounded bg-gray-200"></div>
              </div>
              <div className="w-full px-6 py-4 md:w-2/3">
                <div className="h-4 w-48 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
