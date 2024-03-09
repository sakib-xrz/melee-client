"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";

import Link from "next/link";
import TextEditorFields from "./components/TextEditorFields";
import StockFields from "./components/StockFields";
import PrimarySecondaryImage from "./components/PrimarySecondaryImage";
import APIKit from "@/common/APIkit";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initialValues } from "@/common/KeyChain";

export default function AdminAddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const stockArray = [];

  const formik = useFormik({
    // initialValues: {
    //   name: "",
    //   short_pitch: "",
    //   description: "",
    //   primary_image: "",
    //   secondary_image: "",
    //   additional_images: [],
    //   unit_price: "",
    //   stock_s: "",
    //   stock_m: "",
    //   stock_l: "",
    //   stock_xl: "",
    //   stock_xxl: "",
    //   details: "",
    //   sizing: "",
    //   care: "",
    //   delivery_and_returns: "",
    // },
    initialValues: initialValues,
    onSubmit: (values) => {
      setLoading(true);

      sizes.forEach((size) => {
        const stockValue = formik.values[`stock_${size.toLowerCase()}`];
        if (
          stockValue !== undefined &&
          stockValue !== "" &&
          stockValue !== null &&
          stockValue !== 0
        ) {
          stockArray.push({
            size: size.toUpperCase(),
            stock: parseInt(stockValue),
          });
        }
      });

      const payload = {
        name: values.name || "",
        short_pitch: values.short_pitch || "",
        primary_image: values.primary_image || "",
        secondary_image: values.secondary_image || "",
        unit_price: parseFloat(values.unit_price) || 0,
        stock: JSON.stringify(stockArray) || [],
        details: values.details || "",
        sizing: values.sizing || "",
        care: values.care || "",
        delivery_and_returns: values.delivery_and_returns || "",
      };

      const handleSuccess = ({ data }) => {
        console.log(data);
        // formik.resetForm();
        router.push("/admin/products");
      };

      const handleFailure = (error) => {
        console.log(error);
        throw error;
      };

      const promise = APIKit.shop.product
        .postProduct(payload)
        .then(handleSuccess)
        .catch(handleFailure)
        .finally(() => setLoading(false));

      toast.promise(promise, {
        loading: "Adding Product...",
        success: "Product added Successfully",
        error: "Failed to add product",
      });
    },
  });

  return (
    <Card className="max-w-7xl mx-auto">
      {" "}
      <CardHeader>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary ">
          Add a new Product
        </h2>
      </CardHeader>
      <CardContent className="mt-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full space-y-5 col-span-12 md:col-span-8 xl:col-span-9">
            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Product Name <span className="text-red-500">*</span>
              </p>
              <div>
                <Input
                  className="bg-transparent"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Product Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Short Brief
              </p>
              <div>
                <Textarea
                  className="bg-transparent"
                  id="short_pitch"
                  name="short_pitch"
                  placeholder="Short brief about your product"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.short_pitch}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Product Price <span className="text-red-500">*</span>
              </p>
              <div>
                <Input
                  className="bg-transparent"
                  type="text"
                  id="unit_price"
                  name="unit_price"
                  placeholder="Price of your product"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.unit_price}
                />
              </div>
            </div>

            <StockFields formik={formik} />

            <TextEditorFields formik={formik} />

            <PrimarySecondaryImage formik={formik} />

            <div className="flex gap-3 justify-end">
              <Link href={"/admin/products"}>
                <Button
                  className="w-fit whitespace-nowrap"
                  type="submit"
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Link>
              <Button className="w-fit whitespace-nowrap" type="submit">
                Publish Product
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
