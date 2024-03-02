"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const link2 = [
  {
    title: "All Products",
    href: "/products",
  },
  {
    title: "New Drops",
    href: "/new-drops",
  },
];

const link3 = [
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    title: "Returns",
    href: "/returns",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const link1 = [
    {
      title: "Log in",
      href: "/login",
    },
    {
      title: "Create Account",
      href: "/register",
    },
  ];

  return (
    <div className="sticky top-20 min-h-[calc(100vh-8.2rem)] border-r-2 border-border bg-background">
      <nav className="grid gap-2 p-2">
        {link1.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
              pathname === link.href
                ? "bg-white text-background"
                : "hover:bg-accent"
            }`}
          >
            {link.title}
            <div className="flex gap-4">
              {link.quantity && (
                <div className="flex items-center gap-1">
                  <span>{link.quantity}</span>
                </div>
              )}
              {link.price && (
                <div className="flex items-center gap-1">
                  <span>${link.price}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
        <br />
        {link2.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
              pathname === link.href
                ? "bg-white text-background"
                : "hover:bg-accent"
            }`}
          >
            {link.title}
          </Link>
        ))}
        <br />
        {link3.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex items-center justify-between py-2 px-4 rounded-md transition-colors whitespace-nowrap ${
              pathname === link.href
                ? "bg-white text-background"
                : "hover:bg-accent"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
