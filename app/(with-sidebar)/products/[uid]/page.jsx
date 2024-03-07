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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetailsPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(true);

  const images = ["/images/primary.jpeg", "/images/secondary.jpeg"];

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
    <Container extraClassName={"max-w-[115rem]"}>
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 lg:col-span-6 hover:cursor-grab active:cursor-grabbing">
          <ProductCarousel images={images} />
        </div>

        <div className="col-span-12 lg:col-span-6 space-y-5 xl:px-20">
          <div>
            <h1 className="text-2xl font-medium line-clamp-2">
              Women Floral Midi Dress
            </h1>
          </div>

          <div>
            <h1 className="text-lg font-semibold">$54.00</h1>
            <p className="text-sm">(incl. of taxes)</p>
          </div>

          <div className="space-y-2">
            <div className="text-sm">
              Select Size <span className="text-red-500">*</span>
            </div>

            <SizeOptions />
          </div>

          <div className="flex flex-col xs:flex-row items-center gap-5">
            <Button
              className="rounded-sm text-base gap-2"
              variant={"secondary"}
            >
              <ShoppingCart />
              Add to Cart
            </Button>

            <Button
              className="rounded-sm text-base gap-2"
              onClick={() => handleBuyNow()}
            >
              <ShoppingBasket />
              Buy Now
            </Button>
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eius
            qui error repudiandae blanditiis beatae necessitatibus praesentium
            tempora eos deleniti perferendis molestias ipsa delectus id tempore
            vel voluptas temporibus repellendus ad quas nihil vero in.
            Praesentium doloremque eius maiores autem vel quos architecto?
            Aliquam, sapiente laboriosam eveniet magni optio modi?
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Details</AccordionTrigger>
              <AccordionContent>
                -Designed in London -Made from luxury, extra soft heavyweight
                black 70% organic cotton, 30% recycled polyester heavyweight
                fleece <br />
                -All over MALFUNCTION graphic in raised embroidery
                <br />
                -Removable velcro bunny ears on hood <br />
                -Full-length two-way zip with custom hardware
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Sizing</AccordionTrigger>
              <AccordionContent>
                Chloe is 5ft 6 (168cm) and wears a size L/XL here Our tracksuits
                naturally come in a unisex baggy, comfy fit. We recommend going
                for your usual size unless you consider yourself very tall for
                your size or prefer a super oversized fit. Although these are
                our recommendations, everybody is different both in shape and
                how they like their tracksuits to fit! Please always refer to
                our size chart below before purchasing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Care</AccordionTrigger>
              <AccordionContent>
                Machine washable at max 30°C. Gentle cycle, always wash with
                similar colours. If your hoodie is part of a set make sure to
                wash the set together. We recommend zipping up your hoodie and
                turning the garment inside out when washing to protect the
                design. Hang to dry. Do not bleach. Do not iron over design.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Delivery and Returns</AccordionTrigger>
              <AccordionContent>
                Delivery: UK delivery - Free delivery on orders over £150
                Tracked delivery: £3.99 Next Day Delivery*: £6.99 *Order before
                3pm UK time for delivery the following working day International
                tracked delivery - Free delivery on orders over £250 Orders can
                only be sent to the address given at checkout so please make
                sure this is correct before purchasing. Please note orders
                placed after 3pm Noon on Fridays will be dispatched the
                following Monday ♡ Returns: We are happy to refund or exchange
                any item within 14 days of delivery. If 14 days (21 for
                international orders) have passed since your purchase,
                unfortunately we can’t offer you a refund or exchange. To be
                eligible for a return, your item must be unworn in its original,
                undamaged, unwashed condition complete with the original
                packaging. If our customer care team feel any of these points
                are not met, it is at their discretion on whether the item is
                suitable for return. Should a refund be refused your item will
                be returned to you. Please note we are unable to accept returns
                on any jewelry pieces including shoe charms and underwear sets
                or pieces for hygiene reasons. For more information, you can
                find our full return policy HERE International Duties & Taxes:
                For some countries outside of the UK, additional import fees may
                need to be paid in order to release your order. Our parcels are
                sent DDU (Duties Delivered Unpaid) and unfortunately we cant be
                responsible for any import charges charged by your country
                import laws, these are the responsibility of the customer to
                pay.
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
