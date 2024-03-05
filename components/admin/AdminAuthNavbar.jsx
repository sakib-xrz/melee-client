"use client";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import logo from "public/images/melee-white-transparent.png";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { useState } from "react";
import { LeftSideDrawer } from "../shared/LeftSideDrawer";
import Link from "next/link";
import ActiveIcon from "../shared/ActiveIcon";
import { AdminRoutes } from "@/common/KeyChain";
import { usePathname } from "next/navigation";

export default function AdminAuthNavbar() {
  const pathname = usePathname();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  return (
    <Container extraClassName="max-w-[115rem]">
      <div className="grid grid-cols-3 justify-between items-center">
        {" "}
        <p>
          <Menu
            className="text-2xl font-medium text-white cursor-pointer"
            onClick={() => setMenuDrawerOpen(true)}
          />
          <LeftSideDrawer
            open={menuDrawerOpen}
            setOpen={setMenuDrawerOpen}
            title={
              <div className="h-12">
                <Image
                  src={logo}
                  alt="MELEE LOGO DARK"
                  placeholder="blur"
                  quality={100}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            }
          >
            <nav className="grid gap-2 py-2 space-y-5">
              <div className="space-y-2">
                {AdminRoutes.map((link, index) => (
                  <Link
                    onClick={() => setMenuDrawerOpen(false)}
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
          </LeftSideDrawer>
        </p>
        <div className="flex justify-center">
          <Image className="h-12 w-auto" src={logo} alt="Melee logo" />
        </div>{" "}
        <div className="flex justify-end">
          <Button size="sm" className="gap-2">
            <LogOut /> Logout
          </Button>
        </div>
      </div>
    </Container>
  );
}
