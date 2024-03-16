"use client";

import { Card } from "@/components/ui/card";

export default function OrderCard() {
  const serial_number = "12345";
  const created_at = new Date().toISOString();
  const total_price = 1000;
  const total_products = 5;
  const we = {
    organization_kind: "supplier",
  };
  const reseller = {
    name: "Reseller Name",
  };
  const customer = {
    name: "Customer Name",
    phone: "123-456-7890",
  };
  const address = {
    house_street: "123 Main St",
    upazila: "Upazila Name",
    district: "District Name",
    division: "Division Name",
  };
  const delivery_statuses = [
    { status: { name: "DELIVERED" } },
    { status: { name: "PENDING" } },
  ];
  const ongoingStatus = {
    status: { name: "ON_THE_WAY" },
  };
  const updated_at = new Date().toISOString();
  const order_by = {
    name: "Orderer Name",
  };
  return (
    <Card className="text-sm font-normal flex flex-col lg:flex-row justify-between gap-4">
      {/* Order details */}
      <div className="flex-1 space-y-2">
        <div className="text-xs text-grey-500 space-x-2 flex items-center justify-between lg:justify-start">
          <span className="font-bold text-base">Order #{serial_number}</span>
          <span className="hidden lg:inline">-</span>
          <span className="text-sm font-normal ">{created_at}</span>
        </div>
        <div className="text-grey-700 flex items-center gap-4 justify-between lg:justify-start">
          <p className="text-primary text-base lg:text-lg font-bold">
            <span className="text-primary text-base lg:text-lg font-bold">
              &#2547;
            </span>
            {total_price}
          </p>
          <p className="text-sm font-normal text-grey-500 ">
            {total_products} Items
          </p>
        </div>
        {we.organization_kind === "supplier" &&
          reseller.name !== "Reseller Name" && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-grey-500">Reseller:</span>
              <span className="text-primary font-bold">{reseller.name}</span>
            </div>
          )}
      </div>
      {/* Customer details */}
      <div className="flex-1 flex flex-col space-y-2">
        <div className="text-xs text-grey-500 font-bold">
          <span>Delivery Details</span>
        </div>
        <div className="text-grey-700 flex flex-col lg:flex-row items-start lg:items-center lg:gap-4">
          <p className="font-bold text-base">{customer.name}</p>
          <p>{customer.phone}</p>
        </div>
        <div className="text-grey-700">
          {address.house_street ? (
            <address className="text-sm whitespace-pre-wrap">
              {`${address.house_street}, ${address.upazila}, ${address.district}, ${address.division}`}
            </address>
          ) : (
            <p>Address not set</p>
          )}
        </div>
      </div>
      {/* Actions */}
      <div className="space-y-2 flex-1">
        <div className="text-xs text-grey-500 font-bold hidden lg:block">
          <div className="flex items-center gap-1 justify-end cursor-pointer">
            <span>Order Status</span>
          </div>
        </div>
        <div className="w-full flex flex-col lg:items-center lg:flex-row gap-2">
          <div className="flex gap-2 w-full">
            <button
              className="w-full rounded-md border-2 border-primary py-2 px-3 text-sm font-semibold hover:text-white text-primary shadow-sm hover:bg-primary"
              onClick={() => {}}
            >
              View Order
            </button>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="text-xs text-grey-500 font-bold block lg:hidden">
              <div className="flex items-center gap-1 justify-start">
                <span>Order Status</span>
              </div>
            </div>
            <select
              className="w-full bg-white text-black rounded-md border border-grey-300 py-2 pl-4 pr-8 text-sm font-medium focus:border-primary focus:outline-none focus:ring-primary grow"
              value="On the Way"
            >
              <option value="On the Way">On the Way</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-end gap-1 font-medium text-xs">
          <span>{updated_at}</span>
          <span>by {order_by.name}</span>
        </div>
      </div>
      {/* Modal */}
      <div></div>
    </Card>
  );
}
