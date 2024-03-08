"use client";

import { useStore } from "@/context/StoreProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const { logout } = useStore();

  useEffect(() => {
    logout();
    router.push("/login");
  }, []);

  return null;
}
