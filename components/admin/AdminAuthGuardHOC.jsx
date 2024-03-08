"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { AUTH_TOKEN_KEY } from "@/common/KeyChain";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import { useStore } from "@/context/StoreProvider";

export default function AdminAuthGuardHOC({ children }) {
  const { fetchMe, user } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      setJWTokenAndRedirect(token)
        .then(fetchMe())
        .catch((error) => {
          console.log(error.response.data?.detail);
          router.push("/admin-logout");
        });
    } else {
      const nextURL = { next: pathname };
      const queryParams = new URLSearchParams(nextURL).toString();
      router.push(`/admin-login?${queryParams}`);
    }
  }, []);

  return user?.phone && user?.is_superuser === true ? children : null;
}
