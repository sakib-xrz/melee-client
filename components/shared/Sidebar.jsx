"use client";

import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ActiveIcon from "./ActiveIcon";
import { useStore } from "@/context/StoreProvider";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useStore();

  console.log(user);

  return (
    <div className="sticky top-36 min-h-[calc(100vh-9rem)] border-r-2 border-border bg-background">
      <nav className="grid gap-2 py-2 space-y-5">
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
          {ProductRoutes.map((link, index) => (
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

        {user && (
          <Button
            onClick={() => router.push("/logout")}
            variant="secondary"
            className="gap-2 hidden md:flex w-fit"
          >
            <LogOut /> Logout
          </Button>
        )}
      </nav>
    </div>
  );
}
