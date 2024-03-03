import Image from "next/image";
import Link from "next/link";
import dress1 from "public/images/dress.png";

export default function ProductCard() {
  return (
    <div className="product-card xl:w-64 border border-border rounded-md shadow-sm hover:bg-accent transition-colors duration-300">
      <Link href={"/products/1"}>
        <Image
          className="object-contain rounded-t-md"
          src={dress1}
          alt="dress"
          priority
        />
        <div className="product-info px-4 py-3 flex flex-col space-y-2">
          <h4 className="text-sm font-medium leading-tight truncate cursor-pointer hover:underline">
            Women Floral Midi Dress
          </h4>
          <div className="flex items-center justify-between text-sm font-semibold">
            <p>$54.00</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
