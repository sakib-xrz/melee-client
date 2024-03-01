import Image from "next/image";
import LogoLight from "public/images/melee-white-transparent.png";
import { ModeToggle } from "./ModeToggle";
import Container from "./Container";
// import { LogoDark } from "@public/images/melee-black-transparent.png";

export default function Navbar() {
  return (
    <Container className="">
      <div className="flex items-center justify-between">
        <Image
          src={LogoLight}
          alt="MELEE LOGO LIGHT"
          placeholder="blur"
          className="w-3/12"
        />
        <ModeToggle />
      </div>
    </Container>
  );
}
