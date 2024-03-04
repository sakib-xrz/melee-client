"use client";

import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveIcon from "./ActiveIcon";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-52 min-h-[calc(100vh-13rem)] border-r-2 border-border bg-background">
      <nav className="grid gap-2 py-2 space-y-5">
        <div className="space-y-2">
          {AuthRoutes.map((link, index) => (
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
      </nav>
    </div>
  );
}
