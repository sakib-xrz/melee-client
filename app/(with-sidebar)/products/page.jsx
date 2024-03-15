"use client";

import Marquee from "react-fast-marquee";
import ProductCard from "./components/ProductCard";
import Container from "@/components/shared/Container";
import ProductCardSkeleton from "./components/ProductCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/APIkit";
import ErrorComponent from "@/components/shared/ErrorComponent";

export default function ProductsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      APIKit.public.products.getProducts().then(({ data }) => data),
  });

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <title>Products | MELEE</title>
      <div className="lg:sticky lg:top-36 lg:z-50">
        <Marquee className="bg-white text-black font-bold">
          NEW DROP! This is your animated alert bar, (Your text here!)
        </Marquee>
      </div>
      <Container extraClassName={"max-w-[115rem]"}>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-8">
          {isLoading ? (
            Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="xs:flex justify-center items-center">
                  <ProductCardSkeleton />
                </div>
              ))
          ) : data.results.length ? (
            data.results.map((product) => (
              <ProductCard
                key={product.uid}
                product={product}
                isOutOfStock={!product.is_stock}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </Container>
    </div>
  );
}
