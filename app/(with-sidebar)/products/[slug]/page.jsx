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
import "react-quill/dist/quill.snow.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useStore } from "@/context/StoreProvider";
import { useQuery } from "@tanstack/react-query";
import APIKit from "@/common/APIkit";

export default function ProductDetailsPage({ params: { slug } }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(true);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", slug],
    queryFn: () =>
      APIKit.public.getSingleProduct(slug).then(({ data }) => data),
  });

  const { user } = useStore();

  const handleBuyNow = () => {
    if (!user) {
      setAuthModalOpen(true);
      console.log("open modal");
    } else {
      toast.success("Purchase successful!");
    }
  };

  if (isLoading) return <div>Loading...</div>;

  const images = data.images.map((image) => image.image);

  return (
    <Container extraClassName={"max-w-[115rem]"}>
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 lg:col-span-6 hover:cursor-grab active:cursor-grabbing">
          <ProductCarousel images={images} />
        </div>

        <div className="col-span-12 lg:col-span-6 space-y-5 xl:px-20">
          <div>
            <h1 className="text-2xl font-medium line-clamp-2">{data.name}</h1>
          </div>

          <div>
            <h1 className="text-lg font-semibold">
              ${parseFloat(data.unit_price).toFixed(2)}
            </h1>
            <p className="text-sm">(incl. of taxes)</p>
          </div>

          {data.stock_size.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm">
                Select Size <span className="text-red-500">*</span>
              </div>

              <SizeOptions stock_size={data.stock_size} />
            </div>
          )}

          {data.stock_size.length > 0 ? (
            <div className="flex flex-col xs:flex-row items-center gap-5">
              <Button
                className="rounded-sm text-base gap-2"
                variant={"secondary"}
              >
                <ShoppingCart />
                Add to Cart
              </Button>

              <Button
                className="rounded-sm text-base gap-2 bg-white"
                onClick={() => handleBuyNow()}
              >
                <ShoppingBasket />
                Buy Now
              </Button>
            </div>
          ) : (
            <Button
              className="rounded-sm text-base gap-2"
              variant={"secondary"}
              disabled
            >
              Sold Out
            </Button>
          )}

          {data.short_pitch && <div>{data.short_pitch}</div>}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Details</AccordionTrigger>
              <AccordionContent>
                <div
                  className="ql-editor prose !p-0"
                  dangerouslySetInnerHTML={{ __html: data.details }}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Sizing</AccordionTrigger>
              <AccordionContent>
                <div
                  className="ql-editor prose !p-0"
                  dangerouslySetInnerHTML={{ __html: data.sizing }}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Care</AccordionTrigger>
              <AccordionContent>
                <div
                  className="ql-editor prose !p-0"
                  dangerouslySetInnerHTML={{ __html: data.care }}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Delivery and Returns</AccordionTrigger>
              <AccordionContent>
                <div
                  className="ql-editor prose !p-0 !text-primary"
                  dangerouslySetInnerHTML={{
                    __html: data.delivery_and_returns,
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
