"use client";

import Container from "@/components/shared/Container";
import ProductCarousel from "./components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Login from "@/components/form/Login";
import Register from "@/components/form/Register";
import SizeOptions from "./components/SizeOptions";

export default function ProductDetailsPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(true);

  const images = [
    "/images/dress.png",
    "/images/dress2.png",
    "/images/dress3.png",
    "/images/dress4.png",
    "/images/dress4.png",
  ];

  const user = false;

  const handleBuyNow = () => {
    if (!user) {
      setAuthModalOpen(true);
      console.log("open modal");
    } else {
      toast.success("Added to cart");
    }
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="w-full md:w-5/12 xl:w-1/3">
          <ProductCarousel images={images} />
        </div>

        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl pb-3 font-semibold line-clamp-2">
            Women Floral Midi Dress
          </h1>
          <hr />

          <div className="mt-5">
            <div>
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-semibold">
                $54.00
              </h1>
              <p className="text-sm sm:text-base">(incl. of taxes)</p>
            </div>

            <div className="space-y-2 mt-5">
              <div className="text-base sm:text-lg font-semibold">
                Select Size <span className="text-red-500">*</span>
              </div>

              <SizeOptions />
            </div>

            <div className="flex xl:hidden flex-col xs:flex-row items-center gap-5 mt-5">
              <Button className="rounded-sm text-base sm:text-lg md:text-xl gap-2 max-xs:w-full">
                <ShoppingBasket />
                Buy Now
              </Button>
              <Button
                className="rounded-sm text-base sm:text-lg md:text-xl gap-2 max-xs:w-full"
                variant={"outline"}
                onClick={() => handleBuyNow()}
              >
                <ShoppingCart />
                Add to Cart
              </Button>
            </div>

            <div className="hidden xl:flex flex-col xs:flex-row items-center gap-5 mt-5">
              <Button
                size="lg"
                className="rounded-sm text-base sm:text-lg md:text-xl gap-2 max-xs:w-full"
                onClick={() => handleBuyNow()}
              >
                <ShoppingBasket />
                Buy Now
              </Button>
              <Button
                size="lg"
                className="rounded-sm text-base sm:text-lg md:text-xl gap-2 max-xs:w-full"
                variant={"outline"}
              >
                <ShoppingCart />
                Add to Cart
              </Button>
            </div>

            <p className="font-normal text-base sm:text-lg xl:text-xl line-clamp-3 xl:line-clamp-none mt-5">
              [Short Description Here] Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nesciunt deleniti, consequuntur provident a iste
              eius sequi deserunt optio dolor dicta labore mollitia sed
              molestiae sint explicabo repellendus. Repudiandae, distinctio
              itaque!
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 py-5 text-base sm:text-lg md:text-xl">
        <div>
          <h4 className="text-lg xs:text-xl sm:text-2xl pb-3 font-semibold">
            Description
          </h4>
          <p className="font-normal">
            Material : <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              commodi ad sit cupiditate voluptatem labore minima molestiae,
              deserunt accusantium omnis, incidunt accusamus. Laudantium illo
              fugit qui, dolorum consequatur fugiat sequi!
            </span>
          </p>
        </div>
        <p className="font-normal">
          Measurements : <br />
          <span className="space-y-3">
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
        <p className="font-normal">
          Shipping Information : <br />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            commodi ad sit cupiditate voluptatem labore minima molestiae,
            deserunt accusantium omnis, incidunt accusamus. Laudantium illo
            fugit qui, dolorum consequatur fugiat sequi!
          </span>
        </p>
      </div>

      <Dialog
        open={authModalOpen}
        onOpenChange={() => {
          setAuthModalOpen(false);
          setLoginModalOpen(true);
        }}
      >
        {loginModalOpen ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome! Please Login to Continue.</DialogTitle>
              <DialogDescription>
                Don’t have an account?{" "}
                <span
                  onClick={() => {
                    setLoginModalOpen(false);
                  }}
                  className="font-medium underline cursor-pointer"
                >
                  Create Account
                </span>
              </DialogDescription>
            </DialogHeader>
            <Login />
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Your Account</DialogTitle>
              <DialogDescription>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setLoginModalOpen(true);
                  }}
                  className="font-medium underline cursor-pointer"
                >
                  Login
                </span>
              </DialogDescription>
            </DialogHeader>
            <Register />
          </DialogContent>
        )}
      </Dialog>
    </Container>
  );
}
