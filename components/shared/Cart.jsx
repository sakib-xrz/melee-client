import { useStore } from "@/context/StoreProvider";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import { useEffect } from "react";
import GetCart from "@/common/UtilKit";

export default function Cart() {
  const { getCartItems, carts } = useStore();
  const { data: cartData } = GetCart();

  useEffect(() => {
    getCartItems(cartData);
  }, []);

  return (
    <div>
      <ScrollArea className="h-[calc(100vh-20rem)] lg:h-[calc(100vh-18rem)]">
        {carts?.length > 0 ? (
          carts.map((cart) => <CartItem key={cart?.uid} cart={cart} />)
        ) : (
          <p>No items in cart</p>
        )}
      </ScrollArea>

      <div class="space-y-2 my-4">
        <h2 class="text-sm font-bold ">Payment Break Down</h2>
        <div class="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Sub Total</p>
          <p>$378.00</p>
        </div>
        <div class="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Shipping Charge</p>
          <p class="flex items-center gap-1">$10.00</p>
        </div>
        <div class="flex justify-between items-center text-sm font-bold text-grey-700">
          <p>Total Cost</p>
          <p>$388.00</p>
        </div>
      </div>
    </div>
  );
}
