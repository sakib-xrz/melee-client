"use client";

import Select from "@/components/form/Select";
import RightSideDrawer from "@/components/shared/RightSideDrawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import OrderDetailsCard from "./OrderDetailsCard";
import { formatDateAndTime } from "@/common/UtilKit";
import APIKit from "@/common/APIkit";
import { toast } from "sonner";

const orderStatus = [
  { label: "Order Placed", value: "ORDER_PLACED" },
  { label: "Payment Incomplete", value: "PAYMENT_INCOMPLETE" },
  { label: "Processing", value: "PROCESSING" },
  { label: "On the Way", value: "ON_THE_WAY" },
  { label: "Out for Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

export default function OrderCard({ order, refetch }) {
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);
  const handleStatusChange = (status, uid) => {
    const promise = APIKit.shop.order
      .updateOrderStatus(uid, { status })
      .then(() => {
        refetch();
      });
    toast.promise(promise, {
      loading: "Updating order status...",
      success: "Order status updated successfully.",
      error: "Failed to update order status.",
    });
  };

  return (
    <Card className="text-sm font-normal flex flex-col lg:flex-row justify-between gap-4">
      <div className="flex-1">
        <div className="text-xs text-grey-500 gap-2 flex flex-col">
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1">
            <span className=" text-primary text-base lg:text-lg font-bold">
              Order {order?.order_id}
            </span>
            <p className="mb-1 flex items-center gap-2 font-medium lg:hidden">
              {order?.is_paid ? (
                <span className="bg-green-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                  Payment Complete
                </span>
              ) : (
                <span className="bg-red-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                  Payment Incomplete
                </span>
              )}
            </p>
          </div>
          <span className="text-sm font-normal ">
            {formatDateAndTime(order?.created_at, true)}
          </span>
        </div>
        <div className="text-xs text-grey-500 flex flex-col">
          <p className="text-sm font-normal text-grey-500 ">
            Total Product: {order?.products?.length}{" "}
            {order?.products?.length > 1 ? "items" : "item"}
          </p>
          <p className="text-sm font-normal ">
            Total Order:{" "}
            <strong className="font-bold">
              ${parseFloat(order?.total_price).toFixed(2)}
            </strong>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-2">
        <div className="text-xs text-grey-500 font-bold">
          <span>Customer Details</span>
        </div>
        <div className="text-grey-700 flex flex-col items-start">
          <p className="font-bold text-base">
            {order?.user?.first_name && order?.user?.last_name
              ? `${order?.user.first_name} ${order?.user.last_name}`
              : "Customer name not provided."}
          </p>
          <p>{order?.user?.phone}</p>
        </div>
        <div className="text-grey-700">
          <address className="text-sm whitespace-pre-wrap">
            {order?.address || "Shipping address not provided."}
          </address>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <div className="lg:w-7/12 ml-auto  text-xs text-grey-500 font-bold">
          <p className="mb-1 lg:flex items-center gap-2 font-medium hidden">
            Payment status:{" "}
            {order?.is_paid ? (
              <span className="bg-green-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                Complete
              </span>
            ) : (
              <span className="bg-red-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                Incomplete
              </span>
            )}
          </p>

          <div className="space-y-2">
            <Select
              disabled={!order?.is_paid}
              options={orderStatus.filter(
                (order) => order.value !== "PAYMENT_INCOMPLETE"
              )}
              value={order?.status}
              onChange={(e) => handleStatusChange(e.target.value, order.uid)}
            />

            <Button
              onClick={() => setOrderDrawerOpen(true)}
              size="sm"
              className="w-full h-9"
            >
              View Details
            </Button>

            <RightSideDrawer
              open={orderDrawerOpen}
              setOpen={setOrderDrawerOpen}
              title={"Order Details"}
            >
              <OrderDetailsCard uid={order.uid} orderListRefetch={refetch} />
            </RightSideDrawer>
          </div>
        </div>
      </div>
    </Card>
  );
}
