import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import OrderCard from "./components/OrderCard";

export default function AdminOrderPage() {
  return (
    <div>
      <PageTitleWithButton title="Order Management" />
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
