import Image from "next/image";
import Link from "next/link";
import dress1 from "public/images/dress.png";
import redX from "public/images/red-x-transparent.png";

export default function ProductCard({ isOutOfStock = false }) {
  return (
    <div
      className={`product-card xl:w-64 relative ${
        isOutOfStock ? "" : "hover:bg-accent transition-colors duration-300"
      }`}
    >
      <Link href={"/products/1"}>
        <Image className="object-contain" src={dress1} alt="dress" priority />
        <div className="product-info px-4 py-3 flex flex-col space-y-2">
          <h4 className="text-sm font-medium leading-tight truncate cursor-pointer hover:underline">
            Women Floral Midi Dress
          </h4>
          <div className="flex items-center justify-between text-sm font-semibold">
            {isOutOfStock ? (
              <p className="text-red-600">Out of Stock</p>
            ) : (
              <p>$54.00</p>
            )}
          </div>
        </div>
      </Link>
      {isOutOfStock && (
        <Image
          src={redX}
          alt="red-x"
          className="absolute top-0 right-0 bg-black/70"
        />
      )}
    </div>
  );
}
