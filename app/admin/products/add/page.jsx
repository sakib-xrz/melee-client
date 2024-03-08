"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";

import ImageUploader from "@/components/form/ImageUploader";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import MultipleImageUpload from "@/components/form/MultipleImageUploader";
import TextEditorFields from "./components/TextEditorFields";
import StockFields from "./components/StockFields";
import PrimarySecondaryImage from "./components/PrimarySecondaryImage";
import AdditionalImages from "./components/AdditionalImages";

export default function AdminAddProductPage() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const stockArray = [];

  const formik = useFormik({
    initialValues: {
      name: "",
      short_pitch: "",
      description: "",
      primary_image: "",
      secondary_image: "",
      additional_images: [],
      unit_price: "",
      stock_s: "",
      stock_m: "",
      stock_l: "",
      stock_xl: "",
      stock_xxl: "",
      details: "",
      sizing: "",
      care: "",
      delivery_and_returns: "",
    },
    onSubmit: (values) => {
      // setLoading(true);

      sizes.forEach((size) => {
        const stockValue = formik.values[`stock_${size.toLowerCase()}`];
        if (stockValue !== undefined && stockValue !== "") {
          stockArray.push({
            size: size.toUpperCase(),
            stock: parseInt(stockValue),
          });
        }
      });

      const payload = {
        name: formik.values.name || "",
        short_pitch: formik.values.short_pitch || "",
        description: formik.values.description || "",
        primary_image: formik.values.primary_image || "",
        secondary_image: formik.values.secondary_image || "",
        additional_images: formik.values.additional_images || [],
        unit_price: parseFloat(formik.values.unit_price) || 0,
        stock: stockArray || [],
        details: formik.values.details || "",
        sizing: formik.values.sizing || "",
        care: formik.values.care || "",
        delivery_and_returns: formik.values.delivery_and_returns || "",
      };

      console.log(payload);

      const handleSuccess = () => {
        formik.resetForm();
        router.push("/admin/products");
      };

      const handleFailure = (error) => {
        console.log(error);
        throw error;
      };
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

            <AdditionalImages formik={formik} />

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
