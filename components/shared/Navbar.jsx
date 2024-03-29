"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "public/images/melee-white-transparent.png";
import { LogOut, Menu, ShoppingCart } from "lucide-react";
import RightSideDrawer from "./RightSideDrawer";
import { use, useEffect, useState } from "react";
import { LeftSideDrawer } from "./LeftSideDrawer";
import Link from "next/link";
import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import { usePathname, useRouter } from "next/navigation";
import ActiveIcon from "./ActiveIcon";
import Cart from "./Cart";
import { Button } from "../ui/button";
import { useStore } from "@/context/StoreProvider";
import { GetCart, calculateTotal } from "@/common/UtilKit";
import { toast } from "sonner";
import InstaIcon from "./InstaIcon";
import TikTokIcon from "./TikTokIcon";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, carts, fetchStore, store } = useStore();
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  useEffect(() => {
    fetchStore();
  }, []);

  const { data: cartData, refetch } = GetCart();

  const { total } = calculateTotal(carts || []);

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
              placeholder="empty"
              className="w-full"
              priority
            />
          </Link>

          <div>
            {cartData?.length > 0 && (
              <div
                onClick={() => setCartDrawerOpen(true)}
                className="relative mr-2 text-white flex gap-4 cursor-pointer"
              >
                <ShoppingCart className="text-2xl font-medium text-white" />
                <small className="absolute top-[-10px] -right-[10px] bg-white text-background rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center font-semibold">
                  {cartData?.length || 0}
                </small>
              </div>
            )}
          </div>
        </div>
      </Container>

      <RightSideDrawer
        open={cartDrawerOpen}
        setOpen={setCartDrawerOpen}
        title={"My Cart"}
      >
        <Cart />

        {cartData && cartData.length > 0 ? (
          <Button
            onClick={() => {
              localStorage.removeItem("cart"),
                toast.success("Cart Cleared!"),
                refetch(),
                setCartDrawerOpen(false);
            }}
            variant={"outline"}
            className="absolute bottom-2.5 left-4"
          >
            Clear Cart
          </Button>
        ) : null}

        {cartData && cartData.length > 0 ? (
          <Button
            disabled={+total === 0}
            onClick={() => {
              router.push("/checkout"), setCartDrawerOpen(false);
            }}
            className="absolute bottom-2.5 right-4"
          >
            {user ? "Proceed to Checkout" : "Login to Checkout"}
          </Button>
        ) : null}
      </RightSideDrawer>

      <LeftSideDrawer
        open={menuDrawerOpen}
        setOpen={setMenuDrawerOpen}
        title={
          <div className="h-12">
            <Image
              src={Logo}
              alt="MELEE LOGO DARK"
              placeholder="empty"
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
            {!user
              ? ProductRoutes.filter((item) => item.auth !== true).map(
                  (link, index) => (
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
                  )
                )
              : ProductRoutes.map((link, index) => (
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

          {store && (
            <div className="flex gap-2 absolute bottom-20 left-1/2 transform -translate-x-1/2">
              {store?.contact_website && (
                <Link href={store?.contact_website || "#"}>
                  <InstaIcon />
                </Link>
              )}
              {store?.other_website && (
                <Link href={store?.other_website || "#"}>
                  <TikTokIcon />
                </Link>
              )}
            </div>
          )}

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
