import DataTable from "@/components/shared/DataTable";
import PageTitleWithButton from "@/components/shared/PageTitleWithButton";
import { Button } from "@/components/ui/button";
import dress from "@/public/images/dress.png";
import { Check, Eye, Pencil } from "lucide-react";
import Image from "next/image";

const data = [
  {
    name: "Floral Summer Dress",
    product_image: dress,
    unit_price: 19.99,
    stock: 10,
    isPublished: true,
    sold: 5,
    sold_amount: 99.95,
  },
  {
    name: "Men's Leather Watch",
    product_image: dress,
    unit_price: 24.5,
    stock: 20,
    isPublished: true,
    sold: 2,
    sold_amount: 49.0,
  },
  {
    name: "Wireless Noise-Canceling Headphones",
    product_image: dress,
    unit_price: 129.95,
    stock: 35,
    isPublished: false,
    sold: 8,
    sold_amount: 1036.0,
  },
  {
    name: "Mountain Bike",
    product_image: dress,
    unit_price: 399.99,
    stock: 5,
    isPublished: true,
    sold: 1,
    sold_amount: 399.99,
  },
  {
    name: "Organic Coffee Beans (1kg)",
    product_image: dress,
    unit_price: 14.99,
    stock: 100,
    isPublished: true,
    sold: 15,
    sold_amount: 224.85,
  },
  {
    name: "Travel Backpack",
    product_image: dress,
    unit_price: 59.99,
    stock: 12,
    isPublished: true,
    sold: 3,
    sold_amount: 179.97,
  },
  {
    name: "Indoor Herb Garden Kit",
    product_image: dress,
    unit_price: 29.95,
    stock: 3,
    isPublished: false,
    sold: 0,
    sold_amount: 0.0,
  },
  {
    name: "Wireless Charging Pad",
    product_image: dress,
    unit_price: 19.99,
    stock: 40,
    isPublished: true,
    sold: 10,
    sold_amount: 199.9,
  },
  {
    name: "Set of 4 Wine Glasses",
    product_image: dress,
    unit_price: 34.0, // Assuming you meant to complete the price
    stock: undefined, // Assuming you don't have stock information for this product
    isPublished: true,
    sold: undefined, // Assuming you don't have sales information for this product
    sold_amount: undefined, // Calculated based on `unit_price` and `sold` (which are undefined)
  },
  {
    name: "Product 10",
    product_image: dress,
    unit_price: 55.99,
    stock: 2,
    isPublished: true,
    sold: 1,
    sold_amount: 55.99,
  },
];

const tableColumns = [
  {
    title: <p className="text-center">#</p>,
    renderer: (_, index) => <p className="text-center">{index + 1}</p>,
  },
  {
    title: <p className="text-center">Product Image</p>,
    dataField: "product_image",
    renderer: (row) => (
      <div className="flex justify-center">
        {row.product_image ? (
          <Image
            src={row.product_image}
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
    dataField: "stock",
    renderer: (row) => (
      <div className="flex items-center gap-2">
        <p className="text-center">S ({row.stock || "N/A"})</p>
        <p className="text-center">M ({row.stock || "N/A"})</p>
        <p className="text-center">L ({row.stock || "N/A"})</p>
        <p className="text-center">XL ({row.stock || "N/A"})</p>
        <p className="text-center">XXL ({row.stock || "N/A"})</p>
      </div>
    ),
  },
  {
    title: <p className="text-center">Publish</p>,
    dataField: "isPublished",
    renderer: (row) => (
      <p className="flex justify-center">
        {row.isPublished ? (
          <Check className="bg-white rounded-full text-background p-1 w-5 h-5" />
        ) : (
          <Check className="bg-accent rounded-full text-background p-1 w-5 h-5" />
        )}
      </p>
    ),
  },
  {
    title: <p className="text-center">Unit Price</p>,
    dataField: "unit_price",
    renderer: (row) => <p className="text-center">{row.unit_price || "N/A"}</p>,
  },

  {
    title: <p className="text-center">Total Sold</p>,
    dataField: "sold",
    renderer: (row) => <p className="text-center">{row.sold || "N/A"}</p>,
  },
  {
    title: <p className="text-center">Sold Amount</p>,
    dataField: "sold_amount",
    renderer: (row) => (
      <p className="text-center">{row.sold_amount || "N/A"}</p>
    ),
  },
  {
    title: <p className="text-center">Actions</p>,
    dataField: "sold_amount",
    renderer: () => (
      <div className="flex gap-3 justify-center items-center">
        <div>
          <Button variant="outline" size="icon">
            <Eye />
          </Button>
        </div>
        <div>
          <Button variant="secondary" size="icon">
            <Pencil />
          </Button>
        </div>
      </div>
    ),
  },
];

export default function AdminProductPage() {
  return (
    <div className="space-y-5">
      <PageTitleWithButton
        title={"Product Management"}
        buttonText={"Add Products"}
        href="/admin/products/add"
      />

      <DataTable
        cols={tableColumns}
        data={data}
        wrapperClassName="max-h-[calc(100vh-200px)] whitespace-nowrap font-medium"
        theadClassName="sticky top-0 z-10"
      />
    </div>
  );
}
