import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          className="text-red-600 w-16 h-16 mx-auto my-6"
        >
          <g>
            <g fillRule="evenodd" clipRule="evenodd">
              <path
                fill="#f34235"
                d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z"
                opacity="1"
                data-original="#f34235"
                className=""
              ></path>
              <path
                fill="#ffffff"
                d="M346.9 346.9c-6.2 6.2-16.4 6.2-22.6 0L256 278.6l-68.2 68.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l68.3-68.2-68.3-68.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.2 68.2 68.2-68.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l68.2 68.2c6.3 6.3 6.3 16.4.1 22.7z"
                opacity="1"
                data-original="#ffffff"
                className=""
              ></path>
            </g>
          </g>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base font-semibold text-center">
            Payment Failed!
          </h3>
          <p className="my-2">
            {`Oops! Payment unsuccessful. Please try again or contact support.`}
          </p>
          <p> Thanks!</p>
          <div className="py-10 text-center">
            <Link href="/orders">
              <Button variant="outline" className="rounded-none">
                Browse Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
