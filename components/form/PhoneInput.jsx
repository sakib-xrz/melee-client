import React, { forwardRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { cn } from "@/lib/utils";

const PhoneInputComponent = forwardRef(({ className, ...props }, ref) => {
  return (
    <PhoneInput
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

PhoneInputComponent.displayName = "PhoneInput";

export { PhoneInputComponent };
