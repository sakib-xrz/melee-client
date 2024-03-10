"use client";

import APIKit from "@/common/APIkit";
import DataTable from "@/components/shared/DataTable";
import Loading from "@/components/shared/Loading";
import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Check, Eye, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

const queryClient = new QueryClient();

export default function AdminProductPage() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["shop/products"],
    queryFn: () => APIKit.shop.product.getProducts().then(({ data }) => data),
  });

  if (isLoading) return <Loading />;

  const tableColumns = [
    {
      title: <p className="text-center">#</p>,
      renderer: (_, index) => <p className="text-center">{index + 1}</p>,
    },
    {
      title: <p className="text-center">Product Image</p>,
      dataField: "primary_image_view",
      renderer: (row) => (
        <div className="flex justify-center">
          {row.primary_image_view ? (
            <Image
              src={row.primary_image_view.image}
              alt={row.name}
              width={40}
              height={40}
              className="w-12 h-12 object-cover rounded-md"
            />
          ) : (
            <p className="text-center">No Image</p>
          )}
        </div>
      ),
    },
    {
      title: <p className="text-left">Product Name</p>,
      dataField: "name",
      renderer: (row) => <p className="text-left">{row.name || "N/A"}</p>,
    },
    {
      title: <p className="text-left">Stock Count</p>,
      dataField: "stock_size",
      renderer: (row) => (
        <div className="flex items-center gap-2">
          {row.stock_size.length > 0 ? (
            row.stock_size.map((stock, index) => (
              <p key={index} className="text-center">
                {stock.size} - ({stock.stock})
              </p>
            ))
          ) : (
            <p className="text-center">Out of stock</p>
          )}
        </div>
      ),
    },
    {
      title: <p className="text-center">Stock</p>,
      dataField: "is_stock",
      renderer: (row) => (
        <p className="flex justify-center">
          {row.is_stock ? (
            <Check className="bg-white rounded-full text-background p-1 w-5 h-5" />
          ) : (
            <Check className="bg-accent rounded-full text-background p-1 w-5 h-5" />
          )}
        </p>
      ),
    },
    {
      title: <p className="text-center">Publish</p>,
      dataField: "is_published",
      renderer: (row) => (
        <div className="flex justify-center">
          <Switch
            checked={row.is_published}
            value={row.is_published}
            onCheckedChange={(value) => {
              const promise = APIKit.shop.product
                .updateProductStatus(row.uid, {
                  name: row.name,
                  is_published: value,
                })
                .then(() => {
                  refetch();
                });

              toast.promise(promise, {
                loading: "Updating product status...",
                success: "Updated product status",
                error: "Failed to update product status",
              });
            }}
          />
        </div>
      ),
    },
    {
      title: <p className="text-center">Unit Price</p>,
      dataField: "unit_price",
      renderer: (row) => (
        <p className="text-center">
          {parseFloat(row.unit_price).toFixed(2) || "N/A"}
        </p>
      ),
    },
    {
      title: <p className="text-center">Total Sold</p>,
      dataField: "total_sold_items",
      renderer: (row) => (
        <p className="text-center">{row.total_sold_items || 0}</p>
      ),
    },
    {
      title: <p className="text-center">Sold Amount</p>,
      dataField: "total_amount",
      renderer: (row) => <p className="text-center">{row.total_amount || 0}</p>,
    },
    {
      title: <p className="text-center">Actions</p>,
      renderer: (row) => (
        <div className="flex gap-3 justify-center items-center">
          {row.is_published ? (
            <Link target="_blank" href={`/products/${row.slug}`}>
              <Button size="icon" variant="secondary">
                <Eye />
              </Button>
            </Link>
          ) : (
            <Button
              variant="secondary"
              size="icon"
              disabled={!row.is_published}
            >
              <Eye />
            </Button>
          )}
          <Link href={`/admin/products/${row.uid}/edit`}>
            <Button size="icon">
              <Pencil />
            </Button>
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div className="space-y-5">
      <PageTitleWithButton
        title={"Product Management"}
        buttonText={"Add Products"}
        href="/admin/products/add"
      />

      <DataTable
        cols={tableColumns}
        data={data.results}
        wrapperClassName="max-h-[calc(100vh-200px)] whitespace-nowrap font-medium"
        theadClassName="sticky top-0 z-10"
      />
    </div>
  );
}
