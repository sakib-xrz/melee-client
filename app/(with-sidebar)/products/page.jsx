import Marquee from "react-fast-marquee";
import ProductCard from "./components/ProductCard";
import Container from "@/components/shared/Container";
import ProductCardSkeleton from "./components/ProductCardSkeleton";

export default function ProductsPage() {
  return (
    <div>
      <div className="sticky top-52 z-50">
        <Marquee className="bg-white text-black font-bold">
          NEW DROP! This is your animated alert bar, (Your text here!)
        </Marquee>
      </div>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCard />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCardSkeleton />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCardSkeleton />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCardSkeleton />
          </div>
          <div className="xs:flex justify-center items-center">
            <ProductCardSkeleton />
          </div>
        </div>
      </Container>
    </div>
  );
}
