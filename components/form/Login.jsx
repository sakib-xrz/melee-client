"use client";

import FormikErrorBox from "@/components/form/FormikErrorBox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Password } from "@/components/ui/password";
import { Phone } from "@/components/ui/phone";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  phone: Yup.string().required("Phone is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  phone: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // setLoading(true);
      const payload = {
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
      //   .token(payload)
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
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Phone
          type="phone"
          id="phone"
          name="phone"
          placeholder="xxx-xxx-xxxx"
          onChange={formik.handleChange}
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
