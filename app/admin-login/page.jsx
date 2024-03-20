"use client";

import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Logo from "public/images/melee-white-transparent.png";
import APIKit from "@/common/APIkit";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import { toast } from "sonner";
import { AUTH_TOKEN_KEY } from "@/common/KeyChain";

const validationSchema = Yup.object({
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  phone: "+12403607127",
  password: "admin",
};
// const initialValues = {
//   phone: "",
//   password: "",
// };

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const previousURL = searchParams.get("next");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN_KEY)) {
      router.push("/admin");
    }
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      const payload = {
        phone: `+${values.phone}`,
        password: values.password,
      };

      const handleSuccess = ({ data }) => {
        formik.resetForm();
        setJWTokenAndRedirect(data.access, () => {
          if (previousURL) {
            router.push(previousURL);
          } else {
            router.push("/admin");
          }
        });
      };

      const handleFailure = (error) => {
        throw error;
      };

      const promise = APIKit.auth
        .token(payload, { as: "admin" })
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
    <div className="flex min-h-screen items-center px-5">
      <div className="mx-auto w-full sm:w-2/3 xl:w-1/3">
        <div className="space-y-8 rounded-md bg-background px-8 py-10 border">
          <Link href={"/products"} className="flex justify-center">
            <Image
              src={Logo}
              width={200}
              height={50}
              alt="MELEE Logo"
              placeholder="empty"
              priority
            />
          </Link>
          <h2 className=" text-center text-2xl md:text-3xl font-semibold tracking-tight first:mt-0">
            Admin Login
          </h2>
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
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
        </div>
      </div>
    </div>
  );
}
