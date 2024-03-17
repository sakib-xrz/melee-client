import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import shirt from "public/images/dress3.png";

const OrderDetaillsCard = () => {
  return (
    <div>
      <div className="space-y-2 xs:flex xs:justify-between xs:items-center">
        <CardHeader>
          <CardTitle className="!text-xl xs:!text-2xl">
            Order ID: #034278966
          </CardTitle>
          <CardDescription className="!mb-3">
            Order date: March 17, 2024, 12:49 PM
          </CardDescription>
        </CardHeader>
      </div>
      <hr />

      <div>
        <h2 className="text-xl font-bold mt-3">Order Items</h2>
        <div className="grid grid-cols-1 items-end sm:grid-cols-2 xs:gap-4 mt-4 mb-3">
          <div>
            <Image
              src={shirt}
              width={80}
              height={80}
              alt="iPhone 12"
              className="w-20 h-20 object-cover rounded-md border p-2"
            />
            <div className="mt-3">
              <h3 className="text-lg font-bold">Red Floral Dress</h3>
              <p>Size: L</p>
              <p>Price: $ 54</p>
            </div>
          </div>
          <div>
            <p>Quantity: 3</p>
            <p>Total: $ 360</p>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h2 className="text-xl font-bold mt-3">Order Summary</h2>
        <div className="grid grid-cols-1  gap-4 mt-4">
          <div>
            <h3 className="text-lg font-bold">Shipping Address</h3>
            <p>MD.Sakibul Islam</p>
            <p>Phone: 01409020305</p>
            <p>125/2, East Shewrapara, Mirpur, Dhaka-1216</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Order Total</h2>
            <div>
              <p>Subtotal: $360</p>
              <p>Shipping: $10</p>
              <p className="text-lg font-semibold mt-2">Total: $370</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetaillsCard;
