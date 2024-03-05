"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/products");
  }, []);

  return (
    <main className="h-screen flex items-center justify-center">
      <Loader2 className="w-20 h-20 animate-spin" />
    </main>
  );
}
