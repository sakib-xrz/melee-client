import Image from "next/image";
import loadingImage from "public/images/loader.gif";

export default function loading() {
  return (
    <main className="h-screen flex items-center justify-center">
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
