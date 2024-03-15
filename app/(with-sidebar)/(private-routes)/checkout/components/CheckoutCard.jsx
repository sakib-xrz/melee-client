import Image from "next/image";
import React from "react";

const CheckoutCard = ({ product }) => {
  const { name, selected_stock, unit_price, size } = product;

  return (
    <div className="border rounded-md w-full mb-4 p-3 space-y-4 bg-background">
      <div className="flex gap-3">
        <Image
          className="w-16 h-16 object-cover rounded-md border border-border aspect-square"
          src={product.primary_image || "/images/placeholder-image.png"}
          alt="cart image"
          width={100}
          height={100}
        />
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center xs:text-lg">
            <h1 className="line-clamp-1 cursor-pointer hover:underline underline-offset-2">
              {name}
            </h1>
            <p className="hidden xs:block">
              ${parseFloat(unit_price).toFixed(2)}
              <span className="text-gray-500"> x {selected_stock}</span>
            </p>
          </div>
          <div className="flex justify-between items-center xs:text-base">
            <p>Size : {size}</p>
            <p className="font-medium hidden xs:block">
              Total ${parseFloat(selected_stock * unit_price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm xs:hidden">
        <p>
          ${parseFloat(unit_price).toFixed(2)}
          <span className="text-gray-500"> x {selected_stock}</span>
        </p>
        <p className="font-medium">
          Total ${parseFloat(selected_stock * unit_price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCard;
