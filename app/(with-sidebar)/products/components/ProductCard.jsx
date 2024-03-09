"use client";

import Image from "next/image";
import Link from "next/link";
import redX from "public/images/red-x-transparent.png";
import { useState } from "react";

export default function ProductCard({ product, isOutOfStock = false }) {
  const primaryImage = product.primary_image.image;
  const secondaryImage = product.secondary_image.image;

  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`product-card relative ${
        isOutOfStock ? "" : "hover:bg-accent transition-colors duration-300"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Image
          className="object-contain"
          width={300}
          height={300}
          src={
            isOutOfStock
              ? primaryImage
              : isHovered
              ? secondaryImage
              : primaryImage
          }
          alt="dress"
          priority
        />
        <div className="product-info px-4 py-3 flex flex-col space-y-2">
          <h4 className="text-sm font-medium leading-tight truncate cursor-pointer hover:underline">
            {product.name}
          </h4>
          <div className="flex items-center justify-between text-sm font-semibold">
            {isOutOfStock ? (
              <p className="text-red-600">Out of Stock</p>
            ) : (
              <p>${product.unit_price}</p>
            )}
          </div>
        </div>
      </div>
      {isOutOfStock && (
        <Image
          src={redX}
          alt="red-x"
          className="absolute top-0 right-0 bg-black/70"
        />
      )}
    </Link>
  );
}
