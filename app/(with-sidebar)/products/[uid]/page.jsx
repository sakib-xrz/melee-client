"use client";

import Container from "@/components/shared/Container";
import ProductCarousel from "./components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, ShoppingCart } from "lucide-react";

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
        <div className="w-full md:w-2/6 xl:w-1/3">
          <ProductCarousel images={images} />
        </div>

        <div className="w-full md:w-4/6 xl:w-2/3">
          <h1 className="text-4xl pb-3 font-semibold line-clamp-2">
            Women Floral Midi Dress
          </h1>
          <hr />
          <p class="font-medium pt-3 text-lg line-clamp-3 xl:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            soluta impedit maiores hic? Dolore corrupti animi numquam et alias
            a, architecto, cum doloremque doloribus accusamus nulla aspernatur
            maiores, eaque nobis? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, veritatis consequatur sed obcaecati
            accusamus laborum quam nam voluptatum omnis earum neque deserunt
            aliquid pariatur. Quod, consequatur! Delectus hic odio deserunt!
          </p>

          <div className="my-5 space-y-10">
            <h1 className="text-5xl font-semibold">$54.00</h1>

            <div>
              <Button
                size={"icon"}
                className={"rounded-l-sm rounded-r-none text-2xl"}
              >
                -
              </Button>
              <Button
                variant={"outline"}
                className="rounded-none text-2xl pointer-events-none w-16"
              >
                0
              </Button>
              <Button
                size={"icon"}
                className={"rounded-r-sm rounded-l-none  text-2xl"}
              >
                +
              </Button>
            </div>

            <div className="flex flex-col xs:flex-row items-center gap-5">
              <Button
                className="rounded-sm text-lg gap-2 max-xs:w-full"
                size="lg"
              >
                <ShoppingBasket />
                Buy Now
              </Button>
              <Button
                className="rounded-sm text-lg gap-2 max-xs:w-full"
                variant={"outline"}
                size="lg"
              >
                <ShoppingCart />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 py-5 text-lg">
        <div>
          <h4 className="text-2xl pb-3 font-semibold ">Description</h4>
          <p class="font-medium">
            Material : <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              commodi ad sit cupiditate voluptatem labore minima molestiae,
              deserunt accusantium omnis, incidunt accusamus. Laudantium illo
              fugit qui, dolorum consequatur fugiat sequi!
            </span>
          </p>
        </div>
        <p class="font-medium">
          Measurements : <br />
          <span class="space-y-3">
            <span>Strap Length : 129 cm</span>
            <span>Strap Width : 85 cm</span>
            <span>Buckle Length : 23 cm</span>
            <span>Buckle Width : 8 cm</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              tenetur.
            </span>
          </span>
        </p>
        <p class="font-medium">
          Shipping Information : <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            commodi ad sit cupiditate voluptatem labore minima molestiae,
            deserunt accusantium omnis, incidunt accusamus. Laudantium illo
            fugit qui, dolorum consequatur fugiat sequi!
          </span>
        </p>
      </div>
    </Container>
  );
}
