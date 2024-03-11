"use client";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";

export default function CheckOutPage() {
  const { getCartItems, carts, cartLoading } = useStore();
  const { data: cartData } = GetCart();

  useEffect(() => {
    getCartItems(cartData || []);
  }, [cartData]);

  if (cartLoading) return <p>Loading...</p>;

  const { subtotal, shipping, total } = calculateTotal(carts || []);

  console.log(carts);
  console.log(subtotal, shipping, total);

  return <Container>CheckOutPage</Container>;
}
