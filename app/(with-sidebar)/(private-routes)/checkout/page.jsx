"use client";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";
import CheckoutCard from "./components/CheckoutCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckOutPage() {
  const { getCartItems, carts, cartLoading, user } = useStore();
  console.log(user);
  const { data: cartData } = GetCart();

  useEffect(() => {
    getCartItems(cartData || []);
  }, [cartData]);

  if (cartLoading) return <p>Loading...</p>;

  // const { subtotal, shipping, total } = calculateTotal(carts || []);

  const checkoutItems = carts.filter((item) => item.present_stock !== 0);

  return (
    <>
      <title>Checkout | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mb-6">Please Review All Details before Placing Order</p>
        <div className="flex gap-6">
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>Shopping Cart</CardTitle>
              </CardHeader>
              <div className="space-y-4 mt-3">
                {checkoutItems.map((product, index) => (
                  <CheckoutCard key={index} product={product} />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-fit">
            <div>
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <div className="border rounded-md px-4 py-3 bg-background mt-3">
                <div className="space-y-2">
                  <p className="text-base font-bold">
                    {user?.first_name + " " + user?.last_name}
                  </p>
                  <p className="text-sm">{user?.phone}</p>
                </div>
              </div>
            </div>
            <div></div>
          </Card>
        </div>
      </Container>
    </>
  );
}
