import Image from "next/image";
import Link from "next/link";
import dress1 from "public/images/dress.png";

export default function ProductCard() {
  return (
    <div className="product-card xl:w-64 border border-border rounded-md shadow-sm hover:bg-accent transition-colors duration-300">
      <Link href={"#"}>
        <div className=" flex justify-center">
          <Image
            className="w-28 h-28 xs:w-40 xs:h-40 lg:h-60 lg:w-60 rounded-t-md object-contain p-2 mx-auto"
            src={dress1}
            alt="dress"
            priority
          />
        </div>
        <div className="product-info px-4 py-3 flex flex-col space-y-2">
          <h4 className="text-sm font-medium leading-tight truncate cursor-pointer hover:underline">
            Women Floral Midi Dress
          </h4>
          <div className="flex items-center justify-between text-sm font-semibold">
            <p>$54.00</p>
          </div>
        </div>
      </Link>
      {/* <button className="product-action w-full flex items-center justify-center font-medium hover:text-white text-background bg-primary rounded-b-md py-2 hover:bg-secondary transition-colors duration-300 text-sm">
        <div className="mr-2 flex items-center">
          <ShoppingCart className="h-5 w-5 fill-current" />
        </div>
        <p>Add to Cart</p>
      </button> */}
    </div>
  );
}
