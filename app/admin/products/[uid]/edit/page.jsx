"use client";

import APIKit from "@/common/APIkit";
import Loading from "@/components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import EditProductForm from "./components/EditProductForm";

export default function EditProduct({ params: { uid } }) {
  const { data, isLoading, refetch } = useQuery({
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
      (data.images.length &&
        data.images.find((image) => image.type === "PRIMARY_PRODUCT_IMAGE")
          ?.image) ||
      "",
    secondary_image:
      (data.images.length &&
        data.images.find((image) => image.type === "SECONDARY_PRODUCT_IMAGE")
          ?.image) ||
      "",
    unit_price: data.unit_price ? parseFloat(data.unit_price).toFixed(2) : "",
    stock_s:
      data.stock_size.length &&
      data.stock_size.find((stock) => stock.size === "S")
        ? data.stock_size.find((stock) => stock.size === "S").stock
        : "",
    stock_m:
      data.stock_size.length &&
      data.stock_size.find((stock) => stock.size === "M")
        ? data.stock_size.find((stock) => stock.size === "M").stock
        : "",
    stock_l:
      data.stock_size.length &&
      data.stock_size.find((stock) => stock.size === "L")
        ? data.stock_size.find((stock) => stock.size === "L").stock
        : "",
    stock_xl:
      data.stock_size.length &&
      data.stock_size.find((stock) => stock.size === "XL")
        ? data.stock_size.find((stock) => stock.size === "XL").stock
        : "",
    stock_xxl:
      data.stock_size.length &&
      data.stock_size.find((stock) => stock.size === "XXL")
        ? data.stock_size.find((stock) => stock.size === "XXL").stock
        : "",
    is_published: data.is_published || false,
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
      <EditProductForm
        initialValues={initialValues}
        data={data}
        uid={data.uid}
        refetch={refetch}
      />
    </div>
  );
}
