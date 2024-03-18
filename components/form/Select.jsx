import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const defaultClassName =
  "mt-1 block w-full appearance-none rounded-md border border-border px-2 pr-6 py-2 text-sm font-semibold focus:border-border focus:outline-none focus:ring-primary";

const Select = ({
  name = "",
  id = "",
  extraClassName,
  value = "",
  options,
  onChange = () => {},
  disabled,
}) => {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        className={cn(defaultClassName, extraClassName)}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="font-semibold"
            disabled={option.isDisabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-primary" />
    </div>
  );
};

export default Select;
