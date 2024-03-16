import Container from "@/components/shared/Container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import placeholderImage from "@/public/images/placeholder.png";
import OrderStatusTracker from "./components/OrderStatusTracker";

export default function OrderDetails() {
  return (
    <>
      <title>Order Details | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Order Details</h1>
        <p className="mb-6">View Your Order Details Here.</p>
        <Card className="space-y-3">
          <CardHeader>
            <CardTitle className="!text-2xl">Order ID: #4458634</CardTitle>
            <CardDescription>Order date: March 20, 2024</CardDescription>
          </CardHeader>

          <hr />

          <div>
            <OrderStatusTracker status="Delivered" />
          </div>

          <div>
            <h2 className="text-xl font-bold">Order Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <Image
                  src={placeholderImage}
                  alt="iPhone 12"
                  className="w-24 h-24 object-cover rounded-md border"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Apple iPhone 12</h3>
                <p>Price: $799.00</p>
                <p>Quantity: 1</p>
                <p>Total: $799.00</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <Image
                  src={placeholderImage}
                  alt="iPhone 12"
                  className="w-24 h-24 object-cover rounded-md border"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Apple iPhone 12</h3>
                <p>Price: $799.00</p>
                <p>Quantity: 1</p>
                <p>Total: $799.00</p>
              </div>
            </div>
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
