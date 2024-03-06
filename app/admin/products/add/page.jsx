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

export default function AdminAddProductPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      short_pitch: "",
      description: "",
      product_image: "",
      view_product_image: "",
      images: [],
      view_images: [],
      unit_price: "",
      stock: "",
    },
    onSubmit: (values) => {
      setLoading(true);

      const handleSuccess = () => {
        formik.resetForm();
        router.push("/admin/products");
      };

      const handleFailure = (error) => {
        console.log(error);
        throw error;
      };

      //   const promise = APIKit.we.job
      //     .postJob(values)
      //     .then(handleSuccess)
      //     .catch(handleFailure)
      //     .finally(() => setLoading(false));

      //   return toast.promise(promise, {
      //     loading: "Loading...",
      //     success: "Job published successful!",
      //     error: "Something went wrong!",
      //   });
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
          <div className="space-y-2">
            <p className="font-medium text-primary">
              Product Image <span className="text-destructive">*</span>
            </p>
            <div className="flex gap-2 items-center">
              {formik.values.view_product_image ? (
                <div className="rounded-md sm:w-72 sm:h-72 relative">
                  <Image
                    className="w=full h-full object-cover rounded-md"
                    src={formik.values.view_product_image}
                    width={500}
                    height={500}
                    alt=""
                  />
                  <div>
                    <X
                      onClick={() => {
                        formik.setFieldValue("product_image", "");
                        formik.setFieldValue("view_product_image", "");
                      }}
                      className="bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer p-1"
                    />
                  </div>
                </div>
              ) : (
                <div className="max-w-sm">
                  <ImageUploader
                    formik={formik}
                    id={"product_image"}
                    name={"product_image"}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-full space-y-5">
            <div className="space-y-2">
              <p className="font-medium text-primary">
                Product Name <span className="text-destructive">*</span>
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
              <p className="font-medium text-primary">Short Brief</p>
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

            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="w-full space-y-2 md:w-1/2">
                <p className="font-medium text-primary">
                  Product Price <span className="text-destructive">*</span>
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
              <div className="w-full space-y-2 md:w-1/2">
                <p className="font-medium text-primary">
                  Stock <span className="text-destructive">*</span>
                </p>
                <div>
                  <Input
                    className="bg-transparent"
                    type="text"
                    id="stock"
                    name="stock"
                    placeholder="Stock of your product"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-primary">Description</p>
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

            <div className="flex justify-end">
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
