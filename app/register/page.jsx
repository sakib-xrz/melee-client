"use client";

import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { Phone } from "@/components/ui/phone";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import Logo from "public/images/melee-white-transparent.png";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  first_name: "Sakibul",
  last_name: "Islam",
  phone: "2124567890",
  password: "12345678",
  confirm_password: "12345678",
};

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // setLoading(true);
      const payload = {
        name: {
          first_name: values.first_name,
          last_name: values.last_name,
        },
        phone: values.phone,
        password: values.password,
      };

      const handleSuccess = ({ data }) => {
        // formik.resetForm();
        // setJWTokenAndRedirect(data.access, () => {
        //   router.push("/candidate");
        // });
      };

      const handleFailure = (error) => {
        // throw error;
      };

      // const promise = APIKit.auth
      //   .register(payload)
      //   .then(handleSuccess)
      //   .catch(handleFailure)
      //   .finally(() => setLoading(false));

      // return toast.promise(promise, {
      //   loading: "Creating your account...",
      //   success: "Signed up successfully",
      //   error: (error) => error.message,
      // });
    },
  });

  return (
    <div className="flex min-h-screen items-center">
      <div className="mx-auto w-full sm:w-2/3 xl:w-1/3">
        <div className="space-y-8 rounded-md bg-background px-8 py-10 border">
          <Link href={"/products"} className="flex justify-center">
            <Image src={Logo} width={200} height={50} alt="MELEE Logo" />
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
                  placeholder="e.g. Jhon"
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
              <Phone
                type="phone"
                id="phone"
                name="phone"
                placeholder="xxx-xxx-xxxx"
                onChange={formik.handleChange}
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
                placeholder="min 8 characters"
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
              <Button type="submit" className="mt-2 w-full" isLoading={loading}>
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
  );
}
