"use client";

import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import APIKit from "@/common/APIkit";
import { toast } from "sonner";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import { useStore } from "@/context/StoreProvider";

const validationSchema = Yup.object({
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  phone: "+8801409029742",
  password: "123456",
};

export default function Login({ slug, setAuthModalOpen, checkoutUrl }) {
  const { fetchMe } = useStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      const payload = {
        phone: `+${values.phone}`,
        password: values.password,
      };

      const handleSuccess = ({ data }) => {
        setJWTokenAndRedirect(data.access, () => {
          router.push(checkoutUrl);
        });
        fetchMe();
        formik.resetForm();
        setAuthModalOpen(false);
      };

      const handleFailure = (error) => {
        throw error;
      };

      const promise = APIKit.auth
        .token(payload)
        .then(handleSuccess)
        .catch(handleFailure)
        .finally(() => setLoading(false));

      return toast.promise(promise, {
        loading: "Signing you in...",
        success: "Signed in successfully",
        error: (error) =>
          error.response.data?.detail || "Authentication failed!",
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="phone">Phone</Label>
        <PhoneInput
          country={"bd"}
          id="phone"
          name="phone"
          placeholder="xxx-xxx-xxxx"
          onChange={(formattedValue) => {
            formik.setFieldValue("phone", formattedValue);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <FormikErrorBox formik={formik} field="phone" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Password
          id="password"
          name="password"
          placeholder="min 6 characters"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <FormikErrorBox formik={formik} field="password" />
      </div>
      <div className="w-full">
        <Button type="submit" className="mt-2 w-full" isLoading={loading}>
          Login
        </Button>
      </div>
    </form>
  );
}
