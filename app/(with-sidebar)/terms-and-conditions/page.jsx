"use client";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import { useStore } from "@/context/StoreProvider";
import "react-quill/dist/quill.snow.css";

export default function TermsPage() {
  const { store, storeLoading } = useStore();

  if (storeLoading) return <Loading />;

  return (
    <>
      <title>Terms & Conditions | MELEE</title>
      <Container>
        <div
          className="ql-editor prose !p-0 !text-white"
          dangerouslySetInnerHTML={{ __html: store?.terms_condition || "" }}
        />
      </Container>
    </>
  );
}
