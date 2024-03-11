"use client";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import Container from "@/components/shared/Container";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";
import CheckoutCard from "./components/CheckoutCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckOutPage() {
  const { getCartItems, carts, cartLoading } = useStore();
  const { data: cartData } = GetCart();

  useEffect(() => {
    getCartItems(cartData || []);
  }, [cartData]);

  if (cartLoading) return <p>Loading...</p>;

  // const { subtotal, shipping, total } = calculateTotal(carts || []);

  console.log(carts);

  const checkoutItems = carts.filter((item) => item.present_stock !== 0);

  return (
    <Container>
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle className="mb-2">Shopping Cart</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            {checkoutItems.map((product, index) => (
              <CheckoutCard key={index} product={product} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
