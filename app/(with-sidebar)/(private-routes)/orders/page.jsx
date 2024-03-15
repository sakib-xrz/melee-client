import Container from "@/components/shared/Container";
import OrderCard from "./components/OrderCard";

export default function OrderPage() {
  return (
    <>
      <title>Orders | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">My Orders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <OrderCard />
          <OrderCard />
        </div>
      </Container>
    </>
  );
}
