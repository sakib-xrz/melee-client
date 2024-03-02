"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, [router]);
  return <main className="h-scree flex items-center justify-center"></main>;
}
