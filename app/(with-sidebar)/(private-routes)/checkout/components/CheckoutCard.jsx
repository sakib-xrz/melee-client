import Image from "next/image";
import React from "react";

const CheckoutCard = ({ product }) => {
  const { name, primary_image, selected_stock, unit_price, size } = product;

  return (
    <div className="border rounded-md w-full mb-4 p-3 space-y-4">
      <div className="flex gap-3">
        <Image
          className="w-16 h-16 object-cover rounded-md border border-border aspect-square"
          src={primary_image}
          alt="cart image"
          width={100}
          height={100}
        />
        <div className="w-full">
          <h1 className="line-clamp-1 cursor-pointer hover:underline underline-offset-2">
            {name}
          </h1>
          <p className="text-xs md:text-sm ">Size : {size}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <p>
          ${parseFloat(unit_price).toFixed(2)}
          <span className="text-gray-500"> x {selected_stock}</span>
        </p>
        <p className="font-medium">
          {" "}
          ${parseFloat(selected_stock * unit_price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCard;
