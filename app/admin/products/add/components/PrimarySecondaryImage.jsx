import APIKit from "@/common/APIkit";
import FormikErrorBox from "@/components/form/FormikErrorBox";
import ImageUploader from "@/components/form/ImageUploader";
import { X } from "lucide-react";
import Image from "next/image";

export default function PrimarySecondaryImage({ formik, data }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="space-y-2 w-full">
        <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
          Primary Image (1200*1200) <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-2 items-center w-full">
          {formik.values.primary_image ? (
            <div className="rounded-md w-32 h-32 relative">
              <Image
                className="w=full h-full object-cover rounded-md"
                src={
                  typeof formik.values.primary_image === "string"
                    ? formik.values.primary_image
                    : URL.createObjectURL(formik.values.primary_image)
                }
                width={500}
                height={500}
                alt=""
              />
              <div>
                <X
                  onClick={() => {
                    APIKit.shop.product.image
                      .deleteImage(
                        data.images.find(
                          (image) => image.type === "PRIMARY_PRODUCT_IMAGE"
                        ).uid
                      )
                      .then(() => {
                        formik.setFieldValue("primary_image", "");
                      });
                  }}
                  className="bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer p-1"
                />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <ImageUploader
                formik={formik}
                id={"primary_image"}
                name={"primary_image"}
              />
              <FormikErrorBox formik={formik} field="primary_image" />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2 w-full">
        <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
          Secondary Image (1200*1200) <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-2 items-center">
          {formik.values.secondary_image ? (
            <div className="rounded-md w-32 h-32 relative">
              <Image
                className="w=full h-full object-cover rounded-md"
                src={
                  typeof formik.values.secondary_image === "string"
                    ? formik.values.secondary_image
                    : URL.createObjectURL(formik.values.secondary_image)
                }
                width={500}
                height={500}
                alt=""
              />
              <div>
                <X
                  onClick={() => {
                    APIKit.shop.product.image
                      .deleteImage(
                        data.images.find(
                          (image) => image.type === "SECONDARY_PRODUCT_IMAGE"
                        ).uid
                      )
                      .then(() => {
                        formik.setFieldValue("secondary_image", "");
                      });
                  }}
                  className="bg-red-500 rounded-full absolute right-1 top-1 cursor-pointer p-1"
                />
              </div>
            </div>
          ) : (
            <div className="w-full">
              <ImageUploader
                formik={formik}
                id={"secondary_image"}
                name={"secondary_image"}
              />
              <FormikErrorBox formik={formik} field="secondary_image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
