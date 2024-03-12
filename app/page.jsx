"use client";

import Image from "next/image";
import loadingImage from "public/images/loader.gif";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, []);

  return (
    <main className="h-screen flex items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </main>
  );
}
