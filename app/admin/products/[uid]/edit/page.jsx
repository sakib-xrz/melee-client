"use client";

import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import EditProductForm from "./components/EditProductForm";

export default function EditProduct({ params: { uid } }) {
  const { data, isLoading } = useQuery({
    queryKey: ["/shop/products", uid],
    queryFn: () =>
      APIKit.shop.product.getSingleProduct(uid).then(({ data }) => data),
    enabled: !!uid,
  });

  if (isLoading) return <Loading />;

  const initialValues = {
    name: data.name || "",
    short_pitch: data.short_pitch || "",
    description: data.description || "",
    primary_image:
      data.images.find((image) => image.type === "PRIMARY_PRODUCT_IMAGE")
        .image || "",
    secondary_image:
      data.images.find((image) => image.type === "SECONDARY_PRODUCT_IMAGE")
        .image || "",
    unit_price: data.unit_price ? parseFloat(data.unit_price).toFixed(2) : "",
    stock_s:
      data.stock.length && data.stock.find((stock) => stock.size === "S")
        ? data.stock.find((stock) => stock.size === "S").stock
        : "",
    stock_m:
      data.stock.length && data.stock.find((stock) => stock.size === "M")
        ? data.stock.find((stock) => stock.size === "M").stock
        : "",
    stock_l:
      data.stock.length && data.stock.find((stock) => stock.size === "L")
        ? data.stock.find((stock) => stock.size === "L").stock
        : "",
    stock_xl:
      data.stock.length && data.stock.find((stock) => stock.size === "XL")
        ? data.stock.find((stock) => stock.size === "XL").stock
        : "",
    stock_xxl:
      data.stock.length && data.stock.find((stock) => stock.size === "XXL")
        ? data.stock.find((stock) => stock.size === "XXL").stock
        : "",
    details: data.details || "",
    sizing: data.sizing || "",
    care: data.care || "",
    delivery_and_returns: data.delivery_and_returns || "",
    additional_images: data.images
      .filter(
        (image) =>
          image.type !== "PRIMARY_PRODUCT_IMAGE" &&
          image.type !== "SECONDARY_PRODUCT_IMAGE"
      )
      .map((image) => image.image),
  };

  return (
    <div>
      <EditProductForm initialValues={initialValues} uid={data.uid} />
    </div>
  );
}
