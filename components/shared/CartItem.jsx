import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import dress from "public/images/dress.png";

export default function CartItem({ cart }) {
  console.log(cart);
  return (
    <div class="border rounded-md w-full mb-4 p-3 flex justify-center gap-3 flex-col">
      <div class="flex items-start gap-3">
        <div class="w-full space-y-1">
          <p class="line-clamp-1 cursor-pointer hover:underline underline-offset-2">
            {cart.name}
          </p>
          <p class="text-xs md:text-sm ">Price: ${cart.unit_price}</p>
          <p class="text-xs md:text-sm ">Size: {cart.size}</p>

          <p class="text-xs md:text-sm ">Stock: {cart.present_stock}</p>
        </div>

        <Image
          class="w-16 h-16 object-cover rounded-md border-2 border-border"
          src={dress}
          alt="cart image"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <Button
              size={"icon"}
              variant={"outline"}
              className={"rounded-l-sm rounded-r-none h-8 w-8"}
            >
              -
            </Button>
            <Button
              variant={"outline"}
              className="rounded-none pointer-events-none h-8 w-8"
            >
              7
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              className={"rounded-r-sm rounded-l-none  h-8 w-8"}
            >
              +
            </Button>
          </div>
          $378.00
        </div>

        <Button
          size="icon"
          variant="secondary"
          className={"rounded-sm h-8 w-8 p-1.5"}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
