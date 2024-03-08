"use client";

import { useStore } from "@/context/StoreProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLogout() {
  const router = useRouter();
  const { logoutAdmin } = useStore();

  useEffect(() => {
    logoutAdmin();
    router.push("/admin-login");
  }, [logoutAdmin]);

  return null;
}
