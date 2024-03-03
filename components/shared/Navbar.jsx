"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "public/images/melee-white-transparent.png";
import { Menu, ShoppingCart } from "lucide-react";
import RightSideDrawer from "./RightSideDrawer";
import { useState } from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import Link from "next/link";
import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  return (
    <div className="border-b-2 border-border">
      <Container extraClassName="max-w-[115rem]">
        <div className="flex items-center justify-between lg:h-36">
          <div className=" lg:hidden ">
            <Menu
              className="text-2xl font-medium text-white cursor-pointer"
              onClick={() => setMenuDrawerOpen(true)}
            />
          </div>

          <Link href={"/products"} className="w-6/12 md:w-4/12 lg:w-5/12">
            <Image
              src={Logo}
              alt="MELEE LOGO DARK"
              placeholder="blur"
              className="w-full"
              priority
            />
          </Link>

          <div
            onClick={() => setCartDrawerOpen(true)}
            className="relative mr-2 text-white flex gap-4 cursor-pointer"
          >
            <ShoppingCart className="text-2xl font-medium text-white" />
            <small className="absolute top-[-10px] -right-[10px] lg:right-[50px] bg-white text-background rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center font-semibold">
              0
            </small>

            <div className=" items-center gap-1 hidden lg:flex">
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </Container>

      <RightSideDrawer
        open={cartDrawerOpen}
        setOpen={setCartDrawerOpen}
        title={"My Cart"}
      ></RightSideDrawer>

      <LeftSideDrawer
        open={menuDrawerOpen}
        setOpen={setMenuDrawerOpen}
        title={
          <div className="h-12">
            <Image
              src={Logo}
              alt="MELEE LOGO DARK"
              placeholder="blur"
              quality={100}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        }
      >
        <nav className="grid gap-2 space-y-5">
          <div className="space-y-2">
            {AuthRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMenuDrawerOpen(false)}
                className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "bg-white text-background"
                    : "hover:bg-accent"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            {ProductRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMenuDrawerOpen(false)}
                className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "bg-white text-background"
                    : "hover:bg-accent"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            {SupportRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMenuDrawerOpen(false)}
                className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "bg-white text-background"
                    : "hover:bg-accent"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </LeftSideDrawer>
    </div>
  );
}
