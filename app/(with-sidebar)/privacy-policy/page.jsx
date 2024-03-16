"use client";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import { useStore } from "@/context/StoreProvider";
import "react-quill/dist/quill.snow.css";

export default function PrivacyPage() {
  const { store, storeLoading } = useStore();

  if (storeLoading) return <Loading />;

  return (
    <>
      <title>Privacy Policy | MELEE</title>
      <Container>
        <div
          className="ql-editor prose !p-0"
          dangerouslySetInnerHTML={{ __html: store?.privacy_policy || "" }}
        />
      </Container>
    </>
  );
}
