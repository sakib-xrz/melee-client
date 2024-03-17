import Select from "@/components/form/Select";
import Image from "next/image";
import shirt from "public/images/dress3.png";

const OrderDetailsCard = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-2xl font-semibold">Order ID: #034278966</h2>
          <div className="mb-3">Order date: March 17, 2024, 12:49 PM</div>
        </div>
      </div>

      <p className="mb-1 flex items-center gap-2 font-medium">
        Payment status:
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

      <div>
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
      </div>

      <p className="text-sm font-bold my-3">Total Product: 2 Items</p>

      <div className="border rounded-md w-full mb-4 p-3 flex justify-center gap-3 flex-col">
        <div className="flex items-start gap-3">
          <div className="w-full space-y-1">
            <p className="line-clamp-1 text-base font-medium">Yellow Shirt</p>
            <p className="text-xs md:text-sm ">Size: M</p>
            <p className="text-xs md:text-sm ">Quantity: 2</p>
            <p className="text-xs md:text-sm ">Price: $54</p>
          </div>

          <Image
            className="w-24 object-cover rounded-md border border-border aspect-square"
            src={shirt || "/images/placeholder-image.png"}
            width={100}
            height={100}
            alt={""}
          />
        </div>
      </div>

      <div className="border rounded-md w-full mb-4 p-3 flex justify-center gap-3 flex-col">
        <div className="flex items-start gap-3">
          <div className="w-full space-y-1">
            <p className="line-clamp-1 text-base font-medium">Yellow Shirt</p>
            <p className="text-xs md:text-sm ">Size: M</p>
            <p className="text-xs md:text-sm ">Quantity: 2</p>
            <p className="text-xs md:text-sm ">Price: $54</p>
          </div>

          <Image
            className="w-24 object-cover rounded-md border border-border aspect-square"
            src={shirt || "/images/placeholder-image.png"}
            width={100}
            height={100}
            alt={""}
          />
        </div>
      </div>

      <hr />

      <div className="my-4">
        <h2 className="text-sm font-bold mb-2">Customer Details</h2>

        <div className="flex flex-col items-start">
          <p className="font-bold text-grey-700">Md Sakibul Islam</p>
          <p>+8801409029742</p>
        </div>

        <address className="text-sm whitespace-pre-wrap">
          123 Main Street, Anytown, USA 12345
        </address>
      </div>

      <hr />

      <div className="space-y-2 my-4">
        <h2 className="text-sm font-bold ">Payment Break Down</h2>
        <div className="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Sub Total</p>
          <p>${0}</p>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-grey-700">
          <p>Shipping Charge</p>
          <p className="flex items-center gap-1">${0}</p>
        </div>
        <div className="flex justify-between items-center text-sm font-bold text-grey-700">
          <p>Total Cost</p>
          <p>${0}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
