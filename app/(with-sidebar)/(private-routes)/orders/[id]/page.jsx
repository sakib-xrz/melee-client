import Container from "@/components/shared/Container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholderImage from "@/public/images/placeholder.png";

const statusClasses = {
  "Order Placed": "bg-gray-600",
  Processing: "bg-blue-600",
  "On the Way": "bg-yellow-600",
  "Out for Delivery": "bg-orange-600",
  Delivered: "bg-green-600",
};

export default function OrderDetails() {
  return (
    <>
      <title>Order Details | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Order Details</h1>
        <p className="mb-6">View Your Order Details Here.</p>
        <Card className="space-y-3">
          <div className="space-y-2 xs:flex xs:justify-between xs:items-center">
            <CardHeader>
              <CardTitle className="!text-xl xs:!text-2xl">
                Order ID: #4458634
              </CardTitle>
              <CardDescription>Order date: March 20, 2024</CardDescription>
            </CardHeader>
            <small
              className={`${statusClasses["Delivered"]} text-white rounded-md px-4 py-2 xs:text-lg flex justify-center items-center`}
            >
              Delivered
            </small>
          </div>

          <hr />

          <div>
            <h2 className="text-xl font-bold">Order Items</h2>

            {/* product card start here  */}
            <div className="grid grid-cols-1 items-end sm:grid-cols-2 xs:gap-4 mt-4">
              <div className="flex flex-col xs:flex-row gap-2">
                <Image
                  src={placeholderImage}
                  alt="iPhone 12"
                  className="w-20 h-20 object-cover rounded-md border p-2"
                />
                <div>
                  <h3 className="text-lg font-bold">Apple iPhone 12</h3>
                  <p>Size: M</p>
                  <p>Price: $799.00</p>
                </div>
              </div>
              <div>
                <p>Quantity: 1</p>
                <p>Total: $799.00</p>
              </div>
            </div>
            {/* product card end here  */}
          </div>

          <hr />

          <div>
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="text-lg font-bold">Shipping Address</h3>
                <p>John Doe</p>
                <p>123, Lorem Ipsum, Dolor Sit Amet</p>
                <p>Consectetur, 1234</p>
                <p>Phone: 123-456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Payment Method</h3>
                <p>Card: **** **** **** 1234</p>
                <p>Expiry: 12/24</p>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <h2 className="text-xl font-bold">Order Total</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <p>Subtotal: $799.00</p>
                <p>Shipping: $10.00</p>
                <p>Tax: $50.00</p>
              </div>
              <div>
                <p className="text-lg font-bold">Total: $859.00</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
