import PhotoPlaceholder from "./PhotoPlaceholder";

export default function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton-card w-full border overflow-hidden">
      <div className="flex justify-center p-4 lg:p-8">
        <PhotoPlaceholder />
      </div>
      <div className="product-info px-4 py-3 flex flex-col space-y-2">
        <h4 className="skeleton-line title-skeleton text-sm w-full h-6 bg-gray-200 animate-pulse rounded" />
        <div className="flex items-center justify-between">
          <p className="skeleton-line price-skeleton text-sm w-1/3 h-4 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}
