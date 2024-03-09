"use client";

import { AUTH_TOKEN_KEY } from "@/common/KeyChain";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { useStore } from "@/context/StoreProvider";
import { useEffect } from "react";

export default function WithSidebarLayout({ children }) {
  const { fetchMe } = useStore();

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      setJWTokenAndRedirect(token)
        .then(fetchMe())
        .catch((error) => {
          console.log(error.response.data?.detail);
        });
    }

    return () => {};
  }, []);

  return (
    <main>
      <Navbar />

      <div className="flex justify-between">
        <div className="hidden bg-white lg:w-3/12 xl:w-2/12 lg:block">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
