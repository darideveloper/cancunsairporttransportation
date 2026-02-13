import clsx from "clsx";

export default function VehicleBuyCardSkeleton() {
  return (
    <div className="border-gray/25 grid animate-pulse grid-cols-1 gap-4 border-b pb-6 xl:grid-cols-4">
      {/* Vehicle Overview Section */}
      <div className="flex items-center justify-start gap-6 xl:flex-col">
        <div className="h-48 w-1/2 rounded-lg bg-gray-200 xl:w-full"></div>

        <div className="flex w-1/2 flex-col gap-2 xl:w-full">
          <div className="h-6 w-3/4 rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 rounded bg-gray-200"></div>
          <div className="mt-2 flex gap-2">
            <div className="h-4 w-16 rounded bg-gray-200"></div>
            <div className="h-4 w-16 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Description and Features Section */}
      <div className="border-gray/0 xl:border-gray/25 space-y-4 border-r border-l px-4 xl:col-span-2">
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
        <div className="h-4 w-4/6 rounded bg-gray-200"></div>

        <div className="mt-6 space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-1/2 rounded bg-gray-200"></div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mt-6 flex flex-col items-center gap-2 text-center">
        <div className="h-4 w-20 rounded bg-gray-200"></div>
        <div className="h-4 w-24 rounded bg-gray-200"></div>
        <div className="h-8 w-32 rounded bg-gray-200"></div>
        <div className="h-4 w-24 rounded bg-gray-200"></div>
        <div className="mt-2 h-10 w-full rounded bg-gray-200"></div>
      </div>
    </div>
  );
}
