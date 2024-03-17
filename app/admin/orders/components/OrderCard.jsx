"use client";

import Select from "@/components/form/Select";
import RightSideDrawer from "@/components/shared/RightSideDrawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import OrderDetailsCard from "./OrderDetailsCard";

export default function OrderCard() {
  const [orderDrawerOpen, setOrderDrawerOpen] = useState(false);
  return (
    <Card className="text-sm font-normal flex flex-col lg:flex-row justify-between gap-4">
      <div className="flex-1">
        <div className="text-xs text-grey-500 gap-2 flex flex-col">
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1">
            <span className=" text-primary text-base lg:text-lg font-bold">
              Order #6850031
            </span>
            <p className="mb-1 flex items-center gap-2 font-medium lg:hidden">
              {false ? (
                <span className="bg-red-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                  Payment Incomplete
                </span>
              ) : (
                <span className="bg-green-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                  Payment Complete
                </span>
              )}
            </p>
          </div>
          <span className="text-sm font-normal ">March 15, 2024, 7:38 PM</span>
        </div>
        <div className="text-xs text-grey-500 flex flex-col">
          <p className="text-sm font-normal text-grey-500 ">
            Total Product: 2 Items
          </p>
          <p className="text-sm font-normal ">
            Total Order: <strong className="font-bold">$799.00</strong>
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-2">
        <div className="text-xs text-grey-500 font-bold">
          <span>Customer Details</span>
        </div>
        <div className="text-grey-700 flex flex-col items-start">
          <p className="font-bold text-base">Md Sakibul Islam</p>
          <p>+8801409029742</p>
        </div>
        <div className="text-grey-700">
          <address className="text-sm whitespace-pre-wrap">
            123 Main Street, Anytown, USA 12345
          </address>
        </div>
      </div>

      <div className="space-y-2 flex-1">
        <div className="lg:w-7/12 ml-auto  text-xs text-grey-500 font-bold">
          <p className="mb-1 lg:flex items-center gap-2 font-medium hidden">
            Payment status:{" "}
            {false ? (
              <span className="bg-red-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                Incomplete
              </span>
            ) : (
              <span className="bg-green-600 text-xs rounded-full py-0 px-2 flex justify-center items-center">
                Complete
              </span>
            )}
          </p>

          <div className="space-y-2">
            <Select
              options={[
                { label: "Order Placed", value: "Order Placed" },
                { label: "Processing", value: "Processing" },
                { label: "On the Way", value: "On the Way" },
                { label: "Out for Delivery", value: "Out for Delivery" },
                { label: "Delivered", value: "Delivered" },
              ]}
              value={"Payment Incomplete"}
              onChange={(e) => {
                console.log(e.target.value);
              }}
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
              <OrderDetailsCard />
            </RightSideDrawer>
          </div>
        </div>
      </div>
    </Card>
  );
}
