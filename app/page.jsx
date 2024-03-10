"use client";

import Image from "next/image";
import loadingImage from "public/images/loader.gif";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, []);

  return (
    <main className="h-screen flex items-center justify-center">
      <Image
        src={loadingImage}
        alt="loading"
        priority
        width={250}
        height={250}
      />
    </main>
  );
}
