"use client";

import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import OrderCard from "./components/OrderCard";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";

export default function AdminOrderPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin/orders"],
    queryFn: () =>
      APIKit.shop.order.getOrders().then(({ data }) => data.results),
  });
  return (
    <div>
      <PageTitleWithButton title="Order Management" />
      {isLoading && <Loading />}
      {isError && <p>Something went wrong</p>}
      {data && data.length === 0 && <p>No Orders Found</p>}
      {data && data.length > 0 && (
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {data.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
