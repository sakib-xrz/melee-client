"use client";

import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Logo from "public/images/melee-white-transparent.png";
import { AUTH_TOKEN_KEY } from "@/common/KeyChain";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import APIKit from "@/common/APIkit";
import { toast } from "sonner";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  phone: "",
  password: "",
  confirm_password: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN_KEY)) {
      router.push("/products");
    }
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
        phone: `+${values.phone}`,
        password: values.password,
      };

      const handleSuccess = ({ data }) => {
        formik.resetForm();
        setJWTokenAndRedirect(data.access, () => {
          router.push("/products");
        });
      };

      const handleFailure = (error) => {
        throw error;
      };

      const promise = APIKit.auth
        .register(payload)
        .then(handleSuccess)
        .catch(handleFailure)
        .finally(() => setLoading(false));

      return toast.promise(promise, {
        loading: "Creating account...",
        success: "Account created successfully!",
        error: (error) =>
          error.response.data?.detail || "Account creation failed!",
      });
    },
  });

  return (
    <>
      <title>Register | MELEE</title>
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
              Create an Account
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
                <div className="w-full">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="e.g. John"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                  />
                  <FormikErrorBox formik={formik} field="first_name" />
                </div>
                <div className="w-full">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="e.g. Wick"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                  />
                  <FormikErrorBox formik={formik} field="last_name" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <PhoneInput
                  country={"us"}
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
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <FormikErrorBox formik={formik} field="password" />
              </div>
              <div>
                <Label htmlFor="confirm_password">Confirm Password</Label>
                <Password
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="re-type your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm_password}
                />
                <FormikErrorBox formik={formik} field="confirm_password" />
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  className="mt-2 w-full"
                  isLoading={loading}
                >
                  Create Account
                </Button>
              </div>
              <p className="text-center text-sm font-medium leading-none">
                Already have an account?{" "}
                <Link href={"/login"}>
                  <Button variant="link" className="p-0 font-bold">
                    Log in
                  </Button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
