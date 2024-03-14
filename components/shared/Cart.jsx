import { useStore } from "@/context/StoreProvider";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { GetCart, calculateTotal } from "@/common/UtilKit";

export default function Cart() {
  const { getCartItems, carts, cartLoading } = useStore();
  const { data: cartData, refetch } = GetCart();

  useEffect(() => {
    getCartItems(cartData || []);
  }, [cartData]);

  if (cartLoading) return <p>Loading...</p>;

  const { subtotal, shipping, total } = calculateTotal(carts || []);

  return (
    <div>
      <ScrollArea className="h-[calc(100vh-20rem)] lg:h-[calc(100vh-18rem)]">
        {carts?.length > 0 ? (
          carts.map((cart) => (
            <CartItem key={cart?.uid} cart={cart} refetch={refetch} />
          ))
        ) : (
          <p>No items in cart</p>
        )}
      </ScrollArea>

      {carts?.length > 0 && (
        <div className="space-y-2 my-4">
          <h2 className="text-sm font-bold ">Payment Break Down</h2>
          <div className="flex justify-between items-center text-sm font-medium text-grey-700">
            <p>Sub Total</p>
            <p>${subtotal || 0}</p>
          </div>
          <div className="flex justify-between items-center text-sm font-medium text-grey-700">
            <p>Shipping Charge</p>
            <p className="flex items-center gap-1">${shipping || 0}</p>
          </div>
          <div className="flex justify-between items-center text-sm font-bold text-grey-700">
            <p>Total Cost</p>
            <p>${total || 0}</p>
          </div>
        </div>
      )}
    </div>
  );
}
