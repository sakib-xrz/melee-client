"use client";

import Container from "@/components/shared/Container";
import OrderCard from "./components/OrderCard";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";

export default function OrderPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: () => APIKit.order.getOrders().then(({ data }) => data.results),
  });

  return (
    <>
      <title>Orders | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">My Orders</h1>
        <p>You Can View Your All Orders Here. </p>
        {isLoading && <Loading />}
        {isError && <p>Something went wrong</p>}
        {data && data.length === 0 && <p>No Orders Found</p>}
        {data && data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {data.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
