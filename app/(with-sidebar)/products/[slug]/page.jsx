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
import Loading from "@/components/shared/Loading";
import { GetCart, setCart } from "@/common/UtilKit";
import ErrorComponent from "@/components/shared/ErrorComponent";
import { useRouter } from "next/navigation";

export default function ProductDetailsPage({ params: { slug } }) {
  const { user } = useStore();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [errorMessages, setErrorMessages] = useState("");
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", slug],
    queryFn: () =>
      APIKit.public.getSingleProduct(slug).then(({ data }) => data),
  });

  const { data: cartData, refetch } = GetCart();

  if (isLoading) return <Loading />;

  if (isError) {
    return <ErrorComponent status={404} />;
  }

  const images = data.images.map((image) => image.image);

  const isAlreadyExists = !!cartData?.find((e) => e.slug == data.slug);

  const checkoutUrl = `/checkout?slug=${data.slug}&size=${selectedSize}&quantity=1`;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessages("Please select a size");
      return;
    } else {
      setErrorMessages("");
      const item = {
        slug: data.slug,
        quantity: 1,
        size: selectedSize,
      };
      setCart(item);
      toast.success("Added to cart!");
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setErrorMessages("Please select a size");
      return;
    } else {
      if (!user) {
        setAuthModalOpen(true);
        return;
      }
      router.push(checkoutUrl);
    }
  };

  return (
    <>
      <title>Product details | MELEE</title>
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

                <SizeOptions
                  stock_size={data.stock_size}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  setErrorMessages={setErrorMessages}
                  isAlreadyExists={isAlreadyExists}
                />
                {errorMessages && (
                  <div className="text-red-500 text-sm">{errorMessages}</div>
                )}
              </div>
            )}

            {data.stock_size.length > 0 ? (
              <div className="flex flex-col xs:flex-row items-center gap-5">
                <Button
                  disabled={isAlreadyExists}
                  className="rounded-sm text-base gap-2 w-full xs:w-auto"
                  variant={"secondary"}
                  onClick={() => {
                    handleAddToCart();
                    refetch();
                  }}
                >
                  {isAlreadyExists ? (
                    "Already in Cart"
                  ) : (
                    <>
                      <ShoppingCart />
                      Add to Cart
                    </>
                  )}
                </Button>

                <Button
                  className="rounded-sm text-base gap-2 bg-white w-full xs:w-auto"
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
              {data.details && (
                <AccordionItem value="item-1">
                  <AccordionTrigger>Details</AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="ql-editor prose !p-0"
                      dangerouslySetInnerHTML={{ __html: data.details }}
                    />
                  </AccordionContent>
                </AccordionItem>
              )}

              {data.sizing && (
                <AccordionItem value="item-2">
                  <AccordionTrigger>Sizing</AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="ql-editor prose !p-0"
                      dangerouslySetInnerHTML={{ __html: data.sizing }}
                    />
                  </AccordionContent>
                </AccordionItem>
              )}

              {data.care && (
                <AccordionItem value="item-3">
                  <AccordionTrigger>Care</AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="ql-editor prose !p-0"
                      dangerouslySetInnerHTML={{ __html: data.care }}
                    />
                  </AccordionContent>
                </AccordionItem>
              )}

              {data.delivery_and_returns && (
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
              )}
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
              <Login
                setAuthModalOpen={setAuthModalOpen}
                checkoutUrl={checkoutUrl}
              />
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
              <Register
                setAuthModalOpen={setAuthModalOpen}
                checkoutUrl={checkoutUrl}
              />
            </DialogContent>
          )}
        </Dialog>
      </Container>
    </>
  );
}
