"use client";

import Container from "@/components/shared/Container";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const password = false;

export default function NewDrops() {
  const router = useRouter();
  useEffect(() => {
    if (!password) {
      router.push("/password");
    }
  }, []);
  return (
    <div>
      <Container>New Drop Page coming soon...</Container>
    </div>
  );
}
