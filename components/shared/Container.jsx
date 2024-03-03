import { cn } from "@/lib/utils";

export default function Container({ children, extraClassName }) {
  const containerClasses = cn("mx-auto p-5 lg:p-8 max-w-7xl", extraClassName);

  return <div className={containerClasses}>{children}</div>;
}
