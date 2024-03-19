"use client";

import Container from "@/components/shared/Container";
import CountdownTimer from "@/components/shared/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/melee-white-transparent.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const targetDate = new Date("2024-03-22T00:00:00");

export default function NewDropPage() {
  return (
    <>
      <title>New Drops | MELEE</title>
      <Container>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div>
          <Link href={"/products"}>
            <Image
              src={Logo}
              alt="MELEE LOGO DARK"
              placeholder="empty"
              className="aspect-auto w-9/12 sm:w-7/12 md:w-6/12 lg:w-5/12 mx-auto mt-10 sm:mt-20 lg:mt-28 mb-6"
              priority
            />
          </Link>

          <div className="space-y-14">
            <div className="w-9/12 sm:w-6/12 md:w-5/12 lg:w-3/12 mx-auto">
              <div className="flex justify-center mb-2">
                <Label>ENTER USING PASSWORD</Label>
              </div>
              <Input
                type="password"
                id="password"
                name="password"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.password}
              />

              <div className="flex justify-center mt-4">
                <Button className="px-10 rounded-2xl" variant="outline">
                  UNLOCK
                </Button>
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-center mb-2 font-semibold">
                ACCESS TO DROP
              </h1>
              <div>
                <h1 className="text-lg font-medium text-center mb-2">
                  Sign up to get access to our next drop
                </h1>
                <div className="w-10/12 sm:w-7/12 md:w-6/12 lg:w-4/12 mx-auto">
                  <PhoneInput
                    country={"us"}
                    id="phone"
                    name="phone"
                    placeholder="xxx-xxx-xxxx"
                    // onChange={(formattedValue) => {
                    //   formik.setFieldValue("phone", formattedValue);
                    // }}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.phone}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <Button className="px-10 rounded-2xl" variant="outline">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-8/12 lg:w-6/12 mx-auto mt-5">
            <p className="text-xs text-center">
              By submitting this form and signing up for texts, you consent to
              receive marketing text messages (e.g. promos, cart reminders) from
              MELEE INC at the number provided, including messages sent by
              autodialer. Consent is not a condition of purchase. Msg & data
              rates may apply. Msg frequency varies. Unsubscribe at any time by
              replying STOP or clicking the unsubscribe link (where available).
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
