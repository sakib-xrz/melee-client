import Image from "next/image";
import loadingImage from "public/images/loader.gif";

export default function Loading() {
  return (
    <main className="flex justify-center mt-32">
      <Image
        src={loadingImage}
        alt="loading"
        priority
        width={250}
        height={250}
      />
    </main>
  );
}
