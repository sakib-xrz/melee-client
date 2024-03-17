"use client";

import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";
import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import { useQuery } from "@tanstack/react-query";
import { MoveRight } from "lucide-react";

export default function AdminDashboardPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () =>
      APIKit.shop.dashboard.getDashboard().then(({ data }) => data),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error loading dashboard. Please try again later.</p>;
  }

  return (
    <>
      <PageTitleWithButton title={"Dashboard"} />

      <div className="space-y-10 mt-10">
        <div>
          <h2 className="text-lg mb-4">Order</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 bg-background gap-5">
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_orders || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Order placed</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_order_placed || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Processing</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_processing || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">On the Way</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_on_way || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">
                  Out for Delivery
                </p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_out_for_delivery || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Delivered</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_delivered || 0}
                </p>
              </div>
              {/* <div className="hidden sm:block">
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg mb-4">Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-background gap-5">
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">
                  Total Products
                </p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_products || 0}
                </p>
              </div>
              {/* <div>
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Published</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_published || 0}
                </p>
              </div>
              {/* <div>
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between border border-border rounded-md">
              <div>
                <p className="text-base xs:text-lg font-medium">Unpublished</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">
                  {data?.total_unpublished || 0}
                </p>
              </div>
              {/* <div>
                  <MoveRight className="w-8 h-8" />
                </div> */}
            </div>
          </div>
        </div>

        <div className="grid xs:grid-cols-2 gap-5">
          <div>
            <h2 className="text-lg mb-4">Transaction</h2>
            <div className="py-4 px-6 bg-background border border-border rounded-md">
              <p className="text-base xs:text-lg font-medium">Total Payments</p>
              <p className="text-2xl sm:text-4xl font-medium pt-2">
                ${parseFloat(data?.total_payment).toFixed(2) || 0}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-4">Customer</h2>
            <div className="py-4 px-6 bg-background border border-border rounded-md">
              <p className="text-base xs:text-lg font-medium">
                Total Customers
              </p>
              <p className="text-2xl sm:text-4xl font-medium pt-2">
                {data?.total_customer || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
