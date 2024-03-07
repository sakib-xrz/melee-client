"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import ImageUploader from "@/components/form/ImageUploader";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

export default function AdminAddProductPage() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const stockArray = [];

  const formik = useFormik({
    initialValues: {
      name: "",
      short_pitch: "",
      description: "",
      primary_image: "",
      view_primary_image: "",
      secondary_image: "",
      view_secondary_image: "",
      unit_price: "",
      stock_s: "",
      stock_m: "",
      stock_l: "",
      stock_xl: "",
      stock_xxl: "",
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
        name: formik.values.name,
        short_pitch: formik.values.short_pitch,
        description: formik.values.description,
        primary_image: formik.values.primary_image,
        secondary_image: formik.values.secondary_image,
        unit_price: parseFloat(formik.values.unit_price),
        stock: stockArray,
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

  console.log(formik.values);
  return (
    <Card className="max-w-7xl mx-auto">
      {" "}
      <CardHeader>
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-primary ">
          Add a new Product
        </h2>
      </CardHeader>
      <CardContent className="mt-10">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col md:flex-row gap-5"
        >
          <div className="flex flex-col sm:flex-row md:flex-col gap-5">
            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Primary Image (1200*1200){" "}
                <span className="text-red-500">*</span>
              </p>
              <div className="flex gap-2 items-center">
                {formik.values.view_primary_image ? (
                  <div className="rounded-md w-52 sm:w-72 h-52 sm:h-72 relative">
                    <Image
                      className="w=full h-full object-cover rounded-md"
                      src={formik.values.view_primary_image}
                      width={500}
                      height={500}
                      alt=""
                    />
                    <div>
                      <X
                        onClick={() => {
                          formik.setFieldValue("primary_image", "");
                          formik.setFieldValue("view_primary_image", "");
                        }}
                        className="bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer p-1"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-sm">
                    <ImageUploader
                      formik={formik}
                      id={"primary_image"}
                      name={"primary_image"}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Secondary Image (1200*1200){" "}
                <span className="text-red-500">*</span>
              </p>
              <div className="flex gap-2 items-center">
                {formik.values.view_secondary_image ? (
                  <div className="rounded-md w-52 sm:w-72 h-52 sm:h-72 relative">
                    <Image
                      className="w=full h-full object-cover rounded-md"
                      src={formik.values.view_secondary_image}
                      width={500}
                      height={500}
                      alt=""
                    />
                    <div>
                      <X
                        onClick={() => {
                          formik.setFieldValue("secondary_image", "");
                          formik.setFieldValue("view_secondary_image", "");
                        }}
                        className="bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer p-1"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-sm">
                    <ImageUploader
                      formik={formik}
                      id={"secondary_image"}
                      name={"secondary_image"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full space-y-5">
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

            <div className="flex w-full flex-col gap-4 xl:flex-row">
              <div className="w-full space-y-2 xl:w-1/5">
                <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                  Stock (S)
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock_s"
                    name="stock_s"
                    placeholder="Stock for small size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock_s}
                  />
                </div>
              </div>
              <div className="w-full space-y-2 xl:w-1/5">
                <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                  Stock (M)
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock_m"
                    name="stock_m"
                    placeholder="Stock for medium size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock_m}
                  />
                </div>
              </div>
              <div className="w-full space-y-2 xl:w-1/5">
                <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                  Stock (L)
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock_l"
                    name="stock_l"
                    placeholder="Stock for large size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock_l}
                  />
                </div>
              </div>
              <div className="w-full space-y-2 xl:w-1/5">
                <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                  Stock (XL)
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock_xl"
                    name="stock_xl"
                    placeholder="Stock for xl size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock_xl}
                  />
                </div>
              </div>
              <div className="w-full space-y-2 xl:w-1/5">
                <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                  Stock (XXL)
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock_xxl"
                    name="stock_xxl"
                    placeholder="Stock for xxl size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock_xxl}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
                Description
              </p>
              <div>
                <DynamicQuill
                  placeholder=""
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image", "video"],
                      ["clean"],
                    ],
                    clipboard: {
                      matchVisual: false,
                    },
                  }}
                  theme="snow"
                  value={formik.values.description}
                  onChange={(value) =>
                    formik.setFieldValue("description", value)
                  }
                />
              </div>
            </div>

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
