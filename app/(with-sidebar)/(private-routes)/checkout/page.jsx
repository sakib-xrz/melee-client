"use client";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useEffect, useState } from "react";
import CheckoutCard from "./components/CheckoutCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared/Loading";
import APIKit from "@/common/APIkit";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckOutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getCartItems, carts, cartLoading, user } = useStore();
  const { data: cartData } = GetCart();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const slug = searchParams.get("slug");
    const size = searchParams.get("size");
    const quantity = searchParams.get("quantity");
    getCartItems(cartData || [{ slug, size, quantity }] || []);
  }, [cartData]);

  if (cartLoading) return <Loading />;

  const { subtotal, shipping, total } = calculateTotal(carts || []);

  const checkoutItems = carts.filter((item) => item.present_stock !== 0);

  const handleCheckout = () => {
    setLoading(true);
    const payload = {
      is_first_time_ordered: true,
      products: checkoutItems,
    };

    APIKit.order
      .checkout(payload)
      .then(({ data }) => {
        router.push(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <title>Checkout | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="mb-6">Please Review All Details before Placing Order</p>
        <div className="flex flex-col xl:flex-row gap-6">
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

            {/* <div>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <div>
                <p className="pt-3 pb-1">Street Address </p>
                <Input type="text" id="street" name="street" placeholder="" />
              </div>
              <div>
                <p className="pt-3 pb-1">City </p>
                <Input type="text" id="city" name="city" placeholder="" />
              </div>
              <div>
                <p className="pt-3 pb-1">Country </p>
                <Input type="text" id="country" name="country" placeholder="" />
              </div>
              <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
                <div className="w-full">
                  <p className="pt-3 pb-1">State / Province</p>
                  <Input type="text" id="state" name="state" placeholder="" />
                </div>
                <div className="w-full">
                  <p className="xl:pt-3 pb-1">Postal / Zip Code </p>
                  <Input type="text" id="zip" name="zip" placeholder="" />
                </div>
              </div>
            </div> */}

            <div>
              <CardHeader>
                <CardTitle>Order Price Breakdown</CardTitle>
              </CardHeader>
              <div className="space-y-1 mt-3">
                <div className="flex justify-between items-center text-base font-medium text-grey-700">
                  <p>Sub Total</p>
                  <p>${subtotal}</p>
                </div>
                <div className="flex justify-between items-center text-base font-medium text-grey-700">
                  <p>Shipping Charge</p>
                  <p>${shipping || "0.00"}</p>
                </div>
                <div className="flex justify-between items-center text-base font-bold text-grey-700">
                  <p>Total Order Price</p>
                  <p>
                    <p>${total}</p>
                  </p>
                </div>
              </div>
            </div>
            <Button
              isLoading={loading}
              onClick={() => handleCheckout()}
              className="w-full"
            >
              Continue to Payment
            </Button>
          </Card>
        </div>
      </Container>
    </>
  );
}
