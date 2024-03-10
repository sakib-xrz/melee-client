"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import APIKit from "@/common/APIkit";
import { AUTH_TOKEN_KEY } from "@/common/KeyChain";
import { setJWTokenAndRedirect } from "@/common/UtilKit";
import { toast } from "sonner";

const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [carts, setCarts] = useState([]);

  const getCartItems = async (cartData) => {
    const { data } = await APIKit.cart.getCart(cartData);
    setCarts(data);
  };

  const fetchMe = async () => {
    try {
      const { data } = await APIKit.me.getMe();
      setUser(data);
    } catch (error) {
      console.error(error?.response?.data?.detail);
      toast.error(error?.response?.data?.detail);
    }
  };

  const refetchMe = () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      setJWTokenAndRedirect(token)
        .then(fetchMe())
        .catch((error) => {
          console.error(error?.response?.data?.detail);
          toast.error(error?.response?.data?.detail);
        });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    router.push("/login");
  };

  const logoutAdmin = () => {
    setUser(null);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    router.push("/admin-logout");
  };

  const userInfo = {
    user,
    carts,
    getCartItems,
    fetchMe,
    refetchMe,
    logout,
    logoutAdmin,
  };

  return (
    <StoreContext.Provider value={userInfo}>{children}</StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
