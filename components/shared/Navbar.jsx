"use client";

import Image from "next/image";
import Container from "./Container";
import { useTheme } from "next-themes";
import LightDark from "public/images/melee-white-transparent.png";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <Container className="border-b-2 border">
      <div className="flex items-center justify-between max-w-[120rem]">
        <Image
          src={LightDark}
          alt="MELEE LOGO LIGHT"
          placeholder="blur"
          className="w-3/12"
        />

        <div></div>
      </div>
    </Container>
  );
}
