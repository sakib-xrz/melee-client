/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";

export default function ProductCarousel() {
  const products = [
    "/images/dress.png",
    "/images/dress.png",
    "/images/dress.png",
    "/images/dress.png",
    "/images/dress.png",
  ];
  return (
    <div className="sm:w-5/12 xl:w-4/12">
      {" "}
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={true}
        className="productCarousel"
      >
        {products.map((product, index) => (
          <img
            key={index}
            alt=""
            src={product}
            className="w-full h-full object-contain"
          />
        ))}
      </Carousel>
    </div>
  );
}
