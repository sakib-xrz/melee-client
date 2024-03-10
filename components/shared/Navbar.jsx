"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "public/images/melee-white-transparent.png";
import { LogOut, Menu, ShoppingCart } from "lucide-react";
import RightSideDrawer from "./RightSideDrawer";
import { useState } from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import Link from "next/link";
import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import { usePathname } from "next/navigation";
import ActiveIcon from "./ActiveIcon";
import Cart from "./Cart";
import { Button } from "../ui/button";
import { useStore } from "@/context/StoreProvider";
import { getCart } from "@/common/UtilKit";

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useStore();
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const cartData = getCart();

  return (
    <div className="border-b-2 border-border sticky top-0 z-50 bg-background">
      <Container extraClassName="max-w-[115rem]">
        <div className="flex items-center justify-between lg:h-20">
          <div className=" lg:hidden ">
            <Menu
              className="text-2xl font-medium text-white cursor-pointer"
              onClick={() => setMenuDrawerOpen(true)}
            />
          </div>

          <Link href={"/products"} className="w-6/12 md:w-4/12 lg:w-3/12">
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
            <small className="absolute top-[-10px] -right-[10px] bg-white text-background rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center font-semibold">
              {cartData?.length || 0}
            </small>
          </div>
        </div>
      </Container>

      <RightSideDrawer
        open={cartDrawerOpen}
        setOpen={setCartDrawerOpen}
        title={"My Cart"}
      >
        <Cart />
        <Button className="absolute bottom-2.5 right-4">
          Proceed to Checkout
        </Button>
      </RightSideDrawer>

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
        <nav className="grid gap-2 py-2">
          <div className="space-y-2">
            {!user &&
              AuthRoutes.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={
                    "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap"
                  }
                >
                  {pathname === link.href ? (
                    <div>
                      <ActiveIcon />
                    </div>
                  ) : (
                    <div className="opacity-0">
                      <ActiveIcon />
                    </div>
                  )}
                  {link.title}
                </Link>
              ))}
          </div>

          <div className="space-y-2">
            {ProductRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap"
                }
              >
                {pathname === link.href ? (
                  <div>
                    <ActiveIcon />
                  </div>
                ) : (
                  <div className="opacity-0">
                    <ActiveIcon />
                  </div>
                )}
                {link.title}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            {SupportRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap"
                }
              >
                {pathname === link.href ? (
                  <div>
                    <ActiveIcon />
                  </div>
                ) : (
                  <div className="opacity-0">
                    <ActiveIcon />
                  </div>
                )}
                {link.title}
              </Link>
            ))}
          </div>

          {user && (
            <Button
              onClick={() => router.push("/logout")}
              variant="secondary"
              size="lg"
              className="gap-2 absolute bottom-0 w-full justify-center rounded-none"
            >
              <LogOut /> Logout
            </Button>
          )}
        </nav>
      </LeftSideDrawer>
    </div>
  );
}
