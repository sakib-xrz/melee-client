import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import dress1 from "public/images/dress.png";

export default function ProductCard() {
  return (
    <div className="xl:w-64 border border-border rounded-md">
      <div className=" flex justify-center">
        <Image
          className="w-28 h-28 xs:w-40 xs:h-40 lg:h-60 lg:w-60 rounded-t-md object-contain p-2 mx-auto"
          src={dress1}
          alt="dress"
        />
      </div>
      <hr />
      <div className="my-4 space-y-2 px-3">
        <h4 className="truncate text-sm">Women Floral Midi Dress</h4>
        <p className="sm:text-xl font-semibold">$ 54</p>
      </div>
      <button className="rounded-t-none w-full gap-2 flex justify-center items-center font-medium py-1 bg-white text-background rounded-b-md border-t border-white hover:bg-background hover:text-white transition-colors duration-300">
        {" "}
        <div className="hidden xs:block">
          <ShoppingCart />
        </div>
        <p className="text-sm sm:text-lg">Add to Cart</p>
      </button>
    </div>
  );
}
