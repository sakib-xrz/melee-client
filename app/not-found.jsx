"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import error from "@/public/images/404.png";

export default function GlobalError() {
  const pathname = usePathname();
  return (
    <div className="flex h-screen justify-center items-center bg-background px-5">
      <div>
        <Image height={500} width={500} src={error} alt="" className="-mt-10" />

        <Link
          href={pathname.includes("admin") ? "/admin" : "/products"}
          className="flex justify-center lg:-mt-20"
        >
          <Button
            variant={"outline"}
            className={"lg:py-2 lg:px-4 rounded-none border border-white"}
          >
            GO BACK
          </Button>
        </Link>
      </div>
    </div>
  );
}
