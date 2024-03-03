"use client";

import Container from "@/components/shared/Container";
import ProductCarousel from "./components/ProductCarousel";
import { Button } from "@/components/ui/button";

export default function ProductDetailsPage() {
  const images = [
    "/images/dress.png",
    "/images/dress2.png",
    "/images/dress3.png",
    "/images/dress4.png",
    "/images/dress4.png",
  ];
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-3/6 xl:w-1/3">
          <ProductCarousel images={images} />

          <h1 className="text-3xl pb-3 font-semibold">
            Women Floral Midi Dress
          </h1>

          <div className="mt-5">
            <h1 className="text-2xl font-semibold">$54.00</h1>
            <div className="flex items-center gap-5 pt-5">
              <Button className="rounded-sm" variant={"outline"}>
                Add to Cart
              </Button>
              <Button className="rounded-sm">Buy Now</Button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/6 xl:w-2/3">
          <p class="font-medium pt-3 pb-1">
            Product Description : <br />
            <span class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              soluta impedit maiores hic? Dolore corrupti animi numquam et alias
              a, architecto, cum doloremque doloribus accusamus nulla aspernatur
              maiores, eaque nobis? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus, veritatis consequatur sed
              obcaecati accusamus laborum quam nam voluptatum omnis earum neque
              deserunt aliquid pariatur. Quod, consequatur! Delectus hic odio
              deserunt!
            </span>
          </p>

          <p class="pt-5 font-medium pb-1">
            Material : <br />
            <span class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              commodi ad sit cupiditate voluptatem labore minima molestiae,
              deserunt accusantium omnis, incidunt accusamus. Laudantium illo
              fugit qui, dolorum consequatur fugiat sequi!
            </span>
          </p>
          <p class="pt-5 font-medium pb-1">
            Measurements : <br />
            <span class="space-y-3 text-sm">
              <span>Strap Length : 129 cm</span>
              <span>Strap Width : 85 cm</span>
              <span>Buckle Length : 23 cm</span>
              <span>Buckle Width : 8 cm</span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, tenetur.
              </span>
            </span>
          </p>

          <p class="pt-5 font-medium pb-1">
            Shipping Information : <br />
            <span class="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              commodi ad sit cupiditate voluptatem labore minima molestiae,
              deserunt accusantium omnis, incidunt accusamus. Laudantium illo
              fugit qui, dolorum consequatur fugiat sequi!
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}
