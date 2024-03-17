"use client";

import Container from "@/components/shared/Container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholderImage from "@/public/images/placeholder.png";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";
import { formatDateAndTime, formatText } from "@/common/UtilKit";
import React from "react";

const statusClasses = {
  ORDER_PLACED: "bg-gray-600",
  PAYMENT_INCOMPLETE: "bg-red-500",
  PROCESSING: "bg-blue-600",
  ON_THE_WAY: "bg-yellow-600",
  OUT_FOR_DELIVERY: "bg-orange-600",
  DELIVERED: "bg-green-600",
};

export default function OrderDetails({ params: { id } }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["order", id],
    queryFn: () => APIKit.order.getSingleOrder(id).then(({ data }) => data),
  });

  console.log(data);

  return (
    <>
      <title>Order Details | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Order Details</h1>
        <p className="mb-6">View Your Order Details Here.</p>
        {isLoading && <Loading />}
        {isError && <p>Something went wrong...</p>}
        {data && (
          <Card className="space-y-3">
            <div className="space-y-2 xs:flex xs:justify-between xs:items-center">
              <CardHeader>
                <CardTitle className="!text-xl xs:!text-2xl">
                  Order ID: {data?.order_id}
                </CardTitle>
                <CardDescription>
                  Order date: {formatDateAndTime(data?.created_at, true)}
                </CardDescription>
              </CardHeader>
              <small
                className={`${
                  statusClasses[data?.status]
                } text-white rounded-md px-4 py-2 xs:text-lg flex justify-center items-center`}
              >
                {formatText(data?.status)}
              </small>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-bold">Order Items</h2>
              <div className="grid grid-cols-1 items-end sm:grid-cols-2 xs:gap-4 mt-4">
                {data?.products.map((item) => (
                  <React.Fragment key={item.uid}>
                    <div className="flex flex-col xs:flex-row gap-2">
                      <Image
                        src={
                          item?.product?.primary_image?.image ||
                          placeholderImage
                        }
                        width={80}
                        height={80}
                        alt="iPhone 12"
                        className="w-20 h-20 object-cover rounded-md border p-2"
                      />
                      <div>
                        <h3 className="text-lg font-bold">
                          {item?.product?.name}
                        </h3>
                        <p>Size: {item?.size}</p>
                        <p>
                          Price: $
                          {parseFloat(item?.product?.unit_price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>Quantity: {item?.quantity}</p>
                      <p>
                        Total: $
                        {parseFloat(
                          item?.product?.unit_price * item?.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <hr />

            <div>
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="text-lg font-bold">Shipping Address</h3>
                  <p>{`${data?.user.first_name} ${data?.user.last_name}`}</p>
                  <p>Phone: {data?.user?.phone}</p>
                  <p>{data?.address || "Shipping address not provided."}</p>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Order Total</h2>
                  <div>
                    <p>Subtotal: ${parseFloat(data?.total_price).toFixed(2)}</p>
                    <p>
                      Shipping: $
                      {parseFloat(data?.order_shipping_charge).toFixed(2)}
                    </p>
                    <p className="text-lg font-semibold mt-2">
                      Total: $
                      {(
                        parseFloat(data?.total_price) +
                        parseFloat(data?.order_shipping_charge)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </Container>
    </>
  );
}
