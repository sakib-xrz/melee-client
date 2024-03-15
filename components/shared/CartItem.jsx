"use client";

import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useStore } from "@/context/StoreProvider";
import { toast } from "sonner";

export default function CartItem({ cart, refetch }) {
  const { cartLoading } = useStore();

  const handleIncrement = (slug) => {
    const cart = localStorage.getItem("cart");
    const cartItems = JSON.parse(cart);

    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.slug === slug) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    refetch();
  };

  const handleDecrement = (slug) => {
    const cart = localStorage.getItem("cart");
    const cartItems = JSON.parse(cart);

    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.slug === slug) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    refetch();
  };

  const handleRemove = (slug) => {
    const data = JSON.parse(localStorage.getItem("cart"));
    const deleteItem = slug;

    const updatedData = data.filter((item) => item.slug !== deleteItem);
    localStorage.setItem("cart", JSON.stringify(updatedData));
    refetch();
    toast.success("Item removed from cart!");
  };

  const selected_quantity =
    cart.selected_stock > cart.present_stock
      ? cart.present_stock
      : cart.selected_stock;

  return (
    <div className="border rounded-md w-full mb-4 p-3 flex justify-center gap-3 flex-col">
      <div className="flex items-start gap-3">
        <div className="w-full space-y-1">
          <p className="line-clamp-1 cursor-pointer hover:underline underline-offset-2">
            {cart.name}
          </p>
          <p className="text-xs md:text-sm ">
            Price: ${parseFloat(cart.unit_price).toFixed(2)}
          </p>
          <p className="text-xs md:text-sm ">Size: {cart.size}</p>

          <p className="text-xs md:text-sm ">Stock: {cart.present_stock}</p>
        </div>

        <Image
          className="w-16 object-cover rounded-md border border-border aspect-square"
          src={cart.primary_image || "/images/placeholder-image.png"}
          width={100}
          height={100}
          alt={cart.name}
        />
      </div>

      <div className="flex justify-between items-center">
        {cart.present_stock < 1 ? (
          <p className="text-red-600 text-xs md:text-sm font-medium">
            Item out of stock. Please remove from cart
          </p>
        ) : (
          <div className="flex gap-4 items-center">
            <div>
              <Button
                size={"icon"}
                variant={"outline"}
                className={"rounded-l-sm rounded-r-none h-8 w-8"}
                onClick={() => handleDecrement(cart.slug)}
                disabled={cart.selected_stock < 2 || cartLoading}
              >
                -
              </Button>
              <Button
                variant={"outline"}
                className="rounded-none pointer-events-none h-8 w-8"
              >
                {selected_quantity}
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className={"rounded-r-sm rounded-l-none  h-8 w-8"}
                onClick={() => handleIncrement(cart.slug)}
                disabled={
                  cart.selected_stock >= cart.present_stock || cartLoading
                }
              >
                +
              </Button>
            </div>
            <p className="font-medium">
              ${parseFloat(cart.selected_stock * cart.unit_price).toFixed(2)}
            </p>
          </div>
        )}
        <Button
          size="icon"
          variant="secondary"
          className={"rounded-sm h-8 w-8 p-1.5"}
          onClick={() => handleRemove(cart.slug)}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
