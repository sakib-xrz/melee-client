import Image from "next/image";
import ErrorImg from "/public/images/no_results.png";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ErrorComponent({ status }) {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (pathname.includes("admin")) {
  //       router.push("/admin");
  //     } else {
  //       router.push("/products");
  //     }
  //   }, 3000);
  // }, []);

  const renderErrorMessages = (status) => {
    if (!status) return "Something Went Wrong!";
    if (status === 404) return "404 Not Found!";
    if (status >= 500) return "Server Is Under Maintenance!";
  };
  return (
    <div className="flex h-[calc(100vh-10rem)] flex-col items-center justify-center px-4 md:px-0">
      <Image className="object-cover" src={ErrorImg} alt="no_results" />
      <h2 className="text-center text-3xl font-medium text-primary italic">
        {renderErrorMessages(status)}
      </h2>
    </div>
  );
}
