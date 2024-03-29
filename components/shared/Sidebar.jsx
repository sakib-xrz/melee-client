"use client";

import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ActiveIcon from "./ActiveIcon";
import { useStore } from "@/context/StoreProvider";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import InstaIcon from "./InstaIcon";
import TikTokIcon from "./TikTokIcon";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, store } = useStore();

  return (
    <div className="sticky top-36 min-h-[calc(100vh-9rem)] border-r-2 border-border bg-background">
      <nav className="grid gap-2 py-2">
        <div className="space-y-2">
          {!user &&
            AuthRoutes.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap border-y hover:border-white border-transparent "
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
                      "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap border-y hover:border-white border-transparent"
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
                    "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap border-y hover:border-white border-transparent"
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
                "flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap border-y hover:border-white border-transparent"
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
            className="gap-2 hidden md:flex absolute bottom-0 w-full justify-center rounded-none"
          >
            <LogOut /> Logout
          </Button>
        )}
      </nav>
    </div>
  );
}
