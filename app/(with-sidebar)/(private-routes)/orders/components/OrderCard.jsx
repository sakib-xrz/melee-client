import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClipboardList, CreditCard } from "lucide-react";
import Link from "next/link";

const statusClasses = {
  "Payment Incomplete": "bg-red-500",
  "Order Placed": "bg-gray-600",
  Processing: "bg-blue-600",
  "On the Way": "bg-yellow-600",
  "Out for Delivery": "bg-orange-600",
  Delivered: "bg-green-600",
};

export default function OrderCard() {
  return (
    <>
      <Card className="!p-0 !pt-4">
        <div className="px-4 pb-3">
          <div className="flex justify-between ">
            <h1 className=" font-semibold">Order #6850031</h1>
            <small
              className={`${statusClasses["Payment Incomplete"]} text-white text-xs rounded-full py-0 px-2 flex justify-center items-center`}
            >
              Payment Incomplete
            </small>
          </div>
          <p className="pt-4 text-gray-400">March 15, 2024, 7:38 PM</p>
          <p className="text-xl font-semibold mt-1">$ 54.00</p>
        </div>
        <hr />

        <div className="flex items-center justify-center pb-3 pt-3 gap-3 px-4 hover:bg-accent rounded-b-md cursor-pointer">
          <CreditCard className="w-5" />
          <p>Pay Now</p>
        </div>
        <Link
          href={"/orders/1"}
          className="flex items-center justify-center pb-3 pt-3 gap-3 px-4 hover:bg-accent rounded-b-md cursor-pointer"
        >
          <ClipboardList className="w-5" />
          <p>View Details</p>
        </Link>
      </Card>
    </>
  );
}
