"use client";

import APIKit from "@/common/APIkit";
import { formatDateAndTime } from "@/common/UtilKit";
import Select from "@/components/form/Select";
import Loading from "@/components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "sonner";

const orderStatus = [
  { label: "Order Placed", value: "ORDER_PLACED" },
  { label: "Payment Incomplete", value: "PAYMENT_INCOMPLETE" },
  { label: "Processing", value: "PROCESSING" },
  { label: "On the Way", value: "ON_THE_WAY" },
  { label: "Out for Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

const OrderDetailsCard = ({ uid, orderListRefetch }) => {
  const {
    data: order,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [`admin/orders/${uid}`],
    queryFn: () =>
      APIKit.shop.order.getSingleOrder(uid).then(({ data }) => data),
    enabled: !!uid,
  });

  const handleStatusChange = (status) => {
    const promise = APIKit.shop.order
      .updateOrderStatus(uid, { status })
      .then(() => {
        refetch();
        orderListRefetch();
      });
    toast.promise(promise, {
      loading: "Updating order status...",
      success: "Order status updated successfully.",
      error: "Failed to update order status.",
    });
  };

  if (isLoading) return <Loading />;

  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <div>
        <div>
          <h2 className="text-2xl font-semibold">
            Order ID: {order?.order_id}
          </h2>
          <div className="mb-3">
            Order date: {formatDateAndTime(order?.created_at, true)}
          </div>
        </div>
      </div>

      <p className="mb-1 flex items-center gap-2 font-medium">
        Payment status:
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

      <div>
        <Select
          disabled={!order?.is_paid}
          options={orderStatus.filter(
            (order) => order.value !== "PAYMENT_INCOMPLETE"
          )}
          value={order?.status}
          onChange={(e) => handleStatusChange(e.target.value, order.uid)}
        />
      </div>

      <p className="text-sm font-bold my-3">
        Total Product: {order?.products.length}{" "}
        {order?.products.length > 1 ? "items" : "item"}
      </p>

      {order?.products.map((product) => (
        <div
          key={product?.uid}
          className="border rounded-md w-full mb-4 p-3 flex justify-center gap-3 flex-col"
        >
          <div className="flex items-start gap-3">
            <div className="w-full space-y-1">
              <p className="line-clamp-1 text-base font-medium">
                {product?.product?.name}
              </p>
              <p className="text-xs md:text-sm ">Size: {product?.size}</p>
              <p className="text-xs md:text-sm ">
                Quantity: {product?.quantity}
              </p>
              <p className="text-xs md:text-sm ">
                Price: ${parseFloat(product?.product?.unit_price).toFixed(2)}
              </p>
            </div>

            <Image
              className="w-24 object-cover rounded-md border border-border aspect-square"
              src={product?.product?.primary_image?.image}
              width={100}
              height={100}
              alt={""}
            />
          </div>
        </div>
      ))}

      <hr />

      <div className="my-4">
        <h2 className="text-sm font-bold mb-2">Customer Details</h2>

        <div className="flex flex-col items-start">
          <p className="font-bold text-grey-700">
            {order?.user?.first_name && order?.user?.last_name
              ? `${order?.user.first_name} ${order?.user.last_name}`
              : "Customer name not provided."}
          </p>
          <p>{order?.user?.phone}</p>
        </div>

        <address className="text-sm whitespace-pre-wrap">
          {order?.address || "Shipping address not provided."}
        </address>
      </div>

      <hr />

      <div className="space-y-2 my-4">
        <h2 className="text-sm font-bold ">Payment Break Down</h2>
        <div className="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Sub Total</p>
          <p>${parseFloat(order?.total_price).toFixed(2) || 0}</p>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Shipping Charge</p>
          <p className="flex items-center gap-1">
            ${parseFloat(order?.order_shipping_charge).toFixed(2) || 0}
          </p>
        </div>
        <div className="flex justify-between items-center text-sm font-bold text-grey-700">
          <p>Total Cost</p>
          <p>
            $
            {(
              parseFloat(order?.total_price) +
              parseFloat(order?.order_shipping_charge)
            ).toFixed(2) || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
