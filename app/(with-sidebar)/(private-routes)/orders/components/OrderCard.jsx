import APIKit from "@/common/APIkit";
import { formatDateAndTime, formatText } from "@/common/UtilKit";
import { Card } from "@/components/ui/card";
import { ClipboardList, CreditCard, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const statusClasses = {
  ORDER_PLACED: "bg-gray-600",
  PAYMENT_INCOMPLETE: "bg-red-500",
  PROCESSING: "bg-blue-600",
  ON_THE_WAY: "bg-yellow-600",
  OUT_FOR_DELIVERY: "bg-orange-600",
  DELIVERED: "bg-green-600",
};

export default function OrderCard({ order }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handelPayNow = () => {
    setLoading(true);
    const payload = {
      order_uid: order.uid,
      products: order?.user_cart_data?.products,
    };

    APIKit.order
      .checkout(payload)
      .then(({ data }) => {
        router.push(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Card className="!p-0 !pt-4">
        <div className="px-4 pb-3">
          <div className="flex justify-between ">
            <h1 className=" font-semibold">Order {order?.order_id}</h1>
            <small
              className={`${
                statusClasses[order.status]
              } text-white text-xs rounded-full py-0 px-2 flex justify-center items-center`}
            >
              {formatText(order.status)}
            </small>
          </div>
          <p className="pt-4 text-gray-400">
            {formatDateAndTime(order?.created_at, true)}
          </p>
          <p className="text-xl font-semibold mt-1">$ {order?.total_price}</p>
        </div>
        <hr />
        {order?.status === "PAYMENT_INCOMPLETE" ? (
          loading ? (
            <div className="flex items-center justify-center pb-3 pt-3 gap-3 px-4 rounded-b-md cursor-pointer bg-background/50">
              <Loader2 className="w-5 animate-spin" />
              <p>Loading...</p>
            </div>
          ) : (
            <div
              onClick={() => handelPayNow()}
              className="flex items-center justify-center pb-3 pt-3 gap-3 px-4 hover:bg-accent rounded-b-md cursor-pointer"
            >
              <CreditCard className="w-5" />
              <p>Pay Now</p>
            </div>
          )
        ) : (
          <Link
            href={`/orders/${order.uid}`}
            className="flex items-center justify-center pb-3 pt-3 gap-3 px-4 hover:bg-accent rounded-b-md cursor-pointer"
          >
            <ClipboardList className="w-5" />
            <p>View Details</p>
          </Link>
        )}
      </Card>
    </>
  );
}
