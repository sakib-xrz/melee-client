"use client";

import Image from "next/image";
import Link from "next/link";
import dress from "public/images/dress.png";
import dress4 from "public/images/dress4.png";
import redX from "public/images/red-x-transparent.png";
import { useState } from "react";

export default function ProductCard({ isOutOfStock = false }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`product-card relative ${
        isOutOfStock ? "" : "hover:bg-accent transition-colors duration-300"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={"/products/1"}>
        <Image
          className="object-contain"
          src={isOutOfStock ? dress4 : isHovered ? dress : dress4}
          alt="dress"
          priority
        />
        <div className="product-info px-4 py-3 flex flex-col space-y-2">
          <h4 className="text-sm font-medium leading-tight truncate cursor-pointer hover:underline">
            Women Floral Midi Dress
          </h4>
          <div className="flex items-center justify-between text-sm font-semibold">
            {isOutOfStock ? (
              <p className="text-red-600">Out of Stock</p>
            ) : (
              <p>$54.00</p>
            )}
          </div>
        </div>
      </Link>
      {isOutOfStock && (
        <Image
          src={redX}
          alt="red-x"
          className="absolute top-0 right-0 bg-black/70"
        />
      )}
    </div>
  );
}
