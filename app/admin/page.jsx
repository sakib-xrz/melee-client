import PageTitleWithButton from "@/components/shared/PageTitleWithButton";

export default function AdminDashboardPage() {
  return (
    <div>
      <PageTitleWithButton title={"Dashboard"} />
      <h2 className="text-lg mt-4">Order Count</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-900 rounded-lg mt-4 border-2">
        <div className="my-4 pl-4 ">
          <p>Total Orders</p>
          <p className="text-2xl pt-2">3597</p>
        </div>
        <div className="my-4 pl-4">
          <p>Order Placed</p>
          <p className="text-2xl pt-2">2965</p>
        </div>
        <div className="my-4 pl-4">
          <p>Order Processing</p>
          <p className="text-2xl pt-2">2585</p>
        </div>
        <div className="my-4 pl-4">
          <p>On the Way</p>
          <p className="text-2xl pt-2">2072</p>
        </div>
        <div className="my-4 pl-4">
          <p>Out for Delivery</p>
          <p className="text-2xl pt-2">1965</p>
        </div>
        <div className="my-4 pl-4">
          <p>Delivered</p>
          <p className="text-2xl pt-2">1565</p>
        </div>
      </div>
      <h2 className="text-lg mt-4">Products</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-900 rounded-lg mt-4 border-2">
        <div className="my-4 pl-4 ">
          <p>Total Products</p>
          <p className="text-2xl pt-2">3597</p>
        </div>
        <div className="my-4 pl-4">
          <p>Published Product</p>
          <p className="text-2xl pt-2">2965</p>
        </div>
        <div className="my-4 pl-4">
          <p>Unpublished</p>
          <p className="text-2xl pt-2">2585</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <div>
          <h2 className="text-lg mt-4">Customer</h2>
          <div className="my-4 py-4 pl-4 bg-gray-900 rounded-lg border-2">
            <p>Total Customers</p>
            <p className="text-2xl pt-2">3597</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg mt-4">Payment</h2>
          <div className="my-4 py-4 pl-4 bg-gray-900 rounded-lg border-2">
            <p>Transaction</p>
            <p className="text-2xl pt-2">2965</p>
          </div>
        </div>
      </div>
    </div>
  );
}
