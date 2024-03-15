import Container from "@/components/shared/Container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OrderDetails() {
  return (
    <>
      <title>Order Details | MELEE</title>
      <Container>
        <h1 className="text-3xl font-bold">Order Details</h1>

        <Card>
          <CardHeader>
            <CardTitle>Order ID: #4458634</CardTitle>
            <CardDescription>Order date: March 20, 2024</CardDescription>
          </CardHeader>
        </Card>
      </Container>
    </>
  );
}
