import PhotoPlaceholder from "./PhotoPlaceholder";

export default function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton-card xl:w-64 border rounded-md shadow-sm overflow-hidden">
      <div className="flex justify-center p-4">
        <PhotoPlaceholder />
      </div>
      <div className="product-info px-4 py-3 flex flex-col space-y-2">
        <h4 className="skeleton-line title-skeleton text-sm w-full h-6 bg-gray-200 animate-pulse rounded" />
        <div className="flex items-center justify-between">
          <p className="skeleton-line price-skeleton text-sm w-1/3 h-4 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
      {/* <button className="product-action skeleton-button w-full flex items-center justify-center py-2 bg-gray-200 rounded-b-md animate-pulse hover:bg-gray-300">
        <p className="skeleton-line button-text-skeleton text-sm h-4 bg-gray-200 animate-pulse rounded" />
      </button> */}
    </div>
  );
}
