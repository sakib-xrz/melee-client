/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";

export default function ProductCarousel({ images }) {
  return (
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      emulateTouch={true}
      className="productCarousel"
    >
      {images.map((image, index) => (
        <img
          key={index}
          alt=""
          src={image}
          className="w-full h-full object-contain aspect-square"
        />
      ))}
    </Carousel>
  );
}
