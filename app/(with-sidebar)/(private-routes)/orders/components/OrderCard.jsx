import { Card } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default function OrderCard() {
  return (
    <>
      <Card className="!p-0 !pt-4">
        <div className="px-4 pb-3">
          <div className="flex justify-between">
            <h1 className=" font-semibold">Order #6850031</h1>
            <small className="bg-green-600 text-white text-xs rounded-full py-0 px-2 flex justify-center items-center">
              Completed
            </small>
          </div>
          <p className="pt-4 text-gray-400">March 15, 2024, 7:38 PM</p>
          <p className="text-xl font-semibold mt-1">$ 54.00</p>
        </div>
        <hr />
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
