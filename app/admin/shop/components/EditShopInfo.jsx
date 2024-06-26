import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";

const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import APIKit from "@/common/APIkit";
import { toast } from "sonner";
import { useState } from "react";
import DatePicker from "@/components/form/DatePicker";
import TimePicker from "@/components/form/TimePicker";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

export default function EditShopInfo({ initialValues, refetch, refetchStore }) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      setLoading(true);

      values.contact_number =
        values.contact_number.length > 3 ? `+${values.contact_number}` : "";

      const promise = APIKit.shop
        .updateShop(values.uid, values)
        .then(() => {
          refetch();
          refetchStore();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });

      toast.promise(promise, {
        loading: "Updating Shop Info...",
        success: "Shop Info Updated!",
        error: "Failed to update Shop Info!",
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className="space-y-5">
        {initialValues.is_drop_stop === false && (
          <div className="space-y-2 w-full">
            <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
              Stop Drop
            </p>
            <Switch
              checked={initialValues.is_drop_stop === true}
              value={initialValues.is_drop_stop}
              onCheckedChange={() => {
                const promise = APIKit.shop
                  .updateShop(initialValues.uid, {
                    drop_date: null,
                    drop_time: null,
                    is_drop_stop: true,
                  })
                  .then(() => {
                    refetch();
                    refetchStore();
                    window.location.reload();
                  });

                toast.promise(promise, {
                  loading: "Updating product status...",
                  success: "Updated product status",
                  error: "Failed to update product status",
                });
              }}
            />
          </div>
        )}

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="w-full space-y-2 md:w-1/2">
            <p className="font-medium text-primary">New Drop Date</p>
            <div>
              <DatePicker
                disabled={!initialValues.is_drop_stop}
                name="drop_date"
                id="drop_date"
                value={formik.values.drop_date}
                onChange={(e) => {
                  formik.setFieldValue("drop_date", e.target.value);
                  formik.setFieldValue("is_drop_stop", false);
                }}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="w-full space-y-2 md:w-1/2">
            <p className="font-medium text-primary">New Drop Time</p>
            <div>
              <TimePicker
                disabled={!initialValues.is_drop_stop}
                name="drop_time"
                id="drop_time"
                value={formik.values.drop_time}
                onChange={(e) => {
                  formik.setFieldValue("drop_time", e.target.value);
                  formik.setFieldValue("is_drop_stop", false);
                }}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 w-full">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Animate Alert Bar Texts
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="short_pitch"
              name="short_pitch"
              placeholder="Your animated alert bar text here..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.short_pitch}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="space-y-2 w-full">
            <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
              Contact Phone Number
            </p>
            <div>
              <PhoneInput
                country={"us"}
                id="contact_number"
                name="contact_number"
                placeholder="xxx-xxx-xxxx"
                onChange={(formattedValue) => {
                  formik.setFieldValue("contact_number", formattedValue);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.contact_number}
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
              Contact Email Address
            </p>
            <div>
              <Input
                className="bg-transparent"
                type="text"
                id="contact_email"
                name="contact_email"
                placeholder="Contacts email address here..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_email}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="space-y-2 w-full">
            <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
              Instagram Profile Link
            </p>
            <div>
              <Input
                className="bg-transparent"
                type="text"
                id="contact_website"
                name="contact_website"
                placeholder="Instagram profile link here..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_website}
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
              TikTok Profile Link
            </p>
            <div>
              <Input
                className="bg-transparent"
                type="text"
                id="other_website"
                name="other_website"
                placeholder="TikTok profile link here..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.other_website}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 w-full">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Shipping Charge
          </p>
          <div>
            <Input
              className="bg-transparent"
              type="text"
              id="shipping_charges"
              name="shipping_charges"
              placeholder="Shipping charge here..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={parseFloat(formik.values.shipping_charges).toFixed(2)}
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Terms & Conditions
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
              value={formik.values.terms_condition}
              onChange={(value) =>
                formik.setFieldValue("terms_condition", value)
              }
            />
          </div>
        </div>
        <div className="w-full space-y-2">
          <p className="font-medium text-xs sm:text-sm lg:text-base text-primary">
            Privacy Policy
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
              value={formik.values.privacy_policy}
              onChange={(value) =>
                formik.setFieldValue("privacy_policy", value)
              }
            />
          </div>
        </div>

        {formik.dirty && (
          <div className="flex gap-3 justify-end">
            <Button
              isLoading={loading}
              className="w-fit whitespace-nowrap"
              type="submit"
            >
              Update Shop Info
            </Button>
          </div>
        )}
      </Card>
    </form>
  );
}
