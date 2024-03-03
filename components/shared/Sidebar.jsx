"use client";

import { AuthRoutes, ProductRoutes, SupportRoutes } from "@/common/KeyChain";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import active from "public/images/indicator.png";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-20 min-h-[calc(100vh-8.2rem)] border-r-2 border-border bg-background">
      <nav className="grid gap-2 py-2 space-y-5">
        <div className="space-y-2">
          {AuthRoutes.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap hover:bg-accent ${
                pathname === link.href ? "border-t border-b border-white" : ""
              }`}
            >
              {pathname === link.href ? (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                />
              ) : (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                  className="opacity-0"
                />
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
              className={`flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap hover:bg-accent ${
                pathname === link.href ? "border-t border-b border-white" : ""
              }`}
            >
              {pathname === link.href ? (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                />
              ) : (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                  className="opacity-0"
                />
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
              className={`flex items-center gap-2 py-2 px-4 transition-colors whitespace-nowrap hover:bg-accent ${
                pathname === link.href ? "border-t border-b border-white" : ""
              }`}
            >
              {pathname === link.href ? (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                />
              ) : (
                <Image
                  src={active}
                  alt={""}
                  width={40}
                  height={20}
                  quality={100}
                  className="opacity-0"
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
