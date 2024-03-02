"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "public/images/melee-white-transparent.png";
import { ShoppingCart } from "lucide-react";
import RightSideDrawer from "./RightSideDrawer";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-border">
      <Container extraClassName="max-w-[115rem]">
        <div className="flex items-center justify-between">
          <div className="w-5/12 md:w-4/12 lg:w-3/12">
            <Image
              src={Logo}
              alt="MELEE LOGO DARK"
              placeholder="blur"
              className="w-full"
              quality={100}
            />
          </div>

          <div
            onClick={() => setOpen(true)}
            className="relative mr-2 text-white flex gap-4 cursor-pointer"
          >
            <ShoppingCart className=" text-2xl font-medium text-white" />
            <small className="absolute top-[-10px] right-[50px] bg-white text-background rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center font-semibold">
              0
            </small>

            <div className="flex items-center gap-1">
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </Container>

      <RightSideDrawer
        open={open}
        setOpen={setOpen}
        title={"My Cart"}
      ></RightSideDrawer>
    </div>
  );
}
