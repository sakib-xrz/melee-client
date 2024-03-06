import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import { MoveRight } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <>
      <PageTitleWithButton title={"Dashboard"} />

      <div className="space-y-10 mt-10">
        <div>
          <h2 className="text-lg mb-4">Order Count</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 bg-background border border-border">
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div className="hidden sm:block">
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg mb-4">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-background border border-border">
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div>
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div>
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
            <div className="py-4 px-4 md:px-6 hover:bg-accent cursor-pointer flex w-full items-center justify-between">
              <div>
                <p className="sm:text-lg font-medium">Total Orders</p>
                <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
              </div>
              <div>
                <MoveRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="text-lg mb-4">Payment</h2>
            <div className="py-4 px-6 bg-background border border-border">
              <p className="sm:text-lg font-medium">Transaction</p>
              <p className="text-2xl sm:text-4xl font-medium pt-2">2965</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg mb-4">Customer</h2>
            <div className="py-4 px-6 bg-background border border-border">
              <p className="sm:text-lg font-medium">Total Customers</p>
              <p className="text-2xl sm:text-4xl font-medium pt-2">3597</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
