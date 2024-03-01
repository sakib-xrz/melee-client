"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "../ui/sonner";

const queryClient = new QueryClient();

export default function GlobalProvider({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors />
        {children}
      </QueryClientProvider>
    </>
  );
}
