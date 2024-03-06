import PageTitleWithButton from "@/components/shared/PageTitleWithButton";

export default function AdminProductPage() {
  return (
    <div>
      <PageTitleWithButton
        title={"Product Management"}
        buttonText={"Add Products"}
        href="/admin/products/add"
      />
    </div>
  );
}
