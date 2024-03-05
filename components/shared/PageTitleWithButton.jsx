import Link from "next/link";

import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function PageTitleWithButton({
  title,
  buttonText,
  href = "#",
  icon = true,
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between md:gap-0 ${
        buttonText && "gap-4"
      }`}
    >
      <h2 className="text-lg font-semibold text-white md:text-2xl">{title}</h2>
      <div className="w-full xs:w-fit">
        {buttonText ? (
          <Link href={href}>
            <Button className="w-full justify-center text-background">
              {icon && <Plus className="mr-2 h-4 w-4 " />}
              {buttonText}
            </Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
