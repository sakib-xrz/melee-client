"use client";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";
import CheckoutCard from "./components/CheckoutCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
          <Card className="w-full h-fit">
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
          <Card className="w-full h-fit space-y-6">
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
            <div>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <div>
                <p className="pt-3 pb-1">Address </p>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div>
                <p className="pt-3 pb-1">City </p>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div>
                <p className="pt-3 pb-1">Country </p>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="w-full">
                  <p className="pt-3 pb-1">State </p>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />
                </div>
                <div className="w-full">
                  <p className="pt-3 pb-1">Postal Code </p>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>
            <Button className="w-full">Continue to Payment</Button>
          </Card>
        </div>
      </Container>
    </>
  );
}
